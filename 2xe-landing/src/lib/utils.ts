type ClassValue = string | number | null | undefined | false;

/**
 * Minimal class joiner. The project has no conditional-variant explosion to
 * manage, so a dependency-free join beats pulling in clsx/tailwind-merge.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
