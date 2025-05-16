"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FuturisticButton } from "@/components/ui/futuristic-button"
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

type Experience = {
  id: number
  title: string
  description: string
  image: string
  features: string[]
  cta: string
}

export function DigitalExperienceShowcase() {
  const isMobile = useMobile()
  const [activeExperience, setActiveExperience] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Immersive Web Portals",
      description:
        "Transform static websites into dynamic, interactive experiences that captivate and engage your audience.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["3D Animations", "Interactive Elements", "Particle Effects", "Responsive Design"],
      cta: "Explore Immersive Experiences",
    },
    {
      id: 2,
      title: "AI-Powered Interfaces",
      description: "Leverage cutting-edge AI to create intelligent, adaptive user interfaces that learn and evolve.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Personalized Content", "Predictive UI", "Voice Interaction", "Behavioral Analysis"],
      cta: "Discover AI Interfaces",
    },
    {
      id: 3,
      title: "Digital Ecosystem Architecture",
      description: "Build comprehensive digital ecosystems that seamlessly integrate across platforms and devices.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Cross-Platform Integration",
        "Cloud Infrastructure",
        "Real-time Synchronization",
        "Scalable Architecture",
      ],
      cta: "View Ecosystem Solutions",
    },
  ]

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (showcaseRef.current) {
      const rect = showcaseRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    }
  }

  // Initialize experience positions
  useEffect(() => {
    if (showcaseRef.current && experienceRefs.current.length > 0) {
      positionExperiences(0, false)
    }
  }, [])

  // Position experiences with 3D effect
  const positionExperiences = (activeIndex: number, animate = true) => {
    if (!showcaseRef.current) return

    const duration = animate ? 0.8 : 0

    experienceRefs.current.forEach((experience, index) => {
      if (!experience) return

      // Calculate position relative to active experience
      const position = index - activeIndex

      // Set z-index to ensure proper layering
      experience.style.zIndex = (100 - Math.abs(position)).toString()

      // Create animation
      gsap.to(experience, {
        x: isMobile ? 0 : position * 100,
        y: isMobile ? position * 30 : 0,
        z: -Math.abs(position) * 150,
        rotationY: position * 15,
        scale: 1 - Math.abs(position) * 0.2,
        opacity: 1 - Math.abs(position) * 0.3,
        duration: duration,
        ease: "power2.out",
        onStart: () => {
          if (animate) setIsAnimating(true)
        },
        onComplete: () => {
          if (animate) setIsAnimating(false)
        },
      })
    })
  }

  // Apply parallax effect on mouse move
  useEffect(() => {
    if (isHovering && !isMobile && experienceRefs.current[activeExperience]) {
      const activeElement = experienceRefs.current[activeExperience]
      if (activeElement) {
        gsap.to(activeElement.querySelector(".experience-image"), {
          x: (mousePosition.x - 0.5) * 20,
          y: (mousePosition.y - 0.5) * 20,
          duration: 0.5,
          ease: "power2.out",
        })

        gsap.to(activeElement.querySelector(".experience-content"), {
          x: (mousePosition.x - 0.5) * 10,
          y: (mousePosition.y - 0.5) * 10,
          duration: 0.5,
          ease: "power2.out",
        })
      }
    }
  }, [mousePosition, isHovering, activeExperience, isMobile])

  // Handle experience navigation
  const navigateExperiences = (direction: number) => {
    if (isAnimating) return

    const newIndex = (activeExperience + direction + experiences.length) % experiences.length
    setActiveExperience(newIndex)
    positionExperiences(newIndex)
  }

  return (
    <div
      ref={showcaseRef}
      className="relative h-[600px] flex items-center justify-center perspective"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Navigation buttons */}
      <button
        className="absolute left-4 z-50 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-900/30 transition-colors"
        onClick={() => navigateExperiences(-1)}
        disabled={isAnimating}
        aria-label="Previous experience"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        className="absolute right-4 z-50 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-900/30 transition-colors"
        onClick={() => navigateExperiences(1)}
        disabled={isAnimating}
        aria-label="Next experience"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Experience showcase */}
      <div className="relative w-full h-full flex items-center justify-center">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            ref={(el) => (experienceRefs.current[index] = el)}
            className="absolute w-full max-w-4xl transform-gpu transition-shadow duration-300"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: index === activeExperience ? "0 0 40px rgba(168, 85, 247, 0.3)" : "none",
            }}
          >
            <Card className="bg-black/60 backdrop-blur-sm border border-purple-500/20 overflow-hidden h-[500px]">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <div className="experience-image absolute inset-0">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                  </div>
                </div>

                <div className="experience-content p-8 flex flex-col justify-center">
                  <Badge className="self-start mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5 mr-1" />
                    KhyAI Designs
                  </Badge>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{experience.title}</h3>
                  <p className="text-gray-300 mb-6">{experience.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {experience.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {index === activeExperience && (
                    <div className="mt-auto">
                      <FuturisticButton variant="primary" icon={<ArrowRight className="ml-2 h-4 w-4" />}>
                        {experience.cta}
                      </FuturisticButton>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Experience indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeExperience
                ? "bg-gradient-to-r from-purple-500 to-white w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => {
              if (!isAnimating && index !== activeExperience) {
                setActiveExperience(index)
                positionExperiences(index)
              }
            }}
            disabled={isAnimating}
            aria-label={`View experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
