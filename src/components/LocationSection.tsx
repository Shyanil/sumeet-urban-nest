const googleMapUrl =
  "https://www.google.com/maps?q=Sumeet%20Urban%20Nest%2C%20Khamardih%2C%20Shri%20Ram%20Nagar%2C%20Anupam%20Nagar%2C%20Raipur%2C%20Chhattisgarh%20492004&z=17&output=embed";

const distances = [
  { place: "Expressway", distance: "1.8 km" },
  { place: "SMC Hospital", distance: "2.1 km" },
  { place: "Civil Lines", distance: "3.7 km" },
  { place: "Ambuja Mall", distance: "3.8 km" },
  { place: "Pandri", distance: "3.9 km" },
  { place: "Raipur Railway Station", distance: "6.8 km" },
  { place: "Swami Vivekananda Airport", distance: "13.7 km" },
];

export default function LocationSection() {
  return (
    <section id="location" className="scroll-mt-20 bg-[#fff8f0] py-20 sm:py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-[1760px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(71,49,38,0.1)] lg:grid-cols-2 lg:rounded-[36px]">
        <div className="relative min-h-[420px] w-full overflow-hidden bg-[#e9e8e4] sm:min-h-[560px] lg:min-h-[820px]">
          <iframe
            src={googleMapUrl}
            title="Sumeet Urban Nest location on Google Maps"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
          <h2 className="mb-9 text-xl font-bold tracking-[0.34em] text-coral md:text-[26px] lg:text-[30px]">
            L O C A T I O N
          </h2>
          <div>
            <p className="max-w-2xl text-sm leading-7 text-[#747474] md:text-base md:leading-8">
              Sumeet Urban Nest is set in a location that keeps the city close
              without letting it close in on you. From healthcare and shopping
              to business hubs and daily commute points, everything stays
              comfortably accessible here.
            </p>
          </div>

          <div className="mt-10 border-t border-[#eadfd8] pt-8">
            <h3 className="mb-4 text-lg font-semibold text-[#2d2d2d] md:text-xl">
              Distance
            </h3>

            <div className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1 xl:grid-cols-2">
              {distances.map((item) => (
                <div
                  key={item.place}
                  className="flex items-center justify-between gap-5 border-b border-[#eee6e0] py-3.5 text-sm text-[#4f4f4f] md:text-[15px]"
                >
                  <span>{item.place}</span>
                  <span className="shrink-0 rounded-full bg-[#fff1e7] px-3 py-1 font-semibold text-coral">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
