"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/exterior/hero-building.webp",
    alt: "Sumeet Urban Nest exterior elevation",
    lineOne: "Khamardih, Shankar Nagar's",
    lineTwoPrefix: "first ",
    lineTwoAccent: "BOHK",
    lineTwoSuffix: " homes !",
  },
  {
    src: "/images/exterior/swimming-pool.webp",
    alt: "Rooftop swimming pool at Sumeet Urban Nest",
    lineOne: "Rooftop leisure, reimagined",
    lineTwoPrefix: "for life ",
    lineTwoAccent: "above it all",
    lineTwoSuffix: ".",
  },
  {
    src: "/images/exterior/temple-view.webp",
    alt: "Temple and landscaped grounds at Sumeet Urban Nest",
    lineOne: "A peaceful corner within",
    lineTwoPrefix: "your ",
    lineTwoAccent: "everyday",
    lineTwoSuffix: " world.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[700px] max-h-[1100px] w-full overflow-hidden">
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
            priority
            sizes="100vw"
          />
        ))}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1680px] items-end px-6 pb-[112px] md:px-[9vw] md:pb-[118px] lg:pb-[126px]">
        <h1 className="max-w-[1080px] text-[clamp(1.25rem,4.35vw,4.9rem)] font-normal leading-[1.06] tracking-[-0.025em] text-white">
          <span className="block whitespace-nowrap">
            {heroSlides[activeSlide].lineOne}
          </span>
          <span className="block whitespace-nowrap">
            {heroSlides[activeSlide].lineTwoPrefix}
            <span className="font-semibold text-coral">
              {heroSlides[activeSlide].lineTwoAccent}
            </span>
            {heroSlides[activeSlide].lineTwoSuffix}
          </span>
        </h1>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4"
        aria-label={`Hero slide ${activeSlide + 1} of ${heroSlides.length}`}
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={`h-4 w-4 rounded-full border-2 border-[#F0A566] transition-colors ${
              index === activeSlide ? "bg-[#F0A566]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
