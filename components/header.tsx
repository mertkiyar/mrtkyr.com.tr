"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches

      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.add("theme-transition")
    setIsDarkMode(!isDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    }

    // Remove the transition class after the transition is complete
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition")
    }, 500)
  }

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              ModernSite
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground/70 hover:text-white hover:bg-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center space-x-2">
              <LanguageSwitcher />
              <Button variant="outline" size="sm" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button asChild size="sm" className="border border-primary">
                <Link href="/login">{t("nav.login")}</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-primary hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:bg-primary hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.login")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

