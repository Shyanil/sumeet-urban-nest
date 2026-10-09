"use client";

import { useEffect } from "react";
import { captureLeadTracking } from "@/lib/leadTracking";

export default function LeadAttribution() {
  useEffect(() => {
    captureLeadTracking();
  }, []);
  return null;
}
