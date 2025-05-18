"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormDescription, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { Event } from "@/lib/types"

interface EventFormProps {
  event?: Partial<Event>
  onSubmit: (formData: FormData) => void
  onCancel: () => void
}

export function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(event?.date ? new Date(event.date) : undefined)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    if (date) {
      formData.set("date", date.toISOString().split("T")[0])
    }
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <FormLabel htmlFor="title">Event Title</FormLabel>
          <Input id="title" name="title" defaultValue={event?.title} placeholder="Enter event title" required />
          <FormDescription>Choose a clear, descriptive title for your event.</FormDescription>
        </div>

        <div className="grid gap-2">
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            name="description"
            defaultValue={event?.description}
            placeholder="Describe your event"
            className="min-h-[120px]"
            required
          />
          <FormDescription>Provide details about what attendees can expect.</FormDescription>
        </div>

        <div className="grid gap-2">
          <FormLabel>Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? date.toLocaleDateString() : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <FormLabel htmlFor="time">Time</FormLabel>
          <Input id="time" name="time" type="time" defaultValue={event?.time} required />
        </div>

        <div className="grid gap-2">
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input id="location" name="location" defaultValue={event?.location} placeholder="Event location" required />
        </div>

        <div className="grid gap-2">
          <FormLabel htmlFor="category">Category</FormLabel>
          <Input
            id="category"
            name="category"
            defaultValue={event?.category}
            placeholder="e.g. Technology, Cultural, Academic"
            required
          />
        </div>

        <div className="grid gap-2">
          <FormLabel htmlFor="capacity">Capacity</FormLabel>
          <Input
            id="capacity"
            name="capacity"
            type="number"
            min="1"
            defaultValue={event?.capacity}
            placeholder="Maximum number of attendees"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{event?.id ? "Update Event" : "Create Event"}</Button>
      </div>
    </form>
  )
}
