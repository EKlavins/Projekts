import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export function CallToAction({ dict }: { dict: Dictionary }) {
  return (
    <Section id="contact" className="bg-graphite-950">
      <Reveal>
        <div className="chamfer-lg relative overflow-hidden border border-graphite-700 bg-graphite-900 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-blueprint opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full h-96 w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arc-600/22 blur-[100px]"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <LogoMark className="h-11 w-auto opacity-90" />

            <h2 className="mt-8 text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
              {dict.cta.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-steel-400">
              {dict.cta.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`mailto:${site.contact.email}`}
                size="lg"
                icon="mail"
              >
                {dict.cta.primary}
              </Button>
              <Button
                href={`tel:${site.contact.phoneHref}`}
                size="lg"
                variant="secondary"
                icon="phone"
              >
                {dict.cta.secondary}
              </Button>
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-steel-400">
              {dict.cta.note}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
