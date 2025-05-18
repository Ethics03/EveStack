"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, ChevronDown, Edit, Heart, MoreHorizontal, Plus, School, Trash2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for college events
const mockEvents = [
  {
    id: "1",
    title: "Annual Tech Symposium",
    date: "2025-06-15",
    time: "10:00 AM",
    location: "Main Auditorium",
    description: "Join us for a day of tech talks, workshops, and networking opportunities.",
    attendees: 120,
    likes: 45,
    status: "upcoming",
  },
  {
    id: "2",
    title: "Cultural Festival",
    date: "2025-07-10",
    time: "5:00 PM",
    location: "College Grounds",
    description: "Celebrate diversity with performances, food stalls, and cultural exhibitions.",
    attendees: 350,
    likes: 89,
    status: "upcoming",
  },
  {
    id: "3",
    title: "Career Fair 2025",
    date: "2025-05-20",
    time: "9:00 AM",
    location: "Business School",
    description: "Meet recruiters from top companies and explore career opportunities.",
    attendees: 200,
    likes: 67,
    status: "upcoming",
  },
  {
    id: "4",
    title: "Alumni Meetup",
    date: "2025-04-05",
    time: "6:00 PM",
    location: "College Cafeteria",
    description: "Network with alumni and learn from their experiences.",
    attendees: 85,
    likes: 32,
    status: "past",
  },
]

export default function CollegeDashboard() {
  const [events, setEvents] = useState(mockEvents)

  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

  const deleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <School className="h-5 w-5" />
            <span>EveStack</span>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Stanford University
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">College Dashboard</h1>
            <Link href="/college/events/new">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.length}</div>
                <p className="text-xs text-muted-foreground">
                  {upcomingEvents.length} upcoming, {pastEvents.length} past
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.reduce((sum, event) => sum + event.attendees, 0)}</div>
                <p className="text-xs text-muted-foreground">Across all events</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.reduce((sum, event) => sum + event.likes, 0)}</div>
                <p className="text-xs text-muted-foreground">Across all events</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{event.title}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href={`/college/events/edit/${event.id}`} className="flex items-center">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteEvent(event.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{event.description}</p>
                      <p className="text-sm mt-2">Location: {event.location}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">{event.attendees} attendees</div>
                      <div className="text-sm text-muted-foreground">{event.likes} likes</div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{event.title}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => deleteEvent(event.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{event.description}</p>
                      <p className="text-sm mt-2">Location: {event.location}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">{event.attendees} attendees</div>
                      <div className="text-sm text-muted-foreground">{event.likes} likes</div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
