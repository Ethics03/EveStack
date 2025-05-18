"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUp() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("user")

  const handleUserSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/user/dashboard")
  }

  const handleCollegeSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/college/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="flex items-center gap-2 font-bold mb-8">
        <School className="h-6 w-6" />
        <span className="text-2xl">CampusEvents</span>
      </div>

      <Tabs defaultValue="user" className="w-full max-w-md" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">Student</TabsTrigger>
          <TabsTrigger value="college">College</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>Create Student Account</CardTitle>
              <CardDescription>Sign up to discover and participate in college events.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleUserSignUp} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input id="user-email" type="email" placeholder="student@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <Input id="user-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-primary underline-offset-4 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="college">
          <Card>
            <CardHeader>
              <CardTitle>Register Your College</CardTitle>
              <CardDescription>Create an account to promote and manage your college events.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleCollegeSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="college-name">College Name</Label>
                  <Input id="college-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college-email">Official Email</Label>
                  <Input id="college-email" type="email" placeholder="admin@college.edu" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college-website">Website</Label>
                  <Input id="college-website" type="url" placeholder="https://www.college.edu" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college-password">Password</Label>
                  <Input id="college-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college-confirm-password">Confirm Password</Label>
                  <Input id="college-confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Register College
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Already registered?{" "}
                <Link href="/sign-in?tab=college" className="text-primary underline-offset-4 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
