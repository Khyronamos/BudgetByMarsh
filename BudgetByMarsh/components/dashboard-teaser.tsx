"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FuturisticButton } from "@/components/ui/futuristic-button"
import { DollarSign, TrendingUp, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"

export function DashboardTeaser() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Financial data
  const financialData = {
    balance: 12450.75,
    savingsGoal: 25000,
    savingsProgress: 45,
    creditScore: 780,
  }

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value)
  }

  // Animation on mount
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 },
      )
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Financial Command Center
          </span>
          <Badge className="ml-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 text-xs border border-purple-500/20">
            Preview
          </Badge>
        </h2>
        <Link href="/dashboard" passHref>
          <FuturisticButton variant="text" size="sm" icon={<ChevronRight className="ml-1 h-4 w-4" />}>
            Access Full Dashboard
          </FuturisticButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Balance Card */}
        <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <DollarSign className="h-4 w-4 mr-1 text-purple-400" />
              <span className="text-sm font-medium text-gray-400">Current Balance</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold text-white">{formatCurrency(financialData.balance)}</h3>
              <span className="text-xs text-green-400 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.2%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Savings Progress Card */}
        <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-4 w-4 mr-1 text-purple-400" />
              <span className="text-sm font-medium text-gray-400">Savings Progress</span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">{financialData.savingsProgress}%</h3>
              <span className="text-sm text-gray-400">of {formatCurrency(financialData.savingsGoal)}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-white/80"
                style={{ width: `${financialData.savingsProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {formatCurrency((financialData.savingsGoal * financialData.savingsProgress) / 100)} saved
            </p>
          </CardContent>
        </Card>

        {/* Credit Score Card */}
        <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Shield className="h-4 w-4 mr-1 text-purple-400" />
              <span className="text-sm font-medium text-gray-400">Credit Score</span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <h3 className="text-2xl font-bold text-green-400">{financialData.creditScore}</h3>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Excellent</Badge>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-gray-500">300</span>
              <span className="text-[10px] text-gray-500">850</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
