"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Plus, Edit2, Trash2, Check, Calendar, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FuturisticButton } from "@/components/ui/futuristic-button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Goal icons
const goalIcons = [
  { id: "piggy", name: "Savings", icon: "💰" },
  { id: "home", name: "Home", icon: "🏠" },
  { id: "car", name: "Car", icon: "🚗" },
  { id: "vacation", name: "Vacation", icon: "✈️" },
  { id: "education", name: "Education", icon: "🎓" },
  { id: "gift", name: "Gift", icon: "🎁" },
  { id: "health", name: "Health", icon: "⚕️" },
  { id: "retirement", name: "Retirement", icon: "🌴" },
]

// Goal type definition
type Goal = {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  targetDate?: Date
  iconId?: string
  createdAt: Date
}

export function FinancialGoals() {
  // State for goals
  const [goals, setGoals] = useState<Goal[]>([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentGoal, setCurrentGoal] = useState<Goal | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "0",
    targetDate: "",
    iconId: "",
  })

  // Load goals from localStorage on component mount
  useEffect(() => {
    const savedGoals = localStorage.getItem("budgetQueen_goals")
    if (savedGoals) {
      try {
        const parsedGoals = JSON.parse(savedGoals)
        // Convert string dates back to Date objects
        const goalsWithDates = parsedGoals.map((goal: any) => ({
          ...goal,
          targetDate: goal.targetDate ? new Date(goal.targetDate) : undefined,
          createdAt: new Date(goal.createdAt),
        }))
        setGoals(goalsWithDates)
      } catch (error) {
        console.error("Error parsing saved goals:", error)
      }
    }
  }, [])

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("budgetQueen_goals", JSON.stringify(goals))
  }, [goals])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Open add goal modal
  const handleAddGoal = () => {
    setFormData({
      name: "",
      targetAmount: "",
      currentAmount: "0",
      targetDate: "",
      iconId: "",
    })
    setIsAddModalOpen(true)
  }

  // Open edit goal modal
  const handleEditGoal = (goal: Goal) => {
    setCurrentGoal(goal)
    setFormData({
      name: goal.name,
      targetAmount: goal.targetAmount.toString(),
      currentAmount: goal.currentAmount.toString(),
      targetDate: goal.targetDate ? goal.targetDate.toISOString().split("T")[0] : "",
      iconId: goal.iconId || "",
    })
    setIsEditModalOpen(true)
  }

  // Save new goal
  const handleSaveGoal = () => {
    if (!formData.name || !formData.targetAmount) return

    const newGoal: Goal = {
      id: Date.now().toString(),
      name: formData.name,
      targetAmount: Number.parseFloat(formData.targetAmount),
      currentAmount: Number.parseFloat(formData.currentAmount) || 0,
      targetDate: formData.targetDate ? new Date(formData.targetDate) : undefined,
      iconId: formData.iconId || undefined,
      createdAt: new Date(),
    }

    setGoals([...goals, newGoal])
    setIsAddModalOpen(false)

    // Animate the new goal card
    setTimeout(() => {
      const newCard = document.getElementById(`goal-${newGoal.id}`)
      if (newCard) {
        gsap.fromTo(
          newCard,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" },
        )
      }
    }, 100)
  }

  // Update existing goal
  const handleUpdateGoal = () => {
    if (!currentGoal || !formData.name || !formData.targetAmount) return

    const updatedGoals = goals.map((goal) =>
      goal.id === currentGoal.id
        ? {
            ...goal,
            name: formData.name,
            targetAmount: Number.parseFloat(formData.targetAmount),
            currentAmount: Number.parseFloat(formData.currentAmount) || 0,
            targetDate: formData.targetDate ? new Date(formData.targetDate) : undefined,
            iconId: formData.iconId || undefined,
          }
        : goal,
    )

    setGoals(updatedGoals)
    setIsEditModalOpen(false)
    setCurrentGoal(null)

    // Animate the updated goal card
    setTimeout(() => {
      const updatedCard = document.getElementById(`goal-${currentGoal.id}`)
      if (updatedCard) {
        gsap.fromTo(updatedCard, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "power3.out" })
      }
    }, 100)
  }

  // Delete goal
  const handleDeleteGoal = (goalId: string) => {
    // Animate the goal card before removing it
    const cardToDelete = document.getElementById(`goal-${goalId}`)
    if (cardToDelete) {
      gsap.to(cardToDelete, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          setGoals(goals.filter((goal) => goal.id !== goalId))
        },
      })
    } else {
      setGoals(goals.filter((goal) => goal.id !== goalId))
    }
  }

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value)
  }

  // Calculate days left until target date
  const getDaysLeft = (targetDate: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const diffTime = targetDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Calculate progress percentage
  const calculateProgress = (current: number, target: number) => {
    const progress = (current / target) * 100
    return Math.min(progress, 100) // Cap at 100%
  }

  // Get progress color based on percentage
  const getProgressColor = (progress: number) => {
    if (progress >= 100) return "bg-gradient-to-r from-green-500 to-green-400"
    if (progress >= 75) return "bg-gradient-to-r from-green-500 to-teal-400"
    if (progress >= 50) return "bg-gradient-to-r from-teal-500 to-blue-400"
    if (progress >= 25) return "bg-gradient-to-r from-blue-500 to-purple-400"
    return "bg-gradient-to-r from-purple-500 to-white/80"
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Financial Goals</h2>
          <p className="text-gray-400">Track and achieve your money milestones</p>
        </div>
        <FuturisticButton variant="glow" onClick={handleAddGoal} icon={<Plus className="h-4 w-4" />}>
          Add New Goal
        </FuturisticButton>
      </div>

      {goals.length === 0 ? (
        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-10 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/50 flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Ready to crush your financial goals?</h3>
          <p className="text-gray-400 mb-6">Click 'Add New Goal' to get started on your financial journey!</p>
          <FuturisticButton variant="glow" onClick={handleAddGoal} icon={<Plus className="h-4 w-4" />}>
            Add New Goal
          </FuturisticButton>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => {
            const progress = calculateProgress(goal.currentAmount, goal.targetAmount)
            const isComplete = progress >= 100
            const progressColor = getProgressColor(progress)

            return (
              <Card
                key={goal.id}
                id={`goal-${goal.id}`}
                className={`bg-black/40 backdrop-blur-sm border ${
                  isComplete ? "border-green-500/30" : "border-purple-500/20"
                } overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group`}
              >
                <CardContent className="p-6">
                  {/* Goal header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      {goal.iconId && (
                        <div
                          className={`w-10 h-10 rounded-full ${
                            isComplete ? "bg-green-900/30" : "bg-purple-900/30"
                          } flex items-center justify-center mr-3 text-xl`}
                        >
                          {goalIcons.find((icon) => icon.id === goal.iconId)?.icon || "💰"}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-white">{goal.name}</h3>
                        {isComplete && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">
                            <Check className="h-3 w-3 mr-1" /> Goal Achieved!
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditGoal(goal)}
                        className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-colors"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="p-1.5 rounded-full bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${progressColor} transition-all duration-500 ease-out`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Goal details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Progress</span>
                      <span className="text-white font-medium">{Math.round(progress)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Saved</span>
                      <span className="text-white font-medium">
                        {formatCurrency(goal.currentAmount)} of {formatCurrency(goal.targetAmount)}
                      </span>
                    </div>
                    {goal.targetDate && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          Target Date
                        </span>
                        <span className="text-white font-medium">
                          {goal.targetDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                    {goal.targetDate && new Date() < goal.targetDate && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Days Left</span>
                        <Badge
                          className={`${
                            getDaysLeft(goal.targetDate) < 30
                              ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {getDaysLeft(goal.targetDate)} days
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Quick update button */}
                  {!isComplete && (
                    <div className="mt-4">
                      <FuturisticButton
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => handleEditGoal(goal)}
                      >
                        Update Progress
                      </FuturisticButton>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Add Goal Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="bg-black/90 border border-purple-500/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Add New Financial Goal</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Goal Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Emergency Fund"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAmount">Target Amount</Label>
              <Input
                id="targetAmount"
                name="targetAmount"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g., 10000"
                value={formData.targetAmount}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentAmount">Current Amount Saved</Label>
              <Input
                id="currentAmount"
                name="currentAmount"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g., 0"
                value={formData.currentAmount}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetDate">Target Date (Optional)</Label>
              <Input
                id="targetDate"
                name="targetDate"
                type="date"
                value={formData.targetDate}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label>Goal Icon (Optional)</Label>
              <RadioGroup
                value={formData.iconId}
                onValueChange={(value) => setFormData({ ...formData, iconId: value })}
                className="grid grid-cols-4 gap-2"
              >
                {goalIcons.map((icon) => (
                  <div key={icon.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={icon.id} id={`icon-${icon.id}`} className="peer sr-only" />
                    <Label
                      htmlFor={`icon-${icon.id}`}
                      className="flex flex-col items-center justify-center w-full p-2 bg-black/40 border border-purple-500/20 rounded-md cursor-pointer hover:bg-purple-900/20 peer-data-[state=checked]:bg-purple-900/40 peer-data-[state=checked]:border-purple-500/50"
                    >
                      <span className="text-2xl">{icon.icon}</span>
                      <span className="text-xs mt-1">{icon.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <FuturisticButton variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </FuturisticButton>
            <FuturisticButton variant="glow" onClick={handleSaveGoal}>
              Save Goal
            </FuturisticButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Goal Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="bg-black/90 border border-purple-500/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Edit Financial Goal</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Goal Name</Label>
              <Input
                id="edit-name"
                name="name"
                placeholder="e.g., Emergency Fund"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-targetAmount">Target Amount</Label>
              <Input
                id="edit-targetAmount"
                name="targetAmount"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g., 10000"
                value={formData.targetAmount}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-currentAmount">Current Amount Saved</Label>
              <Input
                id="edit-currentAmount"
                name="currentAmount"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g., 0"
                value={formData.currentAmount}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-targetDate">Target Date (Optional)</Label>
              <Input
                id="edit-targetDate"
                name="targetDate"
                type="date"
                value={formData.targetDate}
                onChange={handleInputChange}
                className="bg-black/60 border-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label>Goal Icon (Optional)</Label>
              <RadioGroup
                value={formData.iconId}
                onValueChange={(value) => setFormData({ ...formData, iconId: value })}
                className="grid grid-cols-4 gap-2"
              >
                {goalIcons.map((icon) => (
                  <div key={icon.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={icon.id} id={`edit-icon-${icon.id}`} className="peer sr-only" />
                    <Label
                      htmlFor={`edit-icon-${icon.id}`}
                      className="flex flex-col items-center justify-center w-full p-2 bg-black/40 border border-purple-500/20 rounded-md cursor-pointer hover:bg-purple-900/20 peer-data-[state=checked]:bg-purple-900/40 peer-data-[state=checked]:border-purple-500/50"
                    >
                      <span className="text-2xl">{icon.icon}</span>
                      <span className="text-xs mt-1">{icon.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <FuturisticButton variant="secondary" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </FuturisticButton>
            <FuturisticButton variant="glow" onClick={handleUpdateGoal}>
              Update Goal
            </FuturisticButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
