"use client"

import { motion } from "framer-motion"

export function OffshoreIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient for ocean and sky */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.15 0.04 235)" />
            <stop offset="60%" stopColor="oklch(0.12 0.035 230)" />
            <stop offset="100%" stopColor="oklch(0.18 0.05 215)" />
          </linearGradient>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.20 0.06 215)" />
            <stop offset="100%" stopColor="oklch(0.12 0.04 230)" />
          </linearGradient>
          <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.25 0.05 220)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.15 0.04 230)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.65 0.14 200)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.50 0.12 210)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width="600" height="320" fill="url(#skyGradient)" />

        {/* Ocean */}
        <rect x="0" y="320" width="600" height="180" fill="url(#oceanGradient)" />

        {/* Horizon line glow */}
        <motion.line
          x1="0" y1="320" x2="600" y2="320"
          stroke="oklch(0.45 0.08 210)"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Distant platform silhouette (left) */}
        <g opacity="0.3">
          <rect x="30" y="280" width="40" height="40" fill="oklch(0.20 0.03 230)" />
          <line x1="50" y1="250" x2="50" y2="280" stroke="oklch(0.20 0.03 230)" strokeWidth="3" />
          <line x1="35" y1="250" x2="65" y2="250" stroke="oklch(0.20 0.03 230)" strokeWidth="2" />
        </g>

        {/* Supply vessel in foreground */}
        <motion.g
          animate={{ x: [0, 8, 0], y: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Hull */}
          <path d="M60 365 L80 355 L160 355 L175 365 L60 365" fill="oklch(0.32 0.05 220)" />
          <path d="M70 355 L70 345 L155 345 L155 355" fill="oklch(0.35 0.05 220)" />
          
          {/* Bridge/superstructure */}
          <rect x="130" y="330" width="25" height="15" fill="oklch(0.38 0.05 218)" />
          <rect x="133" y="333" width="8" height="8" fill="oklch(0.50 0.08 200)" opacity="0.5" />
          
          {/* Cargo deck */}
          <rect x="75" y="340" width="50" height="15" fill="oklch(0.36 0.05 220)" />
          
          {/* Containers/cargo */}
          <rect x="78" y="335" width="12" height="10" fill="oklch(0.40 0.06 40)" opacity="0.7" />
          <rect x="93" y="335" width="12" height="10" fill="oklch(0.45 0.06 200)" opacity="0.7" />
          <rect x="108" y="335" width="12" height="10" fill="oklch(0.40 0.06 110)" opacity="0.6" />
          
          {/* Mast */}
          <line x1="120" y1="315" x2="120" y2="340" stroke="oklch(0.40 0.05 220)" strokeWidth="2" />
          <line x1="115" y1="320" x2="125" y2="320" stroke="oklch(0.38 0.05 220)" strokeWidth="1" />
          
          {/* Navigation light */}
          <motion.circle 
            cx="120" cy="315" r="2" 
            fill="oklch(0.70 0.15 140)"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Wake/water trail */}
          <motion.path
            d="M60 365 Q40 368 20 365"
            stroke="oklch(0.40 0.06 210)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.g>

        {/* Main offshore platform */}
        <g className="platform-main">
          {/* Platform legs going into water */}
          <rect x="200" y="280" width="12" height="80" fill="oklch(0.25 0.04 225)" />
          <rect x="280" y="280" width="12" height="80" fill="oklch(0.25 0.04 225)" />
          <rect x="360" y="280" width="12" height="80" fill="oklch(0.25 0.04 225)" />
          <rect x="440" y="280" width="12" height="80" fill="oklch(0.25 0.04 225)" />

          {/* Cross bracing */}
          <line x1="206" y1="300" x2="286" y2="340" stroke="oklch(0.30 0.04 225)" strokeWidth="2" />
          <line x1="286" y1="300" x2="206" y2="340" stroke="oklch(0.30 0.04 225)" strokeWidth="2" />
          <line x1="366" y1="300" x2="446" y2="340" stroke="oklch(0.30 0.04 225)" strokeWidth="2" />
          <line x1="446" y1="300" x2="366" y2="340" stroke="oklch(0.30 0.04 225)" strokeWidth="2" />

          {/* Main platform deck */}
          <rect x="180" y="260" width="300" height="25" fill="oklch(0.28 0.05 225)" />

          {/* Helideck */}
          <rect x="420" y="240" width="50" height="20" fill="oklch(0.26 0.04 225)" />
          <circle cx="445" cy="250" r="12" stroke="oklch(0.40 0.05 215)" strokeWidth="1.5" fill="none" />
          <text x="445" y="254" textAnchor="middle" fill="oklch(0.40 0.05 215)" fontSize="8" fontWeight="bold">H</text>

          {/* Living quarters */}
          <rect x="190" y="220" width="80" height="40" fill="oklch(0.32 0.05 225)" />
          <rect x="195" y="225" width="15" height="12" fill="oklch(0.50 0.08 200)" opacity="0.7" />
          <rect x="215" y="225" width="15" height="12" fill="oklch(0.50 0.08 200)" opacity="0.7" />
          <rect x="235" y="225" width="15" height="12" fill="oklch(0.50 0.08 200)" opacity="0.5" />
          <rect x="255" y="225" width="15" height="12" fill="oklch(0.50 0.08 200)" opacity="0.4" />

          {/* Processing facility */}
          <rect x="280" y="200" width="100" height="60" fill="oklch(0.30 0.05 225)" />
          
          {/* Tanks/cylinders */}
          <ellipse cx="300" cy="200" rx="15" ry="6" fill="oklch(0.33 0.05 220)" />
          <rect x="285" y="200" width="30" height="30" fill="oklch(0.33 0.05 220)" />
          <ellipse cx="300" cy="230" rx="15" ry="6" fill="oklch(0.30 0.05 220)" />

          <ellipse cx="350" cy="200" rx="15" ry="6" fill="oklch(0.33 0.05 220)" />
          <rect x="335" y="200" width="30" height="30" fill="oklch(0.33 0.05 220)" />
          <ellipse cx="350" cy="230" rx="15" ry="6" fill="oklch(0.30 0.05 220)" />

          {/* Flare tower */}
          <rect x="395" y="160" width="6" height="100" fill="oklch(0.32 0.04 225)" />
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="398" cy="155" rx="8" ry="12" fill="oklch(0.70 0.15 60)" opacity="0.7" />
            <ellipse cx="398" cy="155" rx="4" ry="8" fill="oklch(0.80 0.18 50)" opacity="0.9" />
          </motion.g>

          {/* Derrick/drilling tower */}
          <g>
            <line x1="320" y1="80" x2="300" y2="200" stroke="oklch(0.35 0.05 225)" strokeWidth="3" />
            <line x1="320" y1="80" x2="340" y2="200" stroke="oklch(0.35 0.05 225)" strokeWidth="3" />
            <line x1="305" y1="180" x2="335" y2="180" stroke="oklch(0.35 0.05 225)" strokeWidth="2" />
            <line x1="308" y1="150" x2="332" y2="150" stroke="oklch(0.35 0.05 225)" strokeWidth="2" />
            <line x1="312" y1="120" x2="328" y2="120" stroke="oklch(0.35 0.05 225)" strokeWidth="2" />
            {/* Crown block */}
            <rect x="312" y="75" width="16" height="10" fill="oklch(0.38 0.05 225)" />
          </g>
        </g>

        {/* Main crane */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "520px 260px" }}
        >
          {/* Crane tower */}
          <rect x="510" y="140" width="20" height="120" fill="oklch(0.35 0.05 220)" />
          
          {/* Crane cabin */}
          <rect x="505" y="130" width="30" height="20" fill="oklch(0.33 0.05 220)" />
          <rect x="508" y="135" width="10" height="10" fill="oklch(0.50 0.10 200)" opacity="0.6" />

          {/* Crane boom */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "520px 130px" }}
          >
            <line x1="520" y1="130" x2="580" y2="80" stroke="oklch(0.38 0.05 220)" strokeWidth="4" />
            <line x1="580" y1="80" x2="560" y2="75" stroke="oklch(0.35 0.05 220)" strokeWidth="3" />
            <line x1="580" y1="80" x2="595" y2="95" stroke="oklch(0.35 0.05 220)" strokeWidth="3" />
            
            {/* Hook cable */}
            <motion.line
              x1="580" y1="85"
              x2="580" y2="180"
              stroke="oklch(0.45 0.06 215)"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              animate={{ y2: [180, 190, 180] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Hook */}
            <motion.g
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="574" y="180" width="12" height="8" fill="oklch(0.45 0.06 215)" />
              <path d="M576 188 L584 188 L584 200 Q580 205 576 200 Z" fill="oklch(0.45 0.06 215)" />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* Water waves */}
        <motion.path
          d="M0 340 Q50 335 100 340 Q150 345 200 340 Q250 335 300 340 Q350 345 400 340 Q450 335 500 340 Q550 345 600 340"
          stroke="oklch(0.35 0.06 210)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          animate={{
            d: [
              "M0 340 Q50 335 100 340 Q150 345 200 340 Q250 335 300 340 Q350 345 400 340 Q450 335 500 340 Q550 345 600 340",
              "M0 342 Q50 347 100 342 Q150 337 200 342 Q250 347 300 342 Q350 337 400 342 Q450 347 500 342 Q550 337 600 342",
              "M0 340 Q50 335 100 340 Q150 345 200 340 Q250 335 300 340 Q350 345 400 340 Q450 335 500 340 Q550 345 600 340",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M0 360 Q75 355 150 360 Q225 365 300 360 Q375 355 450 360 Q525 365 600 360"
          stroke="oklch(0.30 0.05 215)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          animate={{
            d: [
              "M0 360 Q75 355 150 360 Q225 365 300 360 Q375 355 450 360 Q525 365 600 360",
              "M0 358 Q75 363 150 358 Q225 353 300 358 Q375 363 450 358 Q525 353 600 358",
              "M0 360 Q75 355 150 360 Q225 365 300 360 Q375 355 450 360 Q525 365 600 360",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Platform reflection in water */}
        <g opacity="0.15" transform="translate(0, 640) scale(1, -1)">
          <rect x="200" y="280" width="12" height="40" fill="oklch(0.25 0.04 220)" />
          <rect x="280" y="280" width="12" height="40" fill="oklch(0.25 0.04 220)" />
          <rect x="360" y="280" width="12" height="40" fill="oklch(0.25 0.04 220)" />
          <rect x="440" y="280" width="12" height="40" fill="oklch(0.25 0.04 220)" />
          <rect x="180" y="260" width="300" height="20" fill="oklch(0.25 0.04 220)" />
        </g>

        {/* === AI / INTELLIGENCE ELEMENTS === */}
        
        {/* Data streams from platform */}
        <g filter="url(#glow)">
          {/* Central data node on platform */}
          <motion.circle
            cx="320"
            cy="210"
            r="6"
            fill="url(#aiGlow)"
            animate={{ r: [6, 8, 6], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Data stream lines going up - representing data transmission */}
          <motion.path
            d="M320 210 Q310 150 280 100 Q260 60 300 30"
            stroke="url(#aiGlow)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.path
            d="M320 210 Q340 160 380 120 Q410 90 450 50"
            stroke="url(#aiGlow)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Satellite/cloud data points */}
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="300" cy="30" r="4" fill="oklch(0.65 0.14 200)" />
            <circle cx="300" cy="30" r="8" stroke="oklch(0.65 0.14 200)" strokeWidth="1" fill="none" opacity="0.5" />
          </motion.g>

          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
            <circle cx="450" cy="50" r="4" fill="oklch(0.65 0.14 200)" />
            <circle cx="450" cy="50" r="8" stroke="oklch(0.65 0.14 200)" strokeWidth="1" fill="none" opacity="0.5" />
          </motion.g>

          {/* Circuit/network pattern overlay */}
          <motion.g opacity="0.4">
            {/* Horizontal data lines on platform */}
            <motion.line
              x1="200" y1="245" x2="380" y2="245"
              stroke="oklch(0.55 0.12 200)"
              strokeWidth="1"
              strokeDasharray="2 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Small data nodes */}
            <motion.circle cx="220" cy="245" r="2" fill="oklch(0.65 0.14 200)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.circle cx="260" cy="245" r="2" fill="oklch(0.65 0.14 200)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle cx="300" cy="245" r="2" fill="oklch(0.65 0.14 200)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle cx="340" cy="245" r="2" fill="oklch(0.65 0.14 200)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
            />
          </motion.g>

          {/* AI brain/processing icon near crane */}
          <motion.g
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <circle cx="520" cy="110" r="12" fill="oklch(0.12 0.03 230)" stroke="oklch(0.55 0.12 200)" strokeWidth="1.5" />
            {/* Neural network pattern inside */}
            <circle cx="516" cy="106" r="2" fill="oklch(0.65 0.14 200)" />
            <circle cx="524" cy="106" r="2" fill="oklch(0.65 0.14 200)" />
            <circle cx="520" cy="114" r="2" fill="oklch(0.65 0.14 200)" />
            <line x1="516" y1="106" x2="524" y2="106" stroke="oklch(0.55 0.12 200)" strokeWidth="0.5" />
            <line x1="516" y1="106" x2="520" y2="114" stroke="oklch(0.55 0.12 200)" strokeWidth="0.5" />
            <line x1="524" y1="106" x2="520" y2="114" stroke="oklch(0.55 0.12 200)" strokeWidth="0.5" />
          </motion.g>

          {/* Data pulse ring around platform */}
          <motion.circle
            cx="320"
            cy="240"
            r="120"
            stroke="oklch(0.55 0.10 200)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            animate={{ r: [120, 150, 120], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </g>

        {/* Binary/data text decoration */}
        <motion.text
          x="50"
          y="400"
          fill="oklch(0.40 0.06 210)"
          fontSize="8"
          fontFamily="monospace"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          01001 DATA 11010
        </motion.text>

        <motion.text
          x="480"
          y="420"
          fill="oklch(0.40 0.06 210)"
          fontSize="8"
          fontFamily="monospace"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          ASSET.AI
        </motion.text>
      </svg>
    </div>
  )
}
