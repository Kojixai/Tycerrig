import { site } from "@/lib/site";

/**
 * The only transaction on this site is leaving it: booking and payment
 * happen on Pitchup or with the Club, never here (council decision).
 */
export default function BookingCTA({
  id,
  note,
}: {
  id?: string;
  note?: string;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-3xl scroll-mt-28 px-6 py-14 text-center"
    >
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Book your stay
      </h2>
      <p
        lang="cy"
        className="mt-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken"
      >
        Archebwch le
      </p>
      <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={site.booking.pitchup}
          target="_blank"
          rel="noopener"
          className="w-full rounded bg-moss px-7 py-3.5 text-[1.05rem] font-semibold text-wool transition-colors hover:bg-moss-deep sm:w-auto"
        >
          Check availability on Pitchup →
        </a>
        <a
          href={site.booking.camc}
          target="_blank"
          rel="noopener"
          className="w-full rounded border-2 border-moss px-7 py-3.5 text-[1.05rem] font-semibold text-moss transition-colors hover:bg-moss hover:text-wool sm:w-auto"
        >
          Book via the Caravan &amp; Motorhome Club →
        </a>
      </div>
      <p className="mx-auto mt-5 max-w-xl text-[0.9rem] leading-relaxed text-stone">
        {note ?? (
          <>
            Tŷ Cerrig is a Certificated Location — Caravan and Motorhome Club
            members only. Booking and payment are handled securely by the Club
            or Pitchup, never on this website.
          </>
        )}
      </p>
      <p className="mt-2 text-[0.9rem] text-stone">
        Or ring us:{" "}
        <a href={site.phone.href} className="font-semibold text-moss hover:underline">
          {site.phone.display}
        </a>
      </p>
    </section>
  );
}
