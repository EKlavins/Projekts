import { cn } from "@/lib/utils";

/**
 * Blueprint-style technical drawing of a printed bracket: outline, layer
 * hatching, bores and dimension callouts.
 *
 * Drawn as vector rather than photographed because the brand's own reference
 * material is a CAD viewport — the drawing *is* the product. It also means no
 * image payload, no layout shift and correct rendering at any DPI.
 */
export function TechFigure({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 520 460"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id="tf-face" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#242a31" />
          <stop offset="55%" stopColor="#1a1f25" />
          <stop offset="100%" stopColor="#2b323a" />
        </linearGradient>
        <linearGradient id="tf-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ba5ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b7bff" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id="tf-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3b7bff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#3b7bff" stopOpacity="0" />
        </radialGradient>
        {/* Layer hatching that reads as extruded print lines. */}
        <pattern
          id="tf-layers"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(90)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#454d57" strokeWidth="1" />
        </pattern>
      </defs>

      <ellipse cx="230" cy="250" rx="210" ry="180" fill="url(#tf-glow)" />

      {/* --- Dimension callouts ------------------------------------------ */}
      <g
        stroke="#6c737c"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 4"
        opacity="0.75"
      >
        <path d="M70 96V60M350 96V60" strokeDasharray="0" />
        <path d="M70 74h280" strokeDasharray="0" />
        <path d="M44 130H70M44 398H70" strokeDasharray="0" />
        <path d="M56 130v268" strokeDasharray="0" />
      </g>
      <g fill="#8a9199" fontFamily="ui-monospace, monospace" fontSize="13">
        <text x="210" y="66" textAnchor="middle">
          280.00
        </text>
        <text
          x="36"
          y="264"
          textAnchor="middle"
          transform="rotate(-90 36 264)"
        >
          268.00
        </text>
        <text x="376" y="230" fill="#6ba5ff">
          Ø 44
        </text>
        <text x="376" y="250" fontSize="11" fill="#6c737c">
          H7 / g6
        </text>
      </g>

      {/* --- The part ----------------------------------------------------- */}
      <g>
        {/* Extruded side wall, offset to suggest depth. */}
        <path
          d="M78 138 L358 138 L358 210 L218 210 L218 406 L78 406 Z"
          transform="translate(14 14)"
          fill="#14181d"
          stroke="#242a31"
          strokeWidth="1.5"
        />
        <path
          d="M70 130 L350 130 L350 202 L210 202 L210 398 L70 398 Z"
          fill="url(#tf-face)"
          stroke="url(#tf-edge)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M70 130 L350 130 L350 202 L210 202 L210 398 L70 398 Z"
          fill="url(#tf-layers)"
          opacity="0.28"
        />

        {/* Bores */}
        <g fill="#0e1114" stroke="#6ba5ff" strokeWidth="1.6">
          <circle cx="120" cy="176" r="24" />
          <circle cx="300" cy="166" r="17" />
          <circle cx="140" cy="340" r="24" />
        </g>
        <g
          stroke="#454d57"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        >
          <path d="M120 142v68M86 176h68" />
          <path d="M140 306v68M106 340h68" />
        </g>

        {/* Machined rib */}
        <path
          d="M232 230h100v22h-100z"
          fill="#0e1114"
          stroke="#333a43"
          strokeWidth="1.2"
          opacity="0.9"
        />
      </g>

      {/* --- Detail callout ---------------------------------------------- */}
      <g fill="none" stroke="#3b7bff" strokeWidth="1.4" opacity="0.8">
        <circle cx="300" cy="166" r="42" strokeDasharray="5 5" />
        <path d="M340 196l30 26" />
      </g>

      {/* --- Build-plate baseline ----------------------------------------- */}
      <g opacity="0.6">
        <path d="M40 428h440" stroke="#333a43" strokeWidth="1.5" />
        <path
          d="M40 436l12-8M70 436l12-8M100 436l12-8M130 436l12-8M160 436l12-8M190 436l12-8M220 436l12-8M250 436l12-8M280 436l12-8M310 436l12-8M340 436l12-8M370 436l12-8M400 436l12-8M430 436l12-8M460 436l12-8"
          stroke="#242a31"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
