"use client"

import { useEffect, useRef } from "react"

const DARK_PALETTE = {
  background: ["rgb(8, 15, 30)", "rgb(12, 25, 45)", "rgb(15, 35, 60)", "rgb(10, 28, 50)"],
  particles: "120, 180, 220",
  waves: ["rgba(40, 80, 120,", "rgba(25, 55, 90,", "rgba(15, 35, 60,"],
  rays: ["rgba(80, 140, 180, 0.02)", "rgba(60, 120, 160, 0.01)", "rgba(40, 100, 140, 0)"],
  horizon: ["rgba(60, 100, 140, 0.15)", "rgba(40, 80, 120, 0.05)", "rgba(20, 50, 80, 0)"],
}

const LIGHT_PALETTE = {
  background: ["rgb(236, 241, 248)", "rgb(224, 233, 245)", "rgb(210, 225, 242)", "rgb(228, 236, 246)"],
  particles: "80, 130, 190",
  waves: ["rgba(100, 150, 210,", "rgba(130, 170, 220,", "rgba(180, 205, 235,"],
  rays: ["rgba(0, 120, 212, 0.04)", "rgba(0, 120, 212, 0.02)", "rgba(0, 120, 212, 0)"],
  horizon: ["rgba(0, 120, 212, 0.12)", "rgba(0, 120, 212, 0.05)", "rgba(0, 120, 212, 0)"],
}

function isDarkMode() {
  return !document.documentElement.classList.contains("light")
}

export function OceanAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let palette = isDarkMode() ? DARK_PALETTE : LIGHT_PALETTE

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const observer = new MutationObserver(() => {
      palette = isDarkMode() ? DARK_PALETTE : LIGHT_PALETTE
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const waves = [
      { amplitude: 25, frequency: 0.008, speed: 0.015, yOffset: 0.55, opacity: 0.15 },
      { amplitude: 35, frequency: 0.006, speed: 0.012, yOffset: 0.60, opacity: 0.12 },
      { amplitude: 45, frequency: 0.004, speed: 0.008, yOffset: 0.65, opacity: 0.10 },
      { amplitude: 20, frequency: 0.012, speed: 0.020, yOffset: 0.52, opacity: 0.08 },
    ]

    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, palette.background[0])
      gradient.addColorStop(0.3, palette.background[1])
      gradient.addColorStop(0.6, palette.background[2])
      gradient.addColorStop(1, palette.background[3])
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      particles.forEach((p) => {
        p.y -= p.speed
        p.x += Math.sin(time * 0.01 + p.y * 0.01) * 0.2
        if (p.y < 0) {
          p.y = height * 0.7
          p.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${palette.particles}, ${p.opacity})`
        ctx.fill()
      })

      waves.forEach((wave) => {
        ctx.beginPath()
        const baseY = height * wave.yOffset

        for (let x = 0; x <= width; x += 2) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7) * (wave.amplitude * 0.5)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        const waveGradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, height)
        waveGradient.addColorStop(0, `${palette.waves[0]} ${wave.opacity})`)
        waveGradient.addColorStop(0.5, `${palette.waves[1]} ${wave.opacity * 0.8})`)
        waveGradient.addColorStop(1, `${palette.waves[2]} ${wave.opacity * 0.5})`)
        ctx.fillStyle = waveGradient
        ctx.fill()
      })

      for (let i = 0; i < 3; i++) {
        const rayX = width * (0.3 + i * 0.2) + Math.sin(time * 0.005 + i) * 30
        const rayGradient = ctx.createLinearGradient(rayX, 0, rayX + 60, height * 0.5)
        rayGradient.addColorStop(0, palette.rays[0])
        rayGradient.addColorStop(0.5, palette.rays[1])
        rayGradient.addColorStop(1, palette.rays[2])
        ctx.fillStyle = rayGradient
        ctx.fillRect(rayX, 0, 80, height * 0.6)
      }

      const horizonGradient = ctx.createRadialGradient(
        width * 0.7,
        height * 0.35,
        0,
        width * 0.7,
        height * 0.35,
        width * 0.5,
      )
      horizonGradient.addColorStop(0, palette.horizon[0])
      horizonGradient.addColorStop(0.5, palette.horizon[1])
      horizonGradient.addColorStop(1, palette.horizon[2])
      ctx.fillStyle = horizonGradient
      ctx.fillRect(0, 0, width, height)

      time++
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-500"
      style={{ filter: "blur(0.5px)" }}
    />
  )
}
