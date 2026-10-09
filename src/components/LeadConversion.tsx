"use client";

import { useEffect } from "react";

type LeadEvent = {
  event: "generate_lead";
  lead_type: "website_lead" | "landing_page_lead";
  form_source: string;
  lead_id: string;
  transaction_id: string;
};

let pending: Promise<LeadEvent | null> | undefined;
const emitted = new Set<string>();

export default function LeadConversion() {
  useEffect(() => {
    // Share the request across React Strict Mode mounts. The server also claims once.
    pending ??= fetch("/api/lead-event", { method: "POST", credentials: "same-origin", cache: "no-store" })
      .then(async (response) => response.status === 200 ? response.json() as Promise<LeadEvent> : null)
      .catch(() => null);
    void pending.then((event) => {
      if (!event || event.event !== "generate_lead" || emitted.has(event.lead_id)) return;
      emitted.add(event.lead_id);
      const browser = window as typeof window & { dataLayer?: unknown[] };
      browser.dataLayer ??= [];
      browser.dataLayer.push(event);
    });
  }, []);
  return null;
}
