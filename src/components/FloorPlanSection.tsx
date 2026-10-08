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

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_rgba(43,38,35,0.1)] sm:mt-10 sm:rounded-[30px]">
          <FloorPlanPdfViewer src={floorPlanPdf} />
        </div>
      </div>
    </section>
  );
}
import FloorPlanPdfViewer from "@/components/FloorPlanPdfViewer";
