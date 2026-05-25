"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-14 sm:pb-16 lg:pb-20 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blur blur-[140px]" style={{ backgroundColor: "var(--accent-blur)" }} />
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[140px]" style={{ backgroundColor: "var(--divider-blur)" }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-5 sm:mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[2.25rem] sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-4xl leading-[1.05]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-7 sm:mt-8 text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  )
}
