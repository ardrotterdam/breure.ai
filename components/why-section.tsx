import Link from "next/link"
import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface WhySectionProps {
  locale?: Locale
  /** Homepage uses problem-framing copy; other pages keep the shared why dict. */
  variant?: "default" | "home" | "whyBreure"
  /** When set, shows a crawlable link to the dedicated portfolio page (homepage). */
  portfolioHref?: string
}

export function WhySection({
  locale = "nl",
  variant = "default",
  portfolioHref,
}: WhySectionProps) {
  const t =
    variant === "home"
      ? dict.home.why[locale]
      : variant === "whyBreure"
        ? dict.home.whyBreure[locale]
        : dict.why[locale]
  const portfolioLabel = dict.sectionLinks[locale].portfolio
  const paragraphs = "paragraphs" in t ? t.paragraphs : undefined
  const closingLead = "closingLead" in t ? t.closingLead : undefined
  const closing = "closing" in t ? t.closing : undefined
  const reasonGrid =
    t.reasons.length >= 4
      ? "grid md:grid-cols-2 gap-6 lg:gap-8"
      : "grid md:grid-cols-3 gap-6 lg:gap-8"

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-secondary">
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <StaggerItem>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 max-w-3xl text-foreground">
            {t.title}
          </h2>
        </StaggerItem>

        {t.intro || (paragraphs && paragraphs.length > 0) ? (
          <StaggerItem>
            <div className="max-w-2xl mb-12 sm:mb-16 space-y-4">
              {t.intro ? (
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {t.intro}
                </p>
              ) : null}
              {paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-text-secondary text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </StaggerItem>
        ) : (
          <div className="mb-12 sm:mb-16" />
        )}

        <div className={reasonGrid}>
          {t.reasons.map((reason, index) => (
            <StaggerItem key={reason.title} className="group relative">
              <HoverLift className="relative p-7 sm:p-8 surface-card h-full">
                <div className="absolute top-6 right-6 text-5xl font-extralight text-border select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 pr-12 text-foreground">{reason.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{reason.description}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </div>

        {closingLead || closing ? (
          <StaggerItem>
            <div className="mt-12 sm:mt-16 max-w-3xl space-y-4">
              {closingLead ? (
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {closingLead}
                </p>
              ) : null}
              {closing ? (
                <p className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  {closing}
                </p>
              ) : null}
            </div>
          </StaggerItem>
        ) : null}

        {portfolioHref && (
          <StaggerItem>
            <p className="mt-10 sm:mt-12">
              <Link
                href={portfolioHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-accent transition-colors"
              >
                {portfolioLabel}
                <span aria-hidden>→</span>
              </Link>
            </p>
          </StaggerItem>
        )}
      </StaggerInView>
    </section>
  )
}
