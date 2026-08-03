import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

/**
 * Stands in for a testimonial block: the same "why you can trust us" job, done
 * with published technical parameters instead of quotes that would have to be
 * invented. Swap in real customer quotes here once they exist.
 */
export function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <Section id="capabilities">
      <SectionHeading
        eyebrow={dict.capabilities.eyebrow}
        title={dict.capabilities.heading}
        subtitle={dict.capabilities.subtitle}
      />

      <dl className="mt-16 grid gap-px border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-3">
        {dict.capabilities.specs.map((spec, index) => (
          <Reveal
            key={spec.label}
            delay={(index % 3) * 80}
            className="group flex flex-col bg-graphite-900 p-7 transition-colors duration-300 hover:bg-graphite-850 sm:p-8"
          >
            <dt className="order-1 font-mono text-xs uppercase tracking-[0.18em] text-steel-400">
              {spec.label}
            </dt>
            <dd className="order-2 mt-4 font-display text-2xl font-bold tracking-tight text-steel-100 transition-colors duration-300 group-hover:text-arc-300 sm:text-[1.75rem]">
              {spec.value}
            </dd>
            <dd className="order-3 mt-4 text-[0.95rem] leading-relaxed text-steel-400">
              {spec.body}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
