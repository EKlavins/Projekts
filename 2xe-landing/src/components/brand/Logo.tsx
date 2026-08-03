import { cn } from "@/lib/utils";

/**
 * The 2XE wordmark, rebuilt as vector geometry from the signage render.
 *
 * TODO(2XE): this is a faithful *reconstruction* — the source files provided
 * were raster renders and a CAD screenshot, not vector artwork. Swap the path
 * data below for the official SVG/AI export when it is available; nothing else
 * in the codebase needs to change.
 *
 * Geometry notes: 45-degree chamfers on opposing corners of the "2" and the
 * "E" echo the machined edges of the physical sign; the blade slashing through
 * the "X" is knocked out of the letterforms with a mask so it reads as a
 * separate plane, exactly as it does on the signage.
 */

/**
 * Left glyph — angular "2", built as four overlapping bars so it keeps a
 * short vertical descender under the top bar. Without that descender the
 * shape collapses into a "Z".
 * Order: top bar, descender, diagonal sweep, bottom bar.
 */
const GLYPH_2 =
  "M8 0H70V24H0V8Z M46 24H70V38H46Z M46 36H70L24 60H0Z M0 56H70V72L62 80H0Z";

/** Centre glyph — "X" as two crossing parallelogram strokes. */
const GLYPH_X =
  "M0 0H24L76 80H52ZM52 0H76L24 80H0Z";

/** Right glyph — angular "E" with chamfered top-left and bottom-right. */
const GLYPH_E =
  "M8 0H64V22H24V30H56V50H24V58H64V72L56 80H0V8Z";

/** The signature blade: a tapered sliver crossing the full mark. */
const BLADE = "M198 2L144 60L80 126L134 64Z";

export type LogoVariant = "steel" | "mono" | "arc";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  /**
   * Accessible name. Omit when the mark sits next to a text label that already
   * names it — the SVG is then hidden from assistive technology.
   */
  title?: string;
}

export function Logo({ className, variant = "steel", title }: LogoProps) {
  const maskId = `logo-blade-cut-${variant}`;
  const gradientId = `logo-steel-${variant}`;

  const letterFill =
    variant === "steel" ? `url(#${gradientId})` : "currentColor";
  const bladeFill = variant === "steel" ? "#eef1f4" : "currentColor";

  return (
    <svg
      viewBox="0 0 250 128"
      className={cn(className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}

      <defs>
        {variant === "steel" ? (
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="0.4"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="34%" stopColor="#c9ced5" />
            <stop offset="63%" stopColor="#7e858e" />
            <stop offset="100%" stopColor="#eef1f4" />
          </linearGradient>
        ) : null}

        {/*
          Carving the blade (plus a stroked margin around it) out of the
          letterforms leaves the dark gap seen on the physical sign.
        */}
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="250" height="128" fill="#fff" />
          <path
            d={BLADE}
            fill="#000"
            stroke="#000"
            strokeWidth="9"
            strokeLinejoin="round"
          />
        </mask>
      </defs>

      {/*
        The skew lives on an inner group so the mask keeps operating in
        unskewed viewBox coordinates, matching the blade drawn below it.
        Pivoting at y=64 keeps the wordmark optically centred.
      */}
      <g mask={`url(#${maskId})`} fill={letterFill}>
        <g transform="translate(0 64) skewX(-8) translate(0 -64)">
          <path d={GLYPH_2} transform="translate(8 24)" fillRule="nonzero" />
          <path d={GLYPH_X} transform="translate(90 24)" fillRule="nonzero" />
          <path d={GLYPH_E} transform="translate(178 24)" />
        </g>
      </g>

      <path d={BLADE} fill={bladeFill} />
    </svg>
  );
}

/**
 * Compact mark — the "X" and its blade only. Used where the full wordmark
 * would be illegible (favicon, small badges).
 */
export function LogoMark({ className, variant = "steel", title }: LogoProps) {
  const maskId = `mark-blade-cut-${variant}`;
  const fill = variant === "steel" ? "#c9ced5" : "currentColor";

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100" height="100" fill="#fff" />
          <path
            d="M82 2L54 46L18 98L48 48Z"
            fill="#000"
            stroke="#000"
            strokeWidth="7"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} fill={fill}>
        <path d={GLYPH_X} transform="translate(12 10) scale(1 1)" />
      </g>
      <path d="M82 2L54 46L18 98L48 48Z" fill={fill} />
    </svg>
  );
}
