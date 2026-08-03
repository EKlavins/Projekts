import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared horizontal rhythm. Every section uses exactly this container. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28 lg:py-36",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Small monospace label above a section heading — the "part number" motif. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-arc-400",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="inline-block h-px w-8 bg-arc-500/70"
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-steel-400 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
