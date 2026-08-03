import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";

export function Materials({ dict }: { dict: Dictionary }) {
  return (
    <Section id="materials">
      <SectionHeading
        eyebrow={dict.materials.eyebrow}
        title={dict.materials.heading}
        subtitle={dict.materials.subtitle}
      />

      {/* Dense packing lets the double-width composite card sit mid-grid
          without leaving an empty cell in the row above it. */}
      <ul className="mt-16 grid grid-flow-row-dense gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dict.materials.groups.map((group, index) => (
          <Reveal
            key={group.name}
            as="li"
            delay={(index % 3) * 80}
            className={cn(
              "group",
              /* The composite tier is the commercial differentiator, so it
                 takes the wide cell on large screens. */
              group.featured && "lg:col-span-2",
            )}
          >
            <Panel interactive featured={group.featured} className="h-full">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{group.name}</h3>
                  {group.featured ? (
                    <span className="chamfer-sm shrink-0 bg-arc-600 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white">
                      {dict.materials.featuredBadge}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="chamfer-sm border border-graphite-700 bg-graphite-900 px-2.5 py-1 font-mono text-xs text-steel-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-steel-400">
                  {group.body}
                </p>
              </div>
            </Panel>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
