import type { Metadata } from "next"

import { HorecaPage } from "@/components/horeca/horeca-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { siteUrl } from "@/lib/site-metadata"

const locale = "nl" as const

const base = buildPageMetadata("horeca", locale, {
  keywords: [
    "horeca website",
    "restaurant website",
    "bistro website",
    "friterie website",
    "premium horecawebsites",
    "Breure.ai horeca",
  ],
})

const ogImage = {
  url: `${siteUrl}/images/horeca/og.jpg`,
  secureUrl: `${siteUrl}/images/horeca/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Horeca websites — Breure.ai",
  type: "image/jpeg",
}

export const metadata: Metadata = {
  ...base,
  openGraph: {
    ...base.openGraph,
    images: [ogImage],
  },
  twitter: {
    ...base.twitter,
    images: [`${siteUrl}/images/horeca/og.jpg`],
  },
}

export default function HorecaRoutePage() {
  return <HorecaPage locale={locale} />
}
