import type { Metadata } from "next"

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
    "Breure contact",
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
      <Navigation locale={locale} />
      <main className="pt-24 md:pt-28">
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
