import type { MetadataRoute } from "next"

import { insightSitemapEntries } from "@/lib/insights-metadata"
import { LOCALES, ROUTES } from "@/lib/i18n"
import {
  absoluteUrl,
  pathForRoute,
  SITEMAP_ROUTES,
  type CoreRouteKey,
} from "@/lib/page-metadata"

const PRIORITY: Record<CoreRouteKey, number> = {
  home: 1,
  services: 0.9,
  process: 0.8,
  portfolio: 0.8,
  contact: 0.7,
}

const TOOLS_PRIORITY = 0.85

const CHANGE_FREQUENCY: Record<
  CoreRouteKey,
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

  // Shared EN product URL — one sitemap entry (not duplicated per locale).
  const toolsPath = ROUTES.tools.en
  const toolsEntry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl(toolsPath),
    lastModified,
    changeFrequency: "weekly",
    priority: TOOLS_PRIORITY,
    alternates: {
      languages: {
        "en-US": absoluteUrl(toolsPath),
        "nl-NL": absoluteUrl(toolsPath),
        "x-default": absoluteUrl(toolsPath),
      },
    },
  }

  return [...coreEntries, toolsEntry, ...insightSitemapEntries()]
}
