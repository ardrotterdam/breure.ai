import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

const locale = "nl" as const
const headerCopy = dict.pageHeaders.nl.portfolio
const ctaCopy = dict.ctas.nl.portfolio

export const metadata: Metadata = {
  title: seo.portfolio.nl.title,
  description: seo.portfolio.nl.description,
  keywords: [
    "Breure.ai portfolio",
    "offshore website portfolio",
    "vessel website case study",
    "asset microsite case",
    "maritime web design portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
    languages: {
      "nl-NL": "/portfolio",
      "en-US": "/en/portfolio",
      "x-default": "/portfolio",
    },
  },
  openGraph: socialOpenGraph({
    title: seo.portfolio.nl.title,
    description: seo.portfolio.nl.description,
    url: "https://breure.ai/portfolio",
    locale: "nl_NL",
  }),
  twitter: socialTwitter({
    title: seo.portfolio.nl.title,
    description: seo.portfolio.nl.description,
  }),
}

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="portfolio" />
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow={headerCopy.eyebrow}
          title={
            <>
              {headerCopy.titlePrefix}{" "}
              <span className="heading-accent-gradient">
                {headerCopy.titleAccent}
              </span>{" "}
              {headerCopy.titleSuffix}
            </>
          }
          description={headerCopy.description}
        />
        <PortfolioSection locale={locale} showIntro={false} />
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
