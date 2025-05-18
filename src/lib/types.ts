// User types
export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    likedEvents: string[]
  }
  
  // College types
  export interface College {
    id: string
    name: string
    email: string
    website: string
    logo?: string
  }
  
  // Event types
  export interface Event {
    id: string
    collegeId: string
    collegeName: string
    title: string
    description: string
    date: string
    time: string
    location: string
    category: string
    image?: string
    organizer?: string
    contactEmail?: string
    contactPhone?: string
    capacity: number
    registeredAttendees: number
    likes: number
    status: "upcoming" | "past"
  }
  