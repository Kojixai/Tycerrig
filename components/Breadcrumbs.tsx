import { site } from "@/lib/site";

/** BreadcrumbList structured data only — the site is flat, so no visual trail. */
export default function Breadcrumbs({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
