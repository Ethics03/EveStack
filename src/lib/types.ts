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
    title: string
    description: string
    date: string
    time: string
    location: string
    category: string
    collegeName: string
    collegeId: string
    image?: string
    isStarred: boolean
  }
  
  