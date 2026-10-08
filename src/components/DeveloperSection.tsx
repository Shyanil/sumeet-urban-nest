"use client";

import Image from "next/image";
import { useState } from "react";

const landmarkProjects = [
  {
    id: "01",
    name: "Sumeet Trade Centre",
    category: "Commercial Icon",
    location: "Pachpedi Naka, Raipur",
    tagline: "Raipur’s Premier Business Hub",
    description:
      "Raipur’s first ultra-premium corporate business centre, housing premier financial institutions, corporate headquarters, and high-street enterprises.",
    badge: "Corporate Landmark",
  },
  {
    id: "02",
    name: "Sumeet City of Dreams",
    category: "Integrated Township",
    location: "Raipur, Chhattisgarh",
    tagline: "Expansive Master-Planned Community",
    description:
      "A sprawling residential township engineered with open landscape greens, family leisure clubs, and comprehensive lifestyle amenities.",
    badge: "Master Community",
  },
  {
    id: "03",
    name: "Sumeet Landscape",
    category: "Botanical Living",
    location: "Raipur, Chhattisgarh",
    tagline: "Nature-First Luxury Enclave",
    description:
      "A serene residential enclave seamlessly weaving verdant botanical gardens with contemporary architectural craftsmanship.",
    badge: "Botanical Enclave",
  },
  {
    id: "04",
    name: "Sumeet Avenues",
    category: "Urban Homes",
    location: "Raipur, Chhattisgarh",
    tagline: "Seamless Connectivity & Living",
    description:
      "Contemporary residential residences designed for effortless city transit, abundant natural daylight, and enduring comfort.",
    badge: "Modern Residences",
  },
];

const stats = [
  { value: "25+", label: "Years of Trust", detail: "Shaping Chhattisgarh's Skyline" },
  { value: "4+", label: "Landmark Addresses", detail: "Commercial & Residential Hubs" },
  { value: "1.76", label: "Acres Dedicated", detail: "Raipur’s 1st BOHK Enclave" },
];

export default function DeveloperSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section
      id="developer"
      className="scroll-mt-20 overflow-hidden bg-[#FAF8F5] py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        {/* Section Header */}
        <div className="mx-auto mb-14 flex w-full max-w-[1100px] flex-col items-center justify-center text-center sm:mb-18">
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#2c2b29] sm:text-xs">
              Legacy &amp; Trust · 10
            </span>
            <span className="h-px w-8 bg-[#2c2b29]/25 sm:w-12" />
          </div>

          <h2 className="w-full text-center whitespace-nowrap text-[12px] min-[380px]:text-[14px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.12em] min-[380px]:tracking-[0.16em] sm:tracking-[0.22em] text-coral uppercase pl-[0.12em]">
            A B O U T &nbsp; D E V E L O P E R
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-light leading-relaxed text-[#736c66] sm:text-sm sm:leading-7">
            A beacon of changing skylines and elevated lifestyles. Rooted in Raipur • Building enduring architectural landmarks for generations.
          </p>
        </div>

        {/* Hero Narrative Canvas */}
        <div className="mb-12 overflow-hidden rounded-[28px] border border-[#2B2623]/8 bg-white shadow-[0_20px_60px_rgba(43,38,35,0.06)] sm:rounded-[36px] lg:mb-16">
          <div className="grid lg:grid-cols-12">
            {/* Left: Brand Identity Box */}
            <div className="flex flex-col justify-between border-b border-[#2B2623]/8 bg-[#FBF9F6] p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-coral/25 bg-coral/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                  Sumeet Infracon Pvt. Ltd.
                </div>

                <div className="mt-8 flex items-center">
                  <Image
                    src="/images/interior/sumeet-infracon-logo.webp"
                    alt="Sumeet Infracon"
                    width={1268}
                    height={1241}
                    className="h-auto w-36 sm:w-44 object-contain"
                    priority
                  />
                </div>

                <blockquote className="mt-8 text-xl font-light leading-snug tracking-tight text-[#2B2623] sm:text-2xl">
                  &ldquo;A beacon of changing skylines and elevated lifestyles.&rdquo;
                </blockquote>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                  Rooted in Raipur • Building for the future
                </p>
              </div>

              <div className="mt-10 border-t border-[#2B2623]/10 pt-5 text-xs text-[#736c66]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral">
                  Corporate Headquarters
                </span>
                <p className="mt-1 font-medium text-[#2B2623]">
                  Sumeet Business Park, Pachpedi Naka, Raipur, Chhattisgarh
                </p>
              </div>
            </div>

            {/* Right: Vision Story & Metrics */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7 lg:p-14">
              <div className="space-y-4 text-xs leading-relaxed text-[#615953] sm:text-sm sm:leading-7">
                <p className="text-base font-normal text-[#2B2623] sm:text-lg">
                  Sumeet Infracon Pvt. Ltd. is a Raipur-based real estate development company with a strong foothold in Chhattisgarh&apos;s growing property landscape.
                </p>
                <p>
                  Known for delivering premium residential and commercial developments, the company has built a reputation for quality construction, modern amenities, and strategically chosen locations that offer residents and businesses seamless connectivity and lasting value.
                </p>
                <p>
                  With landmark projects like Sumeet City of Dreams, Sumeet Landscape, and the iconic Sumeet Trade Centre at Pachpedi Naka — Raipur&apos;s first ultra-premium corporate hub — Sumeet Infracon continues to redefine the standards of living and working spaces across the region.
                </p>
              </div>

              {/* 4 Architectural Metric Counters */}
              <div className="mt-10 grid grid-cols-3 gap-2 border-t border-[#2B2623]/8 pt-8 sm:gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#FAF8F5] p-2.5 text-left transition hover:bg-white hover:shadow-sm sm:p-4">
                    <p className="text-xl font-light tracking-tight text-coral sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.03em] text-[#2B2623] sm:text-[10px] sm:tracking-[0.08em]">
                      {s.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#857d76]">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Milestone Deliveries Showcase */}
        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                Track Record
              </span>
              <h3 className="mt-1 text-2xl font-light tracking-tight text-[#2B2623] sm:text-3xl">
                Flagship Regional Landmarks
              </h3>
            </div>
            <p className="text-xs text-[#857d76]">
              Click any milestone to explore its impact across Raipur
            </p>
          </div>

          {/* 4 Interactive Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landmarkProjects.map((project, index) => {
              const isSelected = activeProject === index;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border p-6 text-left transition-all duration-300 sm:p-7 ${
                    isSelected
                      ? "border-coral bg-white shadow-[0_16px_40px_rgba(232,115,74,0.14)] -translate-y-1.5 ring-2 ring-coral/20"
                      : "border-[#2B2623]/10 bg-white/80 hover:-translate-y-1 hover:border-coral/50 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top Number & Category Pill */}
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold tracking-widest ${isSelected ? "text-coral" : "text-[#A89F95] group-hover:text-coral"}`}>
                        {project.id}
                      </span>
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${isSelected ? "bg-coral text-white" : "bg-[#2B2623]/5 text-[#6B635B]"}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Project Name & Tagline */}
                    <h4 className="mt-5 text-lg font-semibold tracking-tight text-[#2B2623] group-hover:text-coral transition-colors">
                      {project.name}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-coral/90">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-[#6E665E]">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Location */}
                  <div className="mt-6 flex items-center gap-1.5 border-t border-[#2B2623]/8 pt-4 text-[11px] font-medium text-[#8A8177]">
                    <span className="text-coral">📍</span>
                    <span>{project.location}</span>
                  </div>

                  {/* Active highlight line */}
                  {isSelected && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-coral" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
