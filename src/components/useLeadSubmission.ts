"use client";

import { useRef } from "react";

export function useLeadSubmission() {
  const id = useRef<string | null>(null);
  const pending = useRef<Promise<Response> | null>(null);
  const accepted = useRef<Response | null>(null);

  return (payload: Record<string, unknown>): Promise<Response> => {
    if (accepted.current) return Promise.resolve(accepted.current);
    if (pending.current) return pending.current;
    id.current ??= window.crypto.randomUUID();
    pending.current = fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submissionId: id.current }),
    }).then((response) => {
      if (response.ok) accepted.current = response;
      // A conflicting payload must be submitted as a new enquiry.
      if (response.status === 409) id.current = null;
      return response;
    }).finally(() => { pending.current = null; });
    return pending.current;
  };
}
