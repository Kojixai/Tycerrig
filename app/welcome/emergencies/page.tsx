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
      <div className="measure space-y-5 leading-relaxed text-ink/85">
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
            <Placeholder tone="dark">
              pitch-area what3words to follow
            </Placeholder>{" "}
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
          (free, 24hr).
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">Minor injuries</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Ysbyty Dolgellau (Dolgellau & Barmouth Hospital) Minor Injury Unit, Dolgellau LL40 1NT",
              note: "Open 8am–5pm Mon–Fri. Phone before attending for X-ray.",
              phone: "03000 850020",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+and+Barmouth+Hospital+LL40+1NT",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">A&amp;E (24hr)</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Ysbyty Gwynedd, Bangor LL57 2PW",
              note: "Approx. 1 hr.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Ysbyty+Gwynedd+Bangor+LL57+2PW",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bronglais General Hospital, Aberystwyth SY23 1ER",
              note: "Approx. 1 hr.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Bronglais+Hospital+Aberystwyth+SY23+1ER",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Doctors (temporary patients accepted for urgent care)
        </h2>
        <ul>
          <PlaceItem
            place={{
              name: "Meddygfa Dolgellau (Caerffynnon Surgery), Dolgellau LL40 1LY",
              note: "Rhydymain is inside this practice's own catchment area.",
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

        <h2 className="pt-4 font-display text-2xl text-ink">
          Dentist (emergency)
        </h2>
        <p>
          NHS{" "}
          <a href="tel:111" className="font-semibold text-moss hover:underline">
            111
          </a>{" "}
          dental helpline.
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">Vets</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Dolgellau Vets (Milfeddygon Dolgellau), Bala Road, Dolgellau LL40 2YF",
              note: "24-hour emergency line.",
              phone: "01341 422212",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+Vets+Bala+Road+LL40+2YF",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Wern Veterinary Surgeons, 9 Ffrydan Road, Bala LL23 7RU",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Wern+Veterinary+Surgeons+Ffrydan+Road+Bala",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bodrwnsiwn Vet Group, 2 Cambrian Court, Barmouth",
              note: (
                <>
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
