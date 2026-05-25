"use client"

import { motion } from "framer-motion"

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

export function ContactSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080f1e] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#1e3a5f]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#1e3a5f]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div 
        className="relative container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
                Contact
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
                Klaar om uw assets{" "}
                <span className="bg-gradient-to-r from-white to-[#4a9eff] bg-clip-text text-transparent">
                  online te brengen?
                </span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-[#8ba3c0] text-lg leading-relaxed max-w-md mb-12">
                Plan een vrijblijvend gesprek. Wij analyseren uw huidige online aanwezigheid en bespreken de mogelijkheden voor uw vloot.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <p className="text-sm text-[#5a7a9e] mb-1">E-mail</p>
                <a
                  href="mailto:info@breure.ai"
                  className="text-lg text-white hover:text-[#4a9eff] transition-colors"
                >
                  info@breure.ai
                </a>
              </div>
              <div>
                <p className="text-sm text-[#5a7a9e] mb-1">Adres</p>
                <p className="text-lg text-white">
                  Westplein 12<br />
                  3016 BM Rotterdam<br />
                  The Netherlands
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="mt-16 text-sm text-[#5a7a9e] italic">
                Techniek. Vertrouwen. Resultaat.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#8ba3c0] mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0d1a2d] border border-[#1e3a5f] text-white placeholder-[#5a7a9e] focus:border-[#4a9eff] focus:outline-none transition-colors rounded-sm"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-[#8ba3c0] mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-[#0d1a2d] border border-[#1e3a5f] text-white placeholder-[#5a7a9e] focus:border-[#4a9eff] focus:outline-none transition-colors rounded-sm"
                    placeholder="Uw bedrijf"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#8ba3c0] mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#0d1a2d] border border-[#1e3a5f] text-white placeholder-[#5a7a9e] focus:border-[#4a9eff] focus:outline-none transition-colors rounded-sm"
                  placeholder="uw@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#8ba3c0] mb-2">
                  Vertel ons over uw project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0d1a2d] border border-[#1e3a5f] text-white placeholder-[#5a7a9e] focus:border-[#4a9eff] focus:outline-none transition-colors resize-none rounded-sm"
                  placeholder="Welke assets wilt u online brengen? Hoeveel schepen of platforms betreft het?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-[#080f1e] font-medium text-sm tracking-wide hover:bg-[#4a9eff] hover:text-white transition-colors rounded-sm"
              >
                Verstuur bericht
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
