"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ModernSite</h3>
            <p className="text-muted-foreground text-sm">{t("footer.about")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.login")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ModernSite. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

