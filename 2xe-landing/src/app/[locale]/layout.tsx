import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

/*
 * `latin-ext` is not optional here — Latvian needs ā, č, ē, ģ, ī, ķ, ļ, ņ, š,
 * ū and ž, none of which live in the `latin` subset.
 */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

/** Sets the `.js` hook that gates scroll-reveal, before the first paint. */
const JS_FLAG = "document.documentElement.classList.add('js')";

const OG_LOCALE: Record<Locale, string> = { lv: "lv_LV", en: "en_GB" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0e1114",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { lv: "/lv", en: "/en", "x-default": "/lv" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: `${site.url}/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="min-h-dvh antialiased">
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
