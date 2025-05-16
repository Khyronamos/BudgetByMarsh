"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  DollarSign,
  BarChart3,
  Shield,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Play,
  ShoppingBag,
  Users,
  Zap,
  ArrowRight,
  Heart,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <FuturisticNavbar />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMTI5LCA5MCwgMjU1LCAwLjEpIi8+PC9zdmc+')]"></div>

        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-r from-purple-900/20 to-cyan-900/20 blur-3xl -z-10"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Revolutionize Your Finances
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 mb-6"
            >
              Master Your Money with Futuristic Tools
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-3xl"
            >
              Experience the future of financial management with BudgetByMarsh's cutting-edge tools, interactive savings
              simulators, and digital ecosystem blueprints.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none"
                >
                  Explore Your Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Digital Products
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                  <Play className="h-5 w-5 text-purple-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">250+</div>
                  <div className="text-sm text-gray-400">Videos Created</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">$10M+</div>
                  <div className="text-sm text-gray-400">Money Saved</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Community Size</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </motion.section>

      {/* Dashboard Teaser */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <BarChart3 className="h-3.5 w-3.5 mr-1" />
            Financial Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Your Financial Command Center
          </h2>
          <p className="text-gray-300">
            Get a comprehensive view of your finances with our intuitive dashboard. Track your spending, monitor your
            savings progress, and stay on top of your financial goals.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-6 md:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative">
            {/* Balance Card */}
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3">
                    <DollarSign className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Current Balance</span>
                </div>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-white">$12,450.75</h3>
                  <span className="text-sm text-green-400 flex items-center bg-green-900/20 px-2 py-1 rounded-full border border-green-500/20">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    +5.2%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Savings Progress Card */}
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center mr-3">
                    <BarChart3 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Savings Progress</span>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="text-3xl font-bold text-white">48%</h3>
                  <span className="text-sm text-gray-300">of $25,000</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 relative"
                    style={{ width: "48%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1IDMwTDAgMTVMMTUgMEwzMCAxNUwxNSAzMFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">$12,000 saved</p>
              </CardContent>
            </Card>

            {/* Credit Score Card */}
            <Card className="bg-black/60 border-purple-500/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="text-base font-medium text-gray-300">Credit Score</span>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="text-3xl font-bold text-white">780</h3>
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
          </div>

          <div className="flex justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none"
              >
                Access Full Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Future Savings Simulator */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 px-3 py-1.5 text-sm border border-cyan-500/20 backdrop-blur-sm">
            <TrendingUp className="h-3.5 w-3.5 mr-1" />
            Interactive Tool
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Visualize Your Growth: Future Savings Simulator
          </h2>
          <p className="text-gray-300">
            See how your savings can grow over time with our interactive simulator. Adjust variables like contribution
            amount, interest rate, and time period to visualize different scenarios.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-6 md:p-8 overflow-hidden">
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Future Savings Simulator</h3>
              <p className="text-gray-400 mb-4 max-w-md mx-auto">
                Our interactive savings simulator helps you visualize how your money can grow over time with different
                saving strategies.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                Try the Simulator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Budget Advisor */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              AI-Powered
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Your Personal AI Budget Advisor
            </h2>
            <p className="text-gray-300 mb-6">
              Get personalized financial advice from our AI-powered budget advisor. Simply chat with our AI to receive
              tailored recommendations based on your financial situation and goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                  <Zap className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-400">Receive advice tailored to your unique financial situation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Savings Opportunities</h3>
                  <p className="text-sm text-gray-400">Discover hidden opportunities to save more money</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/30">
                  <Shield className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Debt Reduction Strategies</h3>
                  <p className="text-sm text-gray-400">Get actionable plans to reduce debt and improve credit</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with AI Advisor
              </Button>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-6 overflow-hidden">
            <div className="flex flex-col h-[500px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white">AI Budget Advisor</h3>
                <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30">Live Chat</Badge>
              </div>

              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">
                      Hi there! I'm your AI Budget Advisor. I can help you optimize your finances and reach your
                      financial goals. What would you like help with today?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-cyan-900/30 border border-cyan-500/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">
                      I want to save for a down payment on a house in the next 3 years. How much should I be saving each
                      month?
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-500/30 flex-shrink-0 flex items-center justify-center">
                    <Users className="h-4 w-4 text-cyan-300" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">Great goal! To help you calculate this, I need a few details:</p>
                    <ol className="text-white text-sm mt-2 space-y-1 list-decimal list-inside">
                      <li>What's your target home price range?</li>
                      <li>How much do you already have saved?</li>
                      <li>What percentage are you aiming for as a down payment?</li>
                    </ol>
                    <p className="text-white text-sm mt-2">
                      With this information, I can create a personalized savings plan for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask anything about your finances..."
                  className="w-full bg-black/60 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <Button className="absolute right-1 top-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none h-9 w-9 p-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <Play className="h-3.5 w-3.5 mr-1" />
            Video Content
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Latest Money-Saving Insights
          </h2>
          <p className="text-gray-300">
            Explore our latest videos and articles on financial management, budgeting tips, and money-saving strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=600`}
                  alt="Video thumbnail"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600/80 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                  10:45
                </Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item === 1 && "5 Budget Hacks That Saved Me $500/Month"}
                  {item === 2 && "How to Automate Your Savings Strategy"}
                  {item === 3 && "Investing Basics: Start with $100"}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item === 1 &&
                    "Learn the practical budget hacks that helped me save an extra $500 every month without sacrificing my lifestyle."}
                  {item === 2 &&
                    "Discover how to set up automated savings systems that make building wealth effortless and consistent."}
                  {item === 3 &&
                    "Think investing requires thousands to start? Learn how to begin building your portfolio with just $100."}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs">
                      M
                    </div>
                    <span className="text-sm text-gray-400">Marsh</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {item === 1 && "2 days ago"}
                    {item === 2 && "1 week ago"}
                    {item === 3 && "2 weeks ago"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
            View All Content
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Blog/Latest Insights Section */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 px-3 py-1.5 text-sm border border-cyan-500/20 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5 mr-1" />
            Latest Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Fresh Insights: From the BudgetByMarsh Blog
          </h2>
          <p className="text-gray-300">
            Dive deeper into financial topics with our latest articles, guides, and expert insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="5 Common Budgeting Mistakes & How to Fix Them"
                width={600}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                Budgeting
              </Badge>
            </div>

            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">May 10, 2023</span>
                <span className="text-gray-600">•</span>
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">8 min read</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                5 Common Budgeting Mistakes & How to Fix Them
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Are you making these critical budgeting errors? Learn how to identify and correct the most common
                mistakes that could be sabotaging your financial goals.
              </p>
              <Button variant="outline" className="w-full border-purple-500 text-white hover:bg-purple-950">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Blog Post 2 */}
          <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Unlocking Savings: A Guide to High-Yield Accounts"
                width={600}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                Savings
              </Badge>
            </div>

            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">May 5, 2023</span>
                <span className="text-gray-600">•</span>
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">6 min read</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Unlocking Savings: A Guide to High-Yield Accounts
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Is your money working hard enough for you? Discover how high-yield savings accounts can significantly
                boost your savings with minimal effort on your part.
              </p>
              <Button variant="outline" className="w-full border-purple-500 text-white hover:bg-purple-950">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Blog Post 3 */}
          <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="The Psychology of Spending: Know Your Triggers"
                width={600}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                Psychology
              </Badge>
            </div>

            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">April 28, 2023</span>
                <span className="text-gray-600">•</span>
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">10 min read</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                The Psychology of Spending: Know Your Triggers
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Understanding the psychological factors behind your spending habits is the first step to gaining
                control. Learn to identify and manage your spending triggers.
              </p>
              <Button variant="outline" className="w-full border-purple-500 text-white hover:bg-purple-950">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
            Explore All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Shop Section */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 px-3 py-1.5 text-sm border border-cyan-500/20 backdrop-blur-sm">
            <ShoppingBag className="h-3.5 w-3.5 mr-1" />
            Shop
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Digital Products & Merchandise
          </h2>
          <p className="text-gray-300">
            Explore our collection of digital products and merchandise designed to help you take control of your
            finances.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-6 md:p-8 overflow-hidden">
          <Tabs defaultValue="digital" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/60 border border-purple-500/20 p-1">
                <TabsTrigger
                  value="digital"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  Digital Products
                </TabsTrigger>
                <TabsTrigger
                  value="merchandise"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  Merchandise
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="digital" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Ultimate Budget Planner",
                    description:
                      "A comprehensive digital planner with automated calculations and customizable categories.",
                    price: 29.99,
                    tag: "Bestseller",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                  {
                    title: "Debt Payoff Calculator",
                    description: "Interactive tool to create and track your debt payoff plan using various strategies.",
                    price: 19.99,
                    tag: "New",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                  {
                    title: "Investment Tracker Pro",
                    description: "Track and analyze your investments with this powerful yet easy-to-use spreadsheet.",
                    price: 39.99,
                    tag: "Popular",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                        {product.tag}
                      </Badge>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {product.title}
                        </h3>
                        <span className="font-bold text-cyan-400">${product.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  View All Digital Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="merchandise" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Budget Queen T-Shirt",
                    description: "Soft, comfortable t-shirt with our signature Budget Queen logo.",
                    price: 24.99,
                    tag: "Bestseller",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                  {
                    title: "Financial Freedom Mug",
                    description: "Start your day with a reminder of your financial goals.",
                    price: 14.99,
                    tag: "New",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                  {
                    title: "Budget Planner Notebook",
                    description: "Premium physical notebook with our proven budget planning system.",
                    price: 29.99,
                    tag: "Limited",
                    image: "/placeholder.svg?height=300&width=600",
                  },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                        {product.tag}
                      </Badge>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {product.title}
                        </h3>
                        <span className="font-bold text-cyan-400">${product.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  View All Merchandise
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-16 border-t border-purple-500/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                BudgetByMarsh
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering you to take control of your financial future through education, tools, and community.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Marsh
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blueprints" className="text-gray-400 hover:text-white transition-colors">
                  Blueprints
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/20">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2023 BudgetByMarsh. All rights reserved.</p>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Made with</span>
            <Heart className="h-4 w-4 text-purple-500" fill="#a855f7" />
            <span className="text-gray-500 text-sm ml-2">by Marsh</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
