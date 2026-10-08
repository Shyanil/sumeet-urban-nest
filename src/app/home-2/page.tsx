import Image from "next/image";
import Link from "next/link";
import Home2LeadForm from "@/components/Home2LeadForm";

export const metadata = {
  title: "Sumeet Urban Nest | Coming Soon in Raipur",
  description:
    "A new residential address is opening out at Khamardih, Shankar Nagar, Raipur. Register to reveal the price.",
};

const locationDistances = [
  { place: "Expressway", distance: "1.8", unit: "km", category: "City access" },
  { place: "SMC Hospital", distance: "2.1", unit: "km", category: "Healthcare" },
  { place: "Civil Lines", distance: "3.7", unit: "km", category: "City centre" },
  { place: "Ambuja Mall", distance: "3.8", unit: "km", category: "Shopping" },
  { place: "Pandri", distance: "3.9", unit: "km", category: "Retail district" },
  { place: "Raipur Railway Station", distance: "6.8", unit: "km", category: "Rail" },
  { place: "Swami Vivekananda Airport", distance: "13.7", unit: "km", category: "Air travel" },
];

const heroFieldClassName =
  "h-12 w-full rounded-lg border border-[#e8e2da] bg-[#faf9f6] px-4 text-sm text-[#302c2a] outline-none transition placeholder:text-[#99938a] focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10";

