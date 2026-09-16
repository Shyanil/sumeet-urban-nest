import Image from "next/image";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative isolate overflow-hidden bg-white py-16 md:py-24">
      <Image
        src="/images/exterior/overview-rings.webp"
        alt=""
        width={1336}
        height={1177}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[2%] top-20 -z-10 hidden h-auto w-[clamp(500px,43vw,720px)] select-none lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1680px] px-6 md:px-[9vw]">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-gray-400" />
          <h2 className="text-2xl md:text-[30px] font-normal tracking-wider text-gray-800">
            OVERVIEW
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Left Column - Introducing */}
          <div>
            <p className="text-sm md:text-base font-medium tracking-[0.3em] text-gray-500 mb-6">
              I N T R O D U C I N G
            </p>

            <h3 className="mb-1 text-xl font-medium text-gray-800 md:text-2xl">
              The newest concept of living
            </h3>
            <h3 className="mb-1 text-xl font-semibold text-gray-800 md:text-2xl">
              at Khamardih, Shankar Nagar
            </h3>
            <h3 className="mb-8 mt-7 text-xl font-semibold text-coral md:text-2xl">
              BOHK Homes.
            </h3>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">
              What if your home didn&apos;t end at the walls?
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">
              At Sumeet Urban Nest, every home opens into more, more light, more
              air, more flexibility,
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              and more room to live the way modern families truly want to.
            </p>

            {/* Request Plans Button */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-coral px-8 py-4 text-sm font-bold tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(232,115,74,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_14px_30px_rgba(232,115,74,0.32)] md:text-base"
              >
                REQUEST PLANS
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </a>
              <p className="whitespace-nowrap text-center text-[11px] font-normal leading-none text-gray-500 sm:text-left xl:text-xs">
                RERA No.: PCGRERA190326002064 | rera.cgstate.gov.in
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-base font-medium text-gray-800 md:text-[19px]">
                  2 & 3 BHK Homes
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-base font-medium text-gray-800 md:text-[19px]">
                  Spread across 1.76 Acres
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-base font-medium text-gray-800 md:text-[19px]">
                  152 Residences
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-base font-medium text-gray-800 md:text-[19px]">
                  3 Towers
                </p>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-base font-medium text-gray-800 md:text-[19px]">
                  Khamardih, Shankar Nagar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
