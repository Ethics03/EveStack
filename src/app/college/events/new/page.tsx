"use client"

import { useRouter } from "next/navigation"
import { School } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EventForm } from "@/components/events/event-form"

export default function NewEvent() {
  const router = useRouter()

  const handleSubmit = (formData: FormData) => {
    // In a real app, we would submit the form data to an API
    // For now, we'll just redirect back to the dashboard
    router.push("/college/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <School className="h-5 w-5" />
            <span>CampusEvents</span>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="container max-w-2xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Create New Event</h1>
            <p className="text-muted-foreground">Fill in the details to create a new event for your college.</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Provide information about your event to attract attendees.</CardDescription>
            </CardHeader>
            <CardContent>
              <EventForm onSubmit={handleSubmit} onCancel={() => router.push("/college/dashboard")} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
