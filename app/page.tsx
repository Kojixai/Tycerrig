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

const essentials = [
  {
    title: "Five riverside pitches",
    body: "Electric hook-up, water tap, wifi and Sky/Freesat at every one.",
  },
  {
    title: "Dogs very welcome",
    body: "Walks start at your awning — leads near the sheep, please.",
  },
  {
    title: "The stone barn",
    body: "Hot shower, proper guest kitchen, laundry. Kept spotless.",
  },
  {
    title: "Club members only",
    body: "A Caravan & Motorhome Club CL. Caravans, motorhomes, campervans — no tents.",
  },
  {
    title: "Seven miles to everything",
    body: "Dolgellau one way, Bala the other. Half a mile off the A494.",
  },
  {
    title: "Jets, some weekdays",
    body: "Mach Loop country — twenty minutes from the viewing spots.",
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
        <ul className="mt-8 grid grid-cols-2 gap-4">
          {essentials.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-ink/10 bg-wool-2 px-5 py-4"
            >
              <p className="font-display text-lg leading-tight text-ink">
                {item.title}
              </p>
              <p className="mt-1.5 text-[0.85rem] leading-snug text-ink/75">
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
