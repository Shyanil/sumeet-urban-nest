"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/exterior/hero-building.webp",
    alt: "Sumeet Urban Nest exterior elevation",
  },
  {
    src: "/images/exterior/swimming-pool.webp",
    alt: "Rooftop swimming pool at Sumeet Urban Nest",
  },
  {
    src: "/images/exterior/temple-view.webp",
    alt: "Temple and landscaped grounds at Sumeet Urban Nest",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1,
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[720px] max-h-[1100px] w-full overflow-hidden">
      {/* Hero background slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
            sizes="100vw"
          />
        ))}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1680px] flex-col justify-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:px-10 lg:px-12 xl:flex-row xl:items-end xl:justify-between xl:gap-10 xl:pb-24">
        {/* Main Headline on Left */}
        <div className="max-w-[660px] pb-6 xl:pb-0">
          <h1 className="text-[clamp(1.35rem,6.5vw,3rem)] font-light leading-[1.12] tracking-[-0.025em] text-white xl:text-[clamp(2.75rem,3.35vw,3.75rem)]">
            <span className="block whitespace-nowrap font-normal">
              A peaceful corner within
            </span>
            <span className="block whitespace-nowrap font-light">
              your <span className="font-semibold text-coral">everyday</span> world.
            </span>
          </h1>
        </div>

        {/* Sophisticated Floating Architectural Information Card */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] xl:max-w-[380px] shrink-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/45 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-5 lg:p-6">
            {/* Top accent hairline gradient line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-coral via-[#F0A566] to-transparent"
            />

            {/* Location & Status Header */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Khamardih, Shankar Nagar
                </p>
              </div>
              <span className="rounded-full border border-[#F0A566]/30 bg-[#F0A566]/10 px-2 py-0.5 text-[9px] font-medium tracking-wider text-[#F0A566] uppercase">
                Raipur
              </span>
            </div>

            {/* Primary Property Highlight: 2 & 3 BHK Homes */}
            <div className="mt-3.5 sm:mt-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                  2 &amp; 3 BHK
                </h2>
                <span className="rounded-full border border-coral/40 bg-coral/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-coral uppercase">
                  BOHK Homes
                </span>
              </div>
              <p className="mt-1 text-xs font-normal text-white/70">
                Thoughtfully designed luxury residences
              </p>
            </div>

            {/* Divider */}
            <div className="my-3.5 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent sm:my-4" />

            {/* Clean Key Stats Grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-2 sm:py-2.5">
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  152
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70">
                  Residences
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-2 sm:py-2.5">
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  1.76
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70">
                  Acres
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-2 sm:py-2.5">
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  3
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70">
                  Towers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 sm:bottom-7 sm:gap-4"
        aria-label={`Hero slide ${activeSlide + 1} of ${heroSlides.length}`}
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={`h-2.5 w-2.5 rounded-full border-2 border-[#F0A566] transition-all sm:h-3 sm:w-3 ${
              index === activeSlide ? "scale-110 bg-[#F0A566]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
