import { NextRequest, NextResponse } from "next/server"

import { LOCALE_HEADER } from "@/lib/request-locale"

function localeFromPathname(pathname: string): "nl" | "en" {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl"
}

/** Sets x-breure-locale so the root layout can render the correct `<html lang>`. */
export function proxy(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set(LOCALE_HEADER, localeFromPathname(req.nextUrl.pathname))
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
