import Image from "next/image";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { workMedia } from "@/lib/work";
import type { Dictionary } from "@/lib/i18n";

/**
 * Portfolio gallery.
 *
 * The renders arrive on a white CAD background, which would fight the graphite
 * ground if it were knocked out or dimmed. Instead each one is framed as a lit
 * viewport panel on the dark page — a light rectangle on dark reads as looking
 * *at* a CAD screen, which is exactly what these are, and it needs no image
 * manipulation that could distort the geometry being shown.
 */
export function Work({ dict }: { dict: Dictionary }) {
  return (
    <Section id="work" className="bg-graphite-950">
      <SectionHeading
        eyebrow={dict.work.eyebrow}
        title={dict.work.heading}
        subtitle={dict.work.subtitle}
      />

      <ul className="mt-16 grid gap-5 lg:grid-cols-2">
        {workMedia.map((media, index) => {
          const copy = dict.work.items[media.id];

          return (
            <Reveal
              key={media.id}
              as="li"
              delay={(index % 2) * 90}
              className="group"
            >
              <Panel interactive className="h-full">
                <div className="flex h-full flex-col">
                  {/*
                    Fixed aspect so cards in a row align; `object-contain`
                    rather than `cover` because cropping a CAD render can slice
                    the very geometry the image is there to show. The letterbox
                    is invisible — the pad colour matches the render's own
                    background.
                  */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#eef1f4]">
                    <Image
                      src={media.src}
                      alt={copy.alt}
                      width={media.width}
                      height={media.height}
                      sizes="(min-width: 1024px) 44rem, (min-width: 640px) 90vw, 100vw"
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      /* The first pair sits close to the fold on tall screens. */
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-graphite-900/10"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <ul className="flex flex-wrap gap-2">
                      {copy.tags.map((tag) => (
                        <li
                          key={tag}
                          className="chamfer-sm border border-graphite-700 bg-graphite-900 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-arc-400 sm:text-[0.7rem]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-5 text-xl font-semibold">{copy.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-steel-400">
                      {copy.body}
                    </p>
                  </div>
                </div>
              </Panel>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
