import type { Metadata } from "next"

export const siteUrl = "https://breure.ai"

export const brandAssets = {
  /** SVG wave mark — used in UI and Organization schema */
  logoMark: "/breure-logo-mark.svg",
  /** Static favicon assets in /public */
  icon: "/favicon.ico",
  appleIcon: "/apple-touch-icon.png",
  /** App Router generated social images */
  openGraph: "/opengraph-image",
  twitter: "/twitter-image",
} as const

/** Absolute URL for social crawlers (WhatsApp, LinkedIn, Facebook, X, Discord). */
export const openGraphImageUrl = `${siteUrl}${brandAssets.openGraph}`
export const twitterImageUrl = `${siteUrl}${brandAssets.twitter}`
export const logoImageUrl = `${siteUrl}${brandAssets.logoMark}`

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
  twitterImageUrl,
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
