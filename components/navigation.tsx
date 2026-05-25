"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import { dict, type Locale, localeFromPathname, ROUTES } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

interface NavigationProps {
  locale?: Locale
}

export function Navigation({ locale: localeProp }: NavigationProps = {}) {
  const pathname = usePathname() ?? "/"
  const locale: Locale = localeProp ?? localeFromPathname(pathname)
  const t = dict.nav[locale]

  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
    }
  }, [locale])

  const navLinks = [
    { label: t.services, href: ROUTES.services[locale] },
    { label: t.process, href: ROUTES.process[locale] },
    { label: t.portfolio, href: ROUTES.portfolio[locale] },
    { label: t.contact, href: ROUTES.contact[locale] },
  ]

  const homeHref = ROUTES.home[locale]
  const contactHref = ROUTES.contact[locale]

  const isActive = (href: string) => {
    const home = ROUTES.home[locale]
    if (href === home) return pathname === home
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/50" />

      <nav className="relative container mx-auto px-5 sm:px-6 lg:px-12 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <motion.path
                d="M5 25 Q12 20 20 25 Q28 30 35 25"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-accent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path
                d="M5 20 Q12 15 20 20 Q28 25 35 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-foreground"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-wide">BREURE</span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Web Agency
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right cluster: theme + language toggle + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle locale={locale} variant="desktop" />
          <div className="hidden md:block">
            <LanguageToggle variant="desktop" />
          </div>

          <Link
            href={contactHref}
            className="hidden sm:inline-flex btn-primary px-5 py-2.5 hover:-translate-y-px"
          >
            {t.cta}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 -mr-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden relative border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-5 sm:px-6 py-5 flex flex-col gap-1">
              {navLinks.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-base transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ThemeToggle locale={locale} variant="mobile" />
                  <LanguageToggle variant="mobile" onSelect={() => setMobileOpen(false)} />
                </div>
                <Link
                  href={contactHref}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex btn-primary px-5 py-2.5"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
