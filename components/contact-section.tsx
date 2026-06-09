import { ContactDecor } from "@/components/contact/contact-decor"
import { ContactForm } from "@/components/contact/contact-form"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"

interface ContactSectionProps {
  locale?: Locale
  /** Use "page" on dedicated contact routes so the section title renders as h1 */
  variant?: "section" | "page"
}

export function ContactSection({ locale = "nl", variant = "section" }: ContactSectionProps) {
  const t = dict.contact[locale]
  const TitleTag = variant === "page" ? "h1" : "h2"

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <ContactDecor />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          <header>
            <StaggerItem>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
                {t.eyebrow}
              </p>
            </StaggerItem>
            <StaggerItem>
              <TitleTag
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-foreground"
              >
                {t.titlePrefix}{" "}
                <span className="heading-accent-gradient">
                  {t.titleAccent}
                </span>
              </TitleTag>
            </StaggerItem>
            <StaggerItem>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md mb-10 sm:mb-12">
                {t.intro}
              </p>
            </StaggerItem>

            <StaggerItem className="space-y-6">
              <div>
                <p className="text-sm text-text-eyebrow mb-1">{t.emailLabel}</p>
                <a
                  href="mailto:info@breure.ai"
                  className="text-base sm:text-lg text-foreground hover:text-accent-soft transition-colors"
                >
                  info@breure.ai
                </a>
              </div>
              <div>
                <p className="text-sm text-text-eyebrow mb-1">{t.addressLabel}</p>
                <address className="not-italic text-base sm:text-lg text-foreground">
                  {t.address.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < t.address.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-14 sm:mt-16 text-sm text-text-eyebrow italic">{t.tagline}</p>
            </StaggerItem>
          </header>

          <StaggerItem>
            <ContactForm locale={locale} />
          </StaggerItem>
        </div>
      </StaggerInView>
    </section>
  )
}
