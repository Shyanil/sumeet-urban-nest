/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test harness loads transpiled TypeScript. */
const assert = require("node:assert/strict");
const { test } = require("node:test");
const { NextResponse } = require("next/server");
const { load } = require("./helpers.cjs");

const lead = {
  fullName: "Test Visitor", phoneNumber: "+919876543210", configuration: "2-bohk",
  budget: "2-bohk-55-60", locationPincode: "492004", form: "contact-section",
  pageUrl: "https://example.com/", landingPageUrl: "https://example.com/?utm_source=google",
  referrer: "https://google.com/", utm_source: "google", utm_medium: "cpc",
  utm_campaign: "homes", utm_term: "apartments", utm_content: "creative-a",
  utm_id: "campaign-1", gclid: "click-1",
  submissionId: "11111111-1111-4111-8111-111111111111",
};

function setup({ env = {}, databaseOk = true, webhookFails = false } = {}) {
  const calls = [];
  const handler = load("src/app/api/enquiry/route.ts", {
    require: (name) => name === "next/server" ? { NextResponse } : require(name),
    process: { env: { SUPABASE_URL: "https://project.supabase.co", SUPABASE_ANON_KEY: "test-anon-key", LEAD_TRACKING_SECRET: "test-signing-key-that-is-at-least-32-characters", ...env } },
    fetch: async (url, options) => {
      calls.push({ url, options });
      if (calls.length > 1 && webhookFails) throw new Error("webhook unavailable");
      const row = JSON.parse(options.body).p_lead;
      return new Response(JSON.stringify(row ? { id: row.id, lead_type: row.lead_type, form_source: row.form_source, inserted: true } : {}), { status: databaseOk ? 201 : 403 });
    },
  });
  return { calls, POST: handler.POST };
}

const request = (data) => new Request("https://example.com/api/enquiry", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
});

test("every form inserts normalized lead and attribution before returning success", async () => {
  for (const form of ["contact-section", "enquiry-panel", "site-visit", "home-2"]) {
    const { calls, POST } = setup();
    const result = await POST(request({ ...lead, form, locationPincode: form === "home-2" ? undefined : lead.locationPincode }));
    assert.equal(result.status, 200);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://project.supabase.co/rest/v1/rpc/save_sumeeturbannest_lead");
    assert.equal(calls[0].options.headers.apikey, "test-anon-key");
    assert.equal(calls[0].options.headers.Authorization, "Bearer test-anon-key");
    const row = JSON.parse(calls[0].options.body).p_lead;
    assert.equal(row.phone_number, "9876543210");
    assert.equal(row.configuration, "2 BHK");
    assert.equal(row.budget, "55L to 60L");
    assert.equal(row.form_source, form);
    assert.equal(row.lead_type, "website_lead");
    assert.equal(row.landing_page_url, lead.landingPageUrl);
    assert.equal(row.location_pincode, form === "home-2" ? null : "492004");
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "gclid"]) assert.equal(row[key], lead[key]);
    assert.ok(row.submission_date);
    assert.ok(row.submission_time);
    assert.match(result.headers.get("set-cookie"), /brochure_access=granted/);
    assert.match(result.headers.get("set-cookie"), /sumeet_lead_receipt=/);
  }
});

test("failed database insert never reports success or sends a notification", async () => {
  const { calls, POST } = setup({ databaseOk: false, env: { PABBLY_WEBHOOK_URL: "https://webhook.example.com" } });
  const result = await POST(request(lead));
  assert.equal(result.status, 502);
  assert.equal(calls.length, 1);
  assert.equal(result.headers.get("set-cookie"), null);
});

test("saved lead succeeds even if optional Pabbly notification fails", async () => {
  const { calls, POST } = setup({ webhookFails: true, env: { PABBLY_WEBHOOK_URL: "https://webhook.example.com" } });
  assert.equal((await POST(request(lead))).status, 200);
  assert.equal(calls.length, 2);
  assert.equal(calls[1].url, "https://webhook.example.com");
});

test("invalid input and missing configuration make no database requests", async () => {
  const { calls, POST } = setup();
  for (const invalid of [null, [], { ...lead, phoneNumber: "123" }, { ...lead, fullName: "" }, { ...lead, form: "unknown" }, { ...lead, configuration: "4 BHK" }]) {
    assert.equal((await POST(request(invalid))).status, 400);
  }
  assert.equal((await POST(new Request("https://example.com/api/enquiry", { method: "POST", body: "{" }))).status, 400);
  assert.equal(calls.length, 0);
  assert.equal((await setup({ env: { SUPABASE_ANON_KEY: "" } }).POST(request(lead))).status, 500);
});

test("tracking retains campaign, landing URL and referrer after navigation", () => {
  const storage = new Map();
  const window = {
    location: { href: "https://example.com/?utm_source=google&utm_campaign=homes&gclid=click-1", search: "?utm_source=google&utm_campaign=homes&gclid=click-1" },
    sessionStorage: { getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value) },
  };
  const tracking = load("src/lib/leadTracking.ts", { window, document: { referrer: "https://google.com/" } });
  tracking.captureLeadTracking();
  window.location = { href: "https://example.com/other", search: "" };
  const result = tracking.getLeadTracking();
  assert.equal(result.utm_source, "google");
  assert.equal(result.gclid, "click-1");
  assert.equal(result.landingPageUrl, "https://example.com/?utm_source=google&utm_campaign=homes&gclid=click-1");
  assert.equal(result.pageUrl, "https://example.com/other");
  assert.equal(result.referrer, "https://google.com/");
});

test("tracking works when storage is blocked", () => {
  const tracking = load("src/lib/leadTracking.ts", {
    window: { location: { href: "https://example.com/?utm_source=meta", search: "?utm_source=meta" }, sessionStorage: { getItem() { throw Error(); }, setItem() { throw Error(); } } },
    document: { referrer: "" },
  });
  assert.equal(tracking.getLeadTracking().utm_source, "meta");
});
