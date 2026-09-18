import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sumeet Urban Nest | Coming Soon in Raipur",
  description:
    "A new residential address is opening out at Khamardih, Shankar Nagar, Raipur. Register to reveal the price.",
};

const locationHighlights = [
  "Khamardih, Shankar Nagar",
  "Connected to central Raipur",
  "Everyday essentials close by",
];

const heroFieldClassName =
  "h-12 w-full rounded-xl border border-[#eaded7] bg-[#fffaf7] px-4 text-sm text-[#302c2a] outline-none transition placeholder:text-[#9b918c] focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10 sm:h-14 sm:text-[15px]";

export default function Home2() {
  return (
    <main className="overflow-hidden bg-white text-[#292827]">
        {/* Section 1: Hero */}
        <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
          <Image
            src="/images/exterior/elevation-view-1.webp"
            alt="Sumeet Urban Nest residential exterior"
            fill
            priority
            className="-z-20 object-cover object-[62%_center] sm:object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-black/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-black/15" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

          <header className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto flex h-[116px] max-w-[1680px] items-center justify-between px-5 sm:h-[132px] sm:px-8 md:px-[7vw] xl:px-[9vw]">
              <Link
                href="/home-2"
                aria-label="Sumeet Infracon home"
                className="block w-[82px] sm:w-[100px]"
              >
                <Image
                  src="/images/interior/sumeet-infracon-logo.webp"
                  alt="Sumeet Infracon"
                  width={1268}
                  height={1241}
                  className="h-auto w-full object-contain drop-shadow-[0_2px_5px_rgba(255,255,255,0.8)]"
                  priority
                />
              </Link>

              <div className="flex flex-col items-end gap-1.5 text-white sm:gap-2">
                <a
                  href="tel:+917247724800"
                  className="flex items-center gap-2 text-xs font-semibold drop-shadow-sm transition hover:text-[#f49a76] sm:text-sm md:text-base"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 text-[#f49a76]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.8 5.7c0 8 6.5 14.5 14.5 14.5.8 0 1.5-.5 1.8-1.2l1-2.4-4.3-2-1.6 2c-3.3-1.4-5.9-4-7.3-7.3l2-1.6-2-4.3-2.4 1c-.7.3-1.2 1-1.2 1.8Z"
                    />
                  </svg>
                  7247 7248 00
                </a>
                <a
                  href="mailto:sales@sumeetinfraventurs.com"
                  className="hidden text-xs font-medium text-white/85 transition hover:text-white min-[390px]:block sm:text-sm"
                >
                  sales@sumeetinfraventurs.com
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto grid min-h-[100svh] w-full max-w-[1680px] gap-10 px-5 pb-14 pt-[138px] sm:px-8 sm:pb-16 sm:pt-[156px] md:px-[7vw] lg:grid-cols-[minmax(0,1.15fr)_minmax(390px,0.85fr)] lg:items-center lg:gap-16 lg:pb-20 lg:pt-[150px] xl:gap-24 xl:px-[9vw]">
            <div className="max-w-[760px] self-end pb-1 lg:self-auto lg:pb-0">
              <div className="rounded-[26px] border border-white/15 bg-black/28 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.16)] backdrop-blur-[2px] sm:p-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
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
              </div>
            </div>

            <div
              id="home2-form"
              className="scroll-mt-6 rounded-[28px] border border-white/60 bg-white/95 p-5 shadow-[0_24px_70px_rgba(24,12,6,0.28)] backdrop-blur-md sm:p-8 lg:p-9"
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-coral">
                PRIVATE PREVIEW
              </p>
              <h2 className="mt-3 text-[27px] font-semibold leading-tight tracking-[-0.03em] text-[#302c2a] sm:text-[32px]">
                Reveal the price.
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#746b66]">
                Register for pricing and availability.
              </p>

              <form className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
                <div>
                  <label htmlFor="home2-name" className="sr-only">Full Name</label>
                  <input
                    required
                    id="home2-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Full Name"
                    className={heroFieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="home2-phone" className="sr-only">Phone Number</label>
                  <input
                    required
                    id="home2-phone"
                    name="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className={heroFieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="home2-email" className="sr-only">Email Address</label>
                  <input
                    required
                    id="home2-email"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    className={heroFieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="home2-interest" className="sr-only">Interested In</label>
                  <select
                    required
                    id="home2-interest"
                    name="interest"
                    defaultValue=""
                    className={`${heroFieldClassName} appearance-none text-[#746b66]`}
                  >
                    <option value="" disabled>Interested In</option>
                    <option value="2-bhk">2 BHK Home</option>
                    <option value="3-bhk">3 BHK Home</option>
                    <option value="both">2 &amp; 3 BHK Homes</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-coral px-6 text-sm font-bold tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(232,115,74,0.24)] transition hover:-translate-y-0.5 hover:bg-coral-dark sm:min-h-14 sm:text-[15px]"
                >
                  REVEAL THE PRICE
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>
                <p className="pt-1 text-center text-[10px] leading-4 text-[#9b918c] sm:text-[11px]">
                  By submitting, you agree to be contacted about this project.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Section 2: A restrained preview */}
        <section id="preview" className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
          <Image
            src="/images/exterior/overview-rings.webp"
            alt=""
            width={1336}
            height={1177}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-40 -z-10 hidden h-auto w-[560px] opacity-55 lg:block xl:-right-24 xl:w-[650px]"
          />

          <div className="mx-auto grid max-w-[1680px] items-center gap-12 px-5 sm:px-8 md:px-[7vw] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24 xl:px-[9vw]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] sm:rounded-[38px] lg:aspect-[1.06/1]">
              <Image
                src="/images/exterior/podium-closeup.webp"
                alt="Landscaped spaces at Sumeet Urban Nest"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-[#8a817c]">
                <span className="h-px w-10 bg-coral" />
                A GLIMPSE
              </p>
              <h2 className="mt-7 text-[32px] font-medium leading-[1.15] tracking-[-0.035em] text-[#292827] sm:text-[38px] lg:text-[46px]">
                More room for
                <span className="block text-coral">everyday life.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#746f6c] sm:text-base sm:leading-8">
                Homes shaped around light, air and the freedom to live a little
                more openly.
              </p>

              <div className="mt-8 grid grid-cols-3 divide-x divide-[#e7ddd7] border-y border-[#e7ddd7] py-5 sm:mt-10 sm:py-6">
                <div className="pr-3 sm:pr-5">
                  <p className="text-lg font-semibold text-coral sm:text-2xl">2 &amp; 3</p>
                  <p className="mt-1 text-[10px] leading-4 text-[#827a75] sm:text-xs">BHK Homes</p>
                </div>
                <div className="px-3 sm:px-5">
                  <p className="text-lg font-semibold text-coral sm:text-2xl">1.76</p>
                  <p className="mt-1 text-[10px] leading-4 text-[#827a75] sm:text-xs">Acres</p>
                </div>
                <div className="pl-3 sm:pl-5">
                  <p className="text-lg font-semibold text-coral sm:text-2xl">Raipur</p>
                  <p className="mt-1 text-[10px] leading-4 text-[#827a75] sm:text-xs">Prime location</p>
                </div>
              </div>

              <a href="#home2-form" className="group mt-8 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-md border border-coral bg-white px-7 text-sm font-bold tracking-[0.08em] text-coral transition hover:bg-coral hover:text-white sm:mt-10 sm:w-auto sm:min-w-[220px]">
                REVEAL MORE
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Location */}
        <section id="location" className="bg-[#fff5e8]">
          <div className="mx-auto grid max-w-[1680px] items-stretch lg:grid-cols-2">
            <div className="flex items-center px-5 py-16 sm:px-8 sm:py-20 md:px-[7vw] lg:px-[8vw] lg:py-24 xl:px-[9vw]">
              <div className="max-w-xl">
                <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-[#8a817c]">
                  <span className="h-px w-10 bg-coral" />
                  LOCATION
                </p>
                <h2 className="mt-7 text-[32px] font-medium leading-[1.18] tracking-[-0.035em] text-[#292827] sm:text-[38px] lg:text-[46px]">
                  Connected to Raipur.
                  <span className="block text-coral">Opened out to life.</span>
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#746f6c] sm:text-base sm:leading-8">
                  Khamardih, Shankar Nagar, Raipur, Chhattisgarh.
                </p>

                <ul className="mt-8 space-y-4 sm:mt-10">
                  {locationHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#4f4a47] sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/12 text-coral">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#home2-form" className="group mt-9 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-coral px-8 text-sm font-bold tracking-[0.09em] text-white shadow-[0_12px_28px_rgba(232,115,74,0.22)] transition hover:-translate-y-0.5 hover:bg-coral-dark sm:w-auto sm:min-w-[230px] sm:text-base">
                  REVEAL THE PRICE
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden sm:min-h-[540px] lg:min-h-[680px]">
              <Image
                src="/images/exterior/aerial-view.webp"
                alt="Aerial view of Sumeet Urban Nest and its surroundings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-[#e7ddd7] bg-[#f7f3ee] py-9 text-[#302c2a] sm:py-11">
          <div className="mx-auto flex max-w-[1680px] flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 md:flex-row md:px-[7vw] md:text-left xl:px-[9vw]">
            <div className="flex items-center gap-4">
              <div className="w-[76px]">
                <Image
                  src="/images/interior/sumeet-infracon-logo.webp"
                  alt="Sumeet Infracon"
                  width={1268}
                  height={1241}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Sumeet Infracon</p>
                <p className="mt-1 text-xs text-[#847b76]">Building spaces for better living.</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-[#6f6762] sm:flex-row sm:gap-5 md:items-end">
              <a href="tel:+917247724800" className="transition hover:text-coral">
                7247 7248 00
              </a>
              <span className="hidden h-4 w-px bg-[#cfc3bc] sm:block" />
              <a
                href="mailto:sales@sumeetinfraventurs.com"
                className="transition hover:text-coral"
              >
                sales@sumeetinfraventurs.com
              </a>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-[1680px] border-t border-[#ddd3cc] px-5 pt-5 text-center text-[11px] text-[#9a918b] sm:px-8 md:px-[7vw] md:text-left xl:px-[9vw]">
            &copy; 2026 Sumeet Infracon. All renderings are indicative.
          </div>
        </footer>
    </main>
  );
}
