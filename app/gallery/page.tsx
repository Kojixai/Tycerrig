import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingCTA from "@/components/BookingCTA";
import SectionHeading from "@/components/SectionHeading";
import { gallery, srcSet } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery — Photos of the Site",
  description:
    "Photographs of Tŷ Cerrig caravan site at Rhydymain: riverside pitches, the farm, grazing sheep and the hills of Eryri (Snowdonia) around the Wnion valley.",
};

export default function Gallery() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <SectionHeading en="Gallery" cy="Oriel" className="text-center" />
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-ink/75">
          The site as it actually is — no filters needed in this valley.
          Click any photo for the full-size version.
        </p>
      </div>
      <Breadcrumbs name="Gallery" path="/gallery/" />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((img) => (
            <a
              key={img.base}
              href={`${img.base}-2000.webp`}
              target="_blank"
              rel="noopener"
              className="group overflow-hidden rounded-lg"
            >
              <img
                src={`${img.base}-1200.webp`}
                srcSet={srcSet(img)}
                sizes="(min-width: 640px) 50vw, 100vw"
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.85rem] text-stone">
          More photos coming after lambing — the camera roll fills up fast in
          spring.
        </p>
      </section>

      <BookingCTA />
    </>
  );
}
