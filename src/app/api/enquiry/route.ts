import { NextResponse } from "next/server";

function formatConfiguration(value: unknown) {
  const configuration = String(value ?? "").toLowerCase();
  if (configuration.includes("2-bohk") || configuration.includes("2 bhk")) return "2 BHK";
  if (configuration.includes("3-bohk") || configuration.includes("3 bhk")) return "3 BHK";
  if (configuration === "not-sure") return "Not Sure";
  return String(value ?? "");
}

function formatBudget(value: unknown) {
  const budget = String(value ?? "");
  const slugRanges: Record<string, string> = {
    "2-bohk-55-60": "55L to 60L",
    "2-bohk-60-65-plus": "60L to 65L+",
    "3-bohk-85-90": "85L to 90L",
    "3-bohk-90-95": "90L to 95L",
    "3-bohk-95-1cr-plus": "95L to 1Cr+",
  };
  if (slugRanges[budget]) return slugRanges[budget];

  const match = budget.match(/(\d+)L?\s*(?:-|–|to)\s*₹?(\d+)(L|Cr)?(\+)?/i);
  if (!match) return budget;
  return `${match[1]}L to ${match[2]}${match[3] || "L"}${match[4] || ""}`;
}

function kolkataSubmissionTime() {
  const now = new Date();
  return {
    submissionDate: new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(now),
    submissionTime: new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now),
  };
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const webhookUrl = process.env.PABBLY_WEBHOOK_URL;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Enquiry service is not configured." }, { status: 500 });
  }

  try {
    const enquiry = await request.json().catch(() => null);
    if (!enquiry || typeof enquiry !== "object" || Array.isArray(enquiry)) {
      return NextResponse.json({ error: "Invalid enquiry." }, { status: 400 });
    }
    const field = (value: unknown, maxLength = 150) =>
      typeof value === "string" ? value.trim().slice(0, maxLength) : "";
    const fullName = field(enquiry.fullName);
    const phoneNumber = String(enquiry.phoneNumber ?? "").replace(/\D/g, "").slice(-10);
    const configuration = formatConfiguration(field(enquiry.configuration));
    const budget = formatBudget(field(enquiry.budget));
    const form = field(enquiry.form);
    if (
      fullName.length < 2 || !/^[6-9]\d{9}$/.test(phoneNumber) || !budget ||
      !["2 BHK", "3 BHK", "Not Sure"].includes(configuration) ||
      !["contact-section", "enquiry-panel", "site-visit", "home-2"].includes(form)
    ) {
      return NextResponse.json({ error: "Please complete the required enquiry fields." }, { status: 400 });
    }
    const submission = kolkataSubmissionTime();
    const lead = {
      full_name: fullName,
      phone_number: phoneNumber,
      configuration,
      budget,
      location_pincode: field(enquiry.locationPincode) || null,
      form_source: form,
      page_url: field(enquiry.pageUrl, 4096) || null,
      landing_page_url: field(enquiry.landingPageUrl, 4096) || null,
      referrer: field(enquiry.referrer, 4096) || null,
      ...Object.fromEntries(
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "gclid", "gbraid", "wbraid", "fbclid"]
          .map((key) => [key, field(enquiry[key], 1024) || null]),
      ),
      submission_date: submission.submissionDate,
      submission_time: submission.submissionTime,
    };
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/sumeeturbannest_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 502 });
    }

    if (webhookUrl) {
      // A notification failure must not reject a lead already saved to Supabase.
      try {
        const notification = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...enquiry, fullName, phoneNumber, configuration, budget, ...submission }),
          cache: "no-store",
          signal: AbortSignal.timeout(5000),
        });
        if (!notification.ok) console.error("Enquiry notification failed after the lead was saved.");
      } catch {
        console.error("Enquiry notification unavailable after the lead was saved.");
      }
    }

    const result = NextResponse.json({ success: true });
    result.cookies.set("brochure_access", "granted", {
      httpOnly: true,
      maxAge: 60 * 60,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    return result;
  } catch {
    return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 500 });
  }
}
