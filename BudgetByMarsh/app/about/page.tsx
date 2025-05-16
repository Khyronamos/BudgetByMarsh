"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Star, TrendingUp, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="container pt-32 pb-16 relative">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-r from-purple-900/20 to-cyan-900/20 blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
              <Heart className="h-3.5 w-3.5 mr-1" />
              Meet The Founder
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 mb-6">
              Marsh's Financial Journey
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              From financial struggles to empowering others, discover how Marsh transformed her relationship with money
              and created BudgetByMarsh to help others achieve financial freedom.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/20">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">10+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/20">
                <Users className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-gray-300">50,000+ Helped</span>
              </div>

              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/20">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">$10M+ Saved</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none"
            >
              Book a Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-4 overflow-hidden">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Marsh - Founder of BudgetByMarsh"
                  width={480}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Marsh</h3>
                  <p className="text-cyan-300 mb-3">Founder & Financial Coach</p>
                  <p className="text-sm text-gray-300">
                    "My mission is to empower everyone to take control of their financial future through education,
                    tools, and community."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 mr-1" />
            The Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            From Struggle to Success
          </h2>
          <p className="text-gray-300">
            Follow Marsh's transformative journey from financial challenges to becoming a respected financial educator
            and coach.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          {/* Timeline events */}
          <div className="space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                position={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Family & Values */}
      <section className="container py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>

        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 px-3 py-1.5 text-sm border border-cyan-500/20 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 mr-1" />
              Family & Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              The Heart Behind BudgetByMarsh
            </h2>
            <p className="text-gray-300">
              Family is at the core of everything we do. Meet the people who inspire Marsh and learn about the values
              that drive our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Family Photo"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Family First</h3>
                <p className="text-gray-400">
                  "My family is my foundation and inspiration. They remind me daily why financial education matters -
                  it's about creating security and opportunities for those we love."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community Workshop"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Community Impact</h3>
                <p className="text-gray-400">
                  "We believe in giving back. Through free workshops, scholarships, and mentorship programs, we're
                  committed to making financial education accessible to everyone."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Core Values"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Core Values</h3>
                <p className="text-gray-400">
                  "Transparency, empathy, and empowerment guide everything we do. We believe everyone deserves the
                  knowledge and tools to build a secure financial future."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 mr-1" />
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Lives Transformed
          </h2>
          <p className="text-gray-300">
            Hear from people whose financial lives have been transformed through Marsh's guidance and the BudgetByMarsh
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/60 border-purple-500/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="#facc15" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

// Timeline Event Component
function TimelineEvent({ event, position, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`flex items-center ${position === "left" ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={`w-1/2 ${position === "left" ? "pr-12 text-right" : "pl-12"}`}>
        <div
          className={`inline-block mb-2 px-3 py-1 rounded-full bg-gradient-to-r ${position === "left" ? "from-purple-600 to-purple-500" : "from-cyan-500 to-cyan-600"} text-white text-sm`}
        >
          {event.year}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-400">{event.description}</p>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10"></div>
      </div>

      <div className="w-1/2"></div>
    </motion.div>
  )
}

// Sample timeline data
const timelineEvents = [
  {
    year: "2010",
    title: "Financial Awakening",
    description:
      "After struggling with debt and financial anxiety, Marsh discovered the power of budgeting and financial planning, transforming her relationship with money.",
  },
  {
    year: "2013",
    title: "First Workshop",
    description:
      "Inspired to help others, Marsh hosted her first financial literacy workshop for friends and family, sharing the strategies that helped her overcome debt.",
  },
  {
    year: "2015",
    title: "Financial Certification",
    description:
      "Obtained professional certification in financial coaching to better serve her growing community of budget-conscious individuals.",
  },
  {
    year: "2018",
    title: "Community Growth",
    description:
      "What started as small workshops grew into a thriving community of 10,000+ individuals committed to financial empowerment.",
  },
  {
    year: "2021",
    title: "BudgetByMarsh Launch",
    description:
      "Launched the BudgetByMarsh platform to scale her impact and provide accessible financial tools and education to everyone.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Expanded BudgetByMarsh to serve international users, with customized tools for different financial systems and currencies.",
  },
]

// Sample testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "Marsh's guidance helped me not only manage my personal finances but also build a solid financial foundation for my business. I've doubled my savings and reduced stress.",
  },
  {
    name: "Michael Chen",
    title: "Recent Graduate",
    quote:
      "As a recent graduate with student loans, I was overwhelmed. BudgetByMarsh gave me the tools to create a realistic repayment plan while still enjoying life.",
  },
  {
    name: "Aisha Williams",
    title: "Single Parent",
    quote:
      "The family budgeting tools changed everything for me. I'm now saving for my children's education while building emergency savings - something I never thought possible.",
  },
  {
    name: "Robert Garcia",
    title: "Approaching Retirement",
    quote:
      "I wish I'd found Marsh's approach decades ago. Even starting later in life, I've optimized my retirement strategy and feel confident about the future.",
  },
  {
    name: "Emma Thompson",
    title: "Debt-Free Journey",
    quote:
      "I paid off $45,000 in debt using Marsh's strategies. The visual tools and supportive community kept me motivated through the entire journey.",
  },
  {
    name: "David Wilson",
    title: "Financial Newbie",
    quote:
      "I knew nothing about managing money before BudgetByMarsh. The step-by-step approach and jargon-free education made it easy to build healthy financial habits.",
  },
]
