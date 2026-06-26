import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"
import { dict } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "nl" as const
const headerCopy = dict.pageHeaders.nl.process
const ctaCopy = dict.ctas.nl.process

export const metadata: Metadata = buildPageMetadata("process", locale, {
  keywords: [
    "offshore website proces",
    "asset website development",
    "maritime web development",
    "vessel website launch",
    "Breure.ai proces",
  ],
})

export default function ProcesPage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="process" />
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
        <ProcessSection locale={locale} />
        <CtaBand
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          primaryHref="/contact"
          primaryLabel={ctaCopy.primary}
          secondaryHref="/diensten"
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
