import Link from "next/link";
import type { Metadata } from "next";
import CarthenDivider from "@/components/CarthenDivider";
import { welcomeSections } from "@/lib/welcome";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Croeso — Your Guest Welcome Pack",
  description:
    "Everything you'll need during your stay at Tŷ Cerrig — arrival, your pitch, local essentials, food, emergencies and things to do.",
};

export default function Welcome() {
  return (
    <>
      <section className="bg-wool-2">
        <div className="mx-auto max-w-4xl px-6 pb-10 pt-14 sm:pt-16">
          <h1 lang="cy" className="font-display text-4xl text-ink sm:text-5xl">
            Croeso i Tŷ Cerrig
          </h1>
          <p className="mt-0.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken">
            Welcome — your guest information
          </p>
          <p className="measure mt-5 text-lg leading-relaxed text-ink/85">
            Welcome to the farm. Everything you&rsquo;ll need during your stay
            is here — from where to pitch to where to get a decent chip.
            Bookmark this page; it&rsquo;s yours for the week.
          </p>
        </div>
      </section>

      <CarthenDivider className="mt-10 max-w-4xl!" />

      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {welcomeSections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/welcome/${s.slug}/`}
                className="group flex min-h-[4.5rem] items-center gap-4 rounded-lg border border-ink/10 bg-wool-2 px-5 py-5 shadow-sm transition-all hover:border-moss hover:shadow"
              >
                <span className="shrink-0 text-moss transition-colors group-hover:text-bracken">
                  <Icon size={32} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-lg leading-tight text-ink group-hover:text-moss">
                    {s.en}
                  </span>
                  <span
                    lang="cy"
                    className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
                  >
                    {s.cy}
                  </span>
                  <span className="mt-1.5 text-[0.85rem] leading-snug text-ink/70">
                    {s.blurb}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-center leading-relaxed text-ink/85">
          Need anything during your stay? Ring us on{" "}
          <a
            href={site.phone.href}
            className="font-semibold text-moss hover:underline"
          >
            {site.phone.display}
          </a>
          .
        </p>
        <p className="mt-4 text-center text-[0.9rem] italic text-stone">
          This page is just for our guests — it isn&rsquo;t listed publicly.
        </p>
      </section>
    </>
  );
}
