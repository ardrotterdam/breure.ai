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

interface ServicesSectionProps {
  locale?: Locale
}

export function ServicesSection({ locale = "nl" }: ServicesSectionProps) {
  const t = dict.services[locale]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <motion.div
        className="relative container mx-auto px-5 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 max-w-3xl text-foreground">
            {t.title}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mb-12 sm:mb-16 leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              <motion.div
                className="relative p-7 sm:p-8 surface-card h-full flex flex-col"
                whileHover={{ y: -4, borderColor: "var(--border-hover)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="text-xs font-medium text-text-eyebrow">{service.number}</span>
                  <span className="w-8 h-px bg-border" />
                  <span className="text-xs font-medium tracking-wider uppercase text-accent-soft">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-7 sm:mb-8">{service.description}</p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-tertiary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
