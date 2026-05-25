import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { seo } from "@/lib/i18n"

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breure.ai/en/contact",
    title: seo.contact.en.title,
    description: seo.contact.en.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.contact.en.title,
    description: seo.contact.en.description,
  },
}

export default function EnglishContactPage() {
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
