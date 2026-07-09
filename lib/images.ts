/**
 * Image slots. Slots marked REAL are the owner's own photographs (from the
 * Tŷ Cerrig Pitchup listing, used with permission — currently 1080px web
 * copies; swap in Rhys's full-resolution originals when available).
 * Slots marked STOCK are licensed Adobe Stock stand-ins (free collection).
 * To swap any image: drop the original into image-src/ with the slot name
 * and run `node scripts/prepare-images.mjs`. See docs/IMAGE-MANIFEST.md.
 */

export type ImageSlot = {
  base: string; // public/images/{base}-2000.webp / -1200.webp
  alt: string;
  width: number;
  height: number;
};

export const images = {
  // REAL — caravan pitched among grazing sheep, farmhouse and sunlit hills
  heroHome: {
    base: "/images/hero-home",
    alt: "A caravan pitched on grass at Tŷ Cerrig with sheep grazing beside it, the stone farmhouse and sunlit hills behind",
    width: 1080,
    height: 810,
  },
  // REAL — elevated evening view over the orchard, hen houses and pitches
  heroSite: {
    base: "/images/hero-site",
    alt: "Evening view over Tŷ Cerrig's orchard and hen houses to caravans pitched along the dry-stone wall beneath the forested hillside",
    width: 1080,
    height: 810,
  },
  // STOCK — walker on a golden ridge
  heroWalks: {
    base: "/images/hero-walks",
    alt: "A walker with poles on a grassy mountain ridge in low golden light",
    width: 2000,
    height: 1333,
  },
  // STOCK — RAF Tornado low level
  heroJets: {
    base: "/images/hero-jets",
    alt: "An RAF Tornado jet banking low and fast against a blurred forested hillside",
    width: 2000,
    height: 1334,
  },
  // STOCK — stone bridge and cottage
  heroHistory: {
    base: "/images/hero-history",
    alt: "An old stone bridge and stone cottage beside a river below moorland hills",
    width: 2000,
    height: 1333,
  },
  // REAL — the tarmac site lane with a caravan pitched ahead
  heroFindUs: {
    base: "/images/hero-findus",
    alt: "The smooth tarmac lane through Tŷ Cerrig with a caravan pitched on the grass ahead and hills in the distance",
    width: 1080,
    height: 810,
  },
  // REAL — yellow campervan on a hardstanding pitch, sheep field behind
  siteCamper: {
    base: "/images/site-camper",
    alt: "A yellow campervan with its roof up on a hardstanding pitch at Tŷ Cerrig, sheep grazing beyond the fence below the conifer hillside",
    width: 1080,
    height: 810,
  },
  // STOCK — lamb at dusk (reserved, not currently placed)
  farmLamb: {
    base: "/images/farm-lamb",
    alt: "A young lamb lying on a grassy farm track in evening light, the flock behind",
    width: 2000,
    height: 1333,
  },
  // STOCK — sheep and farmhouse (reserved, not currently placed)
  farmSheep: {
    base: "/images/farm-sheep",
    alt: "Sheep grazing a hillside field with a stone farmhouse among autumn trees beyond",
    width: 2000,
    height: 698,
  },
} as const satisfies Record<string, ImageSlot>;

/** The owner's real photographs, shown on the Gallery page. */
export const gallery: ImageSlot[] = [
  images.heroHome,
  images.siteCamper,
  images.heroSite,
  images.heroFindUs,
];

export function srcSet(img: ImageSlot) {
  return `${img.base}-1200.webp 1200w, ${img.base}-2000.webp 2000w`;
}
