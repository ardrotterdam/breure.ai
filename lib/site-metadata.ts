import type { Metadata } from "next"

export const siteUrl = "https://breure.ai"

export const brandAssets = {
  favicon16: "/breure-favicon-16.png",
  favicon32: "/breure-favicon-32.png",
  favicon512: "/breure-favicon-512.png",
  openGraph: "/breure-ai-og-image.png",
} as const

/** Absolute URL for social crawlers (WhatsApp, LinkedIn, Facebook, X, Discord). */
export const openGraphImageUrl = `${siteUrl}${brandAssets.openGraph}`

export const openGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: openGraphImageUrl,
    secureUrl: openGraphImageUrl,
    width: 1200,
    height: 630,
    alt: "Breure.ai — Premium wave mark for maritime digital platforms",
    type: "image/png",
  },
]

export const twitterImages: NonNullable<Metadata["twitter"]>["images"] = [
  openGraphImageUrl,
]

type SocialPageMeta = {
  title: string
  description: string
  url: string
  locale: "nl_NL" | "en_US"
  alternateLocale?: ("nl_NL" | "en_US")[]
}

/** Shared Open Graph block — include on every page so images are not dropped by metadata merge. */
export function socialOpenGraph({
  title,
  description,
  url,
  locale,
  alternateLocale,
}: SocialPageMeta): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale,
    alternateLocale,
    url,
    title,
    description,
    siteName: "Breure.ai",
    images: openGraphImages,
  }
}

/** Shared Twitter/X card block — include on every page alongside socialOpenGraph. */
export function socialTwitter({
  title,
  description,
}: Pick<SocialPageMeta, "title" | "description">): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: twitterImages,
  }
}
