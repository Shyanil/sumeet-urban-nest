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
        className="pointer-events-none absolute -right-36 top-1/2 z-0 h-auto w-[460px] max-w-none -translate-y-1/2 select-none opacity-25 sm:-right-24 sm:w-[680px] sm:opacity-35 md:-right-20 md:w-[900px] lg:right-0 lg:w-[1150px] lg:opacity-45 xl:w-[1280px]"
      />

      <div className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
        <h2 className="mb-6 text-center text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">
          O V E R V I E W
        </h2>
        <p className="text-lg font-light leading-relaxed text-[#2c2b29] sm:text-xl md:text-2xl md:leading-relaxed">
          Introducing a new concept of modern living at Khamardih, Shankar Nagar — thoughtfully designed homes that bring together light, space, comfort and a more connected everyday lifestyle.
        </p>
      </div>
    </section>
  );
}
