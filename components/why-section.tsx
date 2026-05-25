"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Asset first, niet corporate first",
    description:
      "Engineers, charterers en tenderteams zoeken niet naar uw holding, maar naar concrete capaciteit: crane, deck, DP, POB, transit. Wij structureren de site rond de asset.",
  },
  {
    title: "Technische taal, begrijpelijke opbouw",
    description:
      "Wij combineren technische details (SWL, outreach, hook height, draft, bollard pull) met begrijpelijke navigatie. Zo vinden zowel de project engineer als de commerciële manager direct wat hij zoekt.",
  },
  {
    title: "AI-visuals & snelle iteratie",
    description:
      "Met moderne AI-visualisatie creëren wij sterke offshore beelden zonder dure heli-flights of renders. Dat geeft flexibiliteit en snelheid bij nieuwbouw, conversies en rebranding.",
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

export function WhySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0d1a2d]">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div 
        className="relative container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 max-w-3xl text-white">
            Waarom offshore-bedrijven voor Breure kiezen
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#8ba3c0] text-lg max-w-2xl mb-16 leading-relaxed">
            Offshore assets draaien op day rates. Elke extra charterdag telt. Een heldere digitale presentatie versnelt beslissingen, verkleint risico&apos;s en vergroot vertrouwen bij operators en contractors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative p-8 border border-[#1e3a5f] bg-[#0a1525] h-full rounded-sm"
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

                <h3 className="text-xl font-medium mb-4 pr-12 text-white">{reason.title}</h3>
                <p className="text-[#8ba3c0] leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
