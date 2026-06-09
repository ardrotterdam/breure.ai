import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ContactPageJsonLd } from "@/components/contact-page-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

const locale = "nl" as const

export const metadata: Metadata = {
  title: seo.contact.nl.title,
  description: seo.contact.nl.description,
  keywords: [
    "Breure.ai contact",
    "offshore website contact",
    "maritime web agency Rotterdam",
    "contactformulier",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      "nl-NL": "/contact",
      "en-US": "/en/contact",
      "x-default": "/contact",
    },
  },
  openGraph: socialOpenGraph({
    title: seo.contact.nl.title,
    description: seo.contact.nl.description,
    url: "https://breure.ai/contact",
    locale: "nl_NL",
  }),
  twitter: socialTwitter({
    title: seo.contact.nl.title,
    description: seo.contact.nl.description,
  }),
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="contact" />
      <ContactPageJsonLd locale={locale} />
      <Navigation locale={locale} />
      <main className="pt-28 md:pt-32">
        <ContactSection locale={locale} variant="page" />
      </main>
      <Footer locale={locale} />
    </>
  )
}
