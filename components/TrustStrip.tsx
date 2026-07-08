/**
 * One-line continuously scrolling banner. Durable phrasing only — no
 * review counts, nothing that goes stale (brief A3). The track is
 * duplicated so the loop is seamless; animation pauses for
 * prefers-reduced-motion.
 */
const items = [
  "Rated 9.7/10 by Caravan and Motorhome Club members",
  "Dogs very welcome",
  "Riverside pitches",
  "Wifi at every pitch",
  "Twin-axles welcome",
  "Half a mile off the A494",
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap text-[0.95rem] font-medium text-ink"
        >
          <span aria-hidden="true" className="mx-6 h-2 w-2 rounded-full bg-bracken" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TrustStrip() {
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-wool-2 py-3.5">
      <div className="flex w-max animate-marquee">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
