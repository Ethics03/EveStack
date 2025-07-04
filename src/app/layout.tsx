import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { NextAuthSessionProvider } from "./next-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EveStack - College Event Management Platform",
  description: "Discover & Promote College Events with EveStack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextAuthSessionProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        </NextAuthSessionProvider>
        
      </body>
    </html>
  )
}