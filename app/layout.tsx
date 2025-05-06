import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "ClickMorph - Marketing & AI Automation",
  description:
    "Automate what matters and focus on scaling up your business with ClickMorph's AI-powered marketing solutions.",
  keywords: "marketing automation, AI lead generation, CRM integration, web design, digital marketing",
  authors: [{ name: "ClickMorph Team" }],
  creator: "ClickMorph",
  publisher: "ClickMorph",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/clickmorph-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clickmorph.com",
    title: "ClickMorph - Marketing & AI Automation",
    description:
      "Automate what matters and focus on scaling up your business with ClickMorph's AI-powered marketing solutions.",
    siteName: "ClickMorph",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickMorph - Marketing & AI Automation",
    description:
      "Automate what matters and focus on scaling up your business with ClickMorph's AI-powered marketing solutions.",
    creator: "@clickmorph",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable}`}>
      <body className="bg-black text-white antialiased font-mono">{children}</body>
    </html>
  )
}
