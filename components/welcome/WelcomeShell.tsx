import Link from "next/link";
import CarthenDivider from "@/components/CarthenDivider";
import { welcomeNav, welcomeSection } from "@/lib/welcome";

/**
 * Frame for every welcome-pack sub-page: back link to the hub, bilingual
 * heading, carthen stripe, prose column, and an in-flow previous/next
 * footer driven by the section order in lib/welcome.ts.
 */
export default function WelcomeShell({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const section = welcomeSection(slug);
  const { prev, next } = welcomeNav(slug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Link
        href="/welcome/"
        className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-stone transition-colors hover:text-moss"
      >
        ← Back to your welcome pack
      </Link>

      <h1 className="mt-6 font-display text-4xl text-ink">{section.en}</h1>
      <p
        lang="cy"
        className="mt-0.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken"
      >
        {section.cy}
      </p>

      <CarthenDivider className="mt-8 px-0!" />

      <div className="mt-8">{children}</div>

      <nav aria-label="Welcome pack pages" className="mt-14 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/welcome/${prev.slug}/`}
            className="group flex flex-col rounded-lg border border-ink/10 bg-wool-2 px-5 py-5 shadow-sm transition-all hover:border-moss hover:shadow"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone">
              ← Previous
            </span>
            <span className="mt-1.5 font-display text-lg leading-tight text-ink group-hover:text-moss">
              {prev.en}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/welcome/${next.slug}/`}
            className="group flex flex-col rounded-lg border border-ink/10 bg-wool-2 px-5 py-5 text-right shadow-sm transition-all hover:border-moss hover:shadow"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone">
              Next →
            </span>
            <span className="mt-1.5 font-display text-lg leading-tight text-ink group-hover:text-moss">
              {next.en}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </nav>
    </div>
  );
}
