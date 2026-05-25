import { NextRequest, NextResponse } from "next/server"

const LOCALE_COOKIE = "breure_locale"

/**
 * Light-touch locale handling for the homepage only (runs at the edge as a Next.js Proxy).
 *
 * 1. If the visitor already chose a language (cookie set by <LanguageToggle/>),
 *    respect that choice.
 * 2. Otherwise fall back to Accept-Language; non-Dutch visitors land on /en.
 *
 * The default for Dutch speakers is the root `/` (Dutch).
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname !== "/") {
    return NextResponse.next()
  }

  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value
  if (cookieLocale === "en") {
    const url = req.nextUrl.clone()
    url.pathname = "/en"
    return NextResponse.redirect(url)
  }
  if (cookieLocale === "nl") {
    return NextResponse.next()
  }

  const acceptLanguage = req.headers.get("accept-language") ?? ""
  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? ""

  if (primary && !primary.startsWith("nl")) {
    const url = req.nextUrl.clone()
    url.pathname = "/en"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
