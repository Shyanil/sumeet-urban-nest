const floorPlanPdf = "/downloads/urban-nest-floor-plan-brochure.pdf";

export default function FloorPlanSection() {
  return (
    <section id="floor-plan" className="scroll-mt-20 bg-[#F7F5F0] py-14 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#2c2b29] sm:text-xs sm:tracking-[0.32em]">Architectural Layout</span>
              <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
            </div>
            <h2 className="text-[13px] font-light tracking-[0.14em] text-coral uppercase min-[380px]:text-[15px] min-[380px]:tracking-[0.18em] sm:text-2xl sm:tracking-[0.28em] md:text-3xl lg:text-4xl">
              F L O O R &nbsp; P L A N S
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6d625c] sm:text-base">
              Explore the detailed floor-plan brochure for Sumeet Urban Nest.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[26px] border border-[#2B2623]/10 bg-white shadow-[0_18px_50px_rgba(43,38,35,0.1)] sm:mt-10 sm:rounded-[34px]">
          <div className="grid gap-7 p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-10 lg:p-12">
            <div className="mx-auto flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-coral/20 bg-coral/8 text-coral shadow-sm sm:h-28 sm:w-24">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 sm:h-11 sm:w-11">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M8 13h8M8 17h5" />
              </svg>
              <span className="mt-1 text-[9px] font-bold tracking-[0.16em]">PDF</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">Sumeet Urban Nest</p>
              <h3 className="mt-2 text-2xl font-light tracking-[-0.03em] text-[#2B2623] sm:text-3xl">Detailed Floor Plan Brochure</h3>
              <p className="mt-3 text-sm leading-6 text-[#746b66]">View apartment layouts and complete planning details in the brochure.</p>
              <a href={floorPlanPdf} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-6 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(232,115,74,0.25)] transition hover:-translate-y-0.5 hover:bg-coral-dark">
                Open in New Tab
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[22px] border border-[#2B2623]/10 bg-white shadow-[0_18px_50px_rgba(43,38,35,0.1)] sm:mt-8 sm:rounded-[30px]">
          <iframe src={`${floorPlanPdf}#view=FitH`} title="Sumeet Urban Nest floor plan brochure" className="h-[520px] w-full bg-white sm:h-[700px] lg:h-[820px]" />
        </div>
      </div>
    </section>
  );
}
