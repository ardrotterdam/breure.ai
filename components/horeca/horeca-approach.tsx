"use client"

import { motion } from "framer-motion"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { dict, type Locale } from "@/lib/i18n"
import { fadeUpItem, staggerContainer } from "@/lib/motion"

type HorecaApproachProps = {
  locale: Locale
}

export function HorecaApproach({ locale }: HorecaApproachProps) {
  const t = dict.horeca[locale].approach
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <motion.div
        className="container mx-auto px-5 sm:px-6 lg:px-12"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.1)}
      >
        <motion.div variants={fadeUpItem} className="max-w-2xl mb-12 sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-text-eyebrow sm:mb-5 sm:text-sm">
            {t.eyebrow}
          </p>
          <h2 className="font-light tracking-tight text-foreground leading-[1.1] text-[clamp(1.75rem,3.5vw,2.75rem)]">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-14">
          {t.items.map((item, index) => (
            <motion.div key={item.title} variants={fadeUpItem}>
              <p className="mb-4 font-mono text-xs tracking-widest text-text-dim">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl font-light tracking-tight text-foreground sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
