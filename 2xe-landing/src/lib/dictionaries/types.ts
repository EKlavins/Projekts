import type { IconName } from "@/components/ui/Icon";
import type { WorkId } from "@/lib/work";

/**
 * The contract every locale must satisfy. Adding a field here is a compile
 * error until *every* dictionary provides it, which is what keeps LV and EN
 * from drifting apart.
 */

export interface Spec {
  value: string;
  label: string;
}

export interface Industry {
  label: string;
  icon: IconName;
}

/**
 * A stat is either animated (`numeric`) or static (`text`) — never both.
 */
export interface Stat {
  numeric?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
  label: string;
  note: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  body: string;
}

export interface TextItem {
  title: string;
  body: string;
}

export interface MaterialGroup {
  name: string;
  tags: string[];
  body: string;
  featured?: boolean;
}

/** Captions for one gallery entry; the image itself lives in lib/work.ts. */
export interface WorkCopy {
  title: string;
  body: string;
  tags: string[];
  alt: string;
}

export interface SpecCard {
  label: string;
  value: string;
  body: string;
}

export interface Dictionary {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    label: string;
    services: string;
    work: string;
    materials: string;
    process: string;
    capabilities: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    switchLanguage: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    specs: Spec[];
    figureAlt: string;
  };
  trust: {
    heading: string;
    industries: Industry[];
    stats: Stat[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceItem[];
  };
  why: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: TextItem[];
  };
  work: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    /** Every WorkId must be captioned, in every language. */
    items: Record<WorkId, WorkCopy>;
  };
  materials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    groups: MaterialGroup[];
    featuredBadge: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: TextItem[];
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    specs: SpecCard[];
  };
  cta: {
    heading: string;
    subtitle: string;
    primary: string;
    secondary: string;
    note: string;
  };
  footer: {
    tagline: string;
    columns: { services: string; company: string; contact: string };
    companyLinks: {
      process: string;
      capabilities: string;
      materials: string;
    };
    location: string;
    delivery: string;
    rights: string;
    socialLabel: string;
  };
}
