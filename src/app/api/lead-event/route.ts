import { NextRequest, NextResponse } from "next/server";
import { leadCookieName, sha256, verifyLeadReceipt } from "@/lib/leadConversion";

function result(event: unknown = null) {
  const response = event ? NextResponse.json(event) : new NextResponse(null, { status: 204 });
  response.headers.set("Cache-Control", "no-store");
  response.cookies.set(leadCookieName, "", { httpOnly: true, maxAge: 0, path: "/api/lead-event", sameSite: "lax", secure: process.env.NODE_ENV === "production" });
  return response;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return new NextResponse(null, { status: 403 });
  const token = request.cookies.get(leadCookieName)?.value;
  if (!token) return result();
  const secret = process.env.LEAD_TRACKING_SECRET;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!secret || !url || !key) return new NextResponse(null, { status: 503, headers: { "Cache-Control": "no-store" } });
  try {
    const receipt = await verifyLeadReceipt(token, secret);
    if (!receipt) return result();
    // One atomic database UPDATE is shared by all browser tabs and Worker instances.
    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/claim_sumeeturbannest_lead_event`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: key, Authorization: `Bearer ${key}` },
      body: JSON.stringify({ p_id: receipt.id, p_claim_hash: await sha256(token) }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return new NextResponse(null, { status: 503, headers: { "Cache-Control": "no-store" } });
    const rows = await response.json();
    const saved = Array.isArray(rows) ? rows[0] : null;
    if (!saved || saved.lead_id !== receipt.id || saved.lead_type !== receipt.leadType || saved.form_source !== receipt.form) return result();
    // Never return form fields, URLs, attribution strings, or personal information to analytics.
    return result({ event: "generate_lead", lead_type: saved.lead_type, form_source: saved.form_source, lead_id: saved.lead_id, transaction_id: saved.lead_id });
  } catch {
    return new NextResponse(null, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
