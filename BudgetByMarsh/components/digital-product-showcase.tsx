"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"
import { ShoppingBag, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  badge?: string
  rating: number
}

export function DigitalProductShowcase() {
  const isMobile = useMobile()
  const [activeProduct, setActiveProduct] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const productContainerRef = useRef<HTMLDivElement>(null)
  const productRefs = useRef<(HTMLDivElement | null)[]>([])

  const products: Product[] = [
    {
      id: 1,
      name: "Budget Planner 2025",
      description: "Complete financial planning system with expense tracking",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Bestseller",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Debt Payoff Tracker",
      description: "Track and eliminate debt with proven strategies",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Savings Challenge Bundle",
      description: "10 challenges to boost your savings in 30 days",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Financial Freedom Roadmap",
      description: "Step-by-step guide to achieving financial independence",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Investment Starter Kit",
      description: "Begin your investment journey with confidence",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
    },
  ]

  // Initialize product positions
  useEffect(() => {
    if (productContainerRef.current && productRefs.current.length > 0) {
      positionProducts(0, false)
    }
  }, [])

  // Position products in 3D space
  const positionProducts = (activeIndex: number, animate = true) => {
    if (!productContainerRef.current) return

    const duration = animate ? 0.8 : 0

    productRefs.current.forEach((product, index) => {
      if (!product) return

      // Calculate position relative to active product
      const position = index - activeIndex

      // Set z-index to ensure proper layering
      product.style.zIndex = (100 - Math.abs(position)).toString()

      // Create animation
      gsap.to(product, {
        x: isMobile ? 0 : position * 60,
        y: isMobile ? position * 20 : 0,
        z: -Math.abs(position) * 100,
        rotationY: position * 10,
        scale: 1 - Math.abs(position) * 0.15,
        opacity: 1 - Math.abs(position) * 0.2,
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

  // Handle product navigation
  const navigateProducts = (direction: number) => {
    if (isAnimating) return

    const newIndex = (activeProduct + direction + products.length) % products.length
    setActiveProduct(newIndex)
    positionProducts(newIndex)
  }

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 z-50 bg-[#0c0c2a]/80 border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:bg-[#0c0c2a]"
        onClick={() => navigateProducts(-1)}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 z-50 bg-[#0c0c2a]/80 border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:bg-[#0c0c2a]"
        onClick={() => navigateProducts(1)}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Product showcase */}
      <div
        ref={productContainerRef}
        className="relative w-full h-full flex items-center justify-center perspective"
        style={{ perspective: "1000px" }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            className="absolute w-[280px] md:w-[320px] transform-gpu transition-shadow duration-300"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: index === activeProduct ? "0 0 30px rgba(124, 58, 237, 0.3)" : "none",
            }}
          >
            <div className="bg-[#0c0c2a]/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden">
              <div className="relative aspect-square">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.badge && (
                  <Badge
                    className={`absolute top-3 right-3 ${
                      product.badge === "Bestseller"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-cyan-500 to-purple-500"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-white">{product.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{product.description}</p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">{product.rating.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {formatCurrency(product.price)}
                  </p>
                  {index === activeProduct && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0"
                    >
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeProduct
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 w-6"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => {
              if (!isAnimating && index !== activeProduct) {
                setActiveProduct(index)
                positionProducts(index)
              }
            }}
            disabled={isAnimating}
            aria-label={`View product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
