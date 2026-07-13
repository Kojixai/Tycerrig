import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import OutboundButton from "@/components/welcome/OutboundButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Arrival & Getting Here — Guest Welcome",
  description:
    "Finding Tŷ Cerrig, the approach from the A494, and check-in details for your stay.",
};

export default function Arrival() {
  return (
    <WelcomeShell slug="arrival">
      <div className="measure space-y-5 leading-relaxed text-ink/85">
        <h2 className="font-display text-2xl text-ink">Finding us</h2>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold text-ink">Address:</span> Tŷ Cerrig,
            Rhydymain, Dolgellau, Gwynedd LL40 2BB
          </li>
          <li>
            <span className="font-semibold text-ink">
              what3words (site entrance):
            </span>{" "}
            {site.what3words ?? <Placeholder>To follow</Placeholder>}
          </li>
          <li>
            <span className="font-semibold text-ink">
              what3words (your pitch area, for emergency services):
            </span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
        </ul>
        <p>
          The postcode is shared with our neighbours, so trust the pin below
          over the sat-nav for the final half mile.
        </p>
        <p>
          <OutboundButton
            href={`https://www.google.com/maps/search/?api=1&query=${site.gps.lat},${site.gps.lng}`}
          >
            Open the pin in Google Maps
          </OutboundButton>
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Final approach from the A494
        </h2>
        <p>
          Leave the A494 at the Rhydymain turning and follow the lane down.
          Cross the first bridge and keep following the lane, then take the
          left over a second bridge and you&rsquo;re into the site. You can
          see the site from the road in both directions, so you&rsquo;ll spot
          where you&rsquo;re heading before you&rsquo;re there.
        </p>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Check-in &amp; check-out
        </h2>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold text-ink">Check-in from:</span>{" "}
            <Placeholder>Time to confirm</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Check-out by:</span>{" "}
            <Placeholder>Time to confirm</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Arriving late?</span>{" "}
            <Placeholder>Details to follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">On arrival:</span>{" "}
            <Placeholder>
              Where to pull in and who to find — details to follow
            </Placeholder>
          </li>
        </ul>
      </div>
    </WelcomeShell>
  );
}
