import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import PlaceItem from "@/components/welcome/PlaceItem";
import OutboundButton from "@/components/welcome/OutboundButton";

export const metadata: Metadata = {
  title: "Local Essentials — Guest Welcome",
  description:
    "Supermarkets, local shopping, fuel, EV charging, pharmacies, cash and mobile signal around Dolgellau and Bala.",
};

export default function Essentials() {
  return (
    <WelcomeShell slug="essentials">
      <div className="space-y-5 leading-relaxed text-ink/85">
        <h2 className="font-display text-2xl text-ink">Supermarkets</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Co-op, Dolgellau",
              note: "14 Maes Talaran, LL40 1HR — the main supermarket in Dolgellau.",
              phone: "01341 423352",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Co-op+Maes+Talaran+Dolgellau+LL40+1HR",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Co-op, Bala",
              note: "78–86 Stryd Fawr, LL23 7AD.",
              phone: "01678 521150",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Co-op+Stryd+Fawr+Bala+LL23+7AD",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Local shopping</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Dolgellau town centre",
              note: (
                <>
                  Bakery, butcher and smaller shops.{" "}
                  <Placeholder>Shop names to be verified</Placeholder>
                </>
              ),
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+town+centre",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bala Stryd Fawr",
              note: "Two award-winning butchers, delis and a bakery on the high street.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Stryd+Fawr+Bala",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Fuel &amp; EV</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          <PlaceItem
            place={{
              name: "Cwt Gwyn, Dolgellau",
              note: "LL40 2AB. Petrol & diesel.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Cwt+Gwyn+petrol+Dolgellau+LL40+2AB",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "W D Pugh & Sons, Dolgellau",
              note: "Petrol & diesel.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=W+D+Pugh+and+Sons+Dolgellau",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Gulf, Bala",
              note: "Stryd Fawr, LL23 7AE. Petrol & diesel — there's also an Essar on the A494 just outside Bala, LL23 7UD.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Gulf+petrol+station+Stryd+Fawr+Bala",
              },
            }}
          />
        </ul>
        <div className="flex flex-col rounded-lg border border-ink/10 bg-wool-2 p-5 shadow-sm">
          <p className="font-display text-lg leading-snug text-ink">
            Looking to charge an EV?
          </p>
          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/80">
            Check live charger availability nearby on Zap-Map.{" "}
            <Placeholder>On-site charging — to be confirmed</Placeholder>
          </p>
          <p className="mt-auto pt-4">
            <OutboundButton href="https://www.zap-map.com">
              Zap-Map
            </OutboundButton>
          </p>
        </div>

        <h2 className="pt-4 font-display text-2xl text-ink">Pharmacy</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Rowlands Pharmacy, Dolgellau",
              note: "3 Eldon Square, LL40 1PY.",
              phone: "01341 422404",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Rowlands+Pharmacy+Eldon+Square+Dolgellau+LL40+1PY",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Rowlands Pharmacy, Bala",
              note: "Y Stryd Fawr, LL23 7AG.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Rowlands+Pharmacy+Stryd+Fawr+Bala+LL23+7AG",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Cash &amp; post</h2>
        <p>
          Both towns have cash machines, and you can withdraw cash over the
          counter at the post offices.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Dolgellau Post Office",
              note: "Plas yn Dre, LL40 1AD.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+Post+Office+Plas+yn+Dre+LL40+1AD",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Bala Post Office",
              note: "50 Stryd Fawr, LL23 7AB.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Bala+Post+Office+Stryd+Fawr+LL23+7AB",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Mobile signal</h2>
        <p>
          <Placeholder>
            Honest network-by-network rundown to follow
          </Placeholder>{" "}
          — in the meantime you can check any network&rsquo;s coverage here on
          Ofcom&rsquo;s map.
        </p>
        <p>
          <OutboundButton href="https://checker.ofcom.org.uk/en-gb/mobile-coverage">
            Ofcom coverage checker
          </OutboundButton>
        </p>
      </div>
    </WelcomeShell>
  );
}
