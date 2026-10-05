"use client";

import Image from "next/image";

export type LuminaSlide = { title: string; description: string; media: string };

export function LuminaInteractiveList({ slides, onOpen }: { slides: LuminaSlide[]; onOpen?: (index: number) => void }) {
  return (
    <div className="overflow-hidden bg-[#f5f2ed] py-20 text-[#292522] sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#292522]/15 pb-8 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#292522]/45">
              Spaces crafted for living
            </p>
            <h2 className="text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">
              G A L L E R Y
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-[#292522]/65 sm:text-right sm:text-base">
            A closer look at the considered spaces, refined details and everyday experiences of Sumeet Urban Nest.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-4">
          {slides.map((slide, index) => (
            <button
              key={slide.media}
              type="button"
              onClick={() => onOpen?.(index)}
              aria-label={`Open ${slide.title}`}
              className={`group relative overflow-hidden bg-[#1b1816] text-left ${
                index === 0
                  ? "sm:row-span-2 lg:col-span-2"
                  : index === 1
                    ? "lg:col-span-2"
                    : ""
              }`}
            >
              <Image
                src={slide.media}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent transition-colors group-hover:from-black/85" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <span>
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`${index === 0 ? "text-2xl sm:text-3xl" : "text-lg"} block font-light tracking-wide text-white`}>
                    {slide.title}
                  </span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/45 text-lg text-white transition group-hover:border-coral group-hover:bg-coral">
                  +
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
