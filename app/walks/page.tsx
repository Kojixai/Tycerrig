import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import WalkCard, { type Walk } from "@/components/WalkCard";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Walks — from the Farm Gate to Aran Fawddwy & Cadair Idris",
  description:
    "Walks from a caravan site between Dolgellau and Bala: farm-track strolls from the gate, the Torrent Walk, Precipice Walk, Mawddach Trail, Coed y Brenin, and full mountain days on Aran Fawddwy and Cadair Idris.",
};

const walks: Walk[] = [
  {
    name: "From the farm gate",
    meta: "0 miles · easy · dogs on leads near stock",
    body: "You don't need the car. Our farm trails are open to the public all year — some slopes are steep and the tracks can be muddy after rain, which is half the fun. The track, the quiet lanes towards Rhydymain, and the banks of the Wnion give you an hour's wandering straight from your pitch — grey herons nest in colonies in the tall trees by the river, buzzards most days.",
  },
  {
    name: "The Mary Jones Walk",
    welshName: "Taith Mari Jones",
    meta: "through the farm · waymarked · pilgrim route",
    body: "In 1800, fifteen-year-old Mary Jones walked barefoot from Llanfihangel-y-Pennant over the hills to Bala to buy a Bible — a journey that helped found the Bible Society. Her route ran along our farm road, and today the waymarked Taith Mari Jones follows the same line past our gate on its Dolfeli–Llanuwchllyn leg. Join a genuine two-century-old pilgrimage from your pitch.",
    route: {
      href: "https://www.maryjones.org.uk/mary-jones-walk",
      label: "The official Mary Jones Walk guide",
    },
  },
  {
    name: "Walk to a lost station",
    meta: "from the gate or a short drive · easy · dog-friendly",
    body: "Steam trains once ran this valley on the old Ruabon–Barmouth line, and the ghosts are still here: the platforms and crossing cottage of Drws-y-Nant station stand just up the A494, the remains of Wnion Halt hide by Pont Llanrhaiadr near Rhydymain, and you can spot the stump of a demolished railway bridge near our own gate. A gentle wander for anyone who likes their history rusting quietly in a hedge.",
  },
  {
    name: "Torrent Walk",
    welshName: "Llwybr Clywedog",
    meta: "10 minutes' drive · easy · very dog-friendly",
    body: "A Victorian-engineered woodland path tumbling alongside the waterfalls of the Afon Clywedog at Brithdir. Short, shaded, spectacular after rain — which around here is a feature, not a bug.",
    route: {
      href: "https://eryri.gov.wales/walk/torrent-walk/",
      label: "Route map on the Eryri National Park site",
    },
  },
  {
    name: "Precipice Walk",
    welshName: "Llwybr Cynwch",
    meta: "15 minutes · easy but airy",
    body: "The famous balcony path above the Mawddach — barely any climbing, and one of the finest free views in Wales: the estuary one way, Cadair Idris the other.",
    route: {
      href: "https://eryri.gov.wales/walk/precipice-walk/",
      label: "Route map on the Eryri National Park site",
    },
  },
  {
    name: "Aran Fawddwy",
    meta: "10 minutes to the start · full mountain day",
    body: "Our local giant — at 905 metres, the highest mountain in Britain south of Snowdon, and a fraction of the crowds. The Cwm Cywarch horseshoe is the connoisseur's route. Go prepared; it's a proper hill.",
    route: {
      href: "https://www.alltrails.com/trail/wales/powys/aran-fawddwy-circular",
      label: "Tracked route on AllTrails",
    },
  },
  {
    name: "Cadair Idris",
    meta: "20 minutes · full mountain day",
    body: "The chair of the giant Idris. Legend says sleep on the summit and you'll wake a poet or a madman — most of our guests settle for the Minffordd Path and a slice of cake in Dolgellau after.",
    route: {
      href: "https://eryri.gov.wales/walk/minffordd-path/",
      label: "Minffordd Path on the Eryri National Park site",
    },
  },
  {
    name: "Mawddach Trail",
    meta: "15 minutes · flat · family · bikes",
    body: "Nine traffic-free miles down the old railway from Dolgellau to Barmouth, finishing across the estuary bridge with the sea in front of you. The classic easy day out.",
    route: {
      href: "https://mawddachtrail.co.uk/",
      label: "The official Mawddach Trail site",
    },
  },
  {
    name: "Coed y Brenin",
    meta: "25 minutes · walking & mountain biking",
    body: "The King's Forest — waterfalls, gold-mine history trails, and the UK's first purpose-built mountain-bike centre.",
    route: {
      href: "https://naturalresources.wales/days-out/places-to-visit/north-west-wales/coed-y-brenin-visitor-centre/?lang=en",
      label: "Visitor centre and trails — Natural Resources Wales",
    },
  },
];

export default function Walks() {
  return (
    <>
      <Hero
        image={images.heroWalks}
        title="Walks"
        cy="Teithiau Cerdded"
        subtitle="From a riverside stroll to the roof of southern Eryri (Snowdonia)."
      />
      <Breadcrumbs name="Walks" path="/walks/" />
      <section className="mx-auto max-w-4xl px-6 py-14">
        {walks.map((walk) => (
          <WalkCard key={walk.name} walk={walk} />
        ))}
      </section>
      <BookingCTA note="Boots by the door, van by the stream. Booking and payment are handled by the Caravan and Motorhome Club or Pitchup, never on this website." />
    </>
  );
}
