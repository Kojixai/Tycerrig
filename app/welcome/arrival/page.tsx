import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";

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
            <span className="font-semibold text-ink">Google Maps pin:</span>{" "}
            <Placeholder>Exact pin for the site entrance to follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">
              what3words (site entrance):
            </span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">
              what3words (your pitch area, for emergency services):
            </span>{" "}
            <Placeholder>To follow</Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          Final approach from the A494
        </h2>
        <Placeholder block>
          Turn-by-turn directions to follow — we&rsquo;re confirming the exact
          route and any cautions for larger outfits.
        </Placeholder>

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
