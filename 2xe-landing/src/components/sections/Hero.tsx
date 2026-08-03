import { Logo } from "@/components/brand/Logo";
import { TechFigure } from "@/components/brand/TechFigure";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      {/* Blueprint ground, faded out towards the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-blueprint [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]"
      />
      {/* The backlight from the signage, reproduced as an ambient wash. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[64rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-arc-600/12 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <p className="chamfer-sm inline-flex items-center gap-2 border border-graphite-700 bg-graphite-850/60 px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-steel-300 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 bg-arc-400 animate-pulse-arc"
                />
                {dict.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="relative mt-9 w-fit">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-8 -inset-y-6 bg-arc-500/18 blur-2xl"
                />
                <Logo
                  className="relative h-11 w-auto sm:h-14"
                  title="2XE"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {dict.hero.titleLead}{" "}
                <span className="text-steel">{dict.hero.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel-400">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#contact" size="lg" icon="arrowRight">
                  {dict.hero.primaryCta}
                </Button>
                <Button href="#materials" size="lg" variant="secondary">
                  {dict.hero.secondaryCta}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-14 grid grid-cols-1 gap-px border border-graphite-700 bg-graphite-700 sm:grid-cols-3">
                {/* justify-between keeps the values on one line even when a
                    label wraps to two — Latvian labels often do. */}
                {dict.hero.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col justify-between gap-1.5 bg-graphite-900 px-5 py-4"
                  >
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-steel-400">
                      {spec.label}
                    </dt>
                    <dd className="font-display text-lg font-semibold text-steel-100">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={160}>
              <div className="chamfer-lg relative border border-graphite-700 bg-graphite-950/60 p-6 sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 grid-blueprint opacity-40"
                />
                <TechFigure
                  className="relative"
                  label={dict.hero.figureAlt}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
