"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Asset inventarisatie",
    description: "Wij verzamelen alle technische data, GA-plans, specs en visueel materiaal van uw asset.",
  },
  {
    number: "02",
    title: "Structuur & content",
    description: "Een logische opbouw die aansluit bij hoe charterers en engineers zoeken en vergelijken.",
  },
  {
    number: "03",
    title: "Design & ontwikkeling",
    description: "Premium design met AI-gegenereerde visuals waar nodig. Snel, responsief, SEO-geoptimaliseerd.",
  },
  {
    number: "04",
    title: "Launch & optimalisatie",
    description: "Live binnen weken. Daarna continue verbetering op basis van data en gebruikersgedrag.",
  },
]

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

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0d1a2d] overflow-hidden">
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
        className="relative container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
                Ons proces
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
                Van specs naar{" "}
                <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
                  online impact
                </span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-[#8ba3c0] text-lg leading-relaxed max-w-md">
                Een gestroomlijnd proces dat past bij de snelheid van de offshore industrie. Geen maanden wachten, maar resultaat binnen weken.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative p-6 lg:p-8 border border-[#1e3a5f] bg-[#0a1525] rounded-sm"
                  whileHover={{ x: 8, borderColor: "#3d6a9e" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number */}
                  <div className="absolute top-6 lg:top-8 right-6 lg:right-8 text-4xl font-extralight text-[#1e3a5f] select-none group-hover:text-[#2a4a6f] transition-colors">
                    {step.number}
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-4 left-10 w-px h-4 bg-gradient-to-b from-[#1e3a5f] to-transparent" />
                  )}

                  <h3 className="text-lg font-medium mb-2 pr-16 text-white">{step.title}</h3>
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
