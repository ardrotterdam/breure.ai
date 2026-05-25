"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { type Locale, localeFromPathname, toOppositeLocalePath } from "@/lib/i18n"

const STORAGE_KEY = "breure_locale"
const COOKIE_KEY = "breure_locale"
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* swallow: privacy modes block storage */
  }
  document.cookie = `${COOKIE_KEY}=${locale}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`
}

function readStoredLocale(): Locale | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value === "nl" || value === "en") return value
  } catch {
    /* ignore */
  }
  return null
}

interface LanguageToggleProps {
  variant?: "desktop" | "mobile"
  onSelect?: () => void
}

/**
 * NL | EN language toggle.
 *
 * - Visible on desktop and mobile (different variants for spacing).
 * - Active language highlighted with the Microsoft-blue accent.
 * - Smooth Framer Motion indicator transition.
 * - Persists the choice to localStorage AND a cookie so the middleware
 *   can honour it on the next visit.
 * - On mount the toggle reconciles the URL with any stored preference,
 *   so a returning visitor immediately sees their preferred language.
 */
export function LanguageToggle({ variant = "desktop", onSelect }: LanguageToggleProps) {
  const pathname = usePathname() ?? "/"
  const router = useRouter()
  const active = localeFromPathname(pathname)

  useEffect(() => {
    const stored = readStoredLocale()
    if (stored && stored !== active) {
      const target = toOppositeLocalePath(pathname, stored)
      router.replace(target)
    }
    // We deliberately only run when the path changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const handleSelect = (next: Locale) => () => {
    persistLocale(next)
    onSelect?.()
  }

  const isMobile = variant === "mobile"
  const containerClass = isMobile
    ? "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
    : "relative inline-flex items-center gap-0 rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-sm"

  return (
    <div
      role="group"
      aria-label="Taal kiezen / Language"
      className={containerClass}
    >
      {(["nl", "en"] as Locale[]).map((locale) => {
        const isActive = locale === active
        const href = toOppositeLocalePath(pathname, locale)
        return (
          <Link
            key={locale}
            href={href}
            prefetch
            onClick={handleSelect(locale)}
            aria-current={isActive ? "true" : undefined}
            aria-label={locale === "nl" ? "Nederlands" : "English"}
            className={`relative z-10 inline-flex items-center justify-center px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B88D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080f1e] ${
              isActive ? "text-white" : "text-[#8ba3c0] hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`lang-toggle-pill-${variant}`}
                className="absolute inset-0 -z-10 rounded-full bg-[#0078D4] shadow-[0_4px_16px_-4px_rgba(0,120,212,0.6)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{locale.toUpperCase()}</span>
          </Link>
        )
      })}
    </div>
  )
}
