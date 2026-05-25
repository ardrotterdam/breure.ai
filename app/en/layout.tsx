import type { Metadata } from "next"

import { seo } from "@/lib/i18n"
import { socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

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
  openGraph: socialOpenGraph({
    title: seo.home.en.title,
    description: seo.home.en.description,
    url: "https://breure.ai/en",
    locale: "en_US",
    alternateLocale: ["nl_NL"],
  }),
  twitter: socialTwitter({
    title: seo.home.en.title,
    description: seo.home.en.description,
  }),
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
