"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Search,
  Menu,
  X,
  Home,
  BarChart3,
  ShoppingBag,
  Users,
  FileCode,
  LogIn,
  User,
  Bell,
  ShoppingCart,
} from "lucide-react"

export function FuturisticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(true) // For demo purposes, set to true

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Blueprints", href: "/blueprints", icon: FileCode },
    { name: "About Marsh", href: "/about", icon: Users },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              BudgetByMarsh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`relative px-3 py-1.5 text-sm transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>

            {isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hidden md:flex"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hidden md:flex"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Button>

                <Link href="/profile" className="hidden md:block">
                  <Button
                    variant="ghost"
                    className={`relative px-3 py-1.5 text-sm transition-all duration-300 ${
                      pathname === "/profile" ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                    {pathname === "/profile" && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                </Link>
              </>
            ) : (
              <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg md:hidden"
          >
            <div className="container h-full flex flex-col">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                  <div className="relative w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg overflow-hidden flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                    BudgetByMarsh
                  </span>
                </Link>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-purple-900/50 to-cyan-900/50 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <link.icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  )
                })}

                {isLoggedIn && (
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                      pathname === "/profile"
                        ? "bg-gradient-to-r from-purple-900/50 to-cyan-900/50 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <User className="w-5 h-5 mr-3" />
                    <span className="font-medium">Profile</span>
                  </Link>
                )}
              </nav>

              <div className="mt-auto mb-8">
                {isLoggedIn ? (
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                    </Button>
                    <Button variant="outline" className="flex-1 border-purple-500 text-white hover:bg-purple-950">
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
