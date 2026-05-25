import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
