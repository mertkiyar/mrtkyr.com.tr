"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.desc")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{t("contact.form.title")}</CardTitle>
            <CardDescription>{t("contact.form.desc")}</CardDescription>
          </CardHeader>
          {isSubmitted ? (
            <CardContent className="pt-6">
              <div className="rounded-lg border p-4 message-success">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 text-success dark:text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium">{t("contact.success.title")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t("contact.success.desc")}</p>
                  </div>
                </div>
              </div>
              <Button className="mt-4" variant="outline" onClick={() => setIsSubmitted(false)}>
                {t("contact.another")}
              </Button>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("contact.firstName")}</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("contact.lastName")}</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.subject")}</Label>
                  <Input id="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea id="message" rows={5} required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.loading") : t("contact.button")}
                </Button>
              </CardFooter>
            </form>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("contact.info.title")}</CardTitle>
            <CardDescription>{t("contact.info.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">{t("contact.info.email")}</h3>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">{t("contact.info.phone")}</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">{t("contact.info.address")}</h3>
                <p className="text-muted-foreground">
                  123 Design Street
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

