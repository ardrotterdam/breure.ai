import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { seo } from "@/lib/i18n"

const locale = "en" as const

export const metadata: Metadata = {
  title: seo.home.en.title,
  description: seo.home.en.description,
  alternates: {
    canonical: "/en",
    languages: {
      "nl-NL": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breure.ai/en",
    title: seo.home.en.title,
    description: seo.home.en.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.en.title,
    description: seo.home.en.description,
  },
}

export default function EnglishHome() {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <WhySection locale={locale} />
        <ServicesSection locale={locale} />
        <ProcessSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
