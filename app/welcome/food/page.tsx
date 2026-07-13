import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import PlaceItem from "@/components/welcome/PlaceItem";

export const metadata: Metadata = {
  title: "Food, Pubs & Takeaways — Guest Welcome",
  description:
    "Where to eat out near Tŷ Cerrig — pubs, takeaways and the family's own picks.",
};

export default function Food() {
  return (
    <WelcomeShell slug="food">
      <div className="measure space-y-5 leading-relaxed text-ink/85">
        <h2 className="font-display text-2xl text-ink">Nearest to the site</h2>
        <ul>
          <PlaceItem
            place={{
              name: "Cross Foxes Bar & Grill, Brithdir LL40 2SG",
              note: "At the junction of the A470/A487. Grade II-listed pub at the foot of Cadair Idris, food all day, local ales, dogs welcome in the bar, huge car park that takes campervans.",
              phone: "01341 421001",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Cross+Foxes+Brithdir+LL40+2SG",
              },
            }}
          />
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Rhys &amp; family&rsquo;s picks
        </h2>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold text-ink">Top 3 pubs:</span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Top 3 takeaways:</span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">
              Favourite café / Sunday roast / special-occasion meal:
            </span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Takeaways in Dolgellau
        </h2>
        <ul>
          <PlaceItem
            place={{
              name: "Cosy Fish & Chips, Meyrick Street LL40 1LN",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Cosy+Fish+and+Chips+Meyrick+Street+Dolgellau",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Dolgellau Kebabs, 2 Arran Road",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau+Kebabs+Arran+Road",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "DD's Bakery & Sandwich Bar, Eldon Square",
              note: "Daytime.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=DDs+Bakery+Eldon+Square+Dolgellau",
              },
            }}
          />
        </ul>
        <p>
          Bala also has around seven takeaways on and around Stryd Fawr.
        </p>
      </div>
    </WelcomeShell>
  );
}
