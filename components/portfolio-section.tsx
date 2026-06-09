import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface PortfolioSectionProps {
  locale?: Locale
  /** Hide intro block when the page already has a PageHeader h1 */
  showIntro?: boolean
}

export function PortfolioSection({ locale = "nl", showIntro = true }: PortfolioSectionProps) {
  const t = dict.portfolio[locale]

  return (
    <section
      aria-labelledby={showIntro ? "portfolio-heading" : undefined}
      className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -right-32 w-[480px] h-[480px] rounded-full blur-[140px]"
          style={{ backgroundColor: "var(--accent-blur)" }}
        />
        <div
          className="absolute bottom-1/3 -left-32 w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ backgroundColor: "var(--divider-blur)" }}
        />
      </div>

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12" amount={0.15} delayChildren={0.15}>
        {showIntro && (
          <header>
            <StaggerItem>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
                {t.eyebrow}
              </p>
            </StaggerItem>

            <StaggerItem>
              <h2
                id="portfolio-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 max-w-3xl text-foreground"
              >
                {t.title}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-text-secondary text-base sm:text-lg max-w-2xl mb-12 sm:mb-16 leading-relaxed">
                {t.intro}
              </p>
            </StaggerItem>
          </header>
        )}

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.items.map((project, index) => (
            <StaggerItem key={project.title} className="group relative">
              <article>
              <HoverLift className="relative p-7 sm:p-8 lg:p-10 surface-card h-full flex flex-col overflow-hidden">
                <div className="absolute top-6 right-6 text-5xl font-extralight text-border select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="w-8 h-px bg-border" />
                  <span className="text-xs font-medium tracking-wider uppercase text-accent-soft">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 pr-12 text-foreground">{project.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm mb-7 sm:mb-8">{project.description}</p>

                <div className="mt-auto pt-6 border-t border-border/60 grid grid-cols-3 gap-3 sm:gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-[11px] sm:text-xs text-text-eyebrow mb-1 tracking-wide">{metric.label}</div>
                      <div className="text-sm text-foreground font-medium">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
              </HoverLift>
              </article>
            </StaggerItem>
          ))}
        </div>

        <StaggerItem>
          <p className="mt-14 sm:mt-16 text-sm text-text-eyebrow italic max-w-2xl">
            {t.ndaNote}
          </p>
        </StaggerItem>
      </StaggerInView>
    </section>
  )
}
