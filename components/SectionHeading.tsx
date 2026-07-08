/**
 * English leads; Welsh follows as a small-caps kicker underneath.
 */
export default function SectionHeading({
  en,
  cy,
  className = "",
}: {
  en: string;
  cy: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-display text-3xl text-ink">{en}</h2>
      <p
        lang="cy"
        className="mt-0.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken"
      >
        {cy}
      </p>
    </div>
  );
}
