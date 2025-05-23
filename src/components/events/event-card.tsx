"use client"

import { CalendarDays, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Event } from "@/lib/types"

interface EventCardProps {
  event: Event
  onToggleStar: () => void
}

export function EventCard({ event, onToggleStar }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={event.image || "/assets/hackathon.jpg?height=200&width=400"}
          alt={event.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-1">{event.title}</CardTitle>
            <CardDescription>{event.collegeName}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleStar}
            className={cn("h-8 w-8", (event.isStarred ?? false) && "text-yellow-500")}
          >
            <Star className="h-5 w-5" fill={(event.isStarred ?? false) ? "currentColor" : "none"} />
            <span className="sr-only">{(event.isStarred ?? false) ? "Unstar" : "Star"} event</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {formattedDate}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {event.location}
          </Badge>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Badge>{event.category}</Badge>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
