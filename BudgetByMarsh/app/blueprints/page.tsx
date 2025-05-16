"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, FileCode, Layers, Sparkles, Zap, Cpu, Database, Globe } from "lucide-react"

export default function BlueprintsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="container pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <Layers className="h-3.5 w-3.5 mr-1" />
            Digital Ecosystem
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 mb-6">
            Premium Solutions for Your Digital Empire
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our collection of high-quality digital blueprints, templates, and frameworks designed to accelerate
            your financial journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none"
            >
              <FileCode className="mr-2 h-5 w-5" />
              Browse Blueprints
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
              <Code className="mr-2 h-5 w-5" />
              Submit Your Blueprint
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Blueprint Categories */}
      <section className="container py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/60 border border-purple-500/20 p-1">
              <TabsTrigger
                value="all"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
              >
                All Blueprints
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
              >
                Financial Tools
              </TabsTrigger>
              <TabsTrigger
                value="dashboards"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
              >
                Dashboards
              </TabsTrigger>
              <TabsTrigger
                value="components"
                className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
              >
                UI Components
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprints.map((blueprint, index) => (
                <BlueprintCard key={index} blueprint={blueprint} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprints
                .filter((bp) => bp.category === "financial")
                .map((blueprint, index) => (
                  <BlueprintCard key={index} blueprint={blueprint} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="dashboards" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprints
                .filter((bp) => bp.category === "dashboard")
                .map((blueprint, index) => (
                  <BlueprintCard key={index} blueprint={blueprint} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="components" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprints
                .filter((bp) => bp.category === "component")
                .map((blueprint, index) => (
                  <BlueprintCard key={index} blueprint={blueprint} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Technology Behind BudgetByMarsh */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>
        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 px-3 py-1.5 text-sm border border-cyan-500/20 backdrop-blur-sm">
                <Cpu className="h-3.5 w-3.5 mr-1" />
                Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                The Technology Behind BudgetByMarsh
              </h2>
              <p className="text-gray-300 mb-6">
                Our platform leverages cutting-edge technologies to deliver a seamless, secure, and intuitive financial
                management experience. From real-time data processing to AI-powered insights, we've built a robust
                foundation for your financial success.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                    <Zap className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Next.js Framework</h3>
                    <p className="text-sm text-gray-400">For lightning-fast performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                    <Database className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Secure Database</h3>
                    <p className="text-sm text-gray-400">End-to-end encrypted data</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">AI Integration</h3>
                    <p className="text-sm text-gray-400">Smart financial insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                    <Globe className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">API Ecosystem</h3>
                    <p className="text-sm text-gray-400">Connects to financial services</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white border-none">
                Learn More About Our Tech
              </Button>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 overflow-hidden">
                <pre className="text-xs md:text-sm text-gray-300 font-mono overflow-x-auto">
                  <code>
                    {`// BudgetByMarsh Core Technology
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/mongodb'
import { verifyToken } from '@/lib/auth'
import { FinancialDataProcessor } from '@/lib/finance'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verify user authentication
  const user = await verifyToken(req)
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Connect to secure database
  const { db } = await connectToDatabase()
  
  // Process financial data with AI insights
  const processor = new FinancialDataProcessor()
  const insights = await processor.generateInsights(
    user.id,
    req.body.transactionData
  )
  
  // Return personalized financial recommendations
  return res.status(200).json({
    insights,
    recommendations: insights.getRecommendations(),
    savingsOpportunities: insights.findSavingsOpportunities(),
  })
}`}
                  </code>
                </pre>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Blueprint Card Component
function BlueprintCard({ blueprint }) {
  return (
    <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blueprint.image || "/placeholder.svg"}
          alt={blueprint.title}
          width={600}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
          {blueprint.type}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">{blueprint.title}</CardTitle>
        <CardDescription className="text-gray-400">{blueprint.description}</CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {blueprint.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-purple-950/30 text-purple-300 border-purple-500/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          <span className="text-purple-400 font-medium">{blueprint.complexity}</span> Complexity
        </div>
        <Button
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-none"
        >
          View Blueprint
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample blueprint data
const blueprints = [
  {
    title: "Financial Dashboard",
    description: "Complete dashboard with financial metrics and visualizations",
    image: "/placeholder.svg?height=300&width=600",
    type: "Premium",
    complexity: "Advanced",
    category: "dashboard",
    tags: ["React", "TypeScript", "Charts", "Responsive"],
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and income with categorization",
    image: "/placeholder.svg?height=300&width=600",
    type: "Free",
    complexity: "Intermediate",
    category: "financial",
    tags: ["React", "LocalStorage", "Filters"],
  },
  {
    title: "Savings Calculator",
    description: "Interactive tool to visualize savings growth",
    image: "/placeholder.svg?height=300&width=600",
    type: "Premium",
    complexity: "Beginner",
    category: "financial",
    tags: ["JavaScript", "Charts", "Interactive"],
  },
  {
    title: "Expense Analyzer",
    description: "AI-powered expense analysis and categorization",
    image: "/placeholder.svg?height=300&width=600",
    type: "Premium",
    complexity: "Advanced",
    category: "financial",
    tags: ["AI", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Investment Portfolio",
    description: "Track and analyze investment performance",
    image: "/placeholder.svg?height=300&width=600",
    type: "Premium",
    complexity: "Advanced",
    category: "dashboard",
    tags: ["React", "Charts", "Real-time Data"],
  },
  {
    title: "UI Component Library",
    description: "Futuristic financial UI components",
    image: "/placeholder.svg?height=300&width=600",
    type: "Free",
    complexity: "Intermediate",
    category: "component",
    tags: ["React", "Tailwind CSS", "Accessible"],
  },
]
