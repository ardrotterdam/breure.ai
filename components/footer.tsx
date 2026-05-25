"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-16 bg-[#060c18] border-t border-[#1e3a5f]/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                  <path
                    d="M5 25 Q12 20 20 25 Q28 30 35 25"
                    stroke="#4a9eff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 20 Q12 15 20 20 Q28 25 35 20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-wide text-white">BREURE</span>
            </div>
            <p className="text-sm text-[#8ba3c0] max-w-sm leading-relaxed">
              Gespecialiseerd in websites voor de offshore &amp; maritieme sector. Wij bouwen de asset websites waarop miljoenenbeslissingen worden genomen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white">Diensten</h4>
            <ul className="space-y-2 text-sm text-[#8ba3c0]">
              <li><a href="#" className="hover:text-white transition-colors">Asset microsites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Capability pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO &amp; marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI-visualisatie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-[#8ba3c0]">
              <li>info@breure.ai</li>
              <li>Westplein 12</li>
              <li>3016 BM Rotterdam</li>
              <li>The Netherlands</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e3a5f]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5a7a9e]">
            © 2024 Breure Web Agency. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#5a7a9e]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
