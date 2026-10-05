import Image from "next/image";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <Image
        src="/images/exterior/amenities-rings.webp"
        alt=""
        width={2034}
        height={773}
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 z-0 h-auto w-[300px] max-w-none select-none opacity-20 sm:-right-24 sm:w-[400px] md:-right-20 md:w-[500px] lg:-right-12 lg:w-[620px] lg:opacity-30 xl:w-[700px]"
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="mb-6 text-center text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">
          O V E R V I E W
        </h2>
        <p className="mx-auto max-w-[760px] text-lg font-light leading-relaxed text-[#2c2b29] sm:text-xl md:text-2xl md:leading-relaxed">
          Introducing a new concept of modern living at Khamardih, Shankar Nagar — thoughtfully designed homes that bring together light, space, comfort and a more connected everyday lifestyle.
        </p>
        <div className="mt-12 grid grid-cols-3 border-y border-[#2c2b29]/15 sm:mt-16">
          {[
            ["152", "Residences"],
            ["1.76", "Acres"],
            ["3", "Towers"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-2 py-7 sm:px-6 sm:py-9 ${
                index > 0 ? "border-l border-[#2c2b29]/15" : ""
              }`}
            >
              <p className="text-3xl font-light tracking-[-0.04em] text-[#2c2b29] sm:text-5xl md:text-6xl">
                {value}
              </p>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-coral sm:mt-3 sm:text-xs sm:tracking-[0.24em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
