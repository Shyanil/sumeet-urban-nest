import Image from "next/image";

export default function WalkthroughSection() {
  return (
    <section id="walkthrough" className="scroll-mt-20 bg-[#FFF0DE] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-[calc(100%-3rem)] max-w-[1566px] md:w-[82%]">
        {/* Section Title */}
        <div className="mb-12 flex justify-center md:mb-14">
          <h2 className="text-center text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">
            W A L K T H R O U G H
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/10">
          <Image
            src="/images/exterior/podium-top-view.webp"
            alt="Podium garden walkthrough at Sumeet Urban Nest"
            fill
            className="object-cover"
            sizes="(min-width: 1920px) 1566px, 82vw"
          />

          <button
            type="button"
            aria-label="Play walkthrough video"
            className="group absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 hover:scale-105 md:h-36 md:w-36 lg:h-40 lg:w-40"
          >
            <span className="absolute inset-0 rounded-full border-2 border-white/70" />
            <span className="absolute inset-[6px] rounded-full border border-white/80" />
            <span className="absolute inset-[12px] rounded-full border border-white/55" />
            <svg
              className="relative ml-2 h-10 w-10 text-white drop-shadow-md transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <p className="mt-9 text-center text-sm font-bold tracking-[0.025em] text-coral md:mt-11 md:text-xl lg:text-[24px]">
          PRESS PLAY TO SEE HOW CENTRAL RAIPUR OPENS OUT TO LIFE.
        </p>
      </div>
    </section>
  );
}
