"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type EnquiryContextValue = {
  openEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

const fieldClassName =
  "h-12 w-full rounded-xl border border-[#eaded7] bg-[#fffaf7] px-4 text-sm text-[#302c2a] outline-none transition placeholder:text-[#9b918c] focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10 sm:h-14 sm:text-[15px]";

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => nameInputRef.current?.focus(), 250);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openEnquiry = () => {
    setIsSubmitted(false);
    setIsOpen(true);
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[120]">
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 h-full w-full animate-[enquiry-backdrop-in_220ms_ease-out] bg-[#17100c]/55 backdrop-blur-[3px]"
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="absolute inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto rounded-t-[30px] bg-white shadow-[0_-24px_70px_rgba(33,18,10,0.22)] animate-[enquiry-sheet-in_340ms_cubic-bezier(0.22,1,0.36,1)] lg:inset-y-0 lg:left-auto lg:w-full lg:max-w-[480px] lg:max-h-none lg:rounded-l-[34px] lg:rounded-tr-none lg:shadow-[-24px_0_70px_rgba(33,18,10,0.2)] lg:animate-[enquiry-drawer-in_340ms_cubic-bezier(0.22,1,0.36,1)]"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-[#ef7952] to-[#d65d45] px-6 pb-7 pt-8 text-white sm:px-8 sm:pb-8 sm:pt-10 lg:px-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 220 160"
                className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-64 opacity-20"
                fill="none"
              >
                <circle cx="190" cy="150" r="112" stroke="white" strokeWidth="10" />
                <circle cx="190" cy="150" r="82" stroke="white" strokeWidth="2" />
                <circle cx="190" cy="150" r="55" stroke="white" strokeWidth="6" />
              </svg>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close enquiry form"
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-2xl leading-none text-white transition hover:bg-white hover:text-coral sm:right-6 sm:top-6"
              >
                &times;
              </button>

              <p className="relative text-[11px] font-semibold tracking-[0.26em] text-white/75 sm:text-xs">
                SUMEET URBAN NEST
              </p>
              <h2
                id="enquiry-title"
                className="relative mt-3 pr-12 text-[27px] font-semibold leading-tight tracking-[-0.025em] sm:text-[32px]"
              >
                Let&apos;s find your
                <span className="block">space to open out.</span>
              </h2>
              <p className="relative mt-3 max-w-sm text-sm leading-6 text-white/85 sm:text-[15px]">
                Share your details and our team will contact you with plans,
                pricing and availability.
              </p>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              {isSubmitted ? (
                <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-8 w-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#302c2a]">
                    Thank you.
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#746b66]">
                    Your enquiry is ready. Our team will get in touch with you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="mt-7 rounded-xl bg-coral px-7 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
                  >
                    Continue exploring
                  </button>
                </div>
              ) : (
                <form onSubmit={submitEnquiry} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label htmlFor="sticky-full-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      ref={nameInputRef}
                      required
                      type="text"
                      id="sticky-full-name"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Full Name"
                      className={fieldClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="sticky-phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      id="sticky-phone"
                      name="phoneNumber"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Phone Number"
                      className={fieldClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="sticky-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="sticky-email"
                      name="emailAddress"
                      autoComplete="email"
                      placeholder="Email Address"
                      className={fieldClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="sticky-interest" className="sr-only">
                      Interested In
                    </label>
                    <select
                      required
                      id="sticky-interest"
                      name="interest"
                      defaultValue=""
                      className={`${fieldClassName} appearance-none text-[#746b66]`}
                    >
                      <option value="" disabled>
                        Select BOHK
                      </option>
                      <option value="2-bhk">2 BOHK Home</option>
                      <option value="3-bhk">3 BOHK Home</option>
                      <option value="both">Both 2 &amp; 3 BOHK</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sticky-location" className="sr-only">
                      Location / Pincode
                    </label>
                    <input
                      required
                      type="text"
                      id="sticky-location"
                      name="locationPincode"
                      autoComplete="postal-code"
                      placeholder="Location / Pincode"
                      className={fieldClassName}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-coral px-6 text-sm font-bold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(232,115,74,0.25)] transition hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_16px_34px_rgba(232,115,74,0.32)] sm:min-h-14 sm:text-[15px]"
                  >
                    SUBMIT ENQUIRY
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </button>

                  <p className="px-2 pt-1 text-center text-[10px] leading-4 text-[#9b918c] sm:text-[11px]">
                    By submitting, you agree to be contacted about Sumeet Urban
                    Nest.
                  </p>
                </form>
              )}

              <div className="mt-5 flex items-center justify-center gap-4 border-t border-[#eee4de] pt-5 text-xs text-[#746b66] sm:text-sm">
                <a
                  href="tel:+917247724800"
                  className="font-medium transition hover:text-coral"
                >
                  7247 7248 00
                </a>
                <span className="h-4 w-px bg-[#ddd1ca]" />
                <a
                  href="mailto:sales@sumeetinfraventures.com"
                  className="transition hover:text-coral"
                >
                  Email us
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}

export function EnquiryButton({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const context = useContext(EnquiryContext);

  if (!context) {
    throw new Error("EnquiryButton must be rendered inside EnquiryProvider.");
  }

  return (
    <button
      type="button"
      onClick={context.openEnquiry}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
