"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

interface CtaBandProps {
  eyebrow?: string
  title: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CtaBand({
  eyebrow = "Next step",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book a call",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#080f1e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-[#0078D4]/10 blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative container mx-auto px-5 sm:px-6 lg:px-12 max-w-4xl text-center"
      >
        <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-5 sm:mb-6">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-5 sm:mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-[#8ba3c0] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9 sm:mb-10">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <MotionLink
            href={primaryHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0078D4] text-white font-medium text-sm tracking-wide overflow-hidden shadow-[0_8px_24px_-10px_rgba(0,120,212,0.6)] transition-[background-color,box-shadow,border-color] duration-300 hover:bg-[#106EBE] hover:shadow-[0_16px_44px_-10px_rgba(0,120,212,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B88D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080f1e]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              {primaryLabel}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </MotionLink>

          {secondaryHref && secondaryLabel && (
            <MotionLink
              href={secondaryHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-border/70 text-foreground font-medium text-sm tracking-wide transition-colors duration-300 hover:border-[#0078D4]/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B88D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080f1e]"
            >
              <span className="flex items-center gap-3">
                {secondaryLabel}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MotionLink>
          )}
        </div>
      </motion.div>
    </section>
  )
}
