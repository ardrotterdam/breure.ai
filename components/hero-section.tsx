"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { dict, type Locale, ROUTES } from "@/lib/i18n"
import { OceanAnimation } from "./ocean-animation"
import { AnimatedWord, FadeIn } from "./animated-text"
import { OffshoreIllustration } from "./offshore-illustration"

const MotionLink = motion(Link)

interface HeroSectionProps {
  locale?: Locale
}

export function HeroSection({ locale = "nl" }: HeroSectionProps) {
  const t = dict.hero[locale]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-24 sm:pb-32">
      {/* Animated ocean background */}
      <OceanAnimation />

      {/* Content overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-b from-transparent via-background/40 to-secondary pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="max-w-2xl">
            {/* Pre-title */}
            <FadeIn delay={0.2}>
              <p className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-accent-soft mb-5 sm:mb-6">
                {t.eyebrow}
              </p>
            </FadeIn>

            {/* Main headline */}
            <h1 className="text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-6 sm:mb-8">
              <AnimatedWord
                text={t.headlineMain}
                className="block text-foreground/90"
                delay={0.4}
              />
              <span className="block mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-gradient font-normal"
                >
                  {t.headlineAccent}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="text-foreground/90"
                >
                  {t.headlineEnd}
                </motion.span>
              </span>
            </h1>

            {/* Subheadline + paragraph */}
            <FadeIn delay={1.3}>
              <p className="text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed mb-4">
                {t.subheadline}
              </p>
              <p className="text-sm sm:text-[15px] text-foreground/55 max-w-xl leading-relaxed mb-9 sm:mb-10">
                {t.paragraph}
              </p>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={1.5}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <MotionLink
                  href={ROUTES.contact[locale]}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative btn-primary px-7 sm:px-8 py-3.5 sm:py-4 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    {t.ctaPrimary}
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
                  {/* Subtle sheen sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                </MotionLink>

                <MotionLink
                  href={ROUTES.services[locale]}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group btn-secondary px-7 sm:px-8 py-3.5 sm:py-4"
                >
                  <span className="flex items-center gap-3">
                    {t.ctaSecondary}
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
              </div>
            </FadeIn>

            {/* Mobile-only Offshore Illustration */}
            <div className="lg:hidden mt-12">
              <FadeIn delay={1.6}>
                <motion.div
                  className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-[6/5]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <OffshoreIllustration />
                </motion.div>
              </FadeIn>
            </div>

          </div>

          {/* Right column - Offshore Illustration */}
          <div className="hidden lg:block relative">
            <FadeIn delay={0.8} direction="left">
              <motion.div
                className="relative w-full aspect-square max-w-[600px] ml-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <OffshoreIllustration />

                {/* Floating badge */}
                <motion.div
                  className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-soft animate-pulse" />
                    <span className="text-xs text-foreground/80 font-medium tracking-wide">{t.badgeOne}</span>
                  </div>
                </motion.div>

                {/* Second floating badge */}
                <motion.div
                  className="absolute -right-4 bottom-1/3 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-accent-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-foreground/80 font-medium tracking-wide">{t.badgeTwo}</span>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-8 right-6 lg:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border border-border/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent-soft rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
