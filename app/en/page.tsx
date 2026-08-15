import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { FeaturedToolSection } from "@/components/featured-tool-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { HomeExamplesSection } from "@/components/home-examples-section"
import { HomeLocationSection } from "@/components/home-location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ROUTES } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "en" as const

export const metadata: Metadata = buildPageMetadata("home", locale, {
  keywords: [
    "maritime software",
    "custom maritime software",
    "vessel comparison software",
    "maritime workflow automation",
    "chartering software tools",
    "charterers",
    "contractors",
    "brokers",
    "Rotterdam",
  ],
})

export default function EnglishHome() {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <WhySection locale={locale} variant="home" />
        <FeaturedToolSection locale={locale} />
        <ServicesSection
          locale={locale}
          variant="home"
          detailHref={ROUTES.maritimeSoftware.en}
        />
        <ProcessSection locale={locale} variant="home" />
        <HomeExamplesSection locale={locale} />
        <WhySection locale={locale} variant="whyBreure" />
        <HomeLocationSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
