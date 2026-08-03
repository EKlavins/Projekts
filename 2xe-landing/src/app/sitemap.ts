import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "lv" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((alt) => [alt, `${site.url}/${alt}`]),
      ),
    },
  }));
}
