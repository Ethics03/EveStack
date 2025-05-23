"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Calendar, Home, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get("tab")

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Calendar className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">EveStack</span>
      </Link>
      <nav className="flex gap-4">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className={cn("flex items-center gap-2", pathname === "/dashboard" && !currentTab && "bg-muted")}
          >
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
        </Link>
        <Link href="/dashboard?tab=starred">
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2",
              pathname === "/dashboard" && currentTab === "starred" && "bg-muted",
            )}
          >
            <Star className="h-4 w-4" />
            <span>Starred</span>
          </Button>
        </Link>
      </nav>
    </div>
  )
}
