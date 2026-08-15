import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { VesselComparisonJsonLd } from "@/components/vessel-comparison-json-ld"
import { VesselComparisonTool } from "@/components/vessel-comparison/vessel-comparison-tool"
import { dict } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"
import { getVessels } from "@/lib/vessels/data"

const locale = "nl" as const
const headerCopy = dict.pageHeaders.nl.tools

export const metadata: Metadata = buildPageMetadata("tools", locale, {
  keywords: [
    "vessel vergelijkingstool",
    "vessel comparison software",
    "maritieme software demo",
    "kraan lastdiagram",
    "chartering software tools",
    "offshore support vessel",
  ],
})

export default async function VesselComparisonPage() {
  const vessels = await getVessels()

  return (
    <>
      <VesselComparisonJsonLd locale={locale} />
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow={headerCopy.eyebrow}
          title={
            <>
              {headerCopy.titlePrefix}{" "}
              <span className="heading-accent-gradient">
                {headerCopy.titleAccent}
              </span>
            </>
          }
          description={headerCopy.description}
        />

        <section className="border-t border-border bg-background pb-20 pt-4 sm:pb-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <VesselComparisonTool vessels={vessels} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
