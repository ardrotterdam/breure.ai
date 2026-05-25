import type { Metadata } from "next"

export const siteUrl = "https://breure.ai"

export const brandAssets = {
  favicon16: "/breure-favicon-16.png",
  favicon32: "/breure-favicon-32.png",
  favicon512: "/breure-favicon-512.png",
  openGraph: "/breure-og.png",
} as const

export const openGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: brandAssets.openGraph,
    width: 1200,
    height: 630,
    alt: "Breure.ai — Maritieme websites voor offshore & maritime",
  },
]

export const twitterImages: NonNullable<Metadata["twitter"]>["images"] = [
  brandAssets.openGraph,
]
