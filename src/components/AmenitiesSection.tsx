import Image from "next/image";

const podiumAmenities = [
  {
    name: "Landscaped Garden",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "Children's Play Area",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Walking / Jogging Track",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Temple",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    name: "Open Recreational Zones",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const clubAmenities = [
  {
    name: "Gymnasium",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h4v12H4V6zm12 0h4v12h-4V6zM8 10h8v4H8v-4z" />
      </svg>
    ),
  },
  {
    name: "Indoor Games",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    name: "Community Hall",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Kids' Play Zone",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Swimming Pool",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-1 6-3 1.655 2 3.517 3 6 3s4.345-1 6-3M3 19c2.483 0 4.345-1 6-3 1.655 2 3.517 3 6 3s4.345-1 6-3M12 3v6m-3-3h6" />
      </svg>
    ),
  },
];

const rooftopAmenities = [
  {
    name: "Jogging / Walking Track",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Seating & Relaxation Areas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "Open Sky Recreation Zones",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const orderedPodiumAmenities = [
  podiumAmenities[2],
  podiumAmenities[0],
  podiumAmenities[1],
  podiumAmenities[3],
  podiumAmenities[4],
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative isolate overflow-hidden bg-[#DF6E5A] py-16 text-white md:py-24">
      <Image
        src="/images/exterior/amenities-rings.webp"
        alt=""
        width={2034}
        height={773}
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-2 -z-10 hidden h-auto w-[520px] opacity-45 lg:block"
      />

      <div className="mx-auto max-w-[1680px] px-6 md:px-[9vw]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-14 bg-white/80" />
              <h2 className="text-xl font-semibold tracking-[0.06em] md:text-[26px]">
                AMENITIES
              </h2>
            </div>
            <h3 className="text-2xl font-normal leading-[1.35] md:text-[30px]">
              Amenities planned for leisure.
              <br />
              Opened to the outdoors.
            </h3>
          </div>

          <p className="max-w-[650px] self-end text-base leading-[1.65] text-white/95 md:text-lg">
            From the courtyard to the podium greens up to rooftop skies,
            <br className="hidden xl:block" /> every space at Sumeet Urban Nest is designed to extend your
            <br className="hidden xl:block" /> day beyond the indoors.
          </p>
        </div>

        <div className="space-y-7">
          <div className="grid min-h-[200px] items-center gap-8 rounded-[28px] bg-[#C8503E] px-7 py-8 md:px-10 lg:grid-cols-[300px_1fr]">
            <h4 className="text-2xl font-medium tracking-wide md:text-[30px]">
              Podium + Ground
            </h4>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {orderedPodiumAmenities.map((amenity) => (
                <div key={amenity.name} className="flex flex-col items-center gap-3 text-center [&_svg]:h-12 [&_svg]:w-12">
                  <div className="text-white">{amenity.icon}</div>
                  <p className="max-w-[150px] text-sm font-medium leading-tight text-white md:text-[15px]">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[200px] items-center gap-8 rounded-[28px] bg-[#DD6453] px-7 py-8 md:px-10 lg:grid-cols-[1fr_250px]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {rooftopAmenities.map((amenity) => (
                <div key={amenity.name} className="flex flex-col items-center gap-3 text-center [&_svg]:h-12 [&_svg]:w-12">
                  <div className="text-white">{amenity.icon}</div>
                  <p className="max-w-[170px] text-sm font-medium leading-tight text-white md:text-[15px]">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
            <h4 className="text-center text-2xl font-medium tracking-wide md:text-[30px] lg:order-2">
              Rooftop
            </h4>
          </div>

          <div className="grid min-h-[200px] items-center gap-8 rounded-[28px] bg-[#C8503E] px-7 py-8 md:px-10 lg:grid-cols-[180px_1fr]">
            <h4 className="text-2xl font-medium tracking-wide md:text-[30px]">
              Club
            </h4>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {clubAmenities.map((amenity) => (
                <div key={amenity.name} className="flex flex-col items-center gap-3 text-center [&_svg]:h-12 [&_svg]:w-12">
                  <div className="text-white">{amenity.icon}</div>
                  <p className="max-w-[150px] text-sm font-medium leading-tight text-white md:text-[15px]">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
