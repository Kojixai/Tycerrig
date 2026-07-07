import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "History Beneath Your Feet — Cairns, Romans, Gold & a Ghost Railway",
  description:
    "Four thousand years in one small Welsh valley: Bronze Age cairns above the Wnion, a Roman road at Brithdir, Cymer Abbey, the Dolgellau gold rush, the lost Ruabon–Barmouth railway, and Richard Burton's first film — shot in Rhydymain.",
};

function Section({
  cy,
  en,
  children,
}: {
  cy: string;
  en: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ink/15 py-10 first:border-t-0">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        <span lang="cy">{cy}</span> · {en}
      </h2>
      <div className="measure mt-4 space-y-4 text-lg leading-relaxed text-ink/85">
        {children}
      </div>
    </section>
  );
}

export default function History() {
  return (
    <>
      <Hero
        image={images.heroHistory}
        title="Hanes Dan Eich Traed"
        subtitle="History Beneath Your Feet — four thousand years in one small valley."
      />
      <Breadcrumbs name="History Beneath Your Feet" path="/history/" />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Section cy="Yr hen bobl" en="the old ones">
          <p>
            On the moorland skyline above this valley, Bronze Age farmers
            raised burial cairns some four thousand years ago — archaeologists
            surveying these uplands recorded hundreds of ancient sites within a
            few miles of the farm, from cairns to mysterious circular
            enclosures. People have been keeping animals on these hills for a
            very, very long time. We&rsquo;re just the latest.
          </p>
        </Section>

        <Section cy="Y Rhufeiniaid" en="the Romans came this way">
          <p>
            Three miles down the valley at Brithdir, the Romans built a small
            fort around AD 74, at a junction of roads linking their garrisons
            across Meirionnydd. Lead was smelted there; leather was tanned. The
            quiet lane running east from Brithdir towards Pont Llanrhaiadr —
            next door to Rhydymain — follows the line of their road. You can
            walk it.
          </p>
        </Section>

        <Section cy="Abatai, tywysogion ac aur" en="abbeys, princes and gold">
          <p>
            Cymer Abbey, founded by Cistercian monks in 1198, still stands in
            ruins beside the Mawddach fifteen minutes away — free to visit,
            cared for by Cadw. The hills beyond hosted a genuine Victorian gold
            rush, and Welsh gold from these mountains has gone into royal
            wedding rings ever since. Dolgellau&rsquo;s 17th-century Quakers,
            fleeing persecution, helped found Pennsylvania: Bryn Mawr is named
            for a farm near here.
          </p>
        </Section>

        <Section cy="Y rheilffordd goll" en="the ghost railway">
          <p>
            Between the farm and the road ran the old Great Western line from
            Ruabon to Barmouth — steam trains threading this valley for nearly
            a century. The farm sits between two of its stops: Drws-y-Nant just
            up the road, where both platforms and the crossing cottage still
            stand beside the A494, and little Wnion Halt by Pont Llanrhaiadr
            near Rhydymain, a timber platform tucked against the road wall
            where only the rusted supports remain and the old entrance gate now
            serves as somebody&rsquo;s driveway.
          </p>
          <p>
            The floods of December 1964 breached the line a month before the
            Beeching Axe was due to fall anyway; the last trains ran in January
            1965, and the track was lifted by 1969. When the A494 was rebuilt
            near Drws-y-Nant in 1999, the new road was laid on the old trackbed
            itself. The remains of a demolished railway bridge can still be
            spotted near our gate.
          </p>
          <p>
            The line lives on in two places our guests love: the Mawddach
            Trail from Dolgellau to Barmouth is its trackbed, and the Bala Lake
            Railway steams along another preserved stretch. Ride either, and
            you&rsquo;re riding the railway that once ran past your pitch.
          </p>
        </Section>

        <Section cy="Richard Burton" en="Richard Burton slept here (almost)">
          <p>
            In 1949, film-makers searched sixty-one Welsh villages for the
            perfect setting for <em>The Last Days of Dolwyn</em> — and chose
            Rhydymain, our village. They painted the chapel, built a fake pub,
            and gave a young Richard Burton his very first screen role. The
            village has kept its looks.
          </p>
        </Section>
      </div>

      <BookingCTA note="Sleep where the history is. Booking and payment are handled by the Caravan and Motorhome Club or Pitchup, never on this website." />
    </>
  );
}
