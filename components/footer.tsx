import Image from "next/image"
import Link from "next/link"
import { dict, type Locale, ROUTES } from "@/lib/i18n"

interface FooterProps {
  locale?: Locale
}

export function Footer({ locale = "nl" }: FooterProps) {
  const t = dict.footer[locale]
  const nav = dict.nav[locale]
  const year = new Date().getFullYear()

  const insightsHref = ROUTES.insights[locale]

  const links = [
    { label: nav.services, href: ROUTES.services[locale] },
    { label: nav.process, href: ROUTES.process[locale] },
    { label: nav.portfolio, href: ROUTES.portfolio[locale] },
    { label: nav.insights, href: insightsHref },
    { label: nav.contact, href: ROUTES.contact[locale] },
  ]

  return (
    <footer className="relative py-14 sm:py-16 bg-ocean-deep border-t border-border/50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="md:col-span-2">
            <Link
              href={ROUTES.home[locale]}
              className="mb-4 inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="Breure.ai — Home"
            >
              <Image
                src="/images/breure-ai-webbureau-rotterdam-logo.webp"
                alt="Breure.ai – AI webbureau Rotterdam"
                width={662}
                height={160}
                className="h-10 w-auto sm:h-11 md:h-12 lg:h-14"
              />
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">{t.navHeading}</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                    {...(link.href === insightsHref && nav.insightsTitle
                      ? { title: nav.insightsTitle }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">{t.contactHeading}</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="mailto:info@breure.ai"
                  className="hover:text-foreground transition-colors"
                >
                  info@breure.ai
                </a>
              </li>
              <li>Westplein 12</li>
              <li>3016 BM Rotterdam</li>
              <li>The Netherlands</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-eyebrow">{t.copyright(year)}</p>
          <div className="flex items-center gap-6 text-xs text-text-eyebrow">
            <Link href={ROUTES.contact[locale]} className="hover:text-foreground transition-colors">
              {nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
