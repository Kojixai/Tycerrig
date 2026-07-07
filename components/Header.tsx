import Link from "next/link";
import Wordmark from "./Wordmark";
import { nav, site } from "@/lib/site";

/**
 * Sticky header. Phone number is tappable and visible at every scroll
 * position on every width — this audience phones first (brief A2).
 * Below md the nav sits on its own row (scrollable); never hamburger-only.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-wool/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Wordmark />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] font-medium text-ink underline-offset-4 hover:text-moss hover:underline hover:decoration-bracken hover:decoration-2"
                >
                  {item.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={site.phone.href}
            className="whitespace-nowrap text-[0.95rem] font-semibold text-ink hover:text-moss"
          >
            <span aria-hidden="true" className="mr-1.5 text-bracken">
              ✆
            </span>
            {site.phone.display}
          </a>
          <Link
            href="/caravan-site/#book"
            className="whitespace-nowrap rounded bg-moss px-4 py-2 text-[0.95rem] font-semibold text-wool transition-colors hover:bg-moss-deep"
          >
            Book
          </Link>
        </div>
      </div>
      <nav
        aria-label="Main mobile"
        className="border-t border-ink/10 md:hidden"
      >
        <ul className="flex items-center gap-5 overflow-x-auto px-4 py-2.5">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="whitespace-nowrap text-[0.9rem] font-medium text-ink hover:text-moss"
              >
                {item.en}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
