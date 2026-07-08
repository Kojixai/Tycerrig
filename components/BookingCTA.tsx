import { site } from "@/lib/site";

/**
 * The only transaction on this site is leaving it: booking and payment
 * happen on Pitchup or with the Club, never here (council decision).
 * `inverted` renders the panel as a full-width moss band with the button
 * colours flipped — used on the home page to make booking unmissable.
 */
export default function BookingCTA({
  id,
  note,
  inverted = false,
}: {
  id?: string;
  note?: string;
  inverted?: boolean;
}) {
  const noteText = note ?? (
    <>
      Tŷ Cerrig is a Certificated Location — Caravan and Motorhome Club
      members only. Booking and payment are handled securely by the Club or
      Pitchup, never on this website.
    </>
  );

  return (
    <section
      id={id}
      className={`scroll-mt-28 ${inverted ? "bg-moss" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <h2
          className={`font-display text-2xl sm:text-3xl ${inverted ? "text-wool" : "text-ink"}`}
        >
          Book your stay
        </h2>
        <p
          lang="cy"
          className={`mt-0.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] ${
            inverted ? "text-wool/70" : "text-bracken"
          }`}
        >
          Archebwch le
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.booking.pitchup}
            target="_blank"
            rel="noopener"
            className={`w-full rounded px-7 py-3.5 text-[1.05rem] font-semibold transition-colors sm:w-auto ${
              inverted
                ? "bg-wool text-moss hover:bg-wool-2"
                : "bg-moss text-wool hover:bg-moss-deep"
            }`}
          >
            Check availability on Pitchup →
          </a>
          <a
            href={site.booking.camc}
            target="_blank"
            rel="noopener"
            className={`w-full rounded border-2 px-7 py-3.5 text-[1.05rem] font-semibold transition-colors sm:w-auto ${
              inverted
                ? "border-wool text-wool hover:bg-wool hover:text-moss"
                : "border-moss text-moss hover:bg-moss hover:text-wool"
            }`}
          >
            Book via the Caravan &amp; Motorhome Club →
          </a>
        </div>
        <p
          className={`mx-auto mt-5 max-w-xl text-[0.9rem] leading-relaxed ${
            inverted ? "text-wool/75" : "text-stone"
          }`}
        >
          {noteText}
        </p>
        <p className={`mt-2 text-[0.9rem] ${inverted ? "text-wool/75" : "text-stone"}`}>
          Or ring us:{" "}
          <a
            href={site.phone.href}
            className={`font-semibold hover:underline ${inverted ? "text-wool" : "text-moss"}`}
          >
            {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
