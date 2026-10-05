import Image from "next/image";

export const metadata = {
  title: "Thank You | Sumeet Urban Nest",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#2B2623]">
      <Image
        src="/images/exterior/hero-building.webp"
        alt="Sumeet Urban Nest"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/30" />

      <div className="absolute left-1/2 top-1/2 z-20 w-[calc(100%-3rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#D6AC70]/60 bg-[#F8F7F3]/95 px-6 py-10 text-center shadow-[0_24px_70px_rgba(43,38,35,0.38)] backdrop-blur-md sm:rounded-[36px] sm:px-12 sm:py-14">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-coral sm:text-xs">
          Sumeet Urban Nest
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#2B2623] sm:text-6xl lg:text-7xl">
          Thank you for your interest.
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-[#D6AC70]" aria-hidden="true" />
        <p className="mx-auto mt-5 max-w-xl text-sm font-normal leading-7 text-[#6F5940] sm:text-base">
          Our team will connect with you shortly to help you discover your new home.
        </p>
      </div>

      <a
        href="/downloads/sumeet-urban-nest-brochure.pdf"
        download="Sumeet Urban Nest Brochure.pdf"
        className="group absolute bottom-8 left-1/2 z-20 flex min-h-14 -translate-x-1/2 items-center gap-5 whitespace-nowrap rounded-full bg-coral py-2 pl-7 pr-2 text-xs font-bold tracking-[0.15em] text-white shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:bg-coral-dark sm:bottom-12 sm:text-sm"
      >
        DOWNLOAD BROCHURE
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl transition-transform group-hover:translate-y-0.5" aria-hidden="true">
          ↓
        </span>
      </a>
    </main>
  );
}
