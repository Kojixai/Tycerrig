import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import CarthenDivider from "@/components/CarthenDivider";
import ContactButtons from "@/components/ContactButtons";
import Faq, { type FaqItem } from "@/components/Faq";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Us & FAQ — Half a Mile off the A494",
  description:
    "How to find Tŷ Cerrig caravan site at Rhydymain, between Dolgellau and Bala: directions from the A494, GPS coordinates, the T3 bus, and answers to the questions caravanners actually ask.",
};

const faqs: FaqItem[] = [
  {
    q: "Do I need to be a Caravan and Motorhome Club member?",
    a: "Yes — we're a Certificated Location, exclusive to members. Joining is quick and pays for itself; there's a link on the Club's booking page.",
  },
  {
    q: "Can I bring a tent?",
    a: "Camping units only (caravans, motorhomes, campervans). A small pup tent alongside your unit is fine.",
  },
  {
    q: "Are dogs welcome?",
    a: "Very. Leads near livestock, please — this is a working sheep farm.",
  },
  {
    q: "Is there wifi?",
    a: "Yes, reaching the pitches, plus satellite hook-ups for Sky and Freesat.",
  },
  {
    q: "Can I bring a twin-axle caravan?",
    a: "Welcome — the approach is straightforward. Ring us if you'd like reassurance about the lane.",
  },
  {
    q: "How do I pay?",
    a: "You don't pay us through this website. Booking, prices, deposits and cancellations are handled by Pitchup or the Caravan and Motorhome Club.",
  },
  {
    q: "When are the jets flying?",
    a: "Weekdays if at all, never weekends — see our Jets Over the Valley page. No promises; that's the RAF's department.",
  },
  {
    q: "Where are the nearest shops, pubs and fuel?",
    a: "Dolgellau and Bala, fifteen minutes either way, both good little towns.",
  },
];

export default function FindUs() {
  return (
    <>
      <Hero
        image={images.heroFindUs}
        title="Finding Us"
        cy="Dod o Hyd i Ni"
        subtitle="Easier than you think — half a mile off the A494."
      />
      <Breadcrumbs name="Find Us" path="/find-us/" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="measure">
            <SectionHeading en="Directions" cy="Cyfarwyddiadau" />
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              We&rsquo;re just off the A494 between Dolgellau and Bala — seven
              miles from each, so the last leg of your journey is a proper
              A-road, not a single-track adventure.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              The postcode is shared with our neighbours, so trust the
              coordinates over the sat-nav for the final half mile. If in
              doubt, ring us on{" "}
              <a href={site.phone.href} className="font-semibold text-moss hover:underline">
                {site.phone.display}
              </a>{" "}
              — someone&rsquo;s usually in the yard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              <strong>Without a car:</strong> the T3 bus
              (Wrexham–Bala–Dolgellau–Barmouth) runs along the A494, so
              car-free days out to both towns and the coast are genuinely
              doable.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-wool-2 p-7">
            <h3 className="font-display text-xl text-ink">
              Where we are
            </h3>
            <p
              lang="cy"
              className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bracken"
            >
              Ble rydym ni
            </p>
            <dl className="mt-4 space-y-3 text-[1.05rem]">
              <div>
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                  Address
                </dt>
                <dd className="mt-0.5 text-ink">
                  {site.address.line1}, {site.address.village},{" "}
                  {site.address.town}, {site.address.county}{" "}
                  {site.address.postcode}
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                  GPS
                </dt>
                <dd className="mt-0.5 text-ink">
                  {site.gps.lat}, {site.gps.lng}
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                  OS grid reference
                </dt>
                <dd className="mt-0.5 text-ink">{site.gridRef}</dd>
              </div>
              {site.what3words ? (
                <div>
                  <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                    what3words
                  </dt>
                  <dd className="mt-0.5 text-ink">{site.what3words}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                  Phone
                </dt>
                <dd className="mt-0.5">
                  <a href={site.phone.href} className="font-semibold text-moss hover:underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-stone">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${site.email}`} className="font-semibold text-moss hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${site.gps.lat},${site.gps.lng}`}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded bg-moss px-6 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
            >
              Directions in Google Maps →
            </a>
          </div>
        </div>
      </section>

      <CarthenDivider />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading en="Questions we're often asked" cy="Cwestiynau" />
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-4">
        <ContactButtons />
      </section>

      <BookingCTA />
    </>
  );
}
