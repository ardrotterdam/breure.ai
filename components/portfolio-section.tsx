"use client"

import { motion } from "framer-motion"

const portfolio = [
  {
    category: "Heavy-lift vessel",
    title: "Crane vessel asset microsite",
    description:
      "Dedicated microsite voor een heavy-lift crane vessel met dynamische load charts, deck layout en projectreferenties. Direct bruikbaar in tenders en FEED-studies.",
    metrics: [
      { label: "SWL & outreach charts", value: "Live" },
      { label: "Talen", value: "NL · EN" },
      { label: "Time to launch", value: "5 weken" },
    ],
    status: "Asset microsite",
  },
  {
    category: "Jack-up platform",
    title: "Jack-up capability page",
    description:
      "Capability page voor een wind installation jack-up. Compleet met leg length, payload, accommodatie, transit data en downloadbare datasheets voor contractors.",
    metrics: [
      { label: "Datasheets (PDF)", value: "Per asset" },
      { label: "Sectoren", value: "Wind · O&G" },
      { label: "Time to launch", value: "4 weken" },
    ],
    status: "Capability page",
  },
  {
    category: "Support fleet",
    title: "Multi-vessel fleet site",
    description:
      "Vloot-website voor een offshore support operator. Per schip een eigen detailpagina met specs, foto's en charter-aanvraag, gekoppeld aan een centrale brand experience.",
    metrics: [
      { label: "Vessels online", value: "12" },
      { label: "Charter aanvragen", value: "+38%" },
      { label: "Time to launch", value: "8 weken" },
    ],
    status: "Fleet website",
  },
  {
    category: "Offshore contractor",
    title: "Corporate site met asset library",
    description:
      "Corporate website met geïntegreerde asset library. Tenderteams, brokers en charterers vinden in één omgeving zowel het bedrijfsverhaal als concrete capability data.",
    metrics: [
      { label: "Asset profielen", value: "20+" },
      { label: "PageSpeed", value: "98 / 100" },
      { label: "Time to launch", value: "10 weken" },
    ],
    status: "Corporate + assets",
  },
]

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

export function PortfolioSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080f1e] overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-[#0078D4]/10 blur-[140px]" />
        <div className="absolute bottom-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-[#1e3a5f]/30 blur-[140px]" />
      </div>

      <motion.div
        className="relative container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
            Selected works
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 max-w-3xl text-white">
            Asset websites, capability pages en vloot-platforms
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#8ba3c0] text-lg max-w-2xl mb-16 leading-relaxed">
            Een greep uit het werk dat wij realiseren voor offshore operators, contractors en vlooteigenaren. Specifieke case studies delen wij graag onder NDA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {portfolio.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative p-8 lg:p-10 border border-[#1e3a5f] bg-[#0d1a2d] h-full flex flex-col rounded-sm overflow-hidden"
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

                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-px bg-[#1e3a5f]" />
                  <span className="text-xs font-medium tracking-wider uppercase text-[#2B88D8]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-medium mb-4 pr-12 text-white">{project.title}</h3>
                <p className="text-[#8ba3c0] leading-relaxed text-sm mb-8">{project.description}</p>

                <div className="mt-auto pt-6 border-t border-[#1e3a5f]/60 grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xs text-[#5a7a9e] mb-1 tracking-wide">{metric.label}</div>
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
          className="mt-16 text-sm text-[#5a7a9e] italic max-w-2xl"
        >
          Specifieke referenties, technische case studies en demo-omgevingen delen wij graag in een persoonlijk gesprek, onder NDA waar nodig.
        </motion.p>
      </motion.div>
    </section>
  )
}
