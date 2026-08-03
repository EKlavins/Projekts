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
 * Left glyph: the numeral "2" taken from Archivo Black (900), the same family
 * the page sets its headings in.
 *
 * Every hand-drawn attempt read as a "Z", because a bar-and-diagonal
 * construction has a corner where a "2" needs a bowl. Rather than keep
 * approximating one, this is the real glyph outline, scaled so its cap height
 * matches the 80-unit box the other two letters occupy. Archivo is licensed
 * under the SIL Open Font License, which permits this use.
 *
 * Width 66.5; it overshoots the cap line by 0.8 top and bottom, as round
 * glyphs are drawn to, so it is positioned by that overshoot rather than by
 * its bounding box.
 */
const GLYPH_2 =
  "M66.47 81.63L0 81.63L0 76.03Q0 71.14 2.10 66.76Q4.20 62.39 7.76 58.48Q11.31 54.58 15.63 51.02Q19.94 47.46 24.49 44.08Q29.15 40.58 33.24 37.67Q37.32 34.75 39.88 31.72Q42.45 28.69 42.45 24.96Q42.45 22.74 41.40 20.82Q40.35 18.89 38.19 17.67Q36.03 16.44 32.42 16.44Q28.80 16.44 26.30 17.84Q23.79 19.24 22.45 21.75Q21.11 24.26 21.11 27.41L21.11 29.74L0.35 29.74Q0.23 29.04 0.23 28.40Q0.23 27.76 0.23 27.17Q0.23 18.89 4.02 12.83Q7.81 6.76 15.45 3.38Q23.09 0 34.64 0Q41.75 0 47.46 1.69Q53.18 3.38 57.20 6.59Q61.22 9.80 63.38 14.23Q65.54 18.66 65.54 24.14Q65.54 29.50 63.56 33.82Q61.57 38.13 57.96 41.87Q54.34 45.60 49.68 49.10Q45.01 52.59 39.53 56.21Q36.73 58.08 34.99 59.30Q33.24 60.52 32.42 61.11Q31.60 61.69 31.37 61.92L66.47 61.92";

/** Advance width of GLYPH_2 and the overshoot above the cap line. */
const GLYPH_2_WIDTH = 66.5;
const GLYPH_2_OVERSHOOT = 0.8;

/** Centre glyph — "X" as two crossing parallelogram strokes. */
const GLYPH_X = "M0 0H24L76 80H52ZM52 0H76L24 80H0Z";

/** Right glyph — angular "E" with chamfered top-left and bottom-right. */
const GLYPH_E = "M8 0H64V22H24V30H56V50H24V58H64V72L56 80H0V8Z";

/**
 * The blade. Two quadratic curves meeting at needle points, so the edges bow
 * very slightly outward rather than running dead straight — that convexity is
 * what stops it reading as a plain slash.
 */
const BLADE = "M200 8 Q157.5 91.8 95 162 Q137.5 78.2 200 8 Z";

/*
 * Letter positions, centred in the 300-unit viewBox with a 6-unit gap before
 * the X and 12 after it. They are not equal because the X's diagonal arms
 * recede optically where the 2's flat foot and the E's flat spine do not.
 */
const LETTER_TOP = 45;
const GLYPH_X_WIDTH = 76;
const GAP_BEFORE_X = 6;
const GAP_AFTER_X = 12;

const TWO_LEFT = 37.75;
const X_LEFT = TWO_LEFT + GLYPH_2_WIDTH + GAP_BEFORE_X;
const E_LEFT = X_LEFT + GLYPH_X_WIDTH + GAP_AFTER_X;

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
          <path
            d={GLYPH_2}
            transform={`translate(${TWO_LEFT} ${LETTER_TOP - GLYPH_2_OVERSHOOT})`}
          />
          <path
            d={GLYPH_X}
            transform={`translate(${X_LEFT} ${LETTER_TOP})`}
            fillRule="nonzero"
          />
          <path d={GLYPH_E} transform={`translate(${E_LEFT} ${LETTER_TOP})`} />
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
  const blade = "M78 2 Q54 52 26 98 Q46 50 78 2 Z";

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
