import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * schema.org ProfessionalService payload.
 *
 * The service catalogue and area served are generated from the same dictionary
 * that renders the page, so structured data can never drift from the copy.
 *
 * TODO(2XE): add `address.streetAddress`, `postalCode` and `openingHours` once
 * the real business details are available — local search results lean on them.
 */
export function StructuredData({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/${locale}`,
    description: dict.meta.description,
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    inLanguage: locale,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressCountry: site.contact.country,
    },
    areaServed: [
      { "@type": "Country", name: "Latvia" },
      { "@type": "Place", name: "Europe" },
    ],
    sameAs: site.social.map((entry) => entry.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.eyebrow,
      itemListElement: dict.services.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.body,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Content is authored in this repository, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
