"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { dict, type Locale } from "@/lib/i18n"

interface ThemeToggleProps {
  locale?: Locale
  variant?: "desktop" | "mobile"
}

export function ThemeToggle({ locale = "nl", variant = "desktop" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = dict.nav[locale]

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"
  const label = isDark ? t.themeLight : t.themeDark

  const sizeClass = variant === "mobile" ? "h-9 w-9" : "h-9 w-9"

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label={t.themeToggle}
        className={`${sizeClass} inline-flex items-center justify-center rounded-full border border-border/50 text-muted-foreground`}
      />
    )
  }

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${sizeClass} inline-flex items-center justify-center rounded-full border border-border/50 bg-secondary/40 text-muted-foreground transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
      style={{ ["--tw-ring-offset-color" as string]: "var(--ring-offset)" }}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
      )}
    </motion.button>
  )
}
