import Link from "next/link"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale, ROUTES } from "@/lib/i18n"

interface FeaturedToolSectionProps {
  locale?: Locale
}

export function FeaturedToolSection({ locale = "nl" }: FeaturedToolSectionProps) {
  const t = dict.pageHeaders[locale].tools
  const ctaLabel = dict.sectionLinks[locale].tools

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <StaggerItem>
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
              {t.eyebrow}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-foreground">
              {t.titlePrefix}{" "}
              <span className="heading-accent-gradient">{t.titleAccent}</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              {t.description}
            </p>
          </StaggerItem>

          <StaggerItem>
            <Link
              href={ROUTES.tools[locale]}
              className="inline-flex items-center gap-2.5 btn-primary px-7 sm:px-8 py-3.5 sm:py-4"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </StaggerItem>
        </div>
      </StaggerInView>
    </section>
  )
}
