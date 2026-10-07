"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Errors = Partial<Record<"name" | "phone" | "budget" | "bhk" | "pincode", string>>;

const inputClassName =
  "h-11 min-w-0 rounded-full border border-[#2B2623]/15 bg-white/85 px-4 text-xs text-[#2B2623] outline-none transition placeholder:text-[#2B2623]/45 focus:border-coral focus:ring-2 focus:ring-coral/15 lg:h-12 lg:text-sm xl:px-3";

export default function SiteVisitBar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;

      const heroPassed = hero.getBoundingClientRect().bottom <= 90;
      const contactReached = contact.getBoundingClientRect().top <= window.innerHeight * 0.9;
      setIsVisible(heroPassed && !contactReached);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const budget = String(data.get("budget") ?? "");
    const bhk = String(data.get("bhk") ?? "");
    const pincode = String(data.get("pincode") ?? "").trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Enter your name";
    if (!/^[6-9]\d{9}$/.test(phone.slice(-10))) nextErrors.phone = "Enter a valid 10-digit phone";
    if (!budget) nextErrors.budget = "Select your budget";
    if (!bhk) nextErrors.bhk = "Select Configuration";
    if (!/^\d{6}$/.test(pincode)) nextErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      window.setTimeout(() => {
        router.push("/thank-you");
      }, 450);
    }
  };

  if (!isVisible || isDismissed) return null;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-[1540px] animate-[enquiry-sheet-in_340ms_cubic-bezier(0.22,1,0.36,1)] sm:inset-x-5 sm:bottom-5" aria-label="Book a site visit">
      <div className="overflow-hidden rounded-[26px] border border-white/50 bg-[#F8F7F3]/95 shadow-[0_18px_55px_rgba(43,38,35,0.24)] backdrop-blur-xl xl:rounded-full">
        <div className="flex min-h-[74px] items-center gap-3 px-4 py-3 sm:px-5 xl:px-4 xl:py-2">
          <button type="button" onClick={() => setIsMobileOpen((open) => !open)} className="flex min-w-0 flex-1 items-center gap-3 text-left xl:pointer-events-none xl:w-[190px] xl:flex-none" aria-expanded={isMobileOpen}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#2B2623]">SITE VISIT</span>
              <span className="mt-0.5 block text-[10px] text-[#2B2623]/55">Book Priority Slot</span>
            </span>
          </button>

          <button type="button" onClick={() => setIsMobileOpen(true)} className="ml-auto rounded-full bg-coral px-5 py-3 text-[10px] font-bold tracking-[0.12em] text-white xl:hidden">BOOK NOW</button>

          {isSubmitted ? (
            <div className="hidden flex-1 items-center justify-center gap-3 text-sm font-semibold text-[#2B2623] xl:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/10 text-coral">✓</span>
              Thank you. Our team will confirm your visit shortly.
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="hidden min-w-0 flex-1 items-center gap-3 xl:flex">
              <Field name="name" placeholder="Name" autoComplete="name" error={errors.name} className={`${inputClassName} w-full`} wrapperClassName="min-w-[120px] flex-1" />
              <Field name="phone" placeholder="Phone" type="tel" inputMode="tel" autoComplete="tel" error={errors.phone} className={`${inputClassName} w-full`} wrapperClassName="min-w-[120px] flex-1" />
              <label className="relative w-[180px] min-w-[180px] shrink-0">
                <span className="sr-only">Your Budget</span>
                <select
                  name="budget"
                  defaultValue=""
                  aria-invalid={Boolean(errors.budget)}
                  className={`${inputClassName} w-full appearance-none pr-7 ${errors.budget ? "border-red-500" : ""}`}
                >
                  <option value="" disabled>Your Budget</option>
                  <option value="2-bohk-55-60">2 BOHK: ₹55L–₹60L</option>
                  <option value="2-bohk-60-65-plus">2 BOHK: ₹60L–₹65L+</option>
                  <option value="3-bohk-85-90">3 BOHK: ₹85L–₹90L</option>
                  <option value="3-bohk-90-95">3 BOHK: ₹90L–₹95L</option>
                  <option value="3-bohk-95-1cr-plus">3 BOHK: ₹95L–₹1Cr+</option>
                </select>
                {errors.budget && <span className="mt-1 block pl-3 text-[9px] text-red-600 xl:absolute xl:left-3 xl:top-full xl:whitespace-nowrap xl:pl-0">{errors.budget}</span>}
              </label>
              <label className="relative w-[180px] min-w-[180px] shrink-0">
                <span className="sr-only">Select Configuration</span>
                <select
                  name="bhk"
                  defaultValue=""
                  aria-invalid={Boolean(errors.bhk)}
                  className={`${inputClassName} w-full appearance-none pr-7 ${errors.bhk ? "border-red-500" : ""}`}
                >
                  <option value="" disabled>Select Configuration</option>
                  <option value="2-bohk">2 BOHK</option>
                  <option value="3-bohk">3 BOHK</option>
                  <option value="not-sure">Not Sure</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2623]/50">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {errors.bhk && <span className="mt-1 block pl-3 text-[9px] text-red-600 xl:absolute xl:left-3 xl:top-full xl:whitespace-nowrap xl:pl-0">{errors.bhk}</span>}
              </label>
              <Field name="pincode" placeholder="Pincode" inputMode="numeric" autoComplete="postal-code" error={errors.pincode} className={`${inputClassName} w-full`} wrapperClassName="w-[118px] min-w-[118px] shrink-0" />
              <button
                type="submit"
                className="group flex h-12 w-[136px] shrink-0 items-center justify-between gap-2 whitespace-nowrap rounded-full bg-coral py-1.5 pl-5 pr-1.5 text-[10px] font-bold tracking-[0.13em] text-white shadow-[0_10px_26px_rgba(232,115,74,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_14px_30px_rgba(232,115,74,0.38)] focus:outline-none focus:ring-4 focus:ring-coral/20"
              >
                CONFIRM
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-lg transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </button>
            </form>
          )}

          <button type="button" onClick={() => setIsDismissed(true)} aria-label="Close site visit form" className="flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-[#2B2623]/55 transition hover:bg-[#2B2623]/5 hover:text-coral">×</button>
        </div>

        {isMobileOpen && (
          <div className="border-t border-[#2B2623]/10 px-4 pb-5 pt-3 xl:hidden">
            {isSubmitted ? <p className="py-6 text-center text-sm font-semibold text-[#2B2623]">Thank you. Our team will confirm your visit shortly.</p> : (
              <form onSubmit={submit} noValidate className="grid grid-cols-2 gap-3">
                <Field name="name" placeholder="Name" autoComplete="name" error={errors.name} className={`${inputClassName} w-full`} />
                <Field name="phone" placeholder="Phone" type="tel" inputMode="tel" autoComplete="tel" error={errors.phone} className={`${inputClassName} w-full`} />
                <label className="relative col-span-2 block">
                  <span className="sr-only">Your Budget</span>
                  <select
                    name="budget"
                    defaultValue=""
                    aria-invalid={Boolean(errors.budget)}
                    className={`${inputClassName} w-full appearance-none pr-8 ${errors.budget ? "border-red-500" : ""}`}
                  >
                    <option value="" disabled>Your Budget</option>
                    <option value="2-bohk-55-60">2 BOHK: ₹55L–₹60L</option>
                    <option value="2-bohk-60-65-plus">2 BOHK: ₹60L–₹65L+</option>
                    <option value="3-bohk-85-90">3 BOHK: ₹85L–₹90L</option>
                    <option value="3-bohk-90-95">3 BOHK: ₹90L–₹95L</option>
                    <option value="3-bohk-95-1cr-plus">3 BOHK: ₹95L–₹1Cr+</option>
                  </select>
                  {errors.budget && <span className="mt-1 block pl-3 text-[9px] text-red-600">{errors.budget}</span>}
                </label>
                <label className="relative block">
                  <span className="sr-only">Select Configuration</span>
                  <select
                    name="bhk"
                    defaultValue=""
                    aria-invalid={Boolean(errors.bhk)}
                    className={`${inputClassName} w-full appearance-none pr-8 ${errors.bhk ? "border-red-500" : ""}`}
                  >
                    <option value="" disabled>Select Configuration</option>
                    <option value="2-bohk">2 BOHK</option>
                    <option value="3-bohk">3 BOHK</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#2B2623]/50">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  {errors.bhk && <span className="mt-1 block pl-3 text-[9px] text-red-600">{errors.bhk}</span>}
                </label>
                <Field name="pincode" placeholder="Pincode" inputMode="numeric" autoComplete="postal-code" error={errors.pincode} className={`${inputClassName} w-full`} />
                <button type="submit" className="group col-span-2 flex h-12 items-center justify-between rounded-full bg-coral py-1.5 pl-6 pr-1.5 text-xs font-bold tracking-[0.16em] text-white shadow-[0_10px_26px_rgba(232,115,74,0.3)] transition active:scale-[0.99]">
                  <span className="flex-1 text-center">CONFIRM</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-lg" aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}

function Field({ error, className, wrapperClassName = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string; wrapperClassName?: string }) {
  return (
    <label className={`relative min-w-0 ${wrapperClassName}`}>
      <span className="sr-only">{props.placeholder}</span>
      <input {...props} required aria-invalid={Boolean(error)} className={`${className} ${error ? "border-red-500" : ""}`} />
      {error && <span className="mt-1 block pl-3 text-[9px] leading-none text-red-600 xl:absolute xl:left-3 xl:top-full xl:whitespace-nowrap xl:pl-0">{error}</span>}
    </label>
  );
}
