import Link from "next/link";
import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import OutboundButton from "@/components/welcome/OutboundButton";
import GuestFaq, { type GuestFaqItem } from "@/components/welcome/GuestFaq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — Guest Welcome",
  description: "Quick answers for during your stay at Tŷ Cerrig.",
};

const linkClass = "font-semibold text-moss hover:underline";

const items: GuestFaqItem[] = [
  {
    q: "Is the tap water drinkable?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "Can friends or family visit during our stay?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "Where can I dry wet walking gear?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "Can I charge an e-bike?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "What do I do with my chemical toilet cassette?",
    a: (
      <p>
        See{" "}
        <Link href="/welcome/your-pitch/" className={linkClass}>
          Your Pitch &amp; The Stone Barn
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Is there anywhere to wash muddy dogs/boots?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "Can we extend our stay?",
    a: (
      <div className="space-y-3">
        <p>
          Contact Rhys on{" "}
          <a href={site.phone.href} className={linkClass}>
            {site.phone.display}
          </a>
          , or rebook via Pitchup or the Caravan and Motorhome Club.
        </p>
        <p className="flex flex-wrap gap-3">
          <OutboundButton href={site.booking.pitchup}>Pitchup</OutboundButton>
          <OutboundButton href={site.booking.camc}>
            Caravan &amp; Motorhome Club
          </OutboundButton>
        </p>
      </div>
    ),
  },
  {
    q: "What are those low-flying jets?",
    a: (
      <p>
        See{" "}
        <Link href="/welcome/your-pitch/" className={linkClass}>
          Your Pitch &amp; The Stone Barn
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Do you sell eggs/firewood/anything from the farm?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
  {
    q: "Bin day / what happens with recycling?",
    a: <Placeholder>Answer to follow</Placeholder>,
  },
];

export default function Faqs() {
  return (
    <WelcomeShell slug="faqs">
      <GuestFaq items={items} />
    </WelcomeShell>
  );
}
