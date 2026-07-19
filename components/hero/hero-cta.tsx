"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { type Locale, ROUTES } from "@/lib/i18n"

const MotionLink = motion(Link)

type HeroCtaProps = {
  locale: Locale
  primaryLabel: string
  secondaryLabel: string
}

export function HeroCta({ locale, primaryLabel, secondaryLabel }: HeroCtaProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <MotionLink
        href={ROUTES.tools[locale]}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative btn-primary px-7 sm:px-8 py-3.5 sm:py-4 overflow-hidden"
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

      <MotionLink
        href={ROUTES.contact[locale]}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group btn-secondary px-7 sm:px-8 py-3.5 sm:py-4"
      >
        <span className="flex items-center gap-3">
          {secondaryLabel}
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </MotionLink>
    </div>
  )
}
