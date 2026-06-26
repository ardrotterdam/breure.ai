import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"
import { dict } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.process
const ctaCopy = dict.ctas.en.process

export const metadata: Metadata = buildPageMetadata("process", locale, {
  keywords: [
    "offshore website process",
    "asset website development",
    "maritime web development",
    "vessel website launch",
    "Breure.ai process",
  ],
})

export default function EnglishProcessPage() {
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
          primaryHref="/en/contact"
          primaryLabel={ctaCopy.primary}
          secondaryHref="/en/services"
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
