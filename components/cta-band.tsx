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
  eyebrow = "Volgende stap",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Plan een call",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#080f1e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-[#4a9eff]/8 blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative container mx-auto px-6 lg:px-12 max-w-4xl text-center"
      >
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-6">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-[#8ba3c0] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            href={primaryHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10">{primaryLabel}</span>
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          {secondaryHref && secondaryLabel && (
            <MotionLink
              href={secondaryHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide hover:border-accent/50 transition-colors"
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
