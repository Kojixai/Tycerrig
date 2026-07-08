import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TrustStrip from "@/components/TrustStrip";
import BookingCTA from "@/components/BookingCTA";
import CarthenDivider from "@/components/CarthenDivider";
import { images, srcSet } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tŷ Cerrig, Rhydymain — Caravan Site between Dolgellau & Bala, Eryri",
  description:
    "A quiet riverside caravan site on our family sheep farm between Dolgellau and Bala, in Eryri (Snowdonia) National Park. Caravan and Motorhome Club CL — five pitches beside the stream, dogs very welcome.",
};

function EssentialIcon({ d, extra }: { d: string; extra?: React.ReactNode }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
      {extra}
    </svg>
  );
}

const essentials = [
  {
    title: "Five riverside pitches",
    body: "Electric hook-up, water tap, wifi and Sky/Freesat at every one.",
    // caravan
    icon: (
      <EssentialIcon
        d="M3 8a2 2 0 0 1 2-2h11a5 5 0 0 1 5 5v5h-2.5M3 8v8h4.5M3 8h7v4h11M11 16h5"
        extra={<circle cx="9" cy="17" r="1.8" />}
      />
    ),
  },
  {
    title: "Dogs very welcome",
    body: "Walks start at your awning — leads near the sheep, please.",
    // paw
    icon: (
      <EssentialIcon
        d="M12 11.5c2.6 0 5 2.2 5 4.6 0 1.4-1 2.4-2.3 2.4-1 0-1.9-.5-2.7-.5s-1.7.5-2.7.5C8 18.5 7 17.5 7 16.1c0-2.4 2.4-4.6 5-4.6Z"
        extra={
          <>
            <circle cx="5.5" cy="10" r="1.4" />
            <circle cx="9.5" cy="6.5" r="1.4" />
            <circle cx="14.5" cy="6.5" r="1.4" />
            <circle cx="18.5" cy="10" r="1.4" />
          </>
        }
      />
    ),
  },
  {
    title: "The stone barn",
    body: "Hot shower, proper guest kitchen, laundry. Kept spotless.",
    // barn/house
    icon: (
      <EssentialIcon d="M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6" />
    ),
  },
  {
    title: "Club members only",
    body: "A Caravan & Motorhome Club CL. Caravans, motorhomes, campervans — no tents.",
    // badge check
    icon: (
      <EssentialIcon
        d="M8.5 12.5l2.5 2.5 4.5-5"
        extra={<circle cx="12" cy="12" r="9" />}
      />
    ),
  },
  {
    title: "Seven miles to everything",
    body: "Dolgellau one way, Bala the other. Half a mile off the A494.",
    // map pin
    icon: (
      <EssentialIcon
        d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"
        extra={<circle cx="12" cy="10" r="3" />}
      />
    ),
  },
  {
    title: "Jets, some weekdays",
    body: "Mach Loop country — twenty minutes from the viewing spots.",
    // jet from above
    icon: (
      <EssentialIcon d="M12 2.5v19M12 8l-8.5 6M12 8l8.5 6M12 17.5L8 21M12 17.5l4 3.5" />
    ),
  },
];

const teasers = [
  { href: "/caravan-site/", cy: "Y Safle", en: "The Site" },
  { href: "/walks/", cy: "Teithiau Cerdded", en: "Walks" },
  { href: "/jets/", cy: "Uwchben y Cwm", en: "Jets Over the Valley" },
  { href: "/history/", cy: "Hanes", en: "History" },
];

export default function Home() {
  return (
    <>
      <Hero
        image={images.heroHome}
        title="Welcome to Tŷ Cerrig"
        cy="Croeso i Dŷ Cerrig"
        subtitle="A quiet riverside caravan site on our family sheep farm, in the hills between Dolgellau and Bala."
        tall
      />
      <TrustStrip />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="measure">
            <SectionHeading en="A family farm" cy="Fferm deuluol" className="[&>h2]:sm:text-4xl" />
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Tŷ Cerrig means &ldquo;house of stones&rdquo; — a working sheep
              farm, three generations of us, tucked into the Wnion valley in
              Eryri (Snowdonia) National Park. The loudest thing most evenings
              is the river.
            </p>
            <p className="mt-4 font-display text-xl text-ink">
              — <span lang="cy">Rhys a&rsquo;r teulu</span>{" "}
              <span className="text-stone">(Rhys and family)</span>
            </p>
          </div>
          <img
            src={`${images.farmLamb.base}-1200.webp`}
            srcSet={srcSet(images.farmLamb)}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={images.farmLamb.alt}
            width={images.farmLamb.width}
            height={images.farmLamb.height}
            loading="lazy"
            className="max-h-72 w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <CarthenDivider />

      <section className="mx-auto max-w-4xl px-6 py-14">
        <SectionHeading en="The essentials" cy="Yr hanfodion" className="text-center" />
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {essentials.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <span className="text-moss">{item.icon}</span>
              <p className="mt-3 font-display text-lg leading-tight text-ink">
                {item.title}
              </p>
              <p className="mt-1.5 max-w-[26ch] text-[0.85rem] leading-snug text-ink/75">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <BookingCTA inverted />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading en="Explore" cy="Crwydro" className="text-center" />
        <div className="mt-8 grid grid-cols-2 gap-4">
          {teasers.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-wool-2 px-5 py-4 transition-colors hover:border-moss hover:bg-wool"
            >
              <span>
                <span className="block font-display text-lg leading-tight text-ink group-hover:text-moss">
                  {t.en}
                </span>
                <span
                  lang="cy"
                  className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
                >
                  {t.cy}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-bracken transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
