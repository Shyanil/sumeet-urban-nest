const fieldClassName =
  "h-14 w-full rounded-[7px] border border-[#2B2623]/10 bg-white/35 px-5 text-[15px] font-normal text-[#2B2623] caret-[#2B2623] outline-none transition-colors placeholder:text-[#2B2623]/70 focus:border-[#2B2623]/45 focus:bg-white/50 sm:h-[60px] sm:px-6 sm:text-base";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden bg-[#E16E5B] pt-10 pb-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <div className="mx-auto max-w-[1568px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20 xl:gap-24">
          <div className="text-white">
            <h2 className="max-w-[430px] text-[26px] font-normal leading-[1.65] tracking-[-0.02em] sm:text-[28px] lg:text-[30px]">
              Begin your journey to a
              <span className="block">home that opens out.</span>
            </h2>

            <div className="mt-7 h-px w-[130px] bg-white" />

            <dl className="mt-9 space-y-6 sm:mt-10 sm:space-y-7">
              <div>
                <dt className="mb-1.5 text-[17px] font-normal leading-snug text-white sm:text-lg">
                  Call
                </dt>
                <dd>
                  <a
                    href="tel:+917247724800"
                    className="text-[23px] font-normal leading-tight tracking-[-0.02em] transition-opacity hover:opacity-80 sm:text-[26px]"
                  >
                    +91 7247 7248 00
                  </a>
                </dd>
              </div>

              <div>
                <dt className="mb-1.5 text-[17px] font-normal leading-snug text-white sm:text-lg">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:sales@sumeetinfraventures.com"
                    className="break-words text-[20px] font-normal leading-snug tracking-[-0.02em] transition-opacity hover:opacity-80 sm:text-[23px]"
                  >
                    sales@sumeetinfraventures.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="mb-1.5 text-[17px] font-normal leading-snug text-white sm:text-lg">
                  Site Address
                </dt>
                <dd className="text-[21px] font-normal leading-[1.45] tracking-[-0.02em] sm:text-[24px]">
                  Khamardih, Shankar Nagar,
                  <span className="block">Raipur, Chhattisgarh</span>
                </dd>
              </div>
            </dl>

          </div>

          <div
            id="contact-form"
            className="w-full rounded-[32px] bg-[#D6AC70] px-6 py-9 shadow-[0_24px_60px_rgba(91,66,37,0.2)] sm:rounded-[38px] sm:px-10 sm:py-11 md:px-14 md:py-12 lg:justify-self-end xl:px-[72px] xl:py-[54px]"
          >
            <h3 className="mb-8 text-[27px] font-semibold leading-tight tracking-[-0.025em] text-[#2B2623] sm:mb-9 sm:text-[31px]">
              Request a Call Back
            </h3>

            <form className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="interest" className="sr-only">
                  Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className={`${fieldClassName} appearance-none`}
                >
                  <option value="" disabled>
                    Interested In
                  </option>
                  <option value="2-bhk">2 BHK Home</option>
                  <option value="3-bhk">3 BHK Home</option>
                  <option value="both">2 &amp; 3 BHK Homes</option>
                </select>
              </div>

              <div>
                <label htmlFor="locationPincode" className="sr-only">
                  Location / Pincode
                </label>
                <input
                  type="text"
                  id="locationPincode"
                  name="locationPincode"
                  autoComplete="postal-code"
                  placeholder="Location / Pincode"
                  className={fieldClassName}
                />
              </div>

              <button
                type="submit"
                className="flex min-h-14 w-full items-center justify-center rounded-[7px] bg-[#2B2623] px-8 text-base font-medium text-white transition-colors hover:bg-[#3A322E] focus:outline-none focus:ring-2 focus:ring-white/70 sm:min-h-[60px] sm:text-[17px]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
