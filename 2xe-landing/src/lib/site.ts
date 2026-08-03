/**
 * Single source of truth for everything that is *not* copy: contact details,
 * canonical URL, social profiles.
 *
 * TODO(2XE): every value in `contact` and `social` below is a PLACEHOLDER.
 * Replace them with the real details before the site goes live — they are
 * rendered in the header, footer, CTA section and the LocalBusiness JSON-LD.
 */
export const site = {
  name: "2XE",
  /** Used for canonical URLs, sitemap, hreflang and Open Graph. */
  url: "https://2xe.lv",
  founded: "2021",

  contact: {
    email: "info@2xe.lv",
    /** E.164 for `tel:` links. */
    phoneHref: "+37120000000",
    /** Human-readable rendering of the same number. */
    phoneLabel: "+371 20 000 000",
    city: "Rīga",
    country: "LV",
    countryName: { lv: "Latvija", en: "Latvia" },
  },

  social: [
    { name: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  ],
} as const;

export type SocialLink = (typeof site.social)[number];
