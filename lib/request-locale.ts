import { headers } from "next/headers"

import type { Locale } from "@/lib/i18n"

export const LOCALE_HEADER = "x-breure-locale"

/** Server-side locale for `<html lang>` — set by proxy.ts on every request. */
export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers()
  const value = headerStore.get(LOCALE_HEADER)
  return value === "en" ? "en" : "nl"
}
