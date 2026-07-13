/**
 * Outbound link (Google Maps, AllTrails, Zap-Map, DefibFinder…) as a
 * comfortable tap-target pill. Same target/rel convention as WalkCard.
 */
export default function OutboundButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex min-h-[2.5rem] items-center gap-1.5 rounded border border-moss/40 px-3.5 py-1.5 text-sm font-semibold text-moss transition-colors hover:bg-moss hover:text-wool"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
