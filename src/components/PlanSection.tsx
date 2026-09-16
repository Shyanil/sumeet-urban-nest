import Image from "next/image";

const legendItems = [
  { num: 1, name: "Entry/Exit" },
  { num: 2, name: "Driveway" },
  { num: 3, name: "Temple" },
  { num: 4, name: "Drop Off" },
  { num: 5, name: "Kids' Play Area" },
  { num: 6, name: "Pergola Seating Area" },
  { num: 7, name: "Pavilion" },
  { num: 8, name: "Peripheral Greens" },
  { num: 9, name: "Central Plaza" },
  { num: 10, name: "Swimming Pool" },
  { num: 11, name: "Kids' Pool" },
  { num: 12, name: "Pool Deck" },
  { num: 13, name: "Senior Citizens' Seating Zone" },
  { num: 14, name: "Outdoor Seating Area" },
  { num: 15, name: "Multipurpose Area" },
  { num: 16, name: "Lounge Area" },
  { num: 17, name: "Hobby Space" },
  { num: 18, name: "Changing Rooms" },
  { num: 19, name: "Gymnasium" },
  { num: 20, name: "Yoga Room" },
  { num: 21, name: "Indoor Games Area" },
  { num: 22, name: "Mini Theatre" },
  { num: 23, name: "Multipurpose Hall" },
];

const planMarkers = [
  { num: 8, left: "18.3%", top: "24.1%" },
  { num: 8, left: "43.1%", top: "27.6%" },
  { num: 2, left: "29.9%", top: "30.8%" },
  { num: 14, left: "43.1%", top: "36.3%" },
  { num: 15, left: "46.1%", top: "37%" },
  { num: 17, left: "50.4%", top: "37.2%" },
  { num: 16, left: "43.1%", top: "39.5%" },
  { num: 7, left: "11.8%", top: "39.9%" },
  { num: 11, left: "42.5%", top: "43.2%" },
  { num: 12, left: "45.4%", top: "43%" },
  { num: 13, left: "37.6%", top: "47.1%" },
  { num: 10, left: "45.1%", top: "46.6%" },
  { num: 18, left: "50.6%", top: "46.5%" },
  { num: 3, left: "67.4%", top: "46.5%" },
  { num: 1, left: "73.8%", top: "50.8%" },
  { num: 9, left: "25.9%", top: "52.6%" },
  { num: 2, left: "36.9%", top: "53.2%" },
  { num: 4, left: "52.9%", top: "53.2%" },
  { num: 2, left: "65.4%", top: "53.2%" },
  { num: 6, left: "13%", top: "58.4%" },
  { num: 5, left: "13.8%", top: "64.2%" },
  { num: 4, left: "31.1%", top: "68.3%" },
  { num: 8, left: "23.2%", top: "84.7%" },
];

const blockLabels = [
  { name: "BLOCK B", left: "19.2%", top: "46.8%" },
  { name: "BLOCK A", left: "56.4%", top: "46.8%" },
  { name: "BLOCK C", left: "25.3%", top: "67.3%" },
];

export default function PlanSection() {
  return (
    <section id="plan" className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1680px] px-6 md:px-[9vw]">
        {/* Section Title */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-14 bg-gray-500" />
          <h2 className="text-2xl font-semibold tracking-[0.04em] text-gray-900 md:text-[30px]">
            PLAN
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-20 flex justify-center md:mb-24">
          <p className="rounded-md bg-[#DF6E5A] px-7 py-4 text-center text-base font-normal text-white shadow-sm md:px-9 md:text-xl">
            A <span className="font-semibold">Masterplan that Makes room for more life.</span>
          </p>
        </div>
      </div>

      {/* Masterplan Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src="/images/exterior/top-view.webp"
          alt="Sumeet Urban Nest masterplan top view"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {planMarkers.map((marker, index) => (
          <span
            key={`${marker.num}-${index}`}
            style={{ left: marker.left, top: marker.top }}
            className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F0644E] text-[10px] font-semibold leading-none text-white shadow-sm md:h-7 md:w-7 md:text-sm"
          >
            {marker.num}
          </span>
        ))}

        {blockLabels.map((label) => (
          <span
            key={label.name}
            style={{ left: label.left, top: label.top }}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-bold text-[#171717] drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)] md:text-lg"
          >
            {label.name}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div className="mx-auto mt-10 max-w-[1680px] px-6 md:px-[9vw]">
        <h3 className="mb-6 text-2xl font-medium text-[#DF6E5A] md:text-[30px]">
          Legend
        </h3>
        <div className="flex flex-wrap gap-2">
          {legendItems.map((item) => (
            <span
              key={item.num}
              className="whitespace-nowrap rounded border border-[#DF6E5A]/35 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:text-[15px]"
            >
              {item.num}. {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
