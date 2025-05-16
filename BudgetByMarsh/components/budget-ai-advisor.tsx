"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { gsap } from "gsap"
import { DollarSign, ArrowRight, Send, User, Bot, Brain } from "lucide-react"
import { FuturisticButton } from "@/components/ui/futuristic-button"

type Message = {
  id: string
  sender: "user" | "ai"
  text: string
  timestamp: Date
}

export function BudgetAiAdvisor() {
  const [income, setIncome] = useState(5000)
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! I'm your AI Budget Advisor. I can help you optimize your finances and reach your goals faster. What would you like to know about your finances today?",
      timestamp: new Date(),
    },
  ])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const explanationRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Animate chat container on mount
  useEffect(() => {
    if (chatContainerRef.current && step === 2) {
      gsap.fromTo(
        chatContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      )
    }

    if (explanationRef.current && step === 2) {
      gsap.fromTo(
        explanationRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", delay: 0.2 },
      )
    }
  }, [step])

  // Handle sending a message
  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simulate AI thinking
    setIsAnalyzing(true)

    // Generate AI response based on user message
    setTimeout(() => {
      let response = ""

      // Simple keyword-based responses
      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("save") || lowerCaseMessage.includes("saving")) {
        response =
          "Based on your income of $" +
          income.toLocaleString() +
          ", I recommend saving at least 20% or $" +
          (income * 0.2).toLocaleString() +
          " per month. This will help you build an emergency fund and work toward your long-term goals."
      } else if (lowerCaseMessage.includes("invest") || lowerCaseMessage.includes("investment")) {
        response =
          "For investing, I recommend first maxing out any employer 401(k) match, then contributing to a Roth IRA. With your income level, you could potentially invest $" +
          (income * 0.15).toLocaleString() +
          " monthly while maintaining a healthy budget."
      } else if (lowerCaseMessage.includes("debt") || lowerCaseMessage.includes("loan")) {
        response =
          "To tackle debt efficiently, use either the avalanche method (highest interest first) or the snowball method (smallest balance first). Based on your income, you could allocate up to $" +
          (income * 0.25).toLocaleString() +
          " toward debt repayment monthly."
      } else if (lowerCaseMessage.includes("budget") || lowerCaseMessage.includes("spending")) {
        response =
          "A balanced budget for your income of $" +
          income.toLocaleString() +
          " might look like: 30% for housing, 15% for food, 10% for transportation, 10% for utilities, 15% for debt repayment, 20% for savings, and 10% for discretionary spending."
      } else {
        response =
          "Based on your income of $" +
          income.toLocaleString() +
          ", I can help you create a personalized financial plan. Would you like me to analyze your spending habits, help with budgeting, or provide investment advice?"
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsAnalyzing(false)
    }, 1500)
  }

  // Handle pressing Enter to send message
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Handle quick suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <div className="ai-advisor-element bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 md:p-8">
      {step === 1 && (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Step 1: Tell us about your finances</h3>
            <p className="text-gray-300">Let's start with your monthly income</p>
          </div>

          <Card className="bg-black/60 border border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <DollarSign className="h-5 w-5 mr-2 text-purple-400" />
                Monthly Income
              </CardTitle>
              <CardDescription>How much do you earn each month after taxes?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Monthly Income</span>
                  <span className="text-lg font-bold text-white">${income.toLocaleString()}</span>
                </div>
                <Slider
                  value={[income]}
                  min={1000}
                  max={20000}
                  step={100}
                  onValueChange={(value) => setIncome(value[0])}
                  className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-500 [&_[role=slider]]:to-white/70"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <FuturisticButton
              variant="glow"
              size="lg"
              icon={<ArrowRight className="ml-2 h-4 w-4" />}
              onClick={() => setStep(2)}
            >
              Continue to AI Advisor
            </FuturisticButton>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Explanation */}
          <div ref={explanationRef} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">AI Budget Advisor</h3>
              <p className="text-gray-300">
                Get personalized financial recommendations powered by advanced AI. Optimize your budget and reach your
                savings goals faster.
              </p>
            </div>

            <div className="bg-black/60 border border-purple-500/20 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 mr-2 text-purple-400" />
                <h4 className="text-md font-medium text-white">How it works</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Ask questions about budgeting, saving, investing, or debt management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Get personalized advice based on your income of ${income.toLocaleString()}/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Receive actionable recommendations to improve your financial health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Create a customized budget plan tailored to your goals</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 border border-purple-500/20 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 mr-2 text-purple-400" />
                <h4 className="text-md font-medium text-white">Your Financial Profile</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Monthly Income:</span>
                  <span className="text-sm font-medium text-white">${income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Recommended Savings:</span>
                  <span className="text-sm font-medium text-green-400">
                    ${Math.round(income * 0.2).toLocaleString()}/month
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Recommended Housing Budget:</span>
                  <span className="text-sm font-medium text-white">
                    ${Math.round(income * 0.3).toLocaleString()}/month
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <FuturisticButton variant="secondary" size="sm" onClick={() => setStep(1)}>
                Update Income
              </FuturisticButton>
            </div>
          </div>

          {/* Chat interface */}
          <div
            ref={chatContainerRef}
            className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden"
          >
            {/* Chat messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      msg.sender === "user"
                        ? "bg-purple-600/30 border border-purple-500/30 text-white"
                        : "bg-black/60 border border-purple-500/20 text-white"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          msg.sender === "user" ? "bg-purple-500/20 text-white" : "bg-purple-900/50 text-purple-300"
                        }`}
                      >
                        {msg.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      </div>
                      <span className="text-xs ml-2 text-gray-400">{msg.sender === "user" ? "You" : "AI Advisor"}</span>
                      <span className="text-xs ml-auto text-gray-500">
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isAnalyzing && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl p-4 bg-black/60 border border-purple-500/20 text-white">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300">
                        <Bot className="h-3 w-3" />
                      </div>
                      <span className="text-xs ml-2 text-gray-400">AI Advisor</span>
                    </div>
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about budgeting, saving, investing..."
                    className="w-full bg-black/40 border border-purple-500/30 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 pr-12"
                    disabled={isAnalyzing}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isAnalyzing}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.trim() && !isAnalyzing
                          ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick suggestions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {["How much should I save?", "Help with debt", "Investment advice", "Create a budget"].map(
                  (suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
