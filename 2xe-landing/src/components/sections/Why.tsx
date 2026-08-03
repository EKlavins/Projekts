import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

/**
 * Differentiators, laid out as a numbered technical list rather than another
 * card grid — it keeps the page's rhythm varied and reads as a spec sheet.
 */
export function Why({ dict }: { dict: Dictionary }) {
  return (
    <Section id="why" className="bg-graphite-950">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={dict.why.eyebrow}
            title={dict.why.heading}
            subtitle={dict.why.subtitle}
            className="lg:sticky lg:top-28"
          />
        </div>

        <ul className="lg:col-span-7">
          {dict.why.items.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={index * 70}
              className="group border-t border-graphite-800 last:border-b"
            >
              <div className="flex gap-6 py-8 transition-colors duration-300 sm:gap-8">
                <span
                  aria-hidden="true"
                  className="mt-1 font-mono text-sm text-steel-400 transition-colors duration-300 group-hover:text-arc-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="flex items-start gap-3 text-xl font-semibold sm:text-2xl">
                    <Icon
                      name="check"
                      size={20}
                      className="mt-1.5 shrink-0 text-arc-500"
                    />
                    {item.title}
                  </h3>
                  <p className="mt-3 pl-8 text-[0.95rem] leading-relaxed text-steel-400 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
