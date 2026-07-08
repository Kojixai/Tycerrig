import Link from "next/link";
import { site } from "@/lib/site";

export default function Wordmark() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span
        lang="cy"
        className="font-display text-[1.35rem] tracking-tight text-ink"
      >
        Tŷ Cerrig
      </span>
      <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-stone">
        {site.strapline}
      </span>
    </Link>
  );
}
