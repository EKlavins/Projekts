import type { SVGProps } from "react";
import type { ReactElement } from "react";

/**
 * Hand-drawn 24x24 icon set on a shared grid, so every glyph shares the same
 * optical weight. Kept inline (rather than an icon package) because the whole
 * page ships ~20 glyphs and this costs zero KB of JavaScript.
 */

type Glyph = { d: ReactElement; filled?: boolean };

const glyphs = {
  /* --- Services ------------------------------------------------------- */
  cycle: {
    d: (
      <>
        <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8" />
        <path d="M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.66 5.66L4 16" />
        <path d="M4 20v-4h4" />
      </>
    ),
  },
  scan: {
    d: (
      <>
        <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" />
        <path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" />
        <path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" />
        <path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
        <path d="M4 12h16" />
      </>
    ),
  },
  restore: {
    d: (
      <>
        <path d="M3.5 12a8.5 8.5 0 1 0 2.9-6.4L3 8" />
        <path d="M3 3.5V8h4.5" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </>
    ),
  },
  assembly: {
    d: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.2 5.2 7 7M17 17l1.8 1.8M18.8 5.2 17 7M7 17l-1.8 1.8" />
      </>
    ),
  },
  metal: {
    d: (
      <>
        <path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z" />
        <path d="m3 12.8 9 4.8 9-4.8" />
        <path d="m3 17 9 4.8L21 17" />
      </>
    ),
  },
  tune: {
    d: (
      <>
        <path d="M4 7.5h8M17 7.5h3" />
        <circle cx="14.5" cy="7.5" r="2.2" />
        <path d="M4 16.5h4M13 16.5h7" />
        <circle cx="10.5" cy="16.5" r="2.2" />
      </>
    ),
  },

  /* --- Industries ----------------------------------------------------- */
  car: {
    d: (
      <>
        <path d="M4 13 5.7 8.4A2 2 0 0 1 7.6 7h8.8a2 2 0 0 1 1.9 1.4L20 13" />
        <path d="M3.5 13h17v4.2a.8.8 0 0 1-.8.8H4.3a.8.8 0 0 1-.8-.8V13Z" />
        <path d="M6.8 18v1.6M17.2 18v1.6" />
      </>
    ),
  },
  appliance: {
    d: (
      <>
        <rect x="4.5" y="3" width="15" height="18" rx="2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M8 6.8h.01M11 6.8h.01" />
      </>
    ),
  },
  factory: {
    d: (
      <>
        <path d="M2.5 20.5h19" />
        <path d="M4.5 20.5V9.5l5 3.4V9.5l5 3.4V6.5h5v14" />
      </>
    ),
  },
  chip: {
    d: (
      <>
        <rect x="7.5" y="7.5" width="9" height="9" rx="1" />
        <path d="M10 3.5v4M14 3.5v4M10 16.5v4M14 16.5v4M3.5 10h4M3.5 14h4M16.5 10h4M16.5 14h4" />
      </>
    ),
  },
  hobby: {
    d: (
      <path d="m12 3 2.3 5.5 5.7 1.5-4.1 3.9 1.1 5.6L12 16.7 6.9 19.5 8 13.9 3.9 10l5.7-1.5L12 3Z" />
    ),
  },
  boxes: {
    d: (
      <>
        <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" />
        <path d="m4 7.2 8 4.2 8-4.2M12 11.4V21" />
      </>
    ),
  },

  /* --- Interface ------------------------------------------------------ */
  arrowRight: {
    d: (
      <>
        <path d="M4.5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
  },
  check: { d: <path d="m5 12.5 4.5 4.5L19 7" /> },
  mail: {
    d: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7.5 8.5 5.6 8.5-5.6" />
      </>
    ),
  },
  phone: {
    d: (
      <path d="M15.8 21A13.8 13.8 0 0 1 3 8.2 2 2 0 0 1 5 6h2a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.5 1.1l-1.2.7a11.4 11.4 0 0 0 4.5 4.5l.7-1.2a1 1 0 0 1 1.1-.5l3 .6a1 1 0 0 1 .8 1v2a2 2 0 0 1-2 2Z" />
    ),
  },
  mapPin: {
    d: (
      <>
        <path d="M12 21.2s7-5.9 7-11.2a7 7 0 1 0-14 0c0 5.3 7 11.2 7 11.2Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  truck: {
    d: (
      <>
        <path d="M2.5 6.5h11v11h-11z" />
        <path d="M13.5 10h4l3 3v4.5h-7" />
        <circle cx="7" cy="18.5" r="1.6" />
        <circle cx="17" cy="18.5" r="1.6" />
      </>
    ),
  },
  globe: {
    d: (
      <>
        <circle cx="12" cy="12" r="8.8" />
        <path d="M3.2 12h17.6" />
        <path d="M12 3.2a14 14 0 0 1 0 17.6 14 14 0 0 1 0-17.6Z" />
      </>
    ),
  },
  menu: { d: <path d="M4 7h16M4 12h16M4 17h16" /> },
  close: { d: <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" /> },

  /* --- Social (solid glyphs) ------------------------------------------ */
  facebook: {
    filled: true,
    d: (
      <path d="M14.5 8.5H17V5.6c-.4-.06-1.6-.2-3-.2-3 0-5 1.8-5 5.1v2.6H6.3v3.3H9V24h3.3v-7.6h2.7l.4-3.3h-3.1v-2.3c0-1 .3-1.7 1.2-1.7Z" />
    ),
  },
  instagram: {
    d: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <path d="M17.2 6.9h.01" />
      </>
    ),
  },
  linkedin: {
    filled: true,
    d: (
      <path d="M5 3.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3 8.9h4v12H3v-12Zm6.6 0h3.8v1.7a4.2 4.2 0 0 1 3.7-1.9c2.7 0 4.4 1.7 4.4 4.7v7.5h-4v-6.7c0-1.6-.6-2.5-1.9-2.5-1.1 0-1.9.8-1.9 2.5v6.7H9.6v-12Z" />
    ),
  },
} satisfies Record<string, Glyph>;

export type IconName = keyof typeof glyphs;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Rendered size in px on both axes. */
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const glyph: Glyph = glyphs[name];

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={glyph.filled ? "currentColor" : "none"}
      stroke={glyph.filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {glyph.d}
    </svg>
  );
}
