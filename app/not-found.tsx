import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-bracken">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        <span lang="cy">Ar goll?</span> · Lost?
      </h1>
      <p className="measure mx-auto mt-5 text-lg leading-relaxed text-ink/85">
        Happens to the best sat-navs around here. This page doesn&rsquo;t
        exist — but the farm does, and it&rsquo;s easy to find.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded bg-moss px-7 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
        >
          Back to the farm
        </Link>
        <Link
          href="/find-us/"
          className="rounded border-2 border-moss px-7 py-3 font-semibold text-moss transition-colors hover:bg-moss hover:text-wool"
        >
          Find us
        </Link>
      </div>
    </div>
  );
}
