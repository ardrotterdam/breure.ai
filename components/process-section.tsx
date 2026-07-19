import Link from "next/link"
import { BlueprintFigure } from "@/components/blueprints/blueprint-figure"
import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { ProcessGridLines } from "@/components/process/process-grid-lines"
import { dict, type Locale } from "@/lib/i18n"

interface ProcessSectionProps {
  locale?: Locale
  /** Homepage uses the 3-step messaging summary; /proces keeps the full process dict. */
  variant?: "default" | "home"
  /** When set, shows a crawlable link to the dedicated process page (homepage). */
  detailHref?: string
}

export function ProcessSection({
  locale = "nl",
  variant = "default",
  detailHref,
}: ProcessSectionProps) {
  const t = variant === "home" ? dict.home.process[locale] : dict.process[locale]
  const detailLabel = dict.sectionLinks[locale].process

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-secondary overflow-hidden">
      <ProcessGridLines />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <StaggerItem>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
                {t.eyebrow}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-foreground">
                {t.titlePrefix}{" "}
                <span className="heading-accent-gradient">
                  {t.titleAccent}
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md">
                {t.intro}
              </p>
            </StaggerItem>

            {detailHref && (
              <StaggerItem>
                <p className="mt-6 max-w-md">
                  <Link
                    href={detailHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-accent transition-colors"
                  >
                    {detailLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </p>
              </StaggerItem>
            )}

            <StaggerItem className="mt-10 sm:mt-12 max-w-md">
              <BlueprintFigure src="/blueprints/blueprint-03-wind-turbine.svg" className="w-full" />
            </StaggerItem>
          </div>

          <div className="space-y-4">
            {t.steps.map((step, index) => (
              <StaggerItem key={step.number} className="group">
                <HoverLift x={8} y={0} className="relative p-6 lg:p-8 surface-card">
                  <div className="absolute top-6 lg:top-8 right-6 lg:right-8 text-4xl font-extralight text-border select-none group-hover:text-border-hover transition-colors">
                    {step.number}
                  </div>

                  {index < t.steps.length - 1 && (
                    <div className="absolute -bottom-4 left-10 w-px h-4 bg-gradient-to-b from-border to-transparent" />
                  )}

                  <h3 className="text-base sm:text-lg font-medium mb-2 pr-16 text-foreground">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-accent group-hover:w-1 transition-all duration-300 rounded-r" />
                </HoverLift>
              </StaggerItem>
            ))}
          </div>
        </div>
      </StaggerInView>
    </section>
  )
}
