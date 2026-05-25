"use client"

import { motion } from "framer-motion"

import { dict, type Locale } from "@/lib/i18n"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
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

interface PortfolioSectionProps {
  locale?: Locale
}

export function PortfolioSection({ locale = "nl" }: PortfolioSectionProps) {
  const t = dict.portfolio[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#080f1e] overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-[#0078D4]/10 blur-[140px]" />
        <div className="absolute bottom-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-[#1e3a5f]/30 blur-[140px]" />
      </div>

      <motion.div
        className="relative container mx-auto px-5 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
            {t.eyebrow}
          </p>
        </motion.div>

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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.items.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative p-7 sm:p-8 lg:p-10 border border-[#1e3a5f] bg-[#0d1a2d] h-full flex flex-col rounded-md overflow-hidden"
                whileHover={{ y: -4, borderColor: "#3d6a9e" }}
                transition={{ duration: 0.3 }}
              >
                {/* Index */}
                <div className="absolute top-6 right-6 text-5xl font-extralight text-[#1e3a5f] select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="w-8 h-px bg-[#1e3a5f]" />
                  <span className="text-xs font-medium tracking-wider uppercase text-[#2B88D8]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 pr-12 text-white">{project.title}</h3>
                <p className="text-[#8ba3c0] leading-relaxed text-sm mb-7 sm:mb-8">{project.description}</p>

                <div className="mt-auto pt-6 border-t border-[#1e3a5f]/60 grid grid-cols-3 gap-3 sm:gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-[11px] sm:text-xs text-[#5a7a9e] mb-1 tracking-wide">{metric.label}</div>
                      <div className="text-sm text-white font-medium">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0078D4] group-hover:w-full transition-all duration-500" />
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-14 sm:mt-16 text-sm text-[#5a7a9e] italic max-w-2xl"
        >
          {t.ndaNote}
        </motion.p>
      </motion.div>
    </section>
  )
}
