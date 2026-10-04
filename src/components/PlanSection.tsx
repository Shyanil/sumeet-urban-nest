"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const amenities = [
  { id: 1, name: "Entry/Exit", x: 73.8, y: 50.8 },
  { id: 2, name: "Driveway", x: 36.9, y: 53.2 },
  { id: 3, name: "Temple", x: 67.4, y: 46.5 },
  { id: 4, name: "Drop Off", x: 52.9, y: 53.2 },
  { id: 5, name: "Kids' Play Area", x: 13.8, y: 64.2 },
  { id: 6, name: "Pergola Seating Area", x: 13, y: 58.4 },
  { id: 7, name: "Pavilion", x: 11.8, y: 39.9 },
  { id: 8, name: "Peripheral Greens", x: 18.3, y: 24.1 },
  { id: 9, name: "Central Plaza", x: 25.9, y: 52.6 },
  { id: 10, name: "Swimming Pool", x: 45.1, y: 46.6 },
  { id: 11, name: "Kids' Pool", x: 42.5, y: 43.2 },
  { id: 12, name: "Pool Deck", x: 45.4, y: 43 },
  { id: 13, name: "Senior Citizens' Seating Zone", x: 37.6, y: 47.1 },
  { id: 14, name: "Outdoor Seating Area", x: 43.1, y: 36.3 },
  { id: 15, name: "Multipurpose Area", x: 46.1, y: 37 },
  { id: 16, name: "Lounge Area", x: 43.1, y: 39.5 },
  { id: 17, name: "Hobby Space", x: 50.4, y: 37.2 },
  { id: 18, name: "Changing Rooms", x: 50.6, y: 46.5 },
  { id: 19, name: "Gymnasium", x: 29.2, y: 69.5 },
  { id: 20, name: "Yoga Room", x: 32.1, y: 72.8 },
  { id: 21, name: "Indoor Games Area", x: 28.6, y: 76.5 },
  { id: 22, name: "Mini Theatre", x: 32.2, y: 80.2 },
  { id: 23, name: "Multipurpose Hall", x: 28.7, y: 84 },
];

