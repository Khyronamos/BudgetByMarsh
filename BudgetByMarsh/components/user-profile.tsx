"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FuturisticButton } from "@/components/ui/futuristic-button"
import {
  Sparkles,
  TrendingUp,
  DollarSign,
  PieChart,
  Shield,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview")
  const diamondRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animation on mount
  useEffect(() => {
    if (diamondRef.current && contentRef.current) {
      // Animate diamond
      gsap.fromTo(
        diamondRef.current,
        { rotation: 45, scale: 0.8, opacity: 0 },
        { rotation: 45, scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
      )

      // Animate content
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
      )
    }
  }, [])

  // Animate tab change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(".tab-content-active", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
    }
  }, [activeTab])

  // Financial data
  const financialData = {
    balance: 12450.75,
    monthlyIncome: 5000,
    monthlySavings: 1250,
    savingsGoal: 25000,
    savingsProgress: 45,
    creditScore: 780,
    recentTransactions: [
      { id: 1, name: "Grocery Store", amount: -120.45, date: "Today", type: "expense" },
      { id: 2, name: "Salary Deposit", amount: 2500.0, date: "Yesterday", type: "income" },
      { id: 3, name: "Electric Bill", amount: -85.2, date: "May 12", type: "expense" },
      { id: 4, name: "Investment Return", amount: 175.3, date: "May 10", type: "income" },
    ],
    budgetCategories: [
      { name: "Housing", percentage: 30, color: "bg-purple-500" },
      { name: "Food", percentage: 15, color: "bg-purple-400" },
      { name: "Transportation", percentage: 10, color: "bg-purple-300" },
      { name: "Savings", percentage: 25, color: "bg-white" },
      { name: "Other", percentage: 20, color: "bg-purple-700" },
    ],
  }

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value)
  }

  return (
    <section id="profile" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950 -z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            Financial Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Your Financial Command Center
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Track, analyze, and optimize your finances with our advanced dashboard
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Diamond profile card */}
          <div className="relative mb-16">
            {/* Diamond shape */}
            <div
              ref={diamondRef}
              className="w-64 h-64 bg-black/40 backdrop-blur-md border border-purple-500/30 shadow-xl"
              style={{ transform: "rotate(45deg)" }}
            >
              {/* Glowing edges */}
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
              </div>

              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-purple-500/10 animate-pulse"></div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-purple-500/50"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-purple-500/50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-purple-500/50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-purple-500/50"></div>
            </div>

            {/* Profile content (rotated back to normal) */}
            <div
              ref={contentRef}
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ transform: "rotate(-45deg)" }}
            >
              {/* Profile image */}
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-xl font-bold">
                  KQ
                </div>
                <div className="absolute -inset-1 rounded-full blur-md bg-purple-500/30 -z-10"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-black/60 border border-purple-500/50 flex items-center justify-center">
                  <Badge className="h-4 w-4 p-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-white/80 text-[8px]">
                    PRO
                  </Badge>
                </div>
              </div>

              {/* User info */}
              <h3 className="text-xl font-bold text-white mb-1">Khy Queen</h3>
              <p className="text-sm text-purple-300 mb-3">Financial Innovator</p>

              {/* Stats */}
              <div className="flex gap-4 mb-2">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Balance</p>
                  <p className="text-sm font-bold text-white">{formatCurrency(financialData.balance)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Savings</p>
                  <p className="text-sm font-bold text-white">{financialData.savingsProgress}%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Score</p>
                  <p className="text-sm font-bold text-green-400">{financialData.creditScore}</p>
                </div>
              </div>

              {/* Action button */}
              <FuturisticButton variant="glow" size="sm" glowColor="rgba(168, 85, 247, 0.5)">
                Manage Finances
              </FuturisticButton>
            </div>
          </div>

          {/* Dashboard tabs */}
          <div className="w-full max-w-4xl">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-black/40 backdrop-blur-md rounded-lg p-1 border border-purple-500/20">
                {["overview", "transactions", "budget", "goals"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab ? "bg-purple-900/50 text-white shadow-lg" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 shadow-xl">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="tab-content-active space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Balance Card */}
                    <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-purple-400" />
                          Current Balance
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end justify-between">
                          <h3 className="text-2xl font-bold text-white">{formatCurrency(financialData.balance)}</h3>
                          <span className="text-xs text-green-400 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +5.2%
                          </span>
                        </div>
                        <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-white/80 w-[65%]"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Monthly spending limit: 65%</p>
                      </CardContent>
                    </Card>

                    {/* Savings Card */}
                    <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                          <PieChart className="h-4 w-4 mr-1 text-purple-400" />
                          Savings Progress
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end justify-between">
                          <h3 className="text-2xl font-bold text-white">{financialData.savingsProgress}%</h3>
                          <span className="text-sm text-gray-400">of {formatCurrency(financialData.savingsGoal)}</span>
                        </div>
                        <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-white/80"
                            style={{ width: `${financialData.savingsProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          {formatCurrency((financialData.savingsGoal * financialData.savingsProgress) / 100)} saved
                        </p>
                      </CardContent>
                    </Card>

                    {/* Credit Score Card */}
                    <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                          <Shield className="h-4 w-4 mr-1 text-purple-400" />
                          Credit Score
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end justify-between">
                          <h3 className="text-2xl font-bold text-green-400">{financialData.creditScore}</h3>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Excellent</Badge>
                        </div>
                        <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-[10px] text-gray-500">300</span>
                          <span className="text-[10px] text-gray-500">850</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Transactions */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">Recent Transactions</h3>
                      <button className="text-xs text-purple-400 flex items-center">
                        View All
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      {financialData.recentTransactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                transaction.type === "income"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-purple-500/20 text-purple-400"
                              }`}
                            >
                              {transaction.type === "income" ? (
                                <ArrowUpRight className="h-4 w-4" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4" />
                              )}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-white">{transaction.name}</p>
                              <p className="text-xs text-gray-400">{transaction.date}</p>
                            </div>
                          </div>
                          <p
                            className={`text-sm font-medium ${
                              transaction.type === "income" ? "text-green-400" : "text-white"
                            }`}
                          >
                            {transaction.type === "income" ? "+" : ""}
                            {formatCurrency(transaction.amount)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Transactions Tab */}
              {activeTab === "transactions" && (
                <div className="tab-content-active">
                  <p className="text-center text-gray-400 py-8">Detailed transaction history would be displayed here</p>
                </div>
              )}

              {/* Budget Tab */}
              {activeTab === "budget" && (
                <div className="tab-content-active">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Budget Allocation</h3>
                      <div className="space-y-4">
                        {financialData.budgetCategories.map((category, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full ${category.color} mr-2`}></div>
                                <span className="text-sm text-white">{category.name}</span>
                              </div>
                              <span className="text-sm text-gray-400">{category.percentage}%</span>
                            </div>
                            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${category.color}`}
                                style={{ width: `${category.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Monthly Overview</h3>
                      <Card className="bg-black/60 border-purple-500/20 overflow-hidden">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Income</span>
                              <span className="text-sm font-medium text-white">
                                {formatCurrency(financialData.monthlyIncome)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Expenses</span>
                              <span className="text-sm font-medium text-white">
                                {formatCurrency(financialData.monthlyIncome - financialData.monthlySavings)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Savings</span>
                              <span className="text-sm font-medium text-green-400">
                                {formatCurrency(financialData.monthlySavings)}
                              </span>
                            </div>
                            <div className="pt-2 border-t border-gray-800">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-white">Savings Rate</span>
                                <span className="text-sm font-medium text-green-400">
                                  {Math.round((financialData.monthlySavings / financialData.monthlyIncome) * 100)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}

              {/* Goals Tab */}
              {activeTab === "goals" && (
                <div className="tab-content-active">
                  <p className="text-center text-gray-400 py-8">
                    Financial goals and milestones would be displayed here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
