import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-wool">
      {/* Carthen trim */}
      <div aria-hidden="true">
        <div className="h-1 bg-moss" />
        <div className="h-1 bg-bracken" />
        <div className="h-1 bg-river" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p lang="cy" className="font-display text-xl font-semibold">
            Tŷ Cerrig
          </p>
          <address className="mt-3 text-[0.95rem] not-italic leading-relaxed text-wool/80">
            {site.address.line1}, {site.address.village},
            <br />
            {site.address.town}, {site.address.county} {site.address.postcode}
          </address>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-wool/80">
            <a href={site.phone.href} className="hover:text-wool">
              {site.phone.display}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-wool">
              {site.email}
            </a>
          </p>
          <p className="mt-3 text-[0.85rem] text-wool/60">
            GPS {site.gps.lat}, {site.gps.lng}
            {site.what3words ? (
              <>
                <br />
                what3words: {site.what3words}
              </>
            ) : null}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-wool/60">
            <span lang="cy">Y Wefan</span> · The Site
          </p>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-wool/80 hover:text-wool">
                  <span lang="cy">{item.cy}</span>
                  <span className="text-wool/50"> · {item.en}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy/" className="text-wool/80 hover:text-wool">
                Privacy notice
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-wool/60">
            <span lang="cy">Archebu</span> · Booking
          </p>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <a
                href={site.booking.pitchup}
                target="_blank"
                rel="noopener"
                className="text-wool/80 hover:text-wool"
              >
                Tŷ Cerrig on Pitchup ↗
              </a>
            </li>
            <li>
              <a
                href={site.booking.camc}
                target="_blank"
                rel="noopener"
                className="text-wool/80 hover:text-wool"
              >
                Caravan &amp; Motorhome Club listing ↗
              </a>
            </li>
          </ul>
          <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-wool/60">
            Booking and payment are handled by the Club or Pitchup — never on
            this website.
          </p>
        </div>
      </div>
      <div className="border-t border-wool/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-4 text-[0.8rem] text-wool/50">
          <p>
            <span lang="cy">Croeso i&rsquo;r fferm</span> — a working sheep farm in
            Eryri National Park
          </p>
          <p>
            <span lang="cy">Gwefan gan</span> · Site by{" "}
            <span className="text-wool/70">Blandfords</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
