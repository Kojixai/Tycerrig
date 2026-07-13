import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import PlaceItem from "@/components/welcome/PlaceItem";
import OutboundButton from "@/components/welcome/OutboundButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emergencies & Health — Guest Welcome",
  description:
    "999 and what3words guidance, the nearest defibrillator, minor injuries, A&E, doctors and vets.",
};

export default function Emergencies() {
  return (
    <WelcomeShell slug="emergencies">
      <div className="space-y-5 leading-relaxed text-ink/85">
        <div className="rounded-lg bg-ink p-6 text-wool sm:p-8">
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            Life-threatening emergency:{" "}
            <a
              href="tel:999"
              className="whitespace-nowrap font-semibold text-wool underline decoration-bracken decoration-2 underline-offset-4 hover:decoration-4"
            >
              call 999
            </a>
          </p>
          <p className="mt-4 leading-relaxed text-wool/90">
            Give the operator the what3words address{" "}
            {site.what3words ?? (
              <Placeholder tone="dark">
                pitch-area what3words to follow
              </Placeholder>
            )}{" "}
            — rural postcodes cover a wide area and this gets the ambulance to
            the right gate.
          </p>
        </div>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Nearest defibrillator (AED)
        </h2>
        <p>
          <Placeholder>Nearest AED location to be confirmed</Placeholder> — or
          search DefibFinder.
        </p>
        <p>
          <OutboundButton href="https://www.defibfinder.uk">
            DefibFinder
          </OutboundButton>
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Urgent but not life-threatening
        </h2>
        <p>
          Call NHS{" "}
          <a href="tel:111" className="font-semibold text-moss hover:underline">
            111
          </a>{" "}
          (free, 24hr). For emergency dental problems, 111 runs the dental
          helpline too.
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Minor injuries &amp; doctors
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Minor Injury Unit — Ysbyty Dolgellau",
              note: "Dolgellau & Barmouth Hospital, LL40 1NT — about 15 min from the site (7 miles). Open 8am–5pm Mon–Fri. Phone before attending for X-ray.",
              phone: "03000 850020",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+and+Barmouth+Hospital+LL40+1NT",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Doctors — Meddygfa Dolgellau (Caerffynnon Surgery)",
              note: "Dolgellau LL40 1LY — about 15 min from the site (7 miles). Temporary patients accepted for urgent care; Rhydymain is inside this practice's own catchment area.",
              phone: "01341 422431",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Caerffynnon+Surgery+Dolgellau+LL40+1LY",
              },
            }}
          />
        </ul>
        <p>
          Out of hours: call{" "}
          <a href="tel:111" className="font-semibold text-moss hover:underline">
            111
          </a>
          .
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">A&amp;E (24hr)</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Ysbyty Gwynedd, Bangor",
              note: "LL57 2PW — approx. 1 hr.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Ysbyty+Gwynedd+Bangor+LL57+2PW",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bronglais General Hospital, Aberystwyth",
              note: "SY23 1ER — approx. 1 hr.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Bronglais+Hospital+Aberystwyth+SY23+1ER",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Vets</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          <PlaceItem
            place={{
              name: "Dolgellau Vets (Milfeddygon Dolgellau)",
              note: "Bala Road, Dolgellau LL40 2YF — about 15 min. 24-hour emergency line.",
              phone: "01341 422212",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+Vets+Bala+Road+LL40+2YF",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Wern Veterinary Surgeons, Bala",
              note: "9 Ffrydan Road, LL23 7RU — about 15 min.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Wern+Veterinary+Surgeons+Ffrydan+Road+Bala",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bodrwnsiwn Vet Group, Barmouth",
              note: (
                <>
                  2 Cambrian Court — about 30 min.{" "}
                  <Placeholder>Practice name to be verified</Placeholder>
                </>
              ),
              phone: "01341 280732",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=vets+Cambrian+Court+Barmouth",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Site emergency contact
        </h2>
        <p>
          Rhys —{" "}
          <a
            href={site.phone.href}
            className="font-semibold text-moss hover:underline"
          >
            {site.phone.display}
          </a>
          . <Placeholder>When it&rsquo;s OK to knock on the farmhouse door — to confirm</Placeholder>
        </p>
      </div>
    </WelcomeShell>
  );
}
