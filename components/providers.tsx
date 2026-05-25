"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeColorMeta } from "@/components/theme-color-meta"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="breure-theme"
      value={{ light: "light", dark: "dark" }}
    >
      <ThemeColorMeta />
      {children}
    </ThemeProvider>
  )
}
