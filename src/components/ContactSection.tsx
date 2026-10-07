"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Errors = Partial<Record<"fullName" | "phoneNumber" | "budget" | "interest" | "locationPincode", string>>;

export default function ContactSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phoneNumber = String(data.get("phoneNumber") ?? "").replace(/\D/g, "");
    const budget = String(data.get("budget") ?? "");
    const interest = String(data.get("interest") ?? "");
    const locationPincode = String(data.get("locationPincode") ?? "").trim();
    const nextErrors: Errors = {};

    if (fullName.length < 2) nextErrors.fullName = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(phoneNumber.slice(-10))) nextErrors.phoneNumber = "Enter a valid 10-digit mobile number";
    if (!budget) nextErrors.budget = "Please select your budget";
    if (!interest) nextErrors.interest = "Please select a configuration";
    if (!/^\d{6}$/.test(locationPincode)) nextErrors.locationPincode = "Enter a valid 6-digit pincode";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      window.setTimeout(() => {
        router.push("/thank-you");
      }, 400);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#F7F5F0] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        {/* Section Header */}
        <div className="mx-auto mb-10 flex w-full max-w-[1100px] flex-col items-center justify-center text-center sm:mb-14">
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#2c2b29] sm:text-xs">
              Private Enclave · 08
            </span>
            <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
          </div>

          <h2 className="w-full text-center whitespace-nowrap text-[12px] min-[380px]:text-[14px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.12em] min-[380px]:tracking-[0.16em] sm:tracking-[0.22em] text-coral uppercase pl-[0.12em]">
            C O N N E C T &nbsp; W I T H &nbsp; U S
          </h2>
        </div>

        {/* Full-Width Split Card: Left Architectural Image & Right Form */}
        <div className="grid w-full overflow-hidden rounded-[28px] border border-[#2B2623]/8 bg-white shadow-[0_24px_70px_rgba(43,38,35,0.08)] sm:rounded-[36px] lg:grid-cols-12">
          {/* Left Column: Full-Bleed Architectural Image */}
          <div className="relative min-h-[360px] w-full overflow-hidden bg-[#2B2623] sm:min-h-[440px] lg:col-span-6 lg:min-h-full">
            <Image
              src="/images/exterior/elevation-view-1.webp"
              alt="Sumeet Urban Nest luxury architectural elevation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

            {/* Architectural overlay caption */}
            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9 lg:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                  Raipur&apos;s 1st BOHK Enclave
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-light leading-snug text-white sm:text-3xl lg:text-4xl">
                  Step into a home that opens out.
                </h3>
                <p className="mt-2 text-xs font-light tracking-wide text-white/80 sm:text-sm">
                  Khamardih, Shankar Nagar • Raipur, Chhattisgarh
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  <span>RERA: PCGRERA190326002064</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Lead Generation Form */}
          <div className="flex flex-col justify-center bg-white p-7 sm:p-10 lg:col-span-6 lg:p-12 xl:p-16">
            <div className="mb-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-coral">
                Private Preview
              </span>
              <h3 className="mt-1 text-2xl font-light tracking-tight text-[#2B2623] sm:text-3xl">
                Request Exclusive Access
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#747474] sm:text-sm">
                Register below to schedule your private site walkthrough and receive the complete architectural brochure &amp; floor plans.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="contactFullName" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#2B2623]">
                  Full Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="contactFullName"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  className={`h-12 w-full rounded-xl border bg-[#F8F7F4] px-4 text-sm text-[#2B2623] outline-none transition placeholder:text-[#2B2623]/40 focus:bg-white focus:ring-2 focus:ring-coral/20 ${
                    errors.fullName ? "border-red-400 focus:border-red-500" : "border-[#2B2623]/15 focus:border-coral"
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.fullName}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactPhoneNumber" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#2B2623]">
                    Mobile Number <span className="text-coral">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#2B2623]/50">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="contactPhoneNumber"
                      name="phoneNumber"
                      maxLength={10}
                      placeholder="98765 43210"
                      className={`h-12 w-full rounded-xl border bg-[#F8F7F4] pl-13 pr-4 text-sm text-[#2B2623] outline-none transition placeholder:text-[#2B2623]/40 focus:bg-white focus:ring-2 focus:ring-coral/20 ${
                        errors.phoneNumber ? "border-red-400 focus:border-red-500" : "border-[#2B2623]/15 focus:border-coral"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label htmlFor="contactBudget" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#2B2623]">
                    Your Budget <span className="text-coral">*</span>
                  </label>
                  <select
                    id="contactBudget"
                    name="budget"
                    defaultValue=""
                    className={`h-12 w-full rounded-xl border bg-[#F8F7F4] px-4 text-sm text-[#2B2623] outline-none transition focus:bg-white focus:ring-2 focus:ring-coral/20 ${
                      errors.budget ? "border-red-400 focus:border-red-500" : "border-[#2B2623]/15 focus:border-coral"
                    }`}
                  >
                    <option value="" disabled>Your Budget</option>
                    <option value="2-bohk-55-60">2 BOHK: ₹55L–₹60L</option>
                    <option value="2-bohk-60-65-plus">2 BOHK: ₹60L–₹65L+</option>
                    <option value="3-bohk-85-90">3 BOHK: ₹85L–₹90L</option>
                    <option value="3-bohk-90-95">3 BOHK: ₹90L–₹95L</option>
                    <option value="3-bohk-95-1cr-plus">3 BOHK: ₹95L–₹1Cr+</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.budget}</p>}
                </div>
              </div>

              {/* Configuration & Pincode Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactInterest" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#2B2623]">
                    Select Configuration <span className="text-coral">*</span>
                  </label>
                  <select
                    id="contactInterest"
                    name="interest"
                    defaultValue=""
                    className={`h-12 w-full rounded-xl border bg-[#F8F7F4] px-4 text-sm text-[#2B2623] outline-none transition focus:bg-white focus:ring-2 focus:ring-coral/20 ${
                      errors.interest ? "border-red-400 focus:border-red-500" : "border-[#2B2623]/15 focus:border-coral"
                    }`}
                  >
                    <option value="" disabled>Select Configuration</option>
                    <option value="2-bohk">2 BOHK</option>
                    <option value="3-bohk">3 BOHK</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                  {errors.interest && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.interest}</p>}
                </div>

                <div>
                  <label htmlFor="contactPincode" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#2B2623]">
                    Current Pincode <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPincode"
                    name="locationPincode"
                    maxLength={6}
                    placeholder="e.g. 492004"
                    className={`h-12 w-full rounded-xl border bg-[#F8F7F4] px-4 text-sm text-[#2B2623] outline-none transition placeholder:text-[#2B2623]/40 focus:bg-white focus:ring-2 focus:ring-coral/20 ${
                      errors.locationPincode ? "border-red-400 focus:border-red-500" : "border-[#2B2623]/15 focus:border-coral"
                    }`}
                  />
                  {errors.locationPincode && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.locationPincode}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex h-13 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-coral px-8 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(232,115,74,0.32)] transition-all duration-300 hover:bg-[#D4613A] hover:shadow-[0_16px_36px_rgba(232,115,74,0.45)] disabled:opacity-70 sm:text-sm"
                >
                  <span>{isSubmitting ? "Processing..." : "Enquire Now"}</span>
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-[#747474] sm:gap-6">
                <span className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-coral/15 text-[9px] font-bold text-coral">✓</span>
                  Direct Developer Access
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-coral/15 text-[9px] font-bold text-coral">✓</span>
                  Zero Brokerage
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-coral/15 text-[9px] font-bold text-coral">✓</span>
                  100% Privacy Assured
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
