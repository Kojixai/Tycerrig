import type { ImageSlot } from "@/lib/images";
import { srcSet } from "@/lib/images";

/**
 * Full-bleed photographic hero: wool-cream Fraunces over a gentle bottom
 * gradient for legibility (brief A2). Welsh title leads; English subline.
 */
export default function Hero({
  image,
  title,
  titleLang = "cy",
  subtitle,
  tall = false,
  children,
}: {
  image: ImageSlot;
  title: string;
  titleLang?: "cy" | "en";
  subtitle: string;
  tall?: boolean;
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
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-40 sm:pb-16">
        <h1
          lang={titleLang === "cy" ? "cy" : undefined}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-wool sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-wool/90 sm:text-xl">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
