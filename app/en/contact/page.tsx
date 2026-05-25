import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

const locale = "en" as const

export const metadata: Metadata = {
  title: seo.contact.en.title,
  description: seo.contact.en.description,
  keywords: [
    "Breure contact",
    "offshore website contact",
    "maritime web agency Rotterdam",
    "contact form",
  ],
  alternates: {
    canonical: "/en/contact",
    languages: {
      "nl-NL": "/contact",
      "en-US": "/en/contact",
      "x-default": "/contact",
    },
  },
  openGraph: socialOpenGraph({
    title: seo.contact.en.title,
    description: seo.contact.en.description,
    url: "https://breure.ai/en/contact",
    locale: "en_US",
  }),
  twitter: socialTwitter({
    title: seo.contact.en.title,
    description: seo.contact.en.description,
  }),
}

export default function EnglishContactPage() {
  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-28 md:pt-32">
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
