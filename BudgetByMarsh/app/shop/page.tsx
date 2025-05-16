"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ChevronDown, Star, Heart, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react"

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "planners", name: "Budget Planners" },
    { id: "courses", name: "Courses" },
    { id: "templates", name: "Templates" },
    { id: "merchandise", name: "Merchandise" },
  ]

  const products = [
    {
      id: 1,
      name: "Ultimate Budget Planner 2023",
      category: "planners",
      price: 29.99,
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=600",
      badge: "Bestseller",
      description: "A comprehensive digital planner with automated calculations and customizable categories.",
    },
    {
      id: 2,
      name: "Debt Payoff Calculator Pro",
      category: "templates",
      price: 19.99,
      rating: 4.7,
      reviews: 86,
      image: "/placeholder.svg?height=300&width=600",
      badge: "New",
      description: "Interactive tool to create and track your debt payoff plan using various strategies.",
    },
    {
      id: 3,
      name: "Investment Tracker Bundle",
      category: "templates",
      price: 39.99,
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=600",
      badge: "Popular",
      description: "Track and analyze your investments with this powerful yet easy-to-use spreadsheet bundle.",
    },
    {
      id: 4,
      name: "Financial Freedom Masterclass",
      category: "courses",
      price: 99.99,
      rating: 4.9,
      reviews: 215,
      image: "/placeholder.svg?height=300&width=600",
      badge: "Featured",
      description: "A comprehensive 8-week course to transform your finances and build lasting wealth.",
    },
    {
      id: 5,
      name: "Budget Queen T-Shirt",
      category: "merchandise",
      price: 24.99,
      rating: 4.6,
      reviews: 38,
      image: "/placeholder.svg?height=300&width=600",
      description: "Soft, comfortable t-shirt with our signature Budget Queen logo.",
    },
    {
      id: 6,
      name: "Financial Freedom Mug",
      category: "merchandise",
      price: 14.99,
      rating: 4.7,
      reviews: 42,
      image: "/placeholder.svg?height=300&width=600",
      description: "Start your day with a reminder of your financial goals.",
    },
    {
      id: 7,
      name: "Savings Challenge Bundle",
      category: "planners",
      price: 17.99,
      rating: 4.8,
      reviews: 73,
      image: "/placeholder.svg?height=300&width=600",
      badge: "Sale",
      description: "12 different savings challenges to boost your savings throughout the year.",
    },
    {
      id: 8,
      name: "Budget Basics Course",
      category: "courses",
      price: 49.99,
      rating: 4.7,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=600",
      description: "Learn the fundamentals of budgeting in this 4-week beginner-friendly course.",
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <FuturisticNavbar />

      <div className="container pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 mb-6"
          >
            Digital Products & Merchandise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-3xl"
          >
            Explore our collection of digital products and merchandise designed to help you take control of your
            finances and achieve your financial goals.
          </motion.p>
        </div>

        {/* Featured Products Carousel */}
        <div className="relative mb-16 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>
          <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 px-3 py-1.5 text-sm border border-purple-500/20 backdrop-blur-sm">
                  Featured Product
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Financial Freedom Masterclass
                </h2>
                <p className="text-gray-300 mb-6">
                  Transform your finances with our comprehensive 8-week course. Learn proven strategies for budgeting,
                  debt elimination, investing, and building lasting wealth.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" fill="#facc15" />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">4.9 (215 reviews)</span>
                  </div>
                  <Badge className="bg-green-900/50 text-green-300 hover:bg-green-900/50 border border-green-500/20">
                    <CheckCircle className="h-3.5 w-3.5 mr-1" />
                    Lifetime Access
                  </Badge>
                </div>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-white">$99.99</span>
                  <span className="text-lg text-gray-400 line-through">$149.99</span>
                  <Badge className="bg-red-900/50 text-red-300 hover:bg-red-900/50 border border-red-500/20">
                    33% Off
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Financial Freedom Masterclass"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs">
                      M
                    </div>
                    <span className="text-white font-medium">Created by Marsh</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-black/60 text-white border-white/20">8 Weeks</Badge>
                    <Badge className="bg-black/60 text-white border-white/20">24 Lessons</Badge>
                    <Badge className="bg-black/60 text-white border-white/20">5 Bonuses</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-white font-bold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    Under $20
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    $20 - $50
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    $50 - $100
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    Over $100
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Ratings</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center">
                    <div className="flex mr-2">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" fill="#facc15" />
                      ))}
                      <Star className="h-4 w-4 text-gray-600" />
                    </div>
                    & Up
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center">
                    <div className="flex mr-2">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" fill="#facc15" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-600" />
                      ))}
                    </div>
                    & Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
                {activeCategory === "all" ? "All Products" : categories.find((c) => c.id === activeCategory)?.name}
                <span className="text-gray-400 text-lg ml-2">({filteredProducts.length})</span>
              </h2>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-black/60 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  Sort
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-black/60 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-purple-900/70 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                        {product.badge}
                      </Badge>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 text-gray-400 hover:text-white transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}`}
                            fill={i < Math.floor(product.rating) ? "#facc15" : "none"}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">({product.reviews})</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-cyan-400">${product.price.toFixed(2)}</span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                Load More Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="container py-16 relative">
        <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl"></div>
          <div className="relative bg-black/95 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Get Exclusive Deals & Updates
                </h3>
                <p className="text-gray-300">
                  Subscribe to our newsletter and receive special offers, early access to new products, and exclusive
                  content.
                </p>
              </div>
              <div className="flex-1 w-full flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-12 w-full rounded-md border border-purple-500/20 bg-black/60 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="h-12 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-16 border-t border-purple-500/20">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
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
