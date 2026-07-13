import type { LucideIcon } from "lucide-react";
import {
  CircleHelp,
  Compass,
  HeartPulse,
  MessageCircle,
  ShoppingBasket,
  Signpost,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

/**
 * The guest welcome pack (/welcome) — private, noindexed, reached only from
 * the booking confirmation. This array is the single source of card order:
 * the hub grid and every sub-page's previous/next footer both read from it.
 * Deliberately NOT in the `nav` array (lib/site.ts) or app/sitemap.ts.
 */

export type WelcomeSection = {
  slug: string;
  en: string;
  /** Welsh kicker — needs the same native-speaker sign-off as the rest of the site's cy copy. */
  cy: string;
  icon: LucideIcon;
  blurb: string;
};

export const welcomeSections: WelcomeSection[] = [
  {
    slug: "arrival",
    en: "Arrival & Getting Here",
    cy: "Cyrraedd",
    icon: Signpost,
    blurb: "Finding the farm, check-in and what to do when you pull in.",
  },
  {
    slug: "your-pitch",
    en: "Your Pitch & The Stone Barn",
    cy: "Eich Llain a'r Ysgubor",
    icon: Warehouse,
    blurb: "Hook-ups, the shared barn, housekeeping — and the jets.",
  },
  {
    slug: "essentials",
    en: "Local Essentials",
    cy: "Hanfodion Lleol",
    icon: ShoppingBasket,
    blurb: "Supermarkets, fuel, pharmacy, cash and mobile signal.",
  },
  {
    slug: "food",
    en: "Food, Pubs & Takeaways",
    cy: "Bwyd a Thafarndai",
    icon: UtensilsCrossed,
    blurb: "Where to eat out or get a decent chip.",
  },
  {
    slug: "emergencies",
    en: "Emergencies & Health",
    cy: "Argyfwng ac Iechyd",
    icon: HeartPulse,
    blurb: "999 guidance, hospitals, doctors, vets.",
  },
  {
    slug: "things-to-do",
    en: "Things To Do",
    cy: "Pethau i'w Gwneud",
    icon: Compass,
    blurb: "Walks, lakes, steam trains, castles and rainy-day plans.",
  },
  {
    slug: "welsh",
    en: "A Little Welsh",
    cy: "Ychydig o Gymraeg",
    icon: MessageCircle,
    blurb: "A word or two always lands well round here.",
  },
  {
    slug: "faqs",
    en: "FAQs",
    cy: "Cwestiynau Cyffredin",
    icon: CircleHelp,
    blurb: "Quick answers for during your stay.",
  },
];

export function welcomeSection(slug: string): WelcomeSection {
  const section = welcomeSections.find((s) => s.slug === slug);
  if (!section) throw new Error(`Unknown welcome section: ${slug}`);
  return section;
}

export function welcomeNav(slug: string): {
  prev: WelcomeSection | null;
  next: WelcomeSection | null;
} {
  const i = welcomeSections.findIndex((s) => s.slug === slug);
  return {
    prev: i > 0 ? welcomeSections[i - 1] : null,
    next: i >= 0 && i < welcomeSections.length - 1 ? welcomeSections[i + 1] : null,
  };
}

/** "01341 423352" → "tel:01341423352" (spaces stripped, leading + kept). */
export function telHref(display: string): string {
  return `tel:${display.replace(/[^\d+]/g, "")}`;
}
