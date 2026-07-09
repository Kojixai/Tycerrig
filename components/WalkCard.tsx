export type Walk = {
  name: string;
  welshName?: string;
  meta: string; // e.g. "10 minutes' drive · easy · very dog-friendly"
  body: string;
  route?: { href: string; label: string };
};

export default function WalkCard({ walk }: { walk: Walk }) {
  return (
    <article className="border-t border-ink/15 py-8 first:border-t-0">
      <h3 className="font-display text-xl text-ink sm:text-2xl">
        {walk.name}
        {walk.welshName ? (
          <span lang="cy" className="font-normal text-stone">
            {" "}
            · {walk.welshName}
          </span>
        ) : null}
      </h3>
      <p className="mt-1.5 text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-bracken">
        {walk.meta}
      </p>
      <p className="measure mt-3 leading-relaxed text-ink/85">{walk.body}</p>
      {walk.route ? (
        <a
          href={walk.route.href}
          target="_blank"
          rel="noopener"
          className="mt-3 inline-block font-semibold text-moss underline decoration-moss/40 underline-offset-4 hover:decoration-moss"
        >
          {walk.route.label} ↗
        </a>
      ) : null}
    </article>
  );
}
