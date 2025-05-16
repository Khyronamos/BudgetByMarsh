"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"
import { Clipboard, Check, Tag, Clock, RefreshCw } from "lucide-react"

export function CouponGenerator() {
  const [couponCode, setCouponCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [isGenerating, setIsGenerating] = useState(false)
  const couponRef = useRef<HTMLDivElement>(null)

  // Generate random coupon code
  const generateCoupon = () => {
    setIsGenerating(true)

    // Animate coupon card
    if (couponRef.current) {
      gsap.to(couponRef.current, {
        rotationY: 180,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Generate new code
          const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          let result = ""
          for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
          }

          setCouponCode(result)
          setTimeLeft(600) // Reset timer
          setCopied(false)

          // Animate back
          gsap.to(couponRef.current, {
            rotationY: 360,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(couponRef.current, { rotationY: 0 })
              setIsGenerating(false)
            },
          })
        },
      })
    }
  }

  // Copy coupon to clipboard
  const copyCoupon = () => {
    navigator.clipboard.writeText(couponCode)
    setCopied(true)

    // Animate copy button
    gsap.fromTo(".copy-button", { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })

    setTimeout(() => setCopied(false), 3000)
  }

  // Initialize coupon on mount
  useEffect(() => {
    generateCoupon()
  }, [])

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      generateCoupon()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // Format time
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <div className="bg-[#0c0c2a]/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8">
      <div className="text-center mb-8">
        <Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
          <Tag className="h-3.5 w-3.5 mr-1" />
          Exclusive
        </Badge>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Dynamic Coupon Generator
        </h3>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Get a unique limited-time coupon code for an extra 15% off any digital product
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div ref={couponRef} className="relative perspective" style={{ transformStyle: "preserve-3d" }}>
          <Card className="bg-gradient-to-r from-[#0c0c2a]/80 to-[#16103f]/80 border border-purple-500/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">Limited Time Offer</CardTitle>
                  <CardDescription className="text-gray-400">15% off any digital product</CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span>Expires in: {formatTime(timeLeft)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-[#0a0a1e] border border-purple-500/20 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-2">Your exclusive coupon code:</p>
                <div className="font-mono text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {couponCode || "Generating..."}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-950/30"
                onClick={generateCoupon}
                disabled={isGenerating}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? "animate-spin" : ""}`} />
                New Code
              </Button>
              <Button
                className="copy-button bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0"
                onClick={copyCoupon}
                disabled={!couponCode || isGenerating}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Clipboard className="h-4 w-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Enter this code at checkout to receive 15% off your purchase
        </p>
      </div>
    </div>
  )
}
