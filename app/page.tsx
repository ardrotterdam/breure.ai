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

export const metadata: Metadata = buildPageMetadata("home", "nl", {
  keywords: [
    "maritieme software",
    "maritieme software op maat",
    "maatwerk software maritieme sector",
    "vessel comparison software",
    "maritime workflow automation",
    "charterers",
    "contractors",
    "brokers",
    "Rotterdam",
  ],
})

export default function Home() {
  return (
    <>
      <Navigation locale="nl" />
      <main>
        <HeroSection locale="nl" />
        <WhySection locale="nl" variant="home" />
        <FeaturedToolSection locale="nl" />
        <ServicesSection
          locale="nl"
          variant="home"
          detailHref={ROUTES.maritimeSoftware.nl}
        />
        <ProcessSection locale="nl" variant="home" />
        <HomeExamplesSection locale="nl" />
        <WhySection locale="nl" variant="whyBreure" />
        <HomeLocationSection locale="nl" />
        <ContactSection locale="nl" />
      </main>
      <Footer locale="nl" />
    </>
  )
}
