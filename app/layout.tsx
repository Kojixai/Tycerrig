import type { Metadata } from "next";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/figtree";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tŷ Cerrig, Rhydymain — Caravan Site between Dolgellau & Bala, Eryri",
    template: "%s | Tŷ Cerrig, Rhydymain",
  },
  description: site.description,
  openGraph: {
    siteName: "Tŷ Cerrig",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

/** Campground structured data — the name-collision defence (brief A4). */
const campgroundSchema = {
  "@context": "https://schema.org",
  "@type": "Campground",
  name: "Tŷ Cerrig CL",
  alternateName: "Ty Cerrig Certificated Location, Rhydymain",
  description: site.description,
  url: site.url,
  telephone: "+447733338789",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tŷ Cerrig, Rhydymain",
    addressLocality: "Dolgellau",
    addressRegion: "Gwynedd",
    postalCode: "LL40 2BB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.gps.lat,
    longitude: site.gps.lng,
  },
  petsAllowed: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Electric hook-up", value: true },
    { "@type": "LocationFeatureSpecification", name: "Drinking water at pitch", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wifi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Shower", value: true },
    { "@type": "LocationFeatureSpecification", name: "Guest kitchen", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-moss focus:px-4 focus:py-2 focus:font-semibold focus:text-wool"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(campgroundSchema) }}
        />
      </body>
    </html>
  );
}
