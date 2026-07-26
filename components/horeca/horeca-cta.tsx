"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { dict, type Locale, ROUTES } from "@/lib/i18n"
import { EASE_SMOOTH, fadeUpItem } from "@/lib/motion"

type HorecaCtaProps = {
  locale: Locale
}

export function HorecaCta({ locale }: HorecaCtaProps) {
  const t = dict.horeca[locale].cta
  const reduceMotion = usePrefersReducedMotion()
  const contactHref = ROUTES.contact[locale]

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{ backgroundColor: "var(--accent-blur)" }}
        />
      </div>

      <motion.div
        className="relative container mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-12"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpItem}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.7, ease: EASE_SMOOTH }
        }
      >
        <h2 className="font-light tracking-tight text-foreground leading-[1.1] text-[clamp(1.75rem,4vw,3rem)]">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
          {t.description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
          <Link
            href={contactHref}
            className="btn-primary px-7 py-3.5 sm:px-8 sm:py-4"
          >
            {t.primary}
          </Link>
          <a
            href="mailto:info@breure.ai"
            className="text-sm font-medium text-text-secondary underline-offset-4 transition-colors hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            style={{ ["--tw-ring-offset-color" as string]: "var(--ring-offset)" }}
          >
            {t.mail}: info@breure.ai
          </a>
        </div>
      </motion.div>
    </section>
  )
}
