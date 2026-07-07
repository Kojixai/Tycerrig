import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import CarthenDivider from "@/components/CarthenDivider";
import PitchMap from "@/components/PitchMap";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Site — Riverside CL Pitches in Rhydymain",
  description:
    "Five riverside pitches on a Caravan and Motorhome Club Certificated Location between Dolgellau and Bala. Electric hook-up, water, wifi and satellite at every pitch; converted stone barn with hot shower and guest kitchen; dogs very welcome.",
};

const goodToKnow = [
  "We're a working sheep farm — expect lambs in spring, the odd tractor, and Welsh spoken in the yard.",
  "Members of the Caravan and Motorhome Club only; caravans, motorhomes and campervans (no tents, though a small pup tent can sit alongside your van).",
  "Bring a torch — parts of the site are wonderfully unlit, which is also why the stars are so good.",
  "On warm, still evenings the river brings a few midges; a bit of repellent sorts it.",
  "One bathroom, kept immaculate.",
  "Electric vehicle charging isn't available on site.",
  "If you'll be arriving late, just ring — it's a farm, someone's about.",
];

export default function CaravanSite() {
  return (
    <>
      <Hero
        image={images.heroSite}
        title="Y Safle"
        subtitle="The Site — five pitches, one stream, no crowds."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="measure">
          <h2 className="font-display text-3xl font-semibold text-ink">
            <span lang="cy">Y llecynnau</span> · the pitches
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            We&rsquo;re a Certificated Location with the Caravan and Motorhome
            Club — five pitches only, for members, which is exactly why it
            stays peaceful. Every pitch has its own electric hook-up and water
            tap, wifi, and a satellite connection set up for Sky and Freesat.
            Riverside pitches sit right on the Afon Tŷ Cerrig.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            The ground is honest farm ground: we leave wood blocks out for
            levelling, and twin-axles are welcome — the lane is kinder than
            you&rsquo;d fear. Ring us on{" "}
            <a href={site.phone.href} className="font-semibold text-moss hover:underline">
              {site.phone.display}
            </a>{" "}
            if you&rsquo;d like reassurance about the approach.
          </p>
        </div>
        <div className="mt-12">
          <PitchMap />
        </div>
      </section>

      <CarthenDivider />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="measure">
            <h2 className="font-display text-3xl font-semibold text-ink">
              <span lang="cy">Y beudy</span> · the barn
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              A short walk up the track is our converted stone barn: toilet,
              hot shower, washing machine and clothes line, and a proper guest
              kitchen — kettle on, table to sit at, dry space for a wet-weather
              brew. We keep it spotless; our guests keep telling us so.
            </p>
          </div>
          <div className="measure">
            <h2 className="font-display text-3xl font-semibold text-ink">
              <span lang="cy">Cŵn</span> · dogs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              Very welcome — this is a farm that loves dogs. Walks start at
              your awning: the farm track, the lanes, the riverbank. We only
              ask leads near the sheep, especially in spring.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-wool-2 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            <span lang="cy">Da i wybod</span> · good to know
          </h2>
          <ul className="mt-7 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {goodToKnow.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-bracken" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl leading-relaxed text-stone">
            Booking, prices and cancellations are all handled by the Caravan
            and Motorhome Club or Pitchup — you&rsquo;ll find current prices
            and live availability there.
          </p>
        </div>
      </section>

      <BookingCTA id="book" />
    </>
  );
}
