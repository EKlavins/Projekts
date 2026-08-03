"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Stagger, in ms, applied as a transition delay. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}

/**
 * Scroll-triggered fade/rise.
 *
 * The revealed flag is written straight to the DOM rather than held in React
 * state: it drives nothing but a CSS attribute selector, so a state update
 * would re-render the whole subtree for no benefit.
 *
 * The hidden state lives in CSS behind an `.js` class set by an inline script
 * in the document head, so a visitor without JavaScript — or one who bailed
 * before hydration — always sees the content. `prefers-reduced-motion`
 * disables the movement entirely (see globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.setAttribute("data-shown", "true");

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
