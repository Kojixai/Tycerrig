import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BookingCTA from "@/components/BookingCTA";
import CarthenDivider from "@/components/CarthenDivider";
import { images, srcSet } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tŷ Cerrig, Rhydymain — Caravan Site between Dolgellau & Bala, Eryri",
  description:
    "A quiet riverside caravan site on our family sheep farm between Dolgellau and Bala, in Eryri (Snowdonia) National Park. Caravan and Motorhome Club CL — five pitches beside the stream, dogs very welcome.",
};

const teasers = [
  {
    href: "/caravan-site/",
    cy: "Y Safle",
    en: "The Site",
    body: "Five riverside pitches, a spotless barn, and everything you actually need.",
  },
  {
    href: "/walks/",
    cy: "Teithiau Cerdded",
    en: "Walks",
    body: "From the farm gate to the top of Aran Fawddwy.",
  },
  {
    href: "/jets/",
    cy: "Uwchben y Cwm",
    en: "Jets Over the Valley",
    body: "Some weekdays, the RAF drops in low.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        image={images.heroHome}
        title="Croeso i Dŷ Cerrig"
        subtitle="A quiet riverside caravan site on our family sheep farm, in the hills between Dolgellau and Bala."
        tall
      />
      <TrustStrip />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="measure">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              <span lang="cy">Fferm deuluol</span> · a family farm
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              Tŷ Cerrig means &ldquo;house of stones,&rdquo; and the name suits
              the place — a working sheep farm that&rsquo;s been in our family
              for three generations, tucked into the Wnion valley inside Eryri
              (Snowdonia) National Park.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              We keep five pitches beside the stream. Electric hook-up and
              water at every pitch, wifi that reaches your van, and a converted
              stone barn with a hot shower and a kitchen our guests seem to
              talk about more than the mountains.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              It&rsquo;s the kind of site where the loudest thing most evenings
              is the river. We&rsquo;d love to welcome you.
            </p>
            <p className="mt-5 font-display text-xl text-ink">
              — <span lang="cy">Rhys a&rsquo;r teulu</span>{" "}
              <span className="text-stone">(Rhys and family)</span>
            </p>
          </div>
          <img
            src={`${images.farmLamb.base}-1200.webp`}
            srcSet={srcSet(images.farmLamb)}
            sizes="(min-width: 1024px) 40vw, 100vw"
            alt={images.farmLamb.alt}
            width={images.farmLamb.width}
            height={images.farmLamb.height}
            loading="lazy"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <BookingCTA />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-lg border border-ink/10 bg-wool-2 p-7 transition-colors hover:border-moss"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                <span lang="cy">{t.cy}</span>
                <span className="block text-[0.95rem] font-normal text-stone">
                  {t.en}
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-ink/85">{t.body}</p>
              <p aria-hidden="true" className="mt-4 font-semibold text-bracken transition-transform group-hover:translate-x-1">
                →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CarthenDivider />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <img
          src={`${images.farmSheep.base}-2000.webp`}
          srcSet={srcSet(images.farmSheep)}
          sizes="(min-width: 1152px) 1104px, 100vw"
          alt={images.farmSheep.alt}
          width={images.farmSheep.width}
          height={images.farmSheep.height}
          loading="lazy"
          className="w-full rounded-lg object-cover"
        />
        <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl leading-snug text-ink sm:text-3xl">
          Seven miles to Dolgellau. Seven miles to Bala. Half a mile off the
          A494 — and a world away from it.
        </p>
      </section>
    </>
  );
}
