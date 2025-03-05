import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Minimalist Website",
  description: "A clean, modern website with minimalist design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <BackgroundAnimation />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'