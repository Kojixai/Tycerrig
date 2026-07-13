export type GuestFaqItem = { q: string; a: React.ReactNode };

/**
 * No-JS accordion for the guest FAQs — same details/summary styling as
 * Faq.tsx, but answers take ReactNode (placeholder chips, internal links)
 * and there is deliberately no FAQPage JSON-LD: these pages are noindexed.
 */
export default function GuestFaq({ items }: { items: GuestFaqItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <details
          key={item.q}
          className="group border-t border-ink/15 last:border-b"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-ink marker:content-none hover:text-moss [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl font-normal text-bracken transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="measure pb-6 leading-relaxed text-ink/85">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
