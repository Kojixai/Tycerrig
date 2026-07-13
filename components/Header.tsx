"use client";

import { useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import { nav, site } from "@/lib/site";

/**
 * Sticky header: wordmark left; phone icon, Book button and the menu
 * toggle right. On desktop (lg+) the nav sits inline in the bar; below
 * that the three carthen stripes double as the hamburger and the menu
 * drops down accordion-style beneath the bar.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-wool/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-ink transition-colors hover:text-moss"
            >
              {item.en}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={site.phone.href}
            aria-label={`Ring us on ${site.phone.display}`}
            title={site.phone.display}
            className="flex h-10 w-10 items-center justify-center rounded-full text-moss transition-colors hover:bg-moss hover:text-wool"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <Link
            href="/caravan-site/#book"
            className="whitespace-nowrap rounded bg-moss px-4 py-2 text-[0.95rem] font-semibold text-wool transition-colors hover:bg-moss-deep"
          >
            Book
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded hover:bg-wool-2 lg:hidden"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                aria-hidden="true"
                stroke="var(--color-ink)"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M4 4 L18 18 M18 4 L4 18" />
              </svg>
            ) : (
              <svg width="24" height="20" viewBox="0 0 24 20" aria-hidden="true">
                <rect x="0" y="1" width="24" height="3.5" rx="1" className="fill-moss" />
                <rect x="0" y="8.25" width="24" height="3.5" rx="1" className="fill-bracken" />
                <rect x="0" y="15.5" width="24" height="3.5" rx="1" className="fill-river" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        id="site-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-ink/10" : "grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Main menu" className="overflow-hidden">
          <ul className="mx-auto max-w-6xl px-4 sm:px-6">
            {nav.map((item) => (
              <li
                key={item.href}
                className="border-t border-ink/10 first:border-t-0"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group block py-3.5"
                >
                  <span className="font-display text-lg text-ink group-hover:text-moss">
                    {item.en}
                  </span>
                  <span
                    lang="cy"
                    className="mt-0.5 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone"
                  >
                    {item.cy}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