export default function Home2() {
  return (
    <main className="relative overflow-hidden bg-white text-[#292827]">
          <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
            <div className="mx-auto flex h-[80px] max-w-[1680px] items-center justify-between gap-3 px-4 sm:h-[96px] sm:gap-5 sm:px-8 md:px-12 xl:px-16">
              <Link
                href="/home-2"
                aria-label="Sumeet Infracon home"
                className="block w-[62px] shrink-0 transition-transform duration-200 hover:scale-[1.03] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-[88px]"
              >
                <Image
                  src="/images/sumeet-infracon-logo-transparent.png"
                  alt="Sumeet Infracon"
                  width={1268}
                  height={1241}
                  className="h-auto w-full object-contain"
                  priority
                />
              </Link>
              <nav aria-label="Main navigation" className="flex shrink-0 items-center gap-0 rounded-full border border-white/20 bg-[#13221f]/35 p-0.5 shadow-[0_8px_28px_rgba(0,0,0,0.16)] backdrop-blur-md sm:gap-1.5 sm:p-1.5">
                <a href="#location" className="whitespace-nowrap rounded-full px-2 py-2.5 text-[9px] font-medium tracking-wide text-white/90 transition hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:text-xs">Location</a>
                <a href="#developer" className="whitespace-nowrap rounded-full px-2 py-2.5 text-[9px] font-medium tracking-wide text-white/90 transition hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:text-xs">About Developer</a>
              </nav>
            </div>
          </header>

        {/* Section 1: Hero */}
        <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#25332f]">
          <Image
            src="/images/home2-hero-unsplash.jpg"
            alt="Contemporary residential homes framed by palm trees at sunset"
            fill
            priority
            className="-z-20 object-cover object-[62%_center] sm:object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-black/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-black/15" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

          <div className="mx-auto grid min-h-[100svh] w-full max-w-[1680px] items-center gap-8 px-4 pb-10 pt-24 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-28 md:px-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12 lg:pb-14 lg:pt-32 xl:grid-cols-[minmax(0,1.15fr)_minmax(390px,0.85fr)] xl:gap-16 xl:px-16">
            <div className="max-w-[760px] self-end pb-1 lg:self-auto lg:pb-0">
              <div>
                <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-white sm:text-xs">
                  <span className="h-px w-9 bg-[#f49a76] sm:w-12" />
                  OPENING OUT SOON
                </p>
                <h1 className="text-[clamp(2.2rem,5.2vw,4.9rem)] font-medium leading-[1.04] tracking-[-0.045em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.7)]">
                  A new way of living
                  <span className="block text-[#f47b53]">is about to open.</span>
                </h1>
                <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-base md:text-lg md:leading-8">
                  A thoughtfully planned residential address at Khamardih,
                  Shankar Nagar, Raipur.
                </p>
                <div className="mt-7 grid max-w-[590px] grid-cols-3 overflow-hidden rounded-xl border border-white/30 bg-black/25 shadow-[0_12px_36px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:mt-9">
                  <div className="px-3 py-4 sm:px-5 sm:py-5">
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">2 &amp; 3</p>
                    <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">BOHK Homes</p>
                  </div>
                  <div className="border-x border-white/20 px-3 py-4 sm:px-5 sm:py-5">
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">1.76</p>
                    <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">Acres</p>
                  </div>
                  <div className="px-3 py-4 sm:px-5 sm:py-5">
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Raipur</p>
                    <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">Prime location</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="home2-form"
              className="relative scroll-mt-6 overflow-hidden rounded-[26px] border border-white/80 bg-[#fffefa] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-7 lg:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-coral via-[#e9b27b] to-[#405f49]" />
              <p className="mt-1 text-[10px] font-bold tracking-[0.22em] text-coral">
                YOUR PRIVATE PREVIEW
              </p>
              <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.035em] text-[#302c2a] sm:text-[30px]">
                Reveal the price.
              </h2>
              <p className="mt-2 border-b border-[#eee8df] pb-5 text-sm leading-6 text-[#746b66]">
                Leave your details for pricing and availability.
              </p>

              <Home2LeadForm fieldClassName={heroFieldClassName} />
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="relative isolate overflow-hidden bg-[#f4f0e9] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1680px] px-4 sm:px-8 md:px-12 xl:px-16">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#897b6d] sm:text-xs">
                  <span className="h-px w-10 bg-coral" />
                  YOUR ADDRESS IN RAIPUR
                </p>
                <h2 className="mt-4 text-[30px] font-medium tracking-[-0.04em] text-[#292827] sm:text-[38px]">Well placed for everyday life.</h2>
              </div>
              <p className="max-w-sm text-xs leading-6 text-[#82796f] sm:text-sm">A connected neighbourhood, with the city’s key destinations within easy reach.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-7">
              <div className="relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#f1e4dc] bg-[#fffaf7] p-7 text-[#292827] shadow-[0_18px_50px_rgba(71,49,38,0.06)] sm:min-h-[440px] sm:p-10 lg:p-11">
                <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-coral/10"><div className="m-8 h-56 rounded-full border border-coral/10"><div className="m-8 h-40 rounded-full border border-coral/10" /></div></div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.23em] text-coral">KHAMARDIH · SHANKAR NAGAR</p>
                  <h3 className="mt-8 text-[34px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[42px]">The city close by.<span className="mt-1 block font-serif font-normal italic text-coral">Life at your pace.</span></h3>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-[#746f6c] sm:text-base sm:leading-8">
                    Sumeet Urban Nest is set in a location that keeps the city close
                    without letting it close in on you. Healthcare, shopping and
                    everyday connections stay comfortably accessible.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 border-t border-[#f1e4dc] pt-5 text-xs font-medium text-[#514b45] sm:text-sm">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 text-coral"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                  Raipur, Chhattisgarh
                </div>
              </div>

              <div className="rounded-[26px] border border-[#e5ddd3] bg-white p-5 shadow-[0_18px_50px_rgba(50,38,25,0.06)] sm:p-8 lg:p-9">
                <div className="mb-2 flex items-end justify-between gap-4 border-b border-[#eee8e1] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-coral">NEARBY DESTINATIONS</p>
                    <h3 className="mt-2 text-xl font-medium tracking-tight text-[#302c2a] sm:text-2xl">A little closer to everything.</h3>
                  </div>
                  <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a0988f] sm:block">Distance</span>
                </div>
                <div className="grid sm:grid-cols-2 sm:gap-x-8">
                  {locationDistances.map((item, index) => (
                    <div key={item.place} className={`group flex items-center justify-between gap-3 border-b border-[#f0ebe5] py-3.5 ${index === locationDistances.length - 1 ? "sm:col-span-2 sm:border-b-0" : ""}`}>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-[#403a34]">{item.place}</p>
                        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.13em] text-[#a0988f]">{item.category}</p>
                      </div>
                      <p className="shrink-0 text-right text-lg font-semibold tracking-tight text-[#26382e] sm:text-xl">{item.distance}<span className="ml-1 text-[10px] font-medium text-[#8d857c]">{item.unit}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href="#home2-form" className="group mt-8 inline-flex min-h-12 items-center gap-4 rounded-md bg-coral px-6 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(232,115,74,0.16)] transition hover:-translate-y-0.5 hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-coral">
              REVEAL THE PRICE <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </section>

        <section id="developer" className="scroll-mt-8 bg-[#fff8f0] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12 xl:px-16">
            <div className="mb-10 border-b border-[#e9dfd4] pb-6 sm:mb-14 sm:pb-8">
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-coral sm:text-xs">
                <span className="h-px w-9 bg-coral" /> ABOUT THE DEVELOPER
              </p>
              <h2 className="mt-5 max-w-4xl text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#292827]">
                A beacon of changing skylines <span className="text-coral">and lifestyles.</span>
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
              <div>
                <Image
                  src="/images/sumeet-infracon-developer-transparent.png"
                  alt="Sumeet Infracon logo"
                  width={340}
                  height={540}
                  className="h-auto w-[136px] object-contain sm:w-[160px]"
                />
                <p className="mt-8 max-w-sm text-[10px] font-semibold tracking-[0.2em] text-[#8c8176]">ROOTED IN RAIPUR. BUILDING FOR THE FUTURE.</p>
                <div className="mt-8 border-t border-[#e9dfd4] pt-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-coral">PAST PROJECTS</p>
                  <ul className="mt-3 divide-y divide-[#e9dfd4]">
                    {["Sumeet Trade Centre", "Sumeet Avenues", "Sumeet Landscape", "Sumeet City of Dreams"].map((project, index) => (
                      <li key={project} className="flex items-center gap-4 py-3 text-sm font-medium text-[#47413b]">
                        <span className="font-mono text-[10px] text-[#b4a89b]">0{index + 1}</span>{project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:border-l lg:border-[#e9dfd4] lg:pl-10 xl:pl-14">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-coral">ABOUT THE COMPANY</p>
                <p className="mt-4 text-sm leading-7 text-[#655e56] sm:text-[15px] sm:leading-8">
                  Sumeet Infracon Pvt. Ltd. is a Raipur-based real estate development company with a strong foothold in Chhattisgarh&apos;s growing property landscape. Known for delivering premium residential and commercial developments, the company has built a reputation for quality construction, modern amenities, and strategically chosen locations that offer residents and businesses seamless connectivity and lasting value.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#655e56] sm:text-[15px] sm:leading-8">
                  With landmark projects like Sumeet City of Dreams, Sumeet Landscape, and the iconic Sumeet Trade Centre at Pachpedi Naka — Raipur&apos;s first ultra-premium corporate hub — Sumeet Infracon continues to redefine the standards of living and working spaces across the region.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#655e56] sm:text-[15px] sm:leading-8">
                  Driven by integrity, innovation, and a customer-first philosophy, the group remains committed to crafting sustainable, functional spaces that elevate lifestyles and create enduring value for every stakeholder.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#e9dfd4] bg-[#e9dfd4] sm:grid-cols-2 xl:grid-cols-3">
              <div className="bg-[#fffaf7] p-5 sm:p-6">
                <p className="text-[10px] font-semibold tracking-[0.17em] text-coral">CORPORATE ADDRESS</p>
                <p className="mt-3 text-sm leading-6 text-[#514b45]">Sumeet Business Park, Pachpedi Naka, Raipur, Chhattisgarh</p>
              </div>
              <div className="bg-[#fffaf7] p-5 sm:p-6">
                <p className="text-[10px] font-semibold tracking-[0.17em] text-coral">SITE ADDRESS</p>
                <p className="mt-3 text-sm leading-6 text-[#514b45]">Khamardih, Raipur, Chhattisgarh</p>
              </div>
              <div className="bg-[#fffaf7] p-5 sm:col-span-2 sm:p-6 xl:col-span-1">
                <p className="text-[10px] font-semibold tracking-[0.17em] text-coral">RERA REGISTRATION</p>
                <p className="mt-3 text-sm font-medium text-[#514b45]">PCGRERA190326002064</p>
                <a href="https://rera.cgstate.gov.in" target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs text-[#887d72] underline decoration-[#cfc3b7] underline-offset-4 transition hover:text-coral">rera.cgstate.gov.in</a>
              </div>
            </div>
            <p className="mt-5 max-w-4xl text-[10px] leading-5 text-[#8a8279]">
              Disclaimer: All specifications, plans and images are indicative and subject to approval by authorities.
            </p>
          </div>
        </section>

        <footer className="border-t border-[#e7ddd7] bg-white py-5 text-center text-[11px] text-[#847b76]">
          &copy; 2026 Sumeet Infracon. All renderings are indicative.
        </footer>
    </main>
  );
}
