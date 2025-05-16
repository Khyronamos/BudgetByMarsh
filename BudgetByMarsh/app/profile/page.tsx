"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FuturisticNavbar } from "@/components/futuristic-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Link2,
  Upload,
  Edit,
  Lock,
  CheckCircle,
  AlertCircle,
  Heart,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <FuturisticNavbar />

      <div className="container pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 mb-6"
          >
            My Profile & Settings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-3xl"
          >
            Manage your account details, security settings, and preferences
          </motion.p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-6 md:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/60 border border-purple-500/20 p-1">
                <TabsTrigger
                  value="personal"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Personal Details
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="subscription"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Subscription
                </TabsTrigger>
                <TabsTrigger
                  value="linked"
                  className="text-sm data-[state=active]:bg-gradient-to-r from-purple-500/20 to-cyan-500/20 data-[state=active]:text-white"
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  Linked Accounts
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Personal Details Tab */}
            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Profile Picture"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center border-2 border-black">
                      <Upload className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">User 1</h3>
                  <p className="text-gray-400 text-sm mb-4">Premium Member</p>
                  <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-none">
                    Verified Account
                  </Badge>
                </div>

                <div className="md:col-span-2">
                  <Card className="bg-black/60 border-purple-500/20">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-white">Personal Information</CardTitle>
                        <CardDescription className="text-gray-400">
                          Update your personal details and profile information
                        </CardDescription>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Details
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-gray-300">
                            Full Name
                          </Label>
                          <Input
                            id="fullName"
                            value="User 1"
                            disabled
                            className="bg-black/60 border-purple-500/30 text-white mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="username" className="text-gray-300">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="user1"
                            disabled
                            className="bg-black/60 border-purple-500/30 text-white mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value="user1@example.com"
                          disabled
                          className="bg-black/60 border-purple-500/30 text-white mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio" className="text-gray-300">
                          Bio
                        </Label>
                        <textarea
                          id="bio"
                          rows={3}
                          disabled
                          className="w-full bg-black/60 border border-purple-500/30 rounded-md px-3 py-2 text-white mt-1 resize-none"
                          defaultValue="I'm passionate about financial freedom and building wealth through smart budgeting and investing."
                        ></textarea>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="bg-black/60 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Password & Authentication</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your password and security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Password</h3>
                        <p className="text-gray-400 text-sm">Last changed 3 months ago</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                      Change Password
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                        <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="2fa" />
                      <Label htmlFor="2fa" className="text-gray-300">
                        Disabled
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Login History</h3>
                        <p className="text-gray-400 text-sm">View your recent login activity</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                      View History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-black/60 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-weekly" />
                        <Label htmlFor="email-weekly" className="text-gray-300">
                          Weekly Summary
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-features" defaultChecked />
                        <Label htmlFor="email-features" className="text-gray-300">
                          New Features
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-offers" defaultChecked />
                        <Label htmlFor="email-offers" className="text-gray-300">
                          Special Offers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-tips" />
                        <Label htmlFor="email-tips" className="text-gray-300">
                          Financial Tips & Advice
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-purple-500/20 pt-6">
                    <h3 className="text-white font-medium mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="push-goals" defaultChecked />
                        <Label htmlFor="push-goals" className="text-gray-300">
                          Goal Milestones
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="push-ai" defaultChecked />
                        <Label htmlFor="push-ai" className="text-gray-300">
                          AI Insights
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="push-budget" />
                        <Label htmlFor="push-budget" className="text-gray-300">
                          Budget Alerts
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="push-product" />
                        <Label htmlFor="push-product" className="text-gray-300">
                          Product Updates
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscription Tab */}
            <TabsContent value="subscription" className="space-y-6">
              <Card className="bg-black/60 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Subscription Status</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your subscription and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-none mb-2">
                          Current Plan
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-1">BudgetByMarsh Premium</h3>
                        <p className="text-gray-300">Billed annually • Renews on October 15, 2023</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                        Manage Subscription
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Premium Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Advanced Budget Analytics</h4>
                          <p className="text-gray-400 text-sm">
                            Detailed insights and projections for your financial future
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Unlimited Goal Tracking</h4>
                          <p className="text-gray-400 text-sm">
                            Create and monitor as many financial goals as you need
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Priority AI Advisor</h4>
                          <p className="text-gray-400 text-sm">
                            Get faster and more personalized AI-powered financial advice
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Exclusive Content</h4>
                          <p className="text-gray-400 text-sm">
                            Access premium articles, videos, and financial resources
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-purple-500/20 mt-6 pt-6">
                    <h3 className="text-white font-medium mb-4">Payment Method</h3>
                    <div className="flex items-center gap-3 p-3 border border-purple-500/20 rounded-lg bg-black/40 max-w-md">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                        V
                      </div>
                      <div className="flex-1">
                        <p className="text-white">•••• •••• •••• 4242</p>
                        <p className="text-gray-400 text-sm">Expires 12/25</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Linked Accounts Tab */}
            <TabsContent value="linked" className="space-y-6">
              <Card className="bg-black/60 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Linked Financial Accounts</CardTitle>
                  <CardDescription className="text-gray-400">
                    Connect your bank accounts, credit cards, and investment accounts for a complete financial picture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mb-4">
                      <Link2 className="h-8 w-8 text-purple-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No Accounts Linked Yet</h3>
                    <p className="text-gray-400 max-w-md mb-6">
                      Connect your financial accounts to get a complete view of your finances and unlock powerful
                      budgeting features.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                      Connect Accounts
                    </Button>
                  </div>

                  <div className="border-t border-purple-500/20 mt-6 pt-6">
                    <h3 className="text-white font-medium mb-4">Benefits of Connecting Accounts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Automatic Transaction Import</h4>
                          <p className="text-gray-400 text-sm">
                            No more manual entry - your transactions are automatically categorized
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Real-time Balance Updates</h4>
                          <p className="text-gray-400 text-sm">
                            See your current balances across all your accounts in one place
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Smarter AI Insights</h4>
                          <p className="text-gray-400 text-sm">
                            Get more personalized recommendations based on your actual spending
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Enhanced Security</h4>
                          <p className="text-gray-400 text-sm">
                            Bank-level encryption keeps your financial data safe and secure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

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
