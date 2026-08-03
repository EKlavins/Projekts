import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <Section id="process" className="bg-graphite-950">
      <SectionHeading
        eyebrow={dict.process.eyebrow}
        title={dict.process.heading}
        align="center"
        className="mx-auto items-center"
      />

      <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {dict.process.steps.map((step, index) => (
          <Reveal key={step.title} as="li" delay={index * 90} className="group relative">
            {/* Connector rail between steps on wide screens. */}
            {index < dict.process.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-14 right-0 top-6 hidden h-px bg-linear-to-r from-graphite-600 to-transparent lg:block"
              />
            ) : null}

            <span
              aria-hidden="true"
              className="chamfer-sm relative flex h-12 w-12 items-center justify-center border border-graphite-700 bg-graphite-900 font-mono text-sm font-semibold text-arc-400 transition-colors duration-300 group-hover:border-arc-500/60"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-steel-400">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
