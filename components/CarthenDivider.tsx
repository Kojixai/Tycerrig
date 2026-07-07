/**
 * The carthen (Welsh blanket) stripe — the site's single graphic motif.
 * Thin horizontal bands in the palette on wool ground.
 */
export default function CarthenDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`mx-auto max-w-3xl px-6 ${className}`}>
      <div className="h-[3px] w-full bg-moss" />
      <div className="mt-[5px] h-[2px] w-full bg-bracken" />
      <div className="mt-[5px] h-[2px] w-full bg-river" />
    </div>
  );
}
