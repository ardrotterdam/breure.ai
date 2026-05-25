"use client"

import { motion } from "framer-motion"

const services = [
  {
    tag: "Asset microsites",
    number: "01",
    title: "Vessel & platform websites",
    description:
      "Dedicated websites voor heavy-lift vessels, jack-ups, barges, construction vessels en support ships.",
    features: [
      "Technische specs & crane load charts",
      "Deck layouts en POB-capaciteit",
      "Projectreferenties en foto/visual galleries",
    ],
  },
  {
    tag: "Engineering-ready",
    number: "02",
    title: "Datasheets & capability pages",
    description: "Structuur en content die direct bruikbaar is in tenders, FEED-studies en engineering reviews.",
    features: [
      "PDF-downloads per asset",
      "Lift scenarios & deck load zones",
      "DP-capability, fuel & transit data",
    ],
  },
  {
    tag: "Online zichtbaarheid",
    number: "03",
    title: "SEO & charter marketing",
    description: "Vindbaar op de termen waarop brokers, contractors en operators zoeken naar assets en capaciteit.",
    features: [
      "Gerichte SEO op offshore keywords",
      "Scherpe, technische copywriting",
      "Snel en veilig gehost, wereldwijd bereikbaar",
    ],
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

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080f1e] overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      <motion.div 
        className="relative container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 max-w-3xl text-white">
            Wat wij bouwen voor offshore &amp; maritieme klanten
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#8ba3c0] text-lg max-w-2xl mb-16 leading-relaxed">
            Uw asset verdient meer dan een vermelding op de corporate website. Wij bouwen gerichte, snelle microsites per schip of platform — volledig afgestemd op chartering, engineering en tendering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              <motion.div
                className="relative p-8 border border-[#1e3a5f] bg-[#0d1a2d] h-full flex flex-col rounded-sm"
                whileHover={{ y: -4, borderColor: "#3d6a9e" }}
                transition={{ duration: 0.3 }}
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-xs font-medium text-[#5a7a9e]">{service.number}</span>
                  <span className="w-8 h-px bg-[#1e3a5f]" />
                  <span className="text-xs font-medium tracking-wider uppercase text-[#2B88D8]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-medium mb-4 text-white">{service.title}</h3>
                <p className="text-[#8ba3c0] text-sm leading-relaxed mb-8">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#a0b8d0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0078D4] group-hover:w-full transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
