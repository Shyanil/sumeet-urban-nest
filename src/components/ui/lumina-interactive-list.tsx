"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type LuminaSlide = { title: string; description: string; media: string };

export function LuminaInteractiveList({ slides, onOpen }: { slides: LuminaSlide[]; onOpen?: (index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
      setProgressKey((key) => key + 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const selectSlide = (index: number) => { setActiveIndex(index); setProgressKey((key) => key + 1); };

  return (
    <div className="relative min-h-[680px] overflow-hidden bg-[#171412] text-white sm:min-h-[760px] lg:min-h-[850px]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => <Image key={slide.media} src={slide.media} alt={slide.title} fill priority={index === 0} sizes="100vw" className={`object-cover transition-all duration-[1800ms] ease-[cubic-bezier(.22,.61,.36,1)] ${index === activeIndex ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} />)}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.82)_0%,rgba(8,7,6,.18)_60%,rgba(8,7,6,.35)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1760px] flex-col px-5 py-16 sm:min-h-[760px] sm:px-8 sm:py-20 lg:min-h-[850px] lg:px-12 xl:px-14 2xl:px-16">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">G A L L E R Y</h2>
          <p className="font-mono text-xs tracking-[0.25em] text-white/65">{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
        </div>
        <button type="button" onClick={() => onOpen?.(activeIndex)} className="my-auto max-w-[920px] py-20 text-left" aria-label={`Open ${slides[activeIndex].title}`}>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">Sumeet Urban Nest</p>
          <h3 key={`title-${activeIndex}`} className="animate-[luminaReveal_.9s_ease-out] text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[0.88] tracking-[-0.045em]">{slides[activeIndex].title}</h3>
          <p key={`desc-${activeIndex}`} className="mt-7 max-w-lg animate-[luminaReveal_1s_ease-out] text-sm leading-relaxed text-white/70 sm:text-base">{slides[activeIndex].description}</p>
        </button>
        <nav className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6" aria-label="Gallery images">
          {slides.map((slide, index) => <button key={slide.media} type="button" onClick={() => selectSlide(index)} className="group text-left"><span className="mb-3 block h-px overflow-hidden bg-white/25">{index === activeIndex && <span key={progressKey} className="block h-full animate-[luminaProgress_5s_linear] bg-coral" />}</span><span className={`block text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors sm:text-xs ${index === activeIndex ? "text-white" : "text-white/45 group-hover:text-white/80"}`}>{slide.title}</span></button>)}
        </nav>
      </div>
    </div>
  );
}
