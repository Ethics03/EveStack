"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { EventCard } from "@/components/events/event-card"
import { EventFilter } from "@/components/events/event-filter"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockEvents } from "@/lib/mock-data"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState(tabParam === "starred" ? "starred" : "all")
  const [events, setEvents] = useState(mockEvents)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Update active tab when URL parameter changes
  useEffect(() => {
    setActiveTab(tabParam === "starred" ? "starred" : "all")
  }, [tabParam])

  // Get unique categories from events
  const categories = Array.from(new Set(events.map((event) => event.category)))

  // Filter events based on search term and category
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  // Get starred events
  const starredEvents = events.filter((event) => event.isStarred)

  // Toggle star status for an event
  const toggleStar = (id: string) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, isStarred: !(event.isStarred ?? false) } : event)))
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Events Dashboard" description="Browse and star events from colleges around you." />

      <EventFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        categories={categories}
      />

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="starred">Starred Events</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {filteredEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onToggleStar={() => toggleStar(event.id)} />
              ))}
            </div>
          ) : (
            <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <h3 className="mt-4 text-lg font-semibold">No events found</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="starred" className="mt-6">
          {starredEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {starredEvents.map((event) => (
                <EventCard key={event.id} event={event} onToggleStar={() => toggleStar(event.id)} />
              ))}
            </div>
          ) : (
            <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <h3 className="mt-4 text-lg font-semibold">No starred events</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  Star events you're interested in to find them here.
                </p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
