import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { LatestInsightSection } from "@/components/latest-insight-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "en" as const

export const metadata: Metadata = buildPageMetadata("home", locale)

export default function EnglishHome() {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <WhySection locale={locale} portfolioHref="/en/portfolio" />
        <ServicesSection locale={locale} detailHref="/en/services" />
        <ProcessSection locale={locale} detailHref="/en/process" />
        <LatestInsightSection locale={locale} />
        <ContactSection locale={locale} fullPageHref="/en/contact" />
      </main>
      <Footer locale={locale} />
    </>
  )
}
