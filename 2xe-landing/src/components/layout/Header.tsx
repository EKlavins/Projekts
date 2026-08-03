"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { localeLabels, otherLocale, type Dictionary, type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#work", label: dict.nav.work },
    { href: "#materials", label: dict.nav.materials },
    { href: "#process", label: dict.nav.process },
    { href: "#capabilities", label: dict.nav.capabilities },
  ];

  const target = otherLocale(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu and wire up Escape-to-close.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-b border-graphite-700/80 bg-graphite-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-arc-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>

      <Container>
        <div className="flex h-18 items-center justify-between gap-6 py-3 sm:h-20">
          <Link
            href={`/${locale}`}
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="2XE"
          >
            <Logo className="h-8 w-auto sm:h-9" title="2XE" />
          </Link>

          <nav aria-label={dict.nav.label} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="chamfer-sm px-4 py-2 text-sm font-medium text-steel-300 transition-colors hover:bg-graphite-800 hover:text-steel-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/${target}`}
              hrefLang={target}
              aria-label={dict.nav.switchLanguage}
              className="chamfer-sm flex h-10 items-center gap-1.5 border border-graphite-700 px-3 font-mono text-xs font-medium tracking-wider text-steel-300 transition-colors hover:border-arc-500 hover:text-steel-100"
            >
              <Icon name="globe" size={15} aria-hidden="true" />
              {localeLabels[target]}
            </Link>

            {/* The responsive display lives on a wrapper: putting `hidden`
                on the Button itself would collide with its own `inline-flex`
                base class, and the loser is decided by stylesheet order. */}
            <div className="hidden sm:block">
              <Button href="#contact">{dict.nav.cta}</Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
              className="chamfer-sm flex h-10 w-10 items-center justify-center border border-graphite-700 text-steel-200 transition-colors hover:border-arc-500 lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-graphite-800 bg-graphite-950/95 backdrop-blur-xl lg:hidden"
        >
          <Container>
            <ul className="flex flex-col py-4">
              {[...links, { href: "#contact", label: dict.nav.contact }].map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block border-b border-graphite-800 py-4 font-display text-lg font-semibold text-steel-100 transition-colors hover:text-arc-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <div className="pb-6">
              <Button href="#contact" size="lg" className="w-full" icon="arrowRight">
                {dict.nav.cta}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
