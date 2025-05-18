"use client"

import { CalendarDays, MapPin, Users } from "lucide-react"

import {LikeButton} from "@/components/ui/like-button"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface EventDetailHeaderProps {
  title: string
  collegeName: string
  date: string
  time: string
  location: string
  capacity: number
  registeredAttendees: number
  liked: boolean
  onToggleLike: () => void
  onRegister: () => void
}

export function EventDetailHeader({
  title,
  collegeName,
  date,
  time,
  location,
  capacity,
  registeredAttendees,
  liked,
  onToggleLike,
  onRegister,
}: EventDetailHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-4">Hosted by {collegeName}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
          <span>
            {new Date(date).toLocaleDateString()} at {time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span>
            {registeredAttendees} / {capacity} attendees
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 sm:flex-none" onClick={onRegister}>
          Register
        </Button>
        <LikeButton liked={liked} onToggleLike={onToggleLike} />
        <Button variant="outline" size="icon">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
      </div>
    </div>
  )
}
