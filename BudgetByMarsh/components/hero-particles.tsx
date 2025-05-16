"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // Create gradient colors between purple and white
        const colorValue = Math.random()
        if (colorValue < 0.33) {
          this.color = "rgba(168, 85, 247, 0.7)" // purple-500
        } else if (colorValue < 0.66) {
          this.color = "rgba(216, 180, 254, 0.7)" // purple-300
        } else {
          this.color = "rgba(255, 255, 255, 0.7)" // white
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = isMobile ? 50 : 100
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = isMobile ? 100 : 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - distance / maxDistance

            // Draw line
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.2})` // purple-500 with opacity
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
