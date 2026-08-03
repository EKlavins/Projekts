import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * Trust is carried by verifiable capability here — the industries actually
 * served and the machine's real numbers — rather than by borrowed logos.
 */
export function TrustBar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      aria-label={dict.trust.heading}
      className="relative border-y border-graphite-800 bg-graphite-950"
    >
      <Container>
        <div className="py-14 sm:py-16">
          <Reveal>
            <h2 className="text-center font-mono text-xs uppercase tracking-[0.22em] text-steel-400">
              {dict.trust.heading}
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {dict.trust.industries.map((industry) => (
                <li key={industry.label}>
                  <span className="chamfer-sm flex items-center gap-2.5 border border-graphite-700 bg-graphite-850/70 px-4 py-2.5 text-sm text-steel-300 transition-colors hover:border-graphite-600 hover:text-steel-100">
                    <Icon
                      name={industry.icon}
                      size={18}
                      className="text-arc-400"
                    />
                    {industry.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <dl className="mt-14 grid gap-px border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-4">
            {dict.trust.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 70}
                className="flex flex-col bg-graphite-950 px-6 py-8"
              >
                {/* dt precedes dd for a valid description list; visual order
                    is restored with `order-*` so the figure reads first. */}
                <dt className="order-2 mt-3 text-sm font-medium text-steel-200">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-steel-100 sm:text-[2.75rem]">
                  {typeof stat.numeric === "number" ? (
                    <Counter
                      value={stat.numeric}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      locale={locale}
                    />
                  ) : (
                    stat.text
                  )}
                </dd>
                <dd className="order-3 mt-1.5 text-sm leading-relaxed text-steel-400">
                  {stat.note}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
