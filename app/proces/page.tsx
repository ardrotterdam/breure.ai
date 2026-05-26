import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

const locale = "nl" as const
const headerCopy = dict.pageHeaders.nl.process
const ctaCopy = dict.ctas.nl.process

export const metadata: Metadata = {
  title: seo.process.nl.title,
  description: seo.process.nl.description,
  keywords: [
    "offshore website proces",
    "asset website development",
    "maritime web development",
    "vessel website launch",
    "Breure.ai proces",
  ],
  alternates: {
    canonical: "/proces",
    languages: {
      "nl-NL": "/proces",
      "en-US": "/en/process",
      "x-default": "/proces",
    },
  },
  openGraph: socialOpenGraph({
    title: seo.process.nl.title,
    description: seo.process.nl.description,
    url: "https://breure.ai/proces",
    locale: "nl_NL",
  }),
  twitter: socialTwitter({
    title: seo.process.nl.title,
    description: seo.process.nl.description,
  }),
}

export default function ProcesPage() {
  return (
    <>
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
