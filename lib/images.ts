/**
 * Image slots. Current files are licensed Adobe Stock stand-ins (free
 * collection) — evocative of the place but NOT photos of Tŷ Cerrig itself.
 * Swap each for real photography from the site visit by dropping the
 * original into image-src/ with the same name and running
 * `node scripts/prepare-images.mjs`. See docs/IMAGE-MANIFEST.md.
 */

export type ImageSlot = {
  base: string; // public/images/{base}-2000.webp / -1200.webp
  alt: string;
  width: number;
  height: number; // of the 2000px rendition
};

export const images = {
  heroHome: {
    base: "/images/hero-home",
    alt: "A green upland valley with wooded slopes and morning mist clearing from the hills",
    width: 2000,
    height: 888,
  },
  heroSite: {
    base: "/images/hero-site",
    alt: "A clear rocky stream running between conifer-clad banks",
    width: 2000,
    height: 1333,
  },
  heroWalks: {
    base: "/images/hero-walks",
    alt: "A walker with poles on a grassy mountain ridge in low golden light",
    width: 2000,
    height: 1333,
  },
  heroJets: {
    base: "/images/hero-jets",
    alt: "An RAF Tornado jet banking low and fast against a blurred forested hillside",
    width: 2000,
    height: 1334,
  },
  heroHistory: {
    base: "/images/hero-history",
    alt: "An old stone bridge and stone cottage beside a river below moorland hills",
    width: 2000,
    height: 1333,
  },
  heroFindUs: {
    base: "/images/hero-findus",
    alt: "Green mountain ridges under a blue summer sky with scattered cloud",
    width: 2000,
    height: 980,
  },
  farmSheep: {
    base: "/images/farm-sheep",
    alt: "Sheep grazing a hillside field with a stone farmhouse among autumn trees beyond",
    width: 2000,
    height: 698,
  },
  farmLamb: {
    base: "/images/farm-lamb",
    alt: "A young lamb lying on a grassy farm track in evening light, the flock behind",
    width: 2000,
    height: 1333,
  },
} as const satisfies Record<string, ImageSlot>;

export function srcSet(img: ImageSlot) {
  return `${img.base}-1200.webp 1200w, ${img.base}-2000.webp 2000w`;
}
