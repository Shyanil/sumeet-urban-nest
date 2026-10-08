"use client";

import { EnquiryButton } from "@/components/EnquiryPanel";

export default function SectionCta() {
  return (
    <div className="bg-[#F7F5F0] px-6 py-8 text-center sm:px-10 sm:py-10">
      <EnquiryButton
        ariaLabel="Enquire about Sumeet Urban Nest"
        className="inline-flex h-11 w-[190px] items-center justify-center rounded-full bg-coral px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_26px_rgba(232,115,74,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_14px_30px_rgba(232,115,74,0.38)] focus:outline-none focus:ring-4 focus:ring-coral/20"
      >
        Enquire Now
      </EnquiryButton>
    </div>
  );
}
