"use client"

import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

interface LikeButtonProps {
  liked: boolean
  onToggleLike: () => void
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function LikeButton({ liked, onToggleLike, size = "icon", variant = "ghost" }: LikeButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onToggleLike}
      className={liked ? "text-red-500" : ""}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
      <span className="sr-only">{liked ? "Unlike" : "Like"}</span>
    </Button>
  )
}
