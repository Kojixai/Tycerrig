import type { Metadata } from "next";

/**
 * The welcome pack is for guests only: every /welcome route inherits
 * noindex,nofollow from here. Sub-pages must never set their own `robots`
 * (a page-level value would override this). These routes are also kept out
 * of app/sitemap.ts and the nav array in lib/site.ts.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
