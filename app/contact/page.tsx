import type { Metadata } from "next"
import Link from "next/link"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactPageJsonLd } from "@/components/contact-page-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { dict, ROUTES } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "nl" as const
const nav = dict.nav.nl
const related = dict.contactRelated.nl

export const metadata: Metadata = buildPageMetadata("contact", locale, {
  keywords: [
    "Breure.ai contact",
    "maritieme software Rotterdam",
    "maritieme workflow",
    "contactformulier",
  ],
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="contact" />
      <ContactPageJsonLd locale={locale} />
      <Navigation locale={locale} />
      <main className="pt-28 md:pt-32">
        <ContactSection locale={locale} variant="page" />
        <ContactFaq locale={locale} />
        <section className="border-t border-border/50 bg-secondary/30 py-12 sm:py-14">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-light text-foreground mb-3">
              {related.heading}
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
              {related.description}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href={ROUTES.maritimeSoftware.nl} className="text-accent-soft hover:text-accent transition-colors">
                  {nav.maritimeSoftware}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.tools.nl} className="text-accent-soft hover:text-accent transition-colors">
                  {nav.demo}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.insights.nl} className="text-accent-soft hover:text-accent transition-colors">
                  {nav.blog}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
