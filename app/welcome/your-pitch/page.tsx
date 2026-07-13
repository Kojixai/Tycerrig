import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";

export const metadata: Metadata = {
  title: "Your Pitch & The Stone Barn — Guest Welcome",
  description:
    "Hook-ups, the shared Stone Barn facilities, Wi-Fi, housekeeping — and the low-flying jets.",
};

export default function YourPitch() {
  return (
    <WelcomeShell slug="your-pitch">
      <div className="measure space-y-5 leading-relaxed text-ink/85">
        <h2 className="font-display text-2xl text-ink">Every pitch has</h2>
        <ul className="space-y-3">
          <li>
            Electric hook-up{" "}
            <Placeholder>Amperage to confirm</Placeholder>
          </li>
          <li>
            Access to fresh running water from the creek{" "}
            <Placeholder>
              Drinking-water tap location to confirm — please don&rsquo;t
              drink from the creek in the meantime
            </Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">
          The Stone Barn (shared facilities)
        </h2>
        <ul className="space-y-3">
          <li>
            Washing machine — £5 per wash{" "}
            <Placeholder>Price and how to pay to be confirmed</Placeholder>
          </li>
          <li>Two ovens</li>
          <li>Dishwasher</li>
          <li>Fridge &amp; freezer</li>
          <li>Plates, cutlery &amp; crockery</li>
          <li>
            <Placeholder>
              Full list of smaller appliances to follow
            </Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Wi-Fi &amp; TV</h2>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold text-ink">Wi-Fi:</span>{" "}
            <Placeholder>Network name and password to follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">TV:</span>{" "}
            <Placeholder>Details to follow</Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">Housekeeping</h2>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold text-ink">Bins &amp; recycling:</span>{" "}
            <Placeholder>
              Where, what&rsquo;s separated and collection day to follow
            </Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">
              Chemical toilet disposal point:
            </span>{" "}
            Please — no chemical waste in the creek or drains.{" "}
            <Placeholder>Location and any rules to follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Grey water:</span>{" "}
            <Placeholder>Details to follow</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Quiet hours:</span>{" "}
            <Placeholder>Times to confirm</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Dogs:</span>{" "}
            <Placeholder>Rules to confirm</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Fires &amp; BBQs:</span>{" "}
            <Placeholder>Rules to confirm</Placeholder>
          </li>
          <li>
            <span className="font-semibold text-ink">Visitors:</span>{" "}
            <Placeholder>Details to follow</Placeholder>
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-ink">The jets</h2>
        <p>
          You may notice low-flying military aircraft — you&rsquo;re near the
          famous Mach Loop, where RAF and allied pilots train through the
          valleys. It&rsquo;s loud, brief, and honestly one of the best free
          airshows in Britain. Aviation photographers travel from all over the
          world for it.
        </p>
      </div>
    </WelcomeShell>
  );
}
