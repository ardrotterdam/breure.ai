"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import { NavbarLogo } from "@/components/navbar-logo"
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
  const [headerVisible, setHeaderVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

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

  useEffect(() => {
    let previousScrollY = window.scrollY
    const scrollDelta = 8

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > previousScrollY + scrollDelta
      const scrollingUp = currentScrollY < previousScrollY - scrollDelta

      setHasScrolled(currentScrollY > 12)

      if (currentScrollY < 24 || mobileOpen) {
        setHeaderVisible(true)
      } else if (scrollingDown) {
        setHeaderVisible(false)
      } else if (scrollingUp) {
        setHeaderVisible(true)
      }

      if (Math.abs(currentScrollY - previousScrollY) > scrollDelta) {
        previousScrollY = currentScrollY
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
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
      className="fixed top-0 left-0 right-0 z-[90]"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: headerVisible ? 0 : "-110%", opacity: headerVisible ? 1 : 0.98 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`absolute inset-0 border-b backdrop-blur-xl transition-all duration-300 ${
          hasScrolled
            ? "border-white/10 bg-[#07111f]/78 shadow-[0_18px_60px_-38px_rgba(0,0,0,0.9)]"
            : "border-border/40 bg-background/72"
        }`}
      />

      <nav className="relative container mx-auto flex min-h-[88px] items-center justify-between gap-4 py-5 pl-7 pr-5 sm:min-h-[98px] sm:pl-10 sm:pr-6 md:min-h-[106px] lg:min-h-[122px] lg:gap-6 lg:py-6 lg:pl-16 lg:pr-12 xl:min-h-[136px] 2xl:min-h-[148px]">
        <NavbarLogo href={homeHref} className="mr-1 lg:mr-2" />

        {/* Desktop navigation */}
        <div className="ml-auto hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-hover-line pb-1 text-xs font-normal tracking-wide transition-colors ${
                  active ? "text-foreground/70" : "text-muted-foreground/50 hover:text-foreground/65"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right cluster: theme + language toggle + CTA */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <ThemeToggle locale={locale} variant="desktop" />
          <div className="hidden opacity-75 lg:block">
            <LanguageToggle variant="desktop" />
          </div>

          <Link
            href={contactHref}
            className="hidden btn-primary px-4 py-2 text-sm hover:-translate-y-px sm:inline-flex"
          >
            {t.cta}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            className="-mr-2 p-2 lg:hidden"
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
            className="fixed inset-0 z-[100] flex flex-col bg-[#0a1628] text-white lg:hidden"
          >
            <div className="flex min-h-[88px] items-center justify-between py-5 pl-7 pr-5 sm:min-h-[98px] sm:pl-10 sm:pr-6 md:min-h-[106px]">
              <NavbarLogo href={homeHref} onClick={() => setMobileOpen(false)} className="mr-2" />

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
