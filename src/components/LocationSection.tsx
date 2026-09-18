import Image from "next/image";

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
    <section id="location" className="bg-white">
      <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative aspect-[1231/1278] w-full overflow-hidden bg-[#e9e8e4]">
          <iframe
            src={googleMapUrl}
            title="Sumeet Urban Nest location on Google Maps"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="relative aspect-[1231/1278] w-full overflow-hidden bg-[#ec6f4d]">
          <Image
            src="/images/exterior/location-map.webp"
            alt="Location map showing Sumeet Urban Nest and nearby Raipur landmarks"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="bg-[#FFF8F0] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1680px] gap-14 px-6 md:px-[9vw] lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-[26px] font-medium leading-[1.55] tracking-[-0.02em] text-[#2d2d2d] md:text-[32px]">
              Location connected
              <br />
              <span className="inline-block pl-[0.75em] sm:pl-[2.7em]">
                - to the city Raipur.
              </span>
              <span className="block">Opened out to life.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#747474] md:text-base md:leading-8">
              Sumeet Urban Nest is set in a location that keeps the city close
              without letting it close in on you. From healthcare and shopping
              to business hubs and daily commute points, everything stays
              comfortably accessible here.
            </p>
          </div>

          <div>
            <h3 className="mb-7 text-[24px] font-medium text-[#2d2d2d] md:text-[28px]">
              Distance
            </h3>

            <div>
              {distances.map((item, index) => (
                <div
                  key={item.place}
                  className={`flex items-center justify-between gap-6 py-4 text-sm text-[#4f4f4f] md:text-base ${
                    index < distances.length - 1
                      ? "border-b border-[#dfd8cf]"
                      : ""
                  }`}
                >
                  <span>{item.place}</span>
                  <span className="shrink-0 font-medium">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
