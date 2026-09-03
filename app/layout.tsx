import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "New Hampshire Handyman | Morrison Handyman Services — Repairs, Painting, Carpentry & More",
    template: "%s | Morrison Handyman Services — New Hampshire Handyman",
  },
  description: SITE.description,
  keywords: [
    "New Hampshire handyman",
    "New England handyman",
    "NH handyman services",
    "handyman near me",
    "household repairs New Hampshire",
    "painting contractor NH",
    "carpentry New Hampshire",
    "pressure washing NH",
    "home installations New England",
    "junk removal New Hampshire",
    "trash removal NH",
    "moving help New Hampshire",
    "furniture moving NH",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "New Hampshire Handyman | Morrison Handyman Services",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "New Hampshire Handyman | Morrison Handyman Services",
    description: SITE.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    founder: { "@type": "Person", name: SITE.owner },
    image: `${SITE.url}/images/pressure-washing-deck.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NH",
      addressCountry: "US",
    },
    areaServed: SITE.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
          areaServed: "New Hampshire and New England",
        },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
