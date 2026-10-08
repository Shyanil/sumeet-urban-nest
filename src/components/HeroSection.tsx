"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/exterior/hero-building.webp",
    mobileSrc: "/images/exterior/mobile-hero-elevation.webp",
    alt: "Sumeet Urban Nest exterior elevation",
  },
  {
    src: "/images/exterior/aerial-view.webp",
    mobileSrc: "/images/exterior/mobile-hero-aerial.webp",
    alt: "Aerial view of Sumeet Urban Nest",
  },
  {
    src: "/images/exterior/gate-view.webp",
    mobileSrc: "/images/exterior/mobile-hero-gate.webp",
    alt: "Entrance gate at Sumeet Urban Nest",
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
    <section id="hero" className="relative h-[100svh] min-h-[720px] max-h-[1100px] w-full overflow-hidden">
      {/* Hero background slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <picture
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <source media="(max-width: 767px)" srcSet={slide.mobileSrc} />
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover object-center" />
          </picture>
        ))}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1720px] flex-col justify-end px-6 pb-13 pt-24 sm:px-10 sm:pb-20 sm:pt-28 md:px-14 lg:px-20 xl:px-28 2xl:px-36 xl:flex-row xl:items-end xl:justify-between xl:gap-10 xl:pb-24">
        <div className="max-w-[660px] pb-6 xl:pb-0">
          <h1 className="text-[clamp(1.2rem,5.8vw,2.4rem)] font-light leading-[1.12] tracking-[-0.025em] text-white sm:text-[clamp(1.35rem,6.5vw,3rem)] xl:text-[clamp(2.75rem,3.35vw,3.75rem)]">
            <span className="block font-normal sm:whitespace-nowrap">
              A peaceful corner within
            </span>
            <span className="block font-light sm:whitespace-nowrap">
              your <span className="font-semibold text-coral">everyday</span> world.
            </span>
          </h1>
        </div>

        <div className="w-full max-w-[315px] shrink-0 sm:max-w-[380px] xl:max-w-[390px] 2xl:max-w-[420px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/45 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-coral via-[#F0A566] to-transparent"
            />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                <p className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-white/90 sm:text-[11px] sm:tracking-[0.18em]">
                  Khamardih, Shankar Nagar
                </p>
              </div>
              <span className="rounded-full border border-[#F0A566]/30 bg-[#F0A566]/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[#F0A566]">
                Raipur
              </span>
            </div>

            <div className="my-4 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent sm:my-5" />

            <h2 className="whitespace-nowrap text-[20px] font-light leading-none tracking-tight text-white min-[380px]:text-[22px] sm:text-[26px] xl:text-[28px]">
              2 <span className="text-coral">&amp;</span> 3 BOHK Apartments
            </h2>
            <p className="mt-2 text-[11px] leading-relaxed text-white/70 sm:mt-3 sm:text-xs">
              Thoughtfully designed luxury residences
            </p>
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
