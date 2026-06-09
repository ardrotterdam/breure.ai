"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) return

    const themeColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--theme-color")
      .trim()
    meta.setAttribute("content", themeColor || "#0A1628")
  }, [resolvedTheme])

  return null
}