function MasterPlanExperience({ fullscreen = false, onClose }: { fullscreen?: boolean; onClose?: () => void }) {
  const [activeAmenity, setActiveAmenity] = useState<number | null>(null);
  const [legendOpen, setLegendOpen] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const active = amenities.find((item) => item.id === activeAmenity);

  const selectFromLegend = (id: number) => {
    setActiveAmenity(id);
    setLegendOpen(false);
    if (!fullscreen) {
      window.setTimeout(() => mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  };

  return (
    <div className={`relative overflow-hidden ${fullscreen ? "flex h-screen items-center bg-[#2B2623]" : "bg-[#F7F5F0] lg:pb-[520px] xl:pb-[390px] 2xl:pb-[330px]"}`}>
      <div ref={mapRef} className="relative w-full">
        <Image src="/images/exterior/top-view.webp" alt="Sumeet Urban Nest aerial master plan" width={1920} height={1080} priority className="block h-auto w-full" sizes="100vw" />
        <div className="absolute left-3 top-3 bg-[#2B2623]/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:text-xs">Aerial master plan</div>

        {amenities.map((item) => {
          const isActive = activeAmenity === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-label={item.name}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              onMouseEnter={() => setActiveAmenity(item.id)}
              onMouseLeave={() => setActiveAmenity(null)}
              onFocus={() => setActiveAmenity(item.id)}
              onBlur={() => setActiveAmenity(null)}
              onClick={() => setActiveAmenity(isActive ? null : item.id)}
              className={`absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[8px] font-semibold text-white shadow-md transition duration-200 sm:h-7 sm:w-7 sm:text-[10px] lg:h-8 lg:w-8 lg:text-xs ${isActive ? "z-40 scale-125 border-white bg-coral ring-4 ring-coral/40" : "z-20 border-coral bg-[#2B2623] hover:scale-[1.15]"}`}
            >
              {String(item.id).padStart(2, "0")}
            </button>
          );
        })}

        {active && (
          <div style={{ left: `${active.x}%`, top: `${active.y}%` }} className="pointer-events-none absolute z-30 hidden -translate-x-1/2 translate-y-6 whitespace-nowrap border border-coral/60 bg-[#2B2623]/95 px-3 py-2 text-[11px] font-medium text-white shadow-lg sm:block">
            {active.name}
          </div>
        )}

        <aside className={`z-30 hidden overflow-y-auto border border-[#2B2623]/15 bg-[#F7F5F0]/[0.98] shadow-[0_18px_45px_rgba(43,38,35,0.16)] lg:block masterplan-scrollbar ${fullscreen ? "absolute bottom-[4%] right-[2%] top-[4%] w-[25%] max-w-[430px] rounded-[4px] backdrop-blur-sm" : "absolute left-0 top-full max-h-[70vh] w-full"}`}>
          <div className="sticky top-0 z-10 border-b border-[#2B2623]/15 bg-[#F7F5F0]/95 px-5 py-4 xl:px-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-coral">Legend</p>
          </div>
          <div className={fullscreen ? "" : "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"}>
            {amenities.map((item) => {
              const isActive = activeAmenity === item.id;
              return (
                <button key={item.id} type="button" onMouseEnter={() => setActiveAmenity(item.id)} onMouseLeave={() => setActiveAmenity(null)} onFocus={() => setActiveAmenity(item.id)} onBlur={() => setActiveAmenity(null)} onClick={() => selectFromLegend(item.id)} className={`flex w-full items-center gap-4 border-b border-r border-[#2B2623]/10 px-5 py-2.5 text-left transition xl:px-6 xl:py-3 ${isActive ? "bg-coral/15" : "hover:bg-white/80"}`}>
                  <span className="w-6 shrink-0 text-xs font-semibold text-coral">{String(item.id).padStart(2, "0")}</span>
                  <span className={`text-xs leading-snug xl:text-[13px] ${isActive ? "font-semibold text-[#2B2623]" : "font-medium text-[#2B2623]/80"}`}>{item.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="absolute bottom-3 right-3 z-30 flex gap-2 lg:hidden">
          <button type="button" onClick={() => setLegendOpen(true)} className="border border-coral bg-[#F7F5F0]/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2B2623] shadow-lg">View legend</button>
        </div>

        {active && <div className="absolute bottom-3 left-3 z-30 max-w-[65%] border border-coral bg-[#F7F5F0]/95 px-4 py-3 shadow-lg sm:hidden"><p className="text-[10px] font-bold text-coral">{String(active.id).padStart(2, "0")}</p><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2B2623]">{active.name}</p></div>}
      </div>

      {legendOpen && (
        <div className="fixed inset-0 z-[110] flex items-end bg-[#2B2623]/55 lg:hidden" onClick={() => setLegendOpen(false)}>
          <div className="max-h-[72vh] w-full overflow-y-auto rounded-t-[4px] bg-[#F7F5F0] shadow-2xl masterplan-scrollbar" onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2B2623]/15 bg-[#F7F5F0] px-5 py-4"><p className="text-xs font-bold uppercase tracking-[0.24em] text-coral">Legend</p><button type="button" onClick={() => setLegendOpen(false)} aria-label="Close legend" className="text-2xl text-[#2B2623]">×</button></div>
            {amenities.map((item) => <button key={item.id} type="button" onClick={() => selectFromLegend(item.id)} className={`flex w-full items-center gap-4 border-b border-[#2B2623]/10 px-5 py-3.5 text-left ${activeAmenity === item.id ? "bg-coral/15" : ""}`}><span className="w-7 text-xs font-bold text-coral">{String(item.id).padStart(2, "0")}</span><span className="text-sm font-medium text-[#2B2623]">{item.name}</span></button>)}
          </div>
        </div>
      )}

      {fullscreen && <button type="button" onClick={onClose} aria-label="Close fullscreen master plan" className="fixed right-5 top-5 z-[120] flex h-11 w-11 items-center justify-center border border-white/40 bg-[#2B2623]/80 text-2xl text-white shadow-lg">×</button>}
    </div>
  );
}

export default function PlanSection() {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (!fullscreen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setFullscreen(false);
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [fullscreen]);

  return (
    <section id="plan" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto mb-10 w-full max-w-[1760px] px-5 sm:px-8 md:mb-14 lg:px-12 xl:px-14 2xl:px-16">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">MASTER PLAN</h2>
          <button type="button" onClick={() => setFullscreen(true)} className="border border-[#2B2623]/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2B2623] transition hover:border-coral hover:text-coral sm:text-xs">Fullscreen</button>
        </div>
      </div>
      <MasterPlanExperience />
      {fullscreen && <div className="fixed inset-0 z-[100] bg-[#2B2623]"><MasterPlanExperience fullscreen onClose={() => setFullscreen(false)} /></div>}
    </section>
  );
}
