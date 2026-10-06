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
  const group1 = amenities.slice(0, 12);
  const group2 = amenities.slice(12);

  const selectFromLegend = (id: number) => {
    setActiveAmenity(id);
    setLegendOpen(false);
    if (!fullscreen) {
      window.setTimeout(() => mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  };

  const renderLegendItem = (item: { id: number; name: string }) => {
    const isActive = activeAmenity === item.id;
    return (
      <button
        key={item.id}
        type="button"
        onMouseEnter={() => setActiveAmenity(item.id)}
        onMouseLeave={() => setActiveAmenity(null)}
        onFocus={() => setActiveAmenity(item.id)}
        onBlur={() => setActiveAmenity(null)}
        onClick={() => selectFromLegend(item.id)}
        className={`flex h-[38px] xl:h-[42px] w-full items-center gap-2 border-b border-[#2B2623]/8 px-2.5 xl:px-3 text-left transition ${
          isActive ? "bg-coral/20" : "hover:bg-white/80"
        }`}
      >
        <span
          className={`flex h-4 w-4 xl:h-[18px] xl:w-[18px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition ${
            isActive ? "bg-coral text-white" : "bg-coral/10 text-coral"
          }`}
        >
          {String(item.id).padStart(2, "0")}
        </span>
        <span
          className={`truncate text-[10px] xl:text-[11px] leading-tight ${
            isActive ? "font-bold text-[#2B2623]" : "font-medium text-[#2B2623]/80"
          }`}
          title={item.name}
        >
          {item.name}
        </span>
      </button>
    );
  };

  return (
    <div className={`relative overflow-hidden ${fullscreen ? "flex h-screen items-center bg-[#2B2623]" : "bg-[#F7F5F0]"}`}>
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

        {/* Twin Square Legend Boxes (01–12 & 13–23) */}
        <aside className="absolute bottom-[2.5%] right-[8%] xl:bottom-[3%] xl:right-[10%] 2xl:right-[12%] z-30 hidden lg:flex items-end gap-2.5 xl:gap-3.5">
          {/* Box 1: Podium & Outdoors (01–12) */}
          <div className="w-[275px] xl:w-[305px] 2xl:w-[320px] overflow-hidden rounded-xl border border-white/60 bg-[#F7F5F0]/95 shadow-[0_16px_40px_rgba(43,38,35,0.22)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-[#2B2623]/12 px-3 py-2 xl:px-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                <p className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-[#2B2623]">
                  Legend · 01–12
                </p>
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-coral">
                Podium & Greens
              </span>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[#2B2623]/10">
              <div className="flex flex-col">
                {group1.slice(0, 6).map(renderLegendItem)}
              </div>
              <div className="flex flex-col">
                {group1.slice(6, 12).map(renderLegendItem)}
              </div>
            </div>
          </div>

          {/* Box 2: Club & Wellness (13–23) */}
          <div className="w-[275px] xl:w-[305px] 2xl:w-[320px] overflow-hidden rounded-xl border border-white/60 bg-[#F7F5F0]/95 shadow-[0_16px_40px_rgba(43,38,35,0.22)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-[#2B2623]/12 px-3 py-2 xl:px-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                <p className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-[#2B2623]">
                  Legend · 13–23
                </p>
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-coral">
                Club & Wellness
              </span>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[#2B2623]/10">
              <div className="flex flex-col">
                {group2.slice(0, 6).map(renderLegendItem)}
              </div>
              <div className="flex flex-col">
                {group2.slice(6).map(renderLegendItem)}
                {/* 12th Slot in 6x2 grid: Clear selection or Status badge */}
                {active ? (
                  <button
                    type="button"
                    onClick={() => setActiveAmenity(null)}
                    className="flex h-[38px] xl:h-[42px] w-full items-center justify-center gap-1.5 bg-coral/15 px-2 text-[10px] font-bold uppercase tracking-wider text-coral transition hover:bg-coral hover:text-white"
                  >
                    <span>Clear #{String(active.id).padStart(2, "0")}</span>
                    <span className="text-xs">✕</span>
                  </button>
                ) : (
                  <div className="flex h-[38px] xl:h-[42px] w-full items-center justify-center border-b border-transparent px-2 text-[9px] font-semibold uppercase tracking-wider text-[#2B2623]/40">
                    All 23 Highlights
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        <div className="absolute bottom-3 right-3 z-30 flex gap-2 lg:hidden">
          <button type="button" onClick={() => setLegendOpen(true)} className="border border-coral bg-[#F7F5F0]/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2B2623] shadow-lg">View legend</button>
        </div>

        {active && <div className="absolute bottom-3 left-3 z-30 max-w-[65%] border border-coral bg-[#F7F5F0]/95 px-4 py-3 shadow-lg sm:hidden"><p className="text-[10px] font-bold text-coral">{String(active.id).padStart(2, "0")}</p><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2B2623]">{active.name}</p></div>}
      </div>

      {legendOpen && (
        <div className="fixed inset-0 z-[110] flex items-end bg-[#2B2623]/55 lg:hidden" onClick={() => setLegendOpen(false)}>
          <div className="max-h-[75vh] w-full overflow-y-auto rounded-t-xl bg-[#F7F5F0] pb-6 shadow-2xl masterplan-scrollbar" onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2B2623]/15 bg-[#F7F5F0]/95 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2B2623]">Master Plan Legend</p>
              </div>
              <button type="button" onClick={() => setLegendOpen(false)} aria-label="Close legend" className="text-2xl leading-none text-[#2B2623]">×</button>
            </div>

            {/* Zone 1: 01-12 */}
            <div className="px-5 pt-4 pb-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">01–12 · Podium & Greens</p>
            </div>
            <div className="grid grid-cols-1 divide-y divide-[#2B2623]/10 border-t border-b border-[#2B2623]/10 sm:grid-cols-2">
              {group1.map((item) => (
                <button key={item.id} type="button" onClick={() => selectFromLegend(item.id)} className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${activeAmenity === item.id ? "bg-coral/15" : "hover:bg-white/80"}`}>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-[10px] font-bold text-coral">{String(item.id).padStart(2, "0")}</span>
                  <span className="text-xs font-medium text-[#2B2623]">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Zone 2: 13-23 */}
            <div className="px-5 pt-5 pb-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">13–23 · Club & Wellness</p>
            </div>
            <div className="grid grid-cols-1 divide-y divide-[#2B2623]/10 border-t border-b border-[#2B2623]/10 sm:grid-cols-2">
              {group2.map((item) => (
                <button key={item.id} type="button" onClick={() => selectFromLegend(item.id)} className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${activeAmenity === item.id ? "bg-coral/15" : "hover:bg-white/80"}`}>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-[10px] font-bold text-coral">{String(item.id).padStart(2, "0")}</span>
                  <span className="text-xs font-medium text-[#2B2623]">{item.name}</span>
                </button>
              ))}
            </div>
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
    <section id="plan" className="scroll-mt-20 bg-white pt-14 pb-8 md:py-24">
      <div className="mx-auto mb-10 w-full max-w-[1720px] px-6 sm:px-10 md:px-14 md:mb-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Top Editorial Eyebrow */}
            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-px w-6 bg-[#2c2b29]/25 sm:w-12" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2c2b29] sm:text-xs sm:tracking-[0.32em]">
                Architectural Layout · 07
              </span>
            </div>

            <h2 className="text-2xl min-[380px]:text-3xl font-light tracking-[0.16em] min-[380px]:tracking-[0.22em] text-coral sm:text-4xl sm:tracking-[0.28em] md:text-5xl uppercase">
              M A S T E R &nbsp; P L A N
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="self-start rounded-full border border-[#2B2623]/25 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2B2623] transition hover:border-coral hover:bg-coral hover:text-white sm:self-auto sm:text-xs"
          >
            Expand Fullscreen
          </button>
        </div>
      </div>
      <MasterPlanExperience />
      {fullscreen && <div className="fixed inset-0 z-[100] bg-[#2B2623]"><MasterPlanExperience fullscreen onClose={() => setFullscreen(false)} /></div>}
    </section>
  );
}
