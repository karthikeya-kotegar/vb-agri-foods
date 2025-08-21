import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VB Foods - Premium Agricultural Products Trading",
  description:
    "Leading B2B agricultural products trading firm specializing in grains, pulses, and millets from Karnataka. Direct farm sourcing with quality assurance.",
  keywords: "VB Foods, agriculture, trading, grains, pulses, millets, Karnataka, B2B, wholesale, export",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
