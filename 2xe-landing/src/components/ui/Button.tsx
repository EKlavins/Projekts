import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 font-display font-semibold tracking-tight " +
  "transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out " +
  "active:translate-y-px chamfer-sm";

const variants: Record<Variant, string> = {
  /* arc-600 against white text clears 6.4:1 — the hover state changes the
     glow rather than the fill so contrast never regresses. */
  primary:
    "bg-arc-600 text-white shadow-[0_0_0_0_rgba(59,123,255,0)] " +
    "hover:bg-arc-600 hover:shadow-[0_8px_32px_-8px_rgba(59,123,255,0.65)] hover:-translate-y-0.5",
  secondary:
    "border border-graphite-600 bg-graphite-850/70 text-steel-100 backdrop-blur-sm " +
    "hover:border-arc-500 hover:bg-graphite-800 hover:-translate-y-0.5",
  ghost:
    "text-steel-300 hover:text-steel-100 hover:bg-graphite-800/60",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  className?: string;
  /** Set when the link text alone is not descriptive out of context. */
  ariaLabel?: string;
}

/**
 * Every call to action on this page is a navigation, so the primitive is an
 * anchor rather than a <button> — keeping it correct for assistive tech,
 * middle-click and "open in new tab".
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <Icon
          name={icon}
          size={18}
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </a>
  );
}
