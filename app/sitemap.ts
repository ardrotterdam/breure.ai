import type { MetadataRoute } from "next"

import { insightSitemapEntries } from "@/lib/insights"
import { LOCALES, type RouteKey } from "@/lib/i18n"
import {
  absoluteUrl,
  pathForRoute,
  SITEMAP_ROUTES,
} from "@/lib/page-metadata"

const PRIORITY: Record<RouteKey, number> = {
  home: 1,
  services: 0.9,
  process: 0.8,
  portfolio: 0.8,
  contact: 0.7,
}

const CHANGE_FREQUENCY: Record<
  RouteKey,
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  home: "weekly",
  services: "monthly",
  process: "monthly",
  portfolio: "monthly",
  contact: "monthly",
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const coreEntries = SITEMAP_ROUTES.flatMap((routeKey) =>
    LOCALES.map((locale) => {
      const path = pathForRoute(routeKey, locale)
      const languages = Object.fromEntries(
        LOCALES.map((lang) => [
          lang === "nl" ? "nl-NL" : "en-US",
          absoluteUrl(pathForRoute(routeKey, lang)),
        ]),
      ) as Record<string, string>

      languages["x-default"] = absoluteUrl(pathForRoute(routeKey, "nl"))

      return {
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: CHANGE_FREQUENCY[routeKey],
        priority: PRIORITY[routeKey],
        alternates: { languages },
      }
    }),
  )

  return [...coreEntries, ...insightSitemapEntries()]
}
