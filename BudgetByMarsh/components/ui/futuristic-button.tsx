"use client"

import type React from "react"

import { type ReactNode, type ButtonHTMLAttributes, forwardRef, useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FuturisticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "glow"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  children: ReactNode
  glowColor?: string
  href?: string
}

export const FuturisticButton = forwardRef<HTMLButtonElement, FuturisticButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      children,
      className,
      glowColor = "rgba(168, 85, 247, 0.5)",
      href,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Handle mouse position for hover effect
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    // Animate button on mount
    useEffect(() => {
      if (!buttonRef.current) return

      // Add subtle pulse animation to glow variant
      if (variant === "glow") {
        const interval = setInterval(() => {
          const glow = buttonRef.current?.querySelector(".button-glow") as HTMLElement
          if (glow) {
            glow.style.opacity = "0.7"
            setTimeout(() => {
              if (glow) glow.style.opacity = "0.3"
            }, 1000)
          }
        }, 2000)

        return () => clearInterval(interval)
      }
    }, [variant])

    // Base styles for all buttons
    const baseStyles =
      "relative font-medium transition-all duration-300 flex items-center justify-center overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-md",
      md: "text-sm px-4 py-2 rounded-md",
      lg: "text-base px-6 py-3 rounded-md",
    }

    // Variant styles
    const variantStyles = {
      primary:
        "relative bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white shadow-lg shadow-purple-500/20",
      secondary: "relative bg-transparent border border-purple-500/50 text-white hover:bg-purple-500/10",
      text: "bg-transparent text-purple-400 hover:text-white p-0",
      glow: "relative bg-black/40 backdrop-blur-sm border border-purple-500/30 text-white shadow-lg",
    }

    // Handle keyboard interaction
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        setIsPressed(true)
      }
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        setIsPressed(false)
      }
    }

    const buttonContent = (
      <>
        {/* Geometric accents for primary variant */}
        {variant === "primary" && (
          <>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
          </>
        )}

        {/* Glow effect for glow variant */}
        {variant === "glow" && (
          <div
            className="button-glow absolute inset-0 rounded-md opacity-30 transition-opacity duration-1000 ease-in-out"
            style={{
              boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor}`,
              background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
            }}
            aria-hidden="true"
          ></div>
        )}

        {/* Hover effect */}
        {variant !== "text" && isHovered && (
          <span
            className="absolute bg-white/20 rounded-full pointer-events-none transition-transform duration-500 ease-out"
            style={{
              top: mousePosition.y,
              left: mousePosition.x,
              width: isPressed ? "300%" : "150%",
              height: isPressed ? "300%" : "150%",
              transform: "translate(-50%, -50%) scale(0)",
              opacity: isPressed ? 0.15 : 0.1,
              animation: isPressed ? "pulse 0.6s ease-out" : isHovered ? "scale-in 0.6s ease-out forwards" : "",
            }}
            aria-hidden="true"
          />
        )}

        {/* Border glow effect for primary */}
        {variant === "primary" && (
          <span
            className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400 to-white/70 opacity-30 blur-sm -z-10"
            aria-hidden="true"
          ></span>
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {icon && (
            <span className="inline-flex" aria-hidden="true">
              {icon}
            </span>
          )}
        </span>

        {/* Bottom border for text variant */}
        {variant === "text" && (
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-white/70 group-hover:w-full transition-all duration-300"
            aria-hidden="true"
          ></span>
        )}

        <style jsx>{`
          @keyframes scale-in {
            0% {
              transform: translate(-50%, -50%) scale(0);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(0);
            }
            50% {
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </>
    )

    // If href is provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            baseStyles,
            sizeStyles[size],
            variant !== "text" && sizeStyles[size],
            variantStyles[variant],
            className,
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsPressed(false)
          }}
          onMouseMove={(e) => handleMouseMove(e as any)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
        >
          {buttonContent}
        </Link>
      )
    }

    // Otherwise render as button
    return (
      <button
        ref={(el) => {
          // Handle both refs
          if (typeof ref === "function") {
            ref(el)
          } else if (ref) {
            ref.current = el
          }
          buttonRef.current = el
        }}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variant !== "text" && sizeStyles[size],
          variantStyles[variant],
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsPressed(false)
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...props}
      >
        {buttonContent}
      </button>
    )
  },
)

FuturisticButton.displayName = "FuturisticButton"
