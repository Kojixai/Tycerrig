import Link from "next/link";
import { site } from "@/lib/site";

/** Three-stripe carthen mark + "Tŷ Cerrig" in Fraunces, circumflex intact. */
export default function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="4" width="24" height="4" rx="1" className="fill-moss" />
        <rect x="1" y="11" width="24" height="4" rx="1" className="fill-bracken" />
        <rect x="1" y="18" width="24" height="4" rx="1" className="fill-river" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          lang="cy"
          className="font-display text-[1.35rem] font-semibold tracking-tight text-ink"
        >
          Tŷ Cerrig
        </span>
        <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-stone">
          {site.strapline}
        </span>
      </span>
    </Link>
  );
}
