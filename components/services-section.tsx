import Link from "next/link"
import { BlueprintFigure } from "@/components/blueprints/blueprint-figure"
import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface ServicesSectionProps {
  locale?: Locale
  /** When set, shows a crawlable link to the dedicated services page (homepage). */
  detailHref?: string
}

export function ServicesSection({ locale = "nl", detailHref }: ServicesSectionProps) {
  const t = dict.services[locale]
  const detailLabel = dict.sectionLinks[locale].services

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_minmax(0,28rem)] gap-10 lg:gap-16 items-end mb-12 sm:mb-16">
          <div>
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 max-w-3xl text-foreground">
                {t.title}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
                {t.intro}
              </p>
            </StaggerItem>

            {detailHref && (
              <StaggerItem>
                <p className="mt-6">
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
          </div>

          <StaggerItem className="w-full max-w-md lg:max-w-none lg:ml-auto">
            <BlueprintFigure
              src="/blueprints/blueprint-02-pedestal-crane.svg"
              className="w-full pt-4 lg:pt-0"
            />
          </StaggerItem>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((service) => (
            <StaggerItem key={service.title} className="group relative h-full">
              <HoverLift className="relative p-7 sm:p-8 surface-card h-full flex flex-col">
                <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="text-xs font-medium text-text-eyebrow">{service.number}</span>
                  <span className="w-8 h-px bg-border" />
                  <span className="text-xs font-medium tracking-wider uppercase text-accent-soft">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-7 sm:mb-8">{service.description}</p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-tertiary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
              </HoverLift>
            </StaggerItem>
          ))}
        </div>
      </StaggerInView>
    </section>
  )
}
