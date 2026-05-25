import type { Metadata } from "next"

import { seo } from "@/lib/i18n"
import { openGraphImages, twitterImages } from "@/lib/site-metadata"

export const metadata: Metadata = {
  title: {
    default: seo.home.en.title,
    template: "%s",
  },
  description: seo.home.en.description,
  alternates: {
    canonical: "/en",
    languages: {
      "nl-NL": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["nl_NL"],
    url: "https://breure.ai/en",
    title: seo.home.en.title,
    description: seo.home.en.description,
    siteName: "Breure.ai",
    images: openGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.en.title,
    description: seo.home.en.description,
    images: twitterImages,
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
