"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { LogIn } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignUpPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (status === "loading") return
    if (session) {
      router.push("/dashboard")
    }
  }, [session, status, router])

  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/dashboard" })
  }
  
  if (session) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join EveStack to discover and star events from colleges around you
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" onClick={() => signIn('google')} className="w-full h-12 text-base font-medium">
              <LogIn className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-600">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="font-medium text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}