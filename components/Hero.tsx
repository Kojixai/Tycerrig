import type { ImageSlot } from "@/lib/images";
import { srcSet } from "@/lib/images";

/**
 * Full-bleed photographic hero: English title in wool-cream Fraunces over
 * a gentle bottom gradient, Welsh beneath as a small-caps kicker.
 */
export default function Hero({
  image,
  title,
  cy,
  subtitle,
  tall = false,
  position,
  children,
}: {
  image: ImageSlot;
  title: string;
  /** Welsh rendering of the title, shown as a small-caps line beneath. */
  cy?: string;
  subtitle: string;
  tall?: boolean;
  /** CSS object-position, for images whose subject sits off-centre. */
  position?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative flex ${tall ? "min-h-[82svh]" : "min-h-[52svh]"} items-end overflow-hidden bg-ink`}>
      <img
        src={`${image.base}-2000.webp`}
        srcSet={srcSet(image)}
        sizes="100vw"
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-40 sm:pb-16">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-wool sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {cy ? (
          <p
            lang="cy"
            className="mt-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-wool/80 sm:text-[0.85rem]"
          >
            {cy}
          </p>
        ) : null}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-wool/90 sm:text-xl">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
