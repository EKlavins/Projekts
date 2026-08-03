import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PanelProps {
  children: ReactNode;
  className?: string;
  /** Adds the arc edge-glow on hover. Use for cards, not for static blocks. */
  interactive?: boolean;
  /** Promotes the panel with an arc border and a lit interior. */
  featured?: boolean;
  chamfer?: "sm" | "md" | "lg";
}

/**
 * The chamfered surface every card is built on.
 *
 * A `clip-path` alone would slice the border off at the corners, so the border
 * is faked with a 1px outer layer showing through — which keeps a real,
 * unbroken edge all the way around the 45-degree cut.
 */
export function Panel({
  children,
  className,
  interactive = false,
  featured = false,
  chamfer = "md",
}: PanelProps) {
  const chamferClass =
    chamfer === "sm" ? "chamfer-sm" : chamfer === "lg" ? "chamfer-lg" : "chamfer-md";

  return (
    <div
      className={cn(
        chamferClass,
        "h-full p-px transition-colors duration-300",
        featured ? "bg-arc-500/70" : "bg-graphite-700",
        interactive && !featured && "hover:bg-arc-500/60",
        className,
      )}
    >
      <div
        className={cn(
          chamferClass,
          "h-full transition-colors duration-300",
          featured
            ? "bg-linear-to-b from-arc-600/12 to-graphite-850"
            : "bg-graphite-850",
          interactive && "group-hover:bg-graphite-800",
        )}
      >
        {children}
      </div>
    </div>
  );
}
