import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Diensten | Asset websites voor offshore & maritiem | Breure",
  description:
    "Asset microsites, capability pages, SEO en charter marketing voor heavy-lift vessels, jack-ups, platforms en support ships. Technisch, snel en op niveau van uw day rate.",
  keywords: [
    "asset microsites",
    "vessel website",
    "jack-up website",
    "offshore SEO",
    "maritieme webdesign",
    "capability page",
    "charter marketing",
  ],
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://breure.ai/diensten",
    title: "Diensten | Breure Web Agency",
    description:
      "Asset microsites, capability pages, SEO en charter marketing voor de offshore & maritieme sector.",
    siteName: "Breure Web Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diensten | Breure Web Agency",
    description:
      "Asset microsites, capability pages, SEO en charter marketing voor de offshore & maritieme sector.",
  },
}

export default function DienstenPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="Diensten"
          title={
            <>
              Asset websites die meegaan op{" "}
              <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
                tender, charter en engineering review
              </span>
            </>
          }
          description="Wij bouwen gerichte, snelle microsites per schip of platform — volledig afgestemd op chartering, engineering en tendering. Geen corporate brochure, maar werkbare digitale assets."
        />
        <ServicesSection />
        <WhySection />
        <CtaBand
          eyebrow="Klaar voor uw vloot"
          title="Laat uw assets werken — ook online."
          description="In een vrijblijvend gesprek bespreken wij welke diensten passen bij uw vloot, doelgroep en commerciële doelen."
          primaryHref="/contact"
          primaryLabel="Plan een call"
          secondaryHref="/proces"
          secondaryLabel="Bekijk ons proces"
        />
      </main>
      <Footer />
    </>
  )
}
