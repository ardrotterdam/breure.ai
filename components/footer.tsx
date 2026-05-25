"use client"

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

  const links = [
    { label: nav.services, href: ROUTES.services[locale] },
    { label: nav.process, href: ROUTES.process[locale] },
    { label: nav.portfolio, href: ROUTES.portfolio[locale] },
    { label: nav.contact, href: ROUTES.contact[locale] },
  ]

  return (
    <footer className="relative py-14 sm:py-16 bg-ocean-deep border-t border-border/50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="md:col-span-2">
            <Link
              href={ROUTES.home[locale]}
              className="mb-4 inline-flex items-center"
              aria-label="BREURE Web Agency — Home"
            >
              <Image
                src="/breure-logo.png"
                alt="BREURE Web Agency"
                width={1536}
                height={340}
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 210px"
                className="h-auto w-[160px] object-contain sm:w-[180px] lg:w-[210px]"
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
                  <Link href={link.href} className="hover:text-foreground transition-colors">
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
