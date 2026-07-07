export type FaqItem = { q: string; a: string };

/**
 * No-JS accordion (details/summary) + FAQPage structured data (brief A4).
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

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
          <p className="measure pb-6 leading-relaxed text-ink/85">{item.a}</p>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
