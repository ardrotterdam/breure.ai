import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Proces | Van specs naar online impact | Breure",
  description:
    "Een gestroomlijnd proces voor offshore & maritieme websites: asset-inventarisatie, structuur & content, design & development, en launch & optimalisatie. Live binnen weken.",
  keywords: [
    "offshore website proces",
    "asset website development",
    "maritime web development",
    "vessel website launch",
    "Breure proces",
  ],
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://breure.ai/proces",
    title: "Proces | Breure Web Agency",
    description:
      "Van specs naar online impact. Een gestroomlijnd proces dat past bij de snelheid van de offshore industrie.",
    siteName: "Breure Web Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proces | Breure Web Agency",
    description:
      "Van specs naar online impact. Een gestroomlijnd proces dat past bij de snelheid van de offshore industrie.",
  },
}

export default function ProcesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="Proces"
          title={
            <>
              Van GA-plan en spec sheet naar{" "}
              <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
                live asset website
              </span>
            </>
          }
          description="Geen maanden wachten, maar resultaat binnen weken. Vier heldere fases die aansluiten op hoe charterers, engineers en tenderteams werken — zodat uw site direct waarde levert."
        />
        <ProcessSection />
        <CtaBand
          eyebrow="Start uw project"
          title="Klaar om uw asset live te zetten?"
          description="Wij bespreken graag uw vloot, doelgroep en tijdlijn. Vrijblijvend, en altijd vertrouwelijk."
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
