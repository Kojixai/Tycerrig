import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import PlaceItem from "@/components/welcome/PlaceItem";
import OutboundButton from "@/components/welcome/OutboundButton";

export const metadata: Metadata = {
  title: "Local Essentials — Guest Welcome",
  description:
    "Supermarkets, fuel, EV charging, pharmacy, cash and mobile signal around Dolgellau and Bala.",
};

export default function Essentials() {
  return (
    <WelcomeShell slug="essentials">
      <div className="measure space-y-5 leading-relaxed text-ink/85">
        <h2 className="font-display text-2xl text-ink">
          Supermarkets &amp; food shopping
        </h2>
        <ul>
          <PlaceItem
            place={{
              name: "Co-op, 14 Maes Talaran, Dolgellau LL40 1HR",
              note: "Main supermarket in Dolgellau.",
              phone: "01341 423352",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Co-op+Maes+Talaran+Dolgellau+LL40+1HR",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Co-op, 78–86 Stryd Fawr, Bala LL23 7AD",
              phone: "01678 521150",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Co-op+Stryd+Fawr+Bala+LL23+7AD",
              },
            }}
          />
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

        <h2 className="pt-4 font-display text-2xl text-ink">Fuel</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Cwt Gwyn, Dolgellau LL40 2AB",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Cwt+Gwyn+petrol+Dolgellau+LL40+2AB",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "W D Pugh & Sons, Dolgellau",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=W+D+Pugh+and+Sons+Dolgellau",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Gulf, Stryd Fawr, Bala LL23 7AE",
              note: "There's also an Essar on the A494 just outside Bala, LL23 7UD.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Gulf+petrol+station+Stryd+Fawr+Bala",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">EV charging</h2>
        <p>
          Check live availability on Zap-Map.{" "}
          <Placeholder>On-site charging — to be confirmed</Placeholder>
        </p>
        <p>
          <OutboundButton href="https://www.zap-map.com">
            Zap-Map
          </OutboundButton>
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">Pharmacy</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Rowlands Pharmacy, 3 Eldon Square, Dolgellau LL40 1PY",
              phone: "01341 422404",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Rowlands+Pharmacy+Eldon+Square+Dolgellau+LL40+1PY",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Cash &amp; post</h2>
        <p>
          Dolgellau and Bala both have banks/post offices.{" "}
          <Placeholder>
            Current branches to be verified — rural branches close often
          </Placeholder>
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">Mobile signal</h2>
        <p>
          <Placeholder>
            Honest network-by-network rundown to follow
          </Placeholder>
        </p>
      </div>
    </WelcomeShell>
  );
}
