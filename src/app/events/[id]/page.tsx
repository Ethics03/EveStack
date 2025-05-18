"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EventDetailHeader } from "@/components/events/event-detail-header"

// Mock event data
const eventData = {
  id: "1",
  collegeId: "stanford",
  collegeName: "Stanford University",
  title: "Annual Tech Symposium",
  date: "2025-06-15",
  time: "10:00 AM",
  location: "Main Auditorium",
  description:
    "Join us for a day of tech talks, workshops, and networking opportunities. The Annual Tech Symposium brings together industry leaders, researchers, and students to explore the latest trends and innovations in technology. This year's theme focuses on artificial intelligence and its applications across various domains.\n\nThe event will feature keynote speeches, panel discussions, interactive workshops, and a networking session. Attendees will have the opportunity to engage with cutting-edge research, learn about emerging technologies, and connect with professionals in the field.\n\nRefreshments will be provided throughout the day, and all participants will receive a certificate of attendance.",
  category: "Technology",
  image: "/placeholder.svg?height=400&width=800",
  organizer: "Computer Science Department",
  contactEmail: "techsymposium@stanford.edu",
  contactPhone: "(650) 123-4567",
  capacity: 200,
  registeredAttendees: 120,
  liked: false,
}

interface Props {
  params: {
    id: string
  }
}

export default function EventDetails({ params }: { params: Props }) {
  const [event, setEvent] = useState(eventData)
  const [liked, setLiked] = useState(event.liked)

  const toggleLike = () => {
    setLiked(!liked)
  }

  const handleRegister = () => {
    // In a real app, this would send a registration request to the server
    alert("Registration successful!")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <School className="h-5 w-5" />
            <span>CampusEvents</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/events" className="font-medium">
              Events
            </Link>
            <Link href="/about" className="text-muted-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/user/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="container">
          <div className="mb-6">
            <Link href="/events" className="flex items-center text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Events
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                />
              </div>

              <EventDetailHeader
                title={event.title}
                collegeName={event.collegeName}
                date={event.date}
                time={event.time}
                location={event.location}
                capacity={event.capacity}
                registeredAttendees={event.registeredAttendees}
                liked={liked}
                onToggleLike={toggleLike}
                onRegister={handleRegister}
              />

              <div>
                <h2 className="text-xl font-semibold mb-4">About this event</h2>
                <div className="prose max-w-none">
                  {event.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Event Details</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                      <p>{event.category}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Organizer</h4>
                      <p>{event.organizer}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Contact</h4>
                      <p>{event.contactEmail}</p>
                      <p>{event.contactPhone}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Venue</h4>
                      <p>{event.location}</p>
                      <p>{event.collegeName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 CampusEvents. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
