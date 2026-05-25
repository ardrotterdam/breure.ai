"use client"

import { motion } from "framer-motion"

import { dict, type Locale } from "@/lib/i18n"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
}

interface ProcessSectionProps {
  locale?: Locale
}

export function ProcessSection({ locale = "nl" }: ProcessSectionProps) {
  const t = dict.process[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#0d1a2d] overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              white 0px,
              white 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
          animate={{ x: [0, 60] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative container mx-auto px-5 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
                {t.eyebrow}
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-white">
                {t.titlePrefix}{" "}
                <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
                  {t.titleAccent}
                </span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-[#8ba3c0] text-base sm:text-lg leading-relaxed max-w-md">
                {t.intro}
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative p-6 lg:p-8 border border-[#1e3a5f] bg-[#0a1525] rounded-md"
                  whileHover={{ x: 8, borderColor: "#3d6a9e" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number */}
                  <div className="absolute top-6 lg:top-8 right-6 lg:right-8 text-4xl font-extralight text-[#1e3a5f] select-none group-hover:text-[#2a4a6f] transition-colors">
                    {step.number}
                  </div>

                  {/* Connecting line */}
                  {index < t.steps.length - 1 && (
                    <div className="absolute -bottom-4 left-10 w-px h-4 bg-gradient-to-b from-[#1e3a5f] to-transparent" />
                  )}

                  <h3 className="text-base sm:text-lg font-medium mb-2 pr-16 text-white">{step.title}</h3>
                  <p className="text-[#8ba3c0] text-sm leading-relaxed">{step.description}</p>

                  {/* Hover indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-[#0078D4] group-hover:w-1 transition-all duration-300 rounded-r" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
