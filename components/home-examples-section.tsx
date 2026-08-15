import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface HomeExamplesSectionProps {
  locale?: Locale
}

export function HomeExamplesSection({ locale = "nl" }: HomeExamplesSectionProps) {
  const t = dict.home.examples[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-foreground">
                {t.title}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 max-w-md">
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {t.intro}
                </p>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {t.lead}
                </p>
              </div>
            </StaggerItem>
          </div>

          <div>
            <StaggerItem>
              <HoverLift y={0} className="relative p-7 sm:p-8 surface-card">
                <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-6">
                  {t.eyebrow}
                </p>
                <ul className="space-y-4">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </HoverLift>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 sm:mt-10 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                {t.closing}
              </p>
            </StaggerItem>
          </div>
        </div>
      </StaggerInView>
    </section>
  )
}
