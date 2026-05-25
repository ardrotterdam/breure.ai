"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import { BreureLogo } from "@/components/breure-logo"
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

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

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
    <>
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
          <BreureLogo size={40} badge animated />
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
                className={`nav-link-hover-line pb-1 text-sm transition-colors ${
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
    </motion.header>

      {/* Mobile full-screen menu — outside header so fixed positioning covers the viewport */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[100] bg-[#0a1628] text-white flex flex-col"
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-4">
              <Link
                href={homeHref}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 shrink-0"
              >
                <BreureLogo size={40} />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold tracking-wide">BREURE</span>
                  <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">
                    Web Agency
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={t.closeMenu}
                className="p-2 -mr-2"
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-5 sm:px-6 pb-6">
              {navLinks.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`nav-link-hover-line nav-link-hover-line--mobile block py-2 sm:py-3 pb-3 sm:pb-4 text-[clamp(2.5rem,11vw,4.25rem)] font-black leading-[1.05] tracking-tight transition-colors hover:text-accent ${
                        active ? "text-accent" : "text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <div className="px-5 sm:px-6 py-5 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ThemeToggle locale={locale} variant="mobile" />
                <LanguageToggle variant="mobile" onSelect={() => setMobileOpen(false)} />
              </div>
              <Link
                href={contactHref}
                onClick={() => setMobileOpen(false)}
                className="inline-flex btn-primary px-5 py-2.5 shrink-0"
              >
                {t.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
