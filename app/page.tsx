import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

export const metadata: Metadata = {
  title: seo.home.nl.title,
  description: seo.home.nl.description,
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: socialOpenGraph({
    title: seo.home.nl.title,
    description: seo.home.nl.description,
    url: "https://breure.ai",
    locale: "nl_NL",
  }),
  twitter: socialTwitter({
    title: seo.home.nl.title,
    description: seo.home.nl.description,
  }),
}

export default function Home() {
  return (
    <>
      <Navigation locale="nl" />
      <main>
        <HeroSection locale="nl" />
        <WhySection locale="nl" />
        <ServicesSection locale="nl" />
        <ProcessSection locale="nl" />
        <ContactSection locale="nl" />
      </main>
      <Footer locale="nl" />
    </>
  )
}
