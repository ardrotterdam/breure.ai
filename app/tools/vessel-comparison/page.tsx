import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { VesselComparisonTool } from "@/components/vessel-comparison/vessel-comparison-tool"
import { getVessels } from "@/lib/vessels/data"

export const metadata: Metadata = {
  title: "Vessel Comparison Tool | Breure.ai",
  description:
    "Side-by-side comparison of offshore support vessels — crane capacity, deck area, DP class, accommodation and more. Free demo for charterers and offshore contractors.",
  robots: {
    index: true,
    follow: true,
  },
}

export default async function VesselComparisonPage() {
  const vessels = await getVessels()

  return (
    <>
      <Navigation locale="en" />
      <main>
        <PageHeader
          eyebrow="Tools"
          title={
            <>
              Vessel{" "}
              <span className="heading-accent-gradient">Comparison</span>
            </>
          }
          description="Compare 2–4 offshore support vessels side by side. Filter by crane capacity, DP class and deck area, then explore interactive crane load charts. Demo fleet — five fictional vessels with representative specs."
        />

        <section className="border-t border-border bg-background pb-20 pt-4 sm:pb-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <VesselComparisonTool vessels={vessels} />
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  )
}
