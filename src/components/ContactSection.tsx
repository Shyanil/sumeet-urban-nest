const fieldClassName =
  "h-14 w-full rounded-[7px] border border-transparent bg-[#B14A45] px-5 text-[15px] font-normal text-white caret-white outline-none transition-colors placeholder:text-white/95 focus:border-white/70 focus:bg-[#AA433F] sm:h-[60px] sm:px-6 sm:text-base";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#E16E5B] py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <div className="mx-auto max-w-[1568px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20 xl:gap-24">
          <div className="text-white">
            <h2 className="max-w-[470px] text-[28px] font-normal leading-[1.5] tracking-[-0.025em] sm:text-[30px] lg:text-[32px]">
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
                    sales@sumeetinfra ventures.com
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

            <div className="mt-9 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:gap-4 sm:mt-10">
              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-white px-7 text-[15px] font-medium text-[#D46051] transition-colors hover:bg-[#FFF5F1] sm:min-w-[152px] sm:text-base"
              >
                Inquire now
              </a>
              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white px-7 text-center text-[15px] font-medium text-white transition-colors hover:bg-white/10 sm:min-w-[212px] sm:text-base"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div
            id="contact-form"
            className="w-full rounded-[32px] bg-[#D46051] px-6 py-9 sm:rounded-[38px] sm:px-10 sm:py-11 md:px-14 md:py-12 lg:justify-self-end xl:px-[72px] xl:py-[54px]"
          >
            <h3 className="mb-8 text-[27px] font-semibold leading-tight tracking-[-0.025em] text-white sm:mb-9 sm:text-[31px]">
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
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className={`${fieldClassName} min-h-[104px] resize-none py-[18px] sm:min-h-[116px]`}
                />
              </div>

              <button
                type="submit"
                className="flex min-h-14 w-full items-center justify-center rounded-[7px] bg-[#B14A45] px-8 text-base font-medium text-white transition-colors hover:bg-[#A5413D] focus:outline-none focus:ring-2 focus:ring-white/70 sm:min-h-[60px] sm:text-[17px]"
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
