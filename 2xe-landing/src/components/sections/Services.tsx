import { Icon } from "@/components/ui/Icon";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={dict.services.eyebrow}
        title={dict.services.heading}
        subtitle={dict.services.subtitle}
      />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((item, index) => (
          <Reveal
            key={item.title}
            as="li"
            delay={(index % 3) * 80}
            className="group"
          >
            <Panel interactive className="h-full">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <span
                  aria-hidden="true"
                  className="chamfer-sm flex h-12 w-12 items-center justify-center border border-graphite-700 bg-graphite-900 text-arc-400 transition-colors duration-300 group-hover:border-arc-500/60 group-hover:text-arc-300"
                >
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-steel-400">
                  {item.body}
                </p>
              </div>
            </Panel>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
