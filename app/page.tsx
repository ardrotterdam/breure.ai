import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata("home", "nl")

export default function Home() {
  return (
    <>
      <Navigation locale="nl" />
      <main>
        <HeroSection locale="nl" />
        <WhySection locale="nl" portfolioHref="/portfolio" />
        <ServicesSection locale="nl" detailHref="/diensten" />
        <ProcessSection locale="nl" detailHref="/proces" />
        <ContactSection locale="nl" fullPageHref="/contact" />
      </main>
      <Footer locale="nl" />
    </>
  )
}
