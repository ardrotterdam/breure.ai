"use client"

import { motion } from "framer-motion"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { dict, type Locale } from "@/lib/i18n"
import { EASE_SMOOTH, fadeUpItem, staggerContainer } from "@/lib/motion"

type HorecaHeroProps = {
  locale: Locale
}

export function HorecaHero({ locale }: HorecaHeroProps) {
  const t = dict.horeca[locale].hero
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-[140px]"
          style={{ backgroundColor: "var(--accent-blur)" }}
        />
        <div
          className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{ backgroundColor: "var(--divider-blur)" }}
        />
      </div>

      <motion.div
        className="relative container mx-auto max-w-5xl px-5 sm:px-6 lg:px-12"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={staggerContainer(0.12)}
      >
        <motion.p
          variants={fadeUpItem}
          transition={reduceMotion ? { duration: 0 } : undefined}
          className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-text-eyebrow sm:mb-6 sm:text-sm"
        >
          {t.eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeUpItem}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: EASE_SMOOTH }
          }
          className="max-w-4xl font-light tracking-tight text-foreground leading-[1.05] text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          {t.title}
        </motion.h1>

        <motion.p
          variants={fadeUpItem}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: EASE_SMOOTH }
          }
          className="mt-7 max-w-2xl text-base leading-relaxed text-text-secondary sm:mt-8 sm:text-lg"
        >
          {t.description}
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  )
}
