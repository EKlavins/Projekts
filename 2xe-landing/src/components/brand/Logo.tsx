import { cn } from "@/lib/utils";

/**
 * The 2XE wordmark, rebuilt as vector geometry from the reference render.
 *
 * TODO(2XE): this is a faithful *reconstruction* — the source files provided
 * were raster renders, not vector artwork. Swap the path data below for the
 * official SVG/AI export when it is available; nothing else in the codebase
 * needs to change.
 *
 * Geometry notes: the blade is the mark's signature — a long, slightly convex
 * lens tapering to needle points, crossing the full width of the wordmark and
 * overshooting it top and bottom. It is knocked out of the letterforms with a
 * mask so it reads as a separate plane sitting in front. The letters carry a
 * dark outline, which is what gives the mark its cut-decal quality.
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
const GLYPH_X = "M0 0H24L76 80H52ZM52 0H76L24 80H0Z";

/** Right glyph — angular "E" with chamfered top-left and bottom-right. */
const GLYPH_E = "M8 0H64V22H24V30H56V50H24V58H64V72L56 80H0V8Z";

/**
 * The blade. Two quadratic curves meeting at needle points, so the edges bow
 * very slightly outward rather than running dead straight — that convexity is
 * what stops it reading as a plain slash.
 */
const BLADE = "M245 12 Q157.4 95.4 55 160 Q142.6 76.6 245 12 Z";

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
  const bladeFill = variant === "steel" ? "#ffffff" : "currentColor";
  // The outline only makes sense against the steel fill; on a single-colour
  // mark it would carve visible notches out of the letterforms.
  const outline = variant === "steel" ? "#07090b" : "none";

  return (
    <svg
      viewBox="0 0 300 170"
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
            <stop offset="42%" stopColor="#e8ebef" />
            <stop offset="70%" stopColor="#aab1ba" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        ) : null}

        {/*
          Carving the blade (plus a stroked margin around it) out of the
          letterforms leaves the dark gap seen on the reference render.
        */}
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="300" height="170" fill="#fff" />
          <path
            d={BLADE}
            fill="#000"
            stroke="#000"
            strokeWidth="10"
            strokeLinejoin="round"
          />
        </mask>
      </defs>

      {/*
        The skew lives on an inner group so the mask keeps operating in
        unskewed viewBox coordinates, matching the blade drawn below it.
        Pivoting at the wordmark's centre line keeps it optically level.
      */}
      <g mask={`url(#${maskId})`}>
        <g
          transform="translate(0 85) skewX(-8) translate(0 -85)"
          fill={letterFill}
          stroke={outline}
          strokeWidth="3.5"
          strokeLinejoin="round"
          paintOrder="stroke fill"
        >
          <path d={GLYPH_2} transform="translate(33 45)" fillRule="nonzero" />
          <path d={GLYPH_X} transform="translate(115 45)" fillRule="nonzero" />
          <path d={GLYPH_E} transform="translate(203 45)" />
        </g>
      </g>

      <path
        d={BLADE}
        fill={bladeFill}
        stroke={outline}
        strokeWidth="2"
        strokeLinejoin="round"
        paintOrder="stroke fill"
      />
    </svg>
  );
}

/**
 * Compact mark — the "X" and its blade only. Used where the full wordmark
 * would be illegible (favicon, small badges).
 */
export function LogoMark({ className, variant = "steel", title }: LogoProps) {
  const maskId = `mark-blade-cut-${variant}`;
  const fill = variant === "steel" ? "#e8ebef" : "currentColor";
  const outline = variant === "steel" ? "#07090b" : "none";
  const blade = "M88 6 Q54 54 12 96 Q46 48 88 6 Z";

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
            d={blade}
            fill="#000"
            stroke="#000"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path
          d={GLYPH_X}
          transform="translate(12 10)"
          fill={fill}
          stroke={outline}
          strokeWidth="3"
          strokeLinejoin="round"
          paintOrder="stroke fill"
        />
      </g>
      <path d={blade} fill={fill} />
    </svg>
  );
}
