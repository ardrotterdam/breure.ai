import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Portfolio | Asset websites & capability pages | Breure",
  description:
    "Selected works van Breure Web Agency: asset microsites, capability pages en multi-vessel fleet sites voor offshore operators, contractors en vlooteigenaren.",
  keywords: [
    "Breure portfolio",
    "offshore website portfolio",
    "vessel website case study",
    "asset microsite case",
    "maritime web design portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://breure.ai/portfolio",
    title: "Portfolio | Breure Web Agency",
    description:
      "Asset websites, capability pages en multi-vessel fleet sites voor de offshore & maritieme sector.",
    siteName: "Breure Web Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Breure Web Agency",
    description:
      "Asset websites, capability pages en multi-vessel fleet sites voor de offshore & maritieme sector.",
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="Portfolio"
          title={
            <>
              Asset websites waarop{" "}
              <span className="bg-gradient-to-r from-white to-[#4a9eff] bg-clip-text text-transparent">
                charterers en contractors
              </span>{" "}
              beslissen
            </>
          }
          description="Een selectie uit ons werk voor offshore operators, jack-up eigenaren, heavy-lift contractors en multi-vessel vloten. Premium digitale presentaties op het niveau van de assets zelf."
        />
        <PortfolioSection />
        <CtaBand
          eyebrow="Uw asset volgende?"
          title="Laat uw vloot zien zoals hij verdient."
          description="Wij bespreken graag welke aanpak past bij uw assets, doelgroep en commerciële doelen. Voorbeelden en demo-omgevingen tonen wij in een persoonlijk gesprek."
          primaryHref="/contact"
          primaryLabel="Plan een call"
          secondaryHref="/diensten"
          secondaryLabel="Bekijk onze diensten"
        />
      </main>
      <Footer />
    </>
  )
}
