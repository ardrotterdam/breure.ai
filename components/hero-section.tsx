"use client"

import { motion } from "framer-motion"
import { OceanAnimation } from "./ocean-animation"
import { AnimatedWord, FadeIn } from "./animated-text"
import { OffshoreIllustration } from "./offshore-illustration"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated ocean background */}
      <OceanAnimation />

      {/* Content overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="max-w-2xl">
            {/* Pre-title */}
            <FadeIn delay={0.2}>
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-accent mb-6">
                Offshore &amp; Maritieme Webdesign
              </p>
            </FadeIn>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1] mb-8">
              <AnimatedWord
                text="Wij bouwen de"
                className="block text-foreground/90"
                delay={0.4}
              />
              <span className="block mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-gradient font-normal"
                >
                  asset websites
                </motion.span>
              </span>
              <AnimatedWord
                text="waarop miljoenenbeslissingen worden genomen."
                className="block mt-2 text-foreground/80 text-3xl sm:text-4xl lg:text-5xl"
                delay={0.9}
              />
            </h1>

            {/* Subtitle */}
            <FadeIn delay={1.3}>
              <p className="text-base sm:text-lg text-foreground/60 max-w-xl leading-relaxed mb-4">
                Heavy-lift vessels, jack-ups, platforms en support ships — online gepresenteerd op een niveau dat past bij uw day rate.
              </p>
              <p className="text-sm text-foreground/50 max-w-xl leading-relaxed mb-10">
                Breure Web Agency vertaalt complexe technische data naar heldere, snelle en betrouwbare websites voor charterers, engineers en tenderteams. Uw vloot zichtbaar, uw capabilities onmisbaar.
              </p>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={1.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-accent text-accent-foreground font-medium text-sm tracking-wide overflow-hidden"
                >
                  <span className="relative z-10">Plan een call</span>
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide hover:border-accent/50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    Bekijk wat we voor uw assets doen
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </FadeIn>

            {/* Mobile-only Offshore Illustration */}
            <div className="lg:hidden mt-12">
              <FadeIn delay={1.6}>
                <motion.div
                  className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-[6/5]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <OffshoreIllustration />
                </motion.div>
              </FadeIn>
            </div>

            {/* Stats bar */}
            <FadeIn delay={1.8}>
              <div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Asset websites" },
                  { value: "15", label: "Jaar ervaring" },
                  { value: "€2B+", label: "Aan assets online" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-light text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column - Offshore Illustration */}
          <div className="hidden lg:block relative">
            <FadeIn delay={0.8} direction="left">
              <motion.div
                className="relative w-full aspect-square max-w-[600px] ml-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <OffshoreIllustration />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-foreground/80 font-medium tracking-wide">AI-Powered Data</span>
                  </div>
                </motion.div>

                {/* Second floating badge */}
                <motion.div
                  className="absolute -right-4 bottom-1/3 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-foreground/80 font-medium tracking-wide">Real-time Specs</span>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Company info footer in hero */}
      <motion.div
        className="absolute bottom-8 left-6 lg:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <p className="text-xs text-muted-foreground">
          Breure Web Agency · Westplein 12, 3016 BM Rotterdam · info@breure.ai
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 lg:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border border-border/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
