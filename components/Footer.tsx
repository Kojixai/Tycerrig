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
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2">
        <div className="text-[0.9rem]">
          <p lang="cy" className="font-display text-lg font-semibold">
            Tŷ Cerrig
          </p>
          <address className="mt-2 not-italic leading-relaxed text-wool/75">
            {site.address.line1}, {site.address.village},{" "}
            {site.address.town}, {site.address.county} {site.address.postcode}
          </address>
          <p className="mt-2 leading-relaxed text-wool/75">
            <a href={site.phone.href} className="hover:text-wool">
              {site.phone.display}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-wool">
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-[0.8rem] text-wool/50">
            GPS {site.gps.lat}, {site.gps.lng}
            {site.what3words ? ` · what3words: ${site.what3words}` : null}
          </p>
        </div>
        <div className="text-[0.9rem]">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-wool/75 hover:text-wool">
                  {item.en}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy/" className="text-wool/75 hover:text-wool">
                Privacy notice
              </Link>
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <a
              href={site.booking.pitchup}
              target="_blank"
              rel="noopener"
              className="text-wool/75 hover:text-wool"
            >
              Tŷ Cerrig on Pitchup ↗
            </a>
            <br />
            <a
              href={site.booking.camc}
              target="_blank"
              rel="noopener"
              className="text-wool/75 hover:text-wool"
            >
              Caravan &amp; Motorhome Club listing ↗
            </a>
          </p>
          <p className="mt-3 text-[0.8rem] leading-relaxed text-wool/50">
            Booking and payment are handled by the Club or Pitchup — never on
            this website.
          </p>
        </div>
      </div>
      <div className="border-t border-wool/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-3.5 text-[0.8rem] text-wool/50">
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
