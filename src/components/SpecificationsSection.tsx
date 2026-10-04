"use client";

import { useEffect, useRef, useState } from "react";

const specifications = [
  {
    title: "Flooring",
    details:
      "Premium vitrified tiles across living, dining, bedrooms, and kitchen areas. Anti-skid ceramic tiles in bathrooms and outdoor balconies.",
  },
  {
    title: "Doors",
    details:
      "Main entrance with elegant designer flush door and premium brass/chrome hardware. Internal flush doors with superior laminate finish.",
  },
  {
    title: "Windows",
    details:
      "Heavy-duty UPVC / powder-coated aluminum sliding windows with high-grade clear float glass and mosquito mesh provisions.",
  },
  {
    title: "Toilet",
    details:
      "Designer ceramic wall tiles up to lintel height. Wall-hung EWC, branded washbasins, and premium chrome-plated fittings from reputed brands.",
  },
  {
    title: "Plumbing",
    details:
      "Concealed CPVC/UPVC pipelines with ISI certified fittings. Dual plumbing system for sustainable water conservation.",
  },
  {
    title: "Kitchen",
    details:
      "Granite kitchen platform with high-grade stainless steel sink and designer glazed tile dado up to 2 feet above the cooking counter.",
  },
  {
    title: "Wall Finish",
    details:
      "Smooth gypsum/plaster wall finish with premium interior primer and acrylic emulsion. Weatherproof exterior acrylic paint.",
  },
  {
    title: "Electrical",
    details:
      "Fire-resistant concealed copper wiring with modular switches. Dedicated AC, TV, and telephone points in living room and bedrooms.",
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
            <p key={activeIndex} className="max-w-3xl animate-[luminaReveal_.6s_ease-out] text-base leading-8 text-[#5e5752] sm:text-lg sm:leading-9">
              {specifications[activeIndex].details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
