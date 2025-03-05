"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
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
    <div className="container flex items-center justify-center min-h-[calc(100vh-12rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-2">
            <Link href="/login" className="text-muted-foreground hover:text-foreground mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <CardTitle>{t("forgot.title")}</CardTitle>
          </div>
          <CardDescription>{t("forgot.desc")}</CardDescription>
        </CardHeader>

        {isSubmitted ? (
          <CardContent className="pt-6">
            <div className="rounded-lg border p-4 message-info">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-5 w-5 mt-0.5 text-info dark:text-foreground" />
                <div>
                  <h3 className="font-medium">{t("forgot.check")}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("forgot.sent")} <span className="font-medium text-foreground">{email}</span>.{" "}
                    {t("forgot.expire")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-4">
              <p className="text-sm text-muted-foreground">{t("forgot.didnt")}</p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                {t("forgot.try")}
              </Button>
            </div>
          </CardContent>
        ) : (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("forgot.email")}</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="rounded-lg border p-4 message-accent">
                <p className="text-sm text-foreground">{t("forgot.info")}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("forgot.loading") : t("forgot.button")}
              </Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  )
}

