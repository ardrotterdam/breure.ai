import type { Metadata } from "next"

import { ROUTES, seo, type Locale, type RouteKey } from "@/lib/i18n"
import { siteUrl, socialOpenGraph, socialTwitter } from "@/lib/site-metadata"

const LOCALE_TAG = {
  nl: "nl-NL",
  en: "en-US",
} as const

const OG_LOCALE = {
  nl: "nl_NL",
  en: "en_US",
} as const

type InsightLocale = "nl" | "en"

type PageSeoKey = keyof typeof seo

/** Core marketing pages in the bilingual sitemap loop (excludes insights). */
export type CoreRouteKey = Exclude<RouteKey, "insights">

/** Map sitemap / metadata route keys to i18n ROUTES keys. */
export const SITEMAP_ROUTES: readonly CoreRouteKey[] = [
  "home",
  "services",
  "portfolio",
  "process",
  "tools",
  "contact",
]

export function pathForRoute(routeKey: RouteKey, locale: Locale): string {
  return ROUTES[routeKey][locale]
}

export function absoluteUrl(path: string): string {
  if (path === "/") return siteUrl
  return `${siteUrl}${path}`
}

type InsightsMetadataOptions = {
  title: string
  description: string
  path: string
  alternatePath: string
  locale: InsightLocale
  keywords?: string[]
}

/** Metadata for bilingual Insights routes with NL↔EN hreflang alternates. */
export function buildInsightsPageMetadata({
  title,
  description,
  path,
  alternatePath,
  locale,
  keywords,
}: InsightsMetadataOptions): Metadata {
  const oppositeLocale: InsightLocale = locale === "nl" ? "en" : "nl"

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: path,
      languages: {
        [LOCALE_TAG.nl]: locale === "nl" ? path : alternatePath,
        [LOCALE_TAG.en]: locale === "en" ? path : alternatePath,
        "x-default": locale === "en" ? path : alternatePath,
      },
    },
    openGraph: socialOpenGraph({
      title,
      description,
      url: absoluteUrl(path),
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[oppositeLocale]],
    }),
    twitter: socialTwitter({
      title,
      description,
    }),
  }
}

export function buildPageMetadata(
  page: PageSeoKey,
  locale: Locale,
  options?: { keywords?: string[] },
): Metadata {
  const copy = seo[page][locale]
  const path = pathForRoute(page as RouteKey, locale)
  const oppositeLocale: Locale = locale === "nl" ? "en" : "nl"
  const xDefaultPath = ROUTES[page as RouteKey].nl

  return {
    title: copy.title,
    description: copy.description,
    ...(options?.keywords ? { keywords: options.keywords } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: path,
      languages: {
        [LOCALE_TAG.nl]: ROUTES[page as RouteKey].nl,
        [LOCALE_TAG.en]: ROUTES[page as RouteKey].en,
        "x-default": xDefaultPath,
      },
    },
    openGraph: socialOpenGraph({
      title: copy.title,
      description: copy.description,
      url: absoluteUrl(path),
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[oppositeLocale]],
    }),
    twitter: socialTwitter({
      title: copy.title,
      description: copy.description,
    }),
  }
}
