/**
 * Durable phrasing only — no review counts, nothing that goes stale (brief A3).
 */
const items = [
  "Rated 9.7/10 by Caravan and Motorhome Club members",
  "Dogs very welcome",
  "Riverside pitches",
];

export default function TrustStrip() {
  return (
    <div className="border-y border-ink/10 bg-wool-2">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-[0.95rem] font-medium text-ink"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-bracken" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
