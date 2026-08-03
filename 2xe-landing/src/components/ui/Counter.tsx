"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  locale: string;
}

const DURATION_MS = 1400;

/** easeOutExpo — fast start, long settle, so the final digits are readable. */
function ease(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Counts up once, when the number first scrolls into view.
 *
 * The final value is rendered on the server, so the correct figure is in the
 * HTML for crawlers and for anyone without JavaScript. The animation then
 * writes to the text node directly — React never re-renders during the
 * count-up, and the settled value is restored on cleanup.
 */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
  locale,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      n.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) + suffix;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        // Reset to zero only once the number is actually on screen, and start
        // the animation in the same tick. Zeroing on mount instead left every
        // stat below the fold reading "0 °C" / "0,0 mm" until it was scrolled
        // to, which reads as broken rather than as a pending animation.
        el.textContent = format(0);

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          el.textContent = format(value * ease(progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = format(value);
    };
  }, [value, decimals, suffix, locale]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
