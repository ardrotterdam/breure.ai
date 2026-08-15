import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface HomeLocationSectionProps {
  locale?: Locale
}

export function HomeLocationSection({ locale = "nl" }: HomeLocationSectionProps) {
  const t = dict.home.location[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-8 sm:mb-10 text-foreground">
              {t.title}
            </h2>
          </StaggerItem>

          <div className="space-y-5 sm:space-y-6">
            {t.paragraphs.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              </StaggerItem>
            ))}
          </div>
        </div>
      </StaggerInView>
    </section>
  )
}
