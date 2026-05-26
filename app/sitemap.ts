import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-metadata"

const routes = [
  "",
  "/diensten",
  "/portfolio",
  "/proces",
  "/contact",
  "/en",
  "/en/services",
  "/en/portfolio",
  "/en/process",
  "/en/contact",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }))
}
