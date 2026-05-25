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

interface WhySectionProps {
  locale?: Locale
}

export function WhySection({ locale = "nl" }: WhySectionProps) {
  const t = dict.why[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#0d1a2d]">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="relative container mx-auto px-5 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 max-w-3xl text-white">
            {t.title}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#8ba3c0] text-base sm:text-lg max-w-2xl mb-12 sm:mb-16 leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative p-7 sm:p-8 border border-[#1e3a5f] bg-[#0a1525] h-full rounded-md"
                whileHover={{ y: -4, borderColor: "#3d6a9e" }}
                transition={{ duration: 0.3 }}
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-5xl font-extralight text-[#1e3a5f] select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 pr-12 text-white">{reason.title}</h3>
                <p className="text-[#8ba3c0] leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
