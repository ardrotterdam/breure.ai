import Link from "next/link"
import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale, ROUTES } from "@/lib/i18n"

interface FeaturedToolSectionProps {
  locale?: Locale
}

export function FeaturedToolSection({ locale = "nl" }: FeaturedToolSectionProps) {
  const t = dict.home.featuredTool[locale]
  const hasFeatures = t.features.length > 0

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className={hasFeatures ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-start" : "max-w-3xl"}>
          <div>
            <StaggerItem>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
                {t.eyebrow}
              </p>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-foreground">
                {t.titlePrefix}
                {t.titleAccent ? (
                  <>
                    {" "}
                    <span className="heading-accent-gradient">{t.titleAccent}</span>
                  </>
                ) : null}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4 mb-8 sm:mb-10">
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {t.description}
                </p>
                {t.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-text-secondary text-base sm:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link
                href={ROUTES.tools[locale]}
                className="inline-flex items-center gap-2.5 btn-primary px-7 sm:px-8 py-3.5 sm:py-4"
              >
                {t.cta}
                <span aria-hidden>→</span>
              </Link>
            </StaggerItem>

            {t.disclaimer ? (
              <StaggerItem>
                <p className="mt-5 text-sm italic text-text-dim">{t.disclaimer}</p>
              </StaggerItem>
            ) : null}
          </div>

          {hasFeatures ? (
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {t.features.map((feature, index) => (
                <StaggerItem key={feature}>
                  <HoverLift className="relative p-6 sm:p-7 surface-card h-full">
                    <div className="text-sm font-extralight text-border mb-3">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-base font-medium text-foreground leading-snug">{feature}</p>
                  </HoverLift>
                </StaggerItem>
              ))}
            </div>
          ) : null}
        </div>
      </StaggerInView>
    </section>
  )
}
