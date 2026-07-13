/**
 * Visibly-unfinished marker for facts still awaiting Rhys's answer or
 * verification ([RHYS]/[VERIFY] in the welcome pack content). Renders a
 * dashed "to follow" chip — never invented content. The full question list
 * lives in docs/TODO-FOR-RHYS.md.
 */
export default function Placeholder({
  children = "Details to follow",
  block = false,
  tone = "light",
}: {
  children?: React.ReactNode;
  /** Whole missing section (a panel) rather than an inline chip. */
  block?: boolean;
  /** "dark" for use on ink backgrounds (the 999 panel). */
  tone?: "light" | "dark";
}) {
  const palette =
    tone === "dark"
      ? "border-wool/50 text-wool/80"
      : "border-stone/60 bg-wool-2/60 text-stone";

  if (block) {
    return (
      <div className={`rounded-lg border border-dashed p-4 text-[0.95rem] italic leading-relaxed ${palette}`}>
        {children}
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded border border-dashed px-2 py-0.5 align-baseline text-[0.8rem] italic leading-snug ${palette}`}
    >
      {children}
    </span>
  );
}
