"use client"

import { useState, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gsap } from "gsap"
import { BarChart3, TrendingUp, DollarSign, Calendar } from "lucide-react"

export function SavingsSimulator() {
  const [monthlySavings, setMonthlySavings] = useState(200)
  const [years, setYears] = useState(10)
  const [interestRate, setInterestRate] = useState(5)
  const [simulationResult, setSimulationResult] = useState(0)
  const [contributionAmount, setContributionAmount] = useState(0)
  const [interestAmount, setInterestAmount] = useState(0)
  const [activeTab, setActiveTab] = useState("chart")

  const chartRef = useRef(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  // Calculate results
  useEffect(() => {
    let total = 0
    const monthlyRate = interestRate / 100 / 12
    const months = years * 12
    const contributions = monthlySavings * months

    for (let i = 1; i <= months; i++) {
      total = (total + monthlySavings) * (1 + monthlyRate)
    }

    setSimulationResult(Math.round(total))
    setContributionAmount(contributions)
    setInterestAmount(Math.round(total - contributions))
  }, [monthlySavings, years, interestRate])

  // Animate chart when values change
  useEffect(() => {
    if (chartRef.current && activeTab === "chart") {
      // Clear previous animations
      gsap.killTweensOf(barRefs.current)

      // Animate bars
      gsap.fromTo(
        barRefs.current,
        { height: 0 },
        {
          height: (index) => {
            // Calculate height percentage based on year
            const yearValue = calculateYearValue(index + 1)
            const maxValue = calculateYearValue(years)
            return `${(yearValue / maxValue) * 100}%`
          },
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
        },
      )
    }
  }, [simulationResult, activeTab])

  // Calculate value at a specific year
  const calculateYearValue = (year: number) => {
    const monthlyRate = interestRate / 100 / 12
    const months = year * 12
    let total = 0

    for (let i = 1; i <= months; i++) {
      total = (total + monthlySavings) * (1 + monthlyRate)
    }

    return Math.round(total)
  }

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-300">Monthly Savings</label>
              <span className="text-lg font-bold text-white">${monthlySavings}</span>
            </div>
            <Slider
              value={[monthlySavings]}
              min={50}
              max={1000}
              step={50}
              onValueChange={(value) => setMonthlySavings(value[0])}
              className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-500 [&_[role=slider]]:to-white/70"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-300">Time Period (Years)</label>
              <span className="text-lg font-bold text-white">{years} years</span>
            </div>
            <Slider
              value={[years]}
              min={1}
              max={30}
              step={1}
              onValueChange={(value) => setYears(value[0])}
              className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-500 [&_[role=slider]]:to-white/70"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-300">Interest Rate (%)</label>
              <span className="text-lg font-bold text-white">{interestRate}%</span>
            </div>
            <Slider
              value={[interestRate]}
              min={0}
              max={12}
              step={0.1}
              onValueChange={(value) => setInterestRate(value[0])}
              className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-500 [&_[role=slider]]:to-white/70"
            />
          </div>

          <Card className="bg-gradient-to-r from-purple-500/10 to-white/10 border border-purple-500/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Total Savings</span>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    {formatCurrency(simulationResult)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Your Contributions</span>
                  <span className="text-md font-medium text-purple-400">{formatCurrency(contributionAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Interest Earned</span>
                  <span className="text-md font-medium text-white/80">{formatCurrency(interestAmount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="chart" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-6 bg-purple-950/60 border border-purple-500/20">
              <TabsTrigger
                value="chart"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-white/10 data-[state=active]:text-white"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Chart View
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-white/10 data-[state=active]:text-white"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Table View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chart" className="mt-0">
              <div className="h-[300px] flex items-end justify-between gap-1 relative" ref={chartRef}>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                  <span>{formatCurrency(calculateYearValue(years))}</span>
                  <span>{formatCurrency(calculateYearValue(years) * 0.75)}</span>
                  <span>{formatCurrency(calculateYearValue(years) * 0.5)}</span>
                  <span>{formatCurrency(calculateYearValue(years) * 0.25)}</span>
                  <span>$0</span>
                </div>

                {/* Chart grid lines */}
                <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between">
                  <div className="border-t border-gray-800 w-full h-0"></div>
                  <div className="border-t border-gray-800 w-full h-0"></div>
                  <div className="border-t border-gray-800 w-full h-0"></div>
                  <div className="border-t border-gray-800 w-full h-0"></div>
                  <div className="border-t border-gray-800 w-full h-0"></div>
                </div>

                {/* Chart bars */}
                <div className="pl-12 h-full w-full flex items-end justify-between gap-1">
                  {Array.from({ length: Math.min(years, 15) }).map((_, index) => (
                    <div key={index} className="relative flex-1 flex flex-col items-center">
                      <div
                        ref={(el) => (barRefs.current[index] = el)}
                        className="w-full bg-gradient-to-t from-purple-500 to-white/70 rounded-t-sm"
                        style={{ height: 0 }}
                      ></div>
                      <span className="text-xs text-gray-400 mt-1">{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-400">
                <span>Years</span>
              </div>
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              <div className="bg-black/60 border border-purple-500/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800 bg-purple-950/60">
                  <div className="font-medium text-white flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    Year
                  </div>
                  <div className="font-medium text-white flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-purple-400" />
                    Balance
                  </div>
                  <div className="font-medium text-white flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-white/80" />
                    Interest Earned
                  </div>
                </div>
                <div className="max-h-[250px] overflow-y-auto">
                  {Array.from({ length: years }).map((_, index) => {
                    const year = index + 1
                    const yearValue = calculateYearValue(year)
                    const prevYearValue = year > 1 ? calculateYearValue(year - 1) : 0
                    const yearContributions = monthlySavings * 12
                    const yearInterest =
                      year > 1 ? yearValue - prevYearValue - yearContributions : yearValue - yearContributions

                    return (
                      <div
                        key={index}
                        className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800 hover:bg-purple-950/40"
                      >
                        <div className="text-gray-300">{year}</div>
                        <div className="text-white font-medium">{formatCurrency(yearValue)}</div>
                        <div className="text-white/80">{formatCurrency(yearInterest)}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
