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
  const webhookUrl = process.env.PABBLY_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Enquiry service is not configured." }, { status: 500 });
  }

  try {
    const enquiry = await request.json();
    const phoneNumber = String(enquiry.phoneNumber ?? "").replace(/\D/g, "").slice(-10);
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...enquiry,
        phoneNumber,
        configuration: formatConfiguration(enquiry.configuration),
        budget: formatBudget(enquiry.budget),
        ...kolkataSubmissionTime(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 502 });
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
