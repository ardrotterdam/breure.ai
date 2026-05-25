import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.process
const ctaCopy = dict.ctas.en.process

export const metadata: Metadata = {
  title: seo.process.en.title,
  description: seo.process.en.description,
  keywords: [
    "offshore website process",
    "asset website development",
    "maritime web development",
    "vessel website launch",
    "Breure process",
  ],
  alternates: {
    canonical: "/en/process",
    languages: {
      "nl-NL": "/proces",
      "en-US": "/en/process",
      "x-default": "/proces",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breure.ai/en/process",
    title: seo.process.en.title,
    description: seo.process.en.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.process.en.title,
    description: seo.process.en.description,
  },
}

export default function EnglishProcessPage() {
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
