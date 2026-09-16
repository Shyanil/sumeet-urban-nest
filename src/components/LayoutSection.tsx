const blocks = [
  {
    name: "BLOCK A",
    units: "6 Units / Floor",
    floors: "Typical 1st to 8th Floor",
  },
  {
    name: "BLOCK B",
    units: "6 Units / Floor",
    floors: "Typical 1st to 8th Floor",
  },
  {
    name: "BLOCK C",
    units: "4 Units / Floor",
    floors: "Typical 3rd to 7th Floor",
  },
];

export default function LayoutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1680px] px-6 md:px-[9vw]">
        <div className="mb-11 text-center md:mb-14">
          <h2 className="text-[25px] font-medium leading-[1.5] tracking-[-0.02em] text-[#2d2d2d] md:text-[30px]">
            Layout designed with purpose.
            <span className="block text-[#E8734A]">Opened out to space.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {blocks.map((block) => (
            <article
              key={block.name}
              className="rounded-[5px] border border-[#222222] bg-[#FFF8F0] px-7 py-9 text-center md:px-8 md:py-10"
            >
              <p className="mb-4 text-xs font-semibold tracking-[0.5em] text-[#E8734A]">
                {block.name}
              </p>
              <h3 className="mb-3 text-[24px] font-medium leading-tight text-[#292929] md:text-[28px]">
                {block.units}
              </h3>
              <p className="text-sm text-[#8a8a8a] md:text-base">
                {block.floors}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
