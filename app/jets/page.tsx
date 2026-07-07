import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import CarthenDivider from "@/components/CarthenDivider";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jets Over the Valley — Mach Loop Country near Dolgellau",
  description:
    "Stay twenty minutes from the Mach Loop viewing spots, on a quiet caravan site between Dolgellau and Bala. Low-flying RAF and USAF aircraft train in these valleys on some weekdays — no timetable, no promises, half the romance.",
};

export default function Jets() {
  return (
    <>
      <Hero
        image={images.heroJets}
        title="Uwchben y Cwm"
        subtitle="Jets Over the Valley — some weekdays, the quietest valley in Wales gets very loud for about eight seconds."
        position="72% 35%"
      />
      <Breadcrumbs name="Jets Over the Valley" path="/jets/" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="measure">
          <p className="text-lg leading-relaxed text-ink/85">
            Our corner of Eryri (Snowdonia) sits within the RAF&rsquo;s Low
            Flying Area 7, close to the valleys aviation people know as the
            Mach Loop. On training days, fast jets thread the hills at a few
            hundred feet — Hawks from RAF Valley most often, with Typhoons,
            F-35s, transport aircraft and visiting US Air Force F-15s among
            the regulars. Aircraft leaving the loop sometimes run our valley
            towards Bala, which means that now and then the show comes
            straight over the farm.
          </p>

          <h2 className="mt-12 font-display text-3xl font-semibold text-ink">
            <span lang="cy">Pryd maen nhw&rsquo;n hedfan</span> · when they fly
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            Weekdays only — never weekends or bank holidays, and Fridays tend
            to be half days. Activity picks up from spring through autumn.
            There&rsquo;s no public timetable and no guarantees: some weeks the
            sky is busy, some weeks it belongs to the buzzards. That&rsquo;s
            half the romance.
          </p>

          <h2 className="mt-12 font-display text-3xl font-semibold text-ink">
            <span lang="cy">Wedi dod am yr awyrennau?</span> · if you&rsquo;ve
            come for the aircraft
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            The famous viewing spots — the Bwlch on the A470, and Cad East and
            Cad West beneath Cadair Idris — are about twenty minutes&rsquo;
            drive. Go early for parking, wear boots and windproofs, take food
            and patience. Or do what some of our guests do: set a chair by the
            stream, pour a brew, and keep one ear on the horizon. Midweek is
            the time to be here.
          </p>
        </div>
      </section>

      <CarthenDivider />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-center font-display text-xl italic leading-relaxed text-stone sm:text-2xl">
          One honest note: we can promise the river, the stars and the
          welcome. The RAF makes no promises to anyone.
        </p>
      </section>

      <BookingCTA note="Midweek pitches are the aviation pitches. Booking and payment are handled by the Caravan and Motorhome Club or Pitchup, never on this website." />
    </>
  );
}
