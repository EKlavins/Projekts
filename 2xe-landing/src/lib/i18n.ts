import { lv } from "./dictionaries/lv";
import { en } from "./dictionaries/en";
import type { Dictionary } from "./dictionaries/types";

export const locales = ["lv", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "lv";

const dictionaries: Record<Locale, Dictionary> = { lv, en };

/** Narrow an arbitrary route segment to a supported locale. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** The locale a language switcher should point at. */
export function otherLocale(locale: Locale): Locale {
  return locale === "lv" ? "en" : "lv";
}

/** Human-readable label for the switcher, always in the *target* language. */
export const localeLabels: Record<Locale, string> = {
  lv: "LV",
  en: "EN",
};

export type { Dictionary };
