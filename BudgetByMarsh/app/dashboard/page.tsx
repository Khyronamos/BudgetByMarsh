"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, DollarSign, TrendingUp, Shield, Target, BarChart3, Clock, Zap, AlertCircle } from "lucide-react"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { FinancialGoals } from "@/components/financial-goals"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Financial data
  const financialData = {
    balance: 12450.75,
    monthlyIncome: 5000,
    monthlySavings: 1250,
    savingsGoal: 25000,
    savingsProgress: 48,
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

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      {/* Navigation */}
      <FuturisticNavbar />

      {/* Dashboard Header */}
      <div className="container pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Financial Dashboard
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400">
              Financial Command Center
            </h1>
            <p className="text-gray-300 mt-2">Your complete financial overview and control hub</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">7</span>
              </div>
              <span className="text-sm text-gray-400">Daily Streak</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-medium">
              UN
            </div>
          </div>
        </motion.div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Balance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3">
                    <DollarSign className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Current Balance</span>
                </div>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-white">{formatCurrency(financialData.balance)}</h3>
                  <span className="text-sm text-green-400 flex items-center bg-green-900/20 px-2 py-1 rounded-full border border-green-500/20">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    +5.2%
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Savings Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center mr-3">
                    <BarChart3 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Savings Progress</span>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="text-3xl font-bold text-white">{financialData.savingsProgress}%</h3>
                  <span className="text-sm text-gray-300">of {formatCurrency(financialData.savingsGoal)}</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 relative"
                    style={{ width: `${financialData.savingsProgress}%` }}
                  >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1IDMwTDAgMTVMMTUgMEwzMCAxNUwxNSAzMFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {formatCurrency((financialData.savingsGoal * financialData.savingsProgress) / 100)} saved
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Credit Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Credit Score</span>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="text-3xl font-bold text-white">{financialData.creditScore}</h3>
                  <Badge className="bg-green-900/30 text-green-400 border-green-500/30">Excellent</Badge>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">300</span>
                  <span className="text-xs text-gray-500">850</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg blur-md -z-10"></div>
              <TabsList className="bg-black/60 border border-purple-500/30 mb-8 p-1 rounded-lg">
                <TabsTrigger
                  value="overview"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-600/80 to-cyan-600/80 data-[state=active]:text-white rounded-md"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Insights
                </TabsTrigger>
                <TabsTrigger
                  value="transactions"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-600/80 to-cyan-600/80 data-[state=active]:text-white rounded-md"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Transactions
                </TabsTrigger>
                <TabsTrigger
                  value="budget"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-600/80 to-cyan-600/80 data-[state=active]:text-white rounded-md"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Budget
                </TabsTrigger>
                <TabsTrigger
                  value="goals"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-600/80 to-cyan-600/80 data-[state=active]:text-white rounded-md"
                  onClick={() => setActiveTab("goals")}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Goals
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-black/60 border-purple-500/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-purple-400" />
                        Spending Insights
                      </h3>
                      <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30">AI-powered</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">AI-powered analysis of your spending patterns</p>
                    <div className="space-y-4">
                      <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-white mb-1">Subscription Overlap</h4>
                            <p className="text-sm text-gray-400">
                              You have multiple streaming services with overlapping content. Consider consolidating to
                              save $24/month.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-purple-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-white mb-1">Dining Optimization</h4>
                            <p className="text-sm text-gray-400">
                              Your weekday lunch expenses increased 15% this month. Meal prepping could save you
                              $120/month.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/60 border-purple-500/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-cyan-400" />
                        Smart Recommendations
                      </h3>
                      <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-500/30">Personalized</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">Personalized financial advice</p>
                    <div className="space-y-4">
                      <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <DollarSign className="h-5 w-5 text-cyan-400 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-white">Reduce Subscription Costs</h4>
                              <span className="text-sm font-medium text-cyan-400">$288/year</span>
                            </div>
                            <p className="text-sm text-gray-400">
                              Consolidate your streaming services to the essential ones you use most frequently.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-cyan-400 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-white">Increase Emergency Fund</h4>
                              <span className="text-sm font-medium text-cyan-400">High Priority</span>
                            </div>
                            <p className="text-sm text-gray-400">
                              Your emergency fund covers 2 months of expenses. We recommend increasing to 6 months.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-4">
              <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-400" />
                  Recent Transactions
                </h2>
                <div className="space-y-4">
                  {[
                    { name: "Grocery Store", amount: -78.35, date: "Today", category: "Groceries", icon: "🛒" },
                    { name: "Salary Deposit", amount: 2450.0, date: "Yesterday", category: "Income", icon: "💰" },
                    { name: "Electric Bill", amount: -94.72, date: "2 days ago", category: "Utilities", icon: "⚡" },
                    { name: "Coffee Shop", amount: -4.5, date: "3 days ago", category: "Dining", icon: "☕" },
                    { name: "Online Shopping", amount: -59.99, date: "4 days ago", category: "Shopping", icon: "🛍️" },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-xl">
                          {transaction.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{transaction.name}</h4>
                          <p className="text-xs text-gray-400">
                            {transaction.date} • {transaction.category}
                          </p>
                        </div>
                      </div>
                      <span className={`font-medium ${transaction.amount > 0 ? "text-green-400" : "text-white"}`}>
                        {transaction.amount > 0 ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="budget" className="space-y-4">
              <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-purple-400" />
                  Budget Allocation
                </h2>
                <div className="space-y-6">
                  {[
                    { category: "Housing", allocated: 1500, spent: 1500, percentage: 100 },
                    { category: "Food", allocated: 600, spent: 420, percentage: 70 },
                    { category: "Transportation", allocated: 400, spent: 350, percentage: 87.5 },
                    { category: "Entertainment", allocated: 300, spent: 275, percentage: 91.7 },
                    { category: "Savings", allocated: 1000, spent: 1000, percentage: 100 },
                  ].map((budget, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{budget.category}</span>
                        <span className="text-sm text-gray-400">
                          {formatCurrency(budget.spent)} / {formatCurrency(budget.allocated)}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            budget.percentage > 90
                              ? "bg-red-500"
                              : budget.percentage > 75
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                          style={{ width: `${budget.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <FinancialGoals />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
