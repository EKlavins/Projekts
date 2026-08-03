import { Logo } from "@/components/brand/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const footerLinkClass =
  "inline-flex min-h-8 items-center text-sm text-steel-400 transition-colors hover:text-arc-400";

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: "#process", label: dict.footer.companyLinks.process },
    { href: "#capabilities", label: dict.footer.companyLinks.capabilities },
    { href: "#materials", label: dict.footer.companyLinks.materials },
  ];

  return (
    <footer className="border-t border-graphite-800 bg-graphite-950">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo className="h-13 w-auto" title="2XE" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-400">
              {dict.footer.tagline}
            </p>
            <ul
              aria-label={dict.footer.socialLabel}
              className="mt-8 flex items-center gap-3"
            >
              {site.social.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="chamfer-sm flex h-11 w-11 items-center justify-center border border-graphite-700 text-steel-400 transition-colors hover:border-arc-500 hover:text-arc-400"
                  >
                    <Icon name={social.icon as IconName} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav
            aria-label={dict.footer.columns.services}
            className="lg:col-span-3"
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-steel-200">
              {dict.footer.columns.services}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {dict.services.items.map((item) => (
                <li key={item.title}>
                  <a href="#services" className={footerLinkClass}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav
            aria-label={dict.footer.columns.company}
            className="lg:col-span-2"
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-steel-200">
              {dict.footer.columns.company}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerLinkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-steel-200">
              {dict.footer.columns.contact}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className={footerLinkClass}
                >
                  <Icon name="mail" size={16} className="mr-2 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className={footerLinkClass}
                >
                  <Icon name="phone" size={16} className="mr-2 shrink-0" />
                  {site.contact.phoneLabel}
                </a>
              </li>
              <li className="flex text-sm text-steel-400">
                <Icon name="mapPin" size={16} className="mr-2 shrink-0" />
                {dict.footer.location}
              </li>
              <li className="flex text-sm text-steel-400">
                <Icon name="truck" size={16} className="mr-2 shrink-0" />
                {dict.footer.delivery}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-graphite-800 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-steel-400">
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-steel-400">
            {site.contact.city}, {site.contact.countryName[locale]}
          </p>
        </div>
      </Container>
    </footer>
  );
}
