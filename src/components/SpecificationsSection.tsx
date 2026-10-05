"use client";

import { useEffect, useRef, useState } from "react";

const specifications = [
  {
    title: "Flooring",
    details: [
      "800 × 1600 mm vitrified tiles in living, dining and drawing areas",
      "Wooden flooring in the master bedroom",
      "Vitrified tiles (600 × 1200 or 600 × 600 mm) in other rooms",
      "Anti-skid tiles in balcony and wash area",
    ],
  },
  {
    title: "Doors",
    details: [
      "Wood frame and waterproof flush door with veneer finish for the main door and laminate finish for all internal doors",
    ],
  },
  {
    title: "Window",
    details: ["Aluminium sliding windows with mosquito net"],
  },
  {
    title: "Toilets",
    details: [
      "600 × 1200 mm vitrified tiles in toilets, dado up to 8 ft on walls, and 600 × 600 mm vitrified floor tiles",
    ],
  },
  {
    title: "Plumbing",
    details: [
      "Single-lever diverter in the shower area",
      "Metro-flush wall-hung WCs and countertop wash basin",
      "Electrical points for geyser, exhaust fan and mirror light",
    ],
  },
  {
    title: "Kitchen",
    details: [
      "Quartz full-body platform compatible with a modular kitchen",
      "Provision for refrigerator, chimney, water purifier and microwave electrical points, with plumbing for kitchen sink mixer, water purifier and washing machine",
    ],
  },
  {
    title: "Wall Finish",
    details: [
      "Cement-based wall putty finished with primer on all interior walls",
      "Weatherproof emulsion paint on exterior walls",
    ],
  },
  {
    title: "Electrical",
    details: [
      "Electrical points provided as per standard furniture layout",
      "TV and AC points in all bedrooms and the living room",
      "Fire-retardant cables and modular switches from reputed brands",
    ],
  },
];

export default function SpecificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % specifications.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    stripRef.current?.scrollTo({ left: activeIndex * 170, behavior: "smooth" });
  }, [activeIndex]);

  return (
    <section
      id="specifications"
      className="scroll-mt-20 overflow-hidden bg-[#f3f0ed] py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-16">
        <h2 className="mb-10 text-xl font-bold tracking-[0.34em] text-coral md:mb-14 md:text-[26px] lg:text-[30px]">
          SPECIFICATIONS
        </h2>

        <div ref={stripRef} className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max border-y border-[#d9d0ca]">
            {specifications.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative min-w-[150px] px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.12em] transition-colors sm:min-w-[190px] sm:text-base ${
                  index === activeIndex
                    ? "bg-[#2b2623] text-white"
                    : "text-[#625a55] hover:bg-white hover:text-coral"
                }`}
              >
                <span className="mr-3 text-[10px] text-coral">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
                {index === activeIndex && (
                  <span key={activeIndex} className="absolute inset-x-0 bottom-0 h-[3px] animate-[luminaProgress_4s_linear] bg-coral" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(71,49,38,0.08)] md:grid-cols-[0.7fr_1.3fr]">
          <div className="flex min-h-[210px] flex-col justify-between bg-[#2b2623] p-7 text-white sm:p-9 md:min-h-[300px] lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral">Material detail</span>
            <div>
              <p className="mb-3 text-sm text-white/45">{String(activeIndex + 1).padStart(2, "0")} / {String(specifications.length).padStart(2, "0")}</p>
              <h3 className="text-3xl font-medium sm:text-4xl lg:text-5xl">{specifications[activeIndex].title}</h3>
            </div>
          </div>
          <div className="flex items-center p-7 sm:p-9 lg:p-12">
            <ul key={activeIndex} className="w-full max-w-3xl animate-[luminaReveal_.6s_ease-out] space-y-4">
              {specifications[activeIndex].details.map((detail) => (
                <li key={detail} className="flex gap-4 text-base leading-7 text-[#5e5752] sm:text-lg sm:leading-8">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
