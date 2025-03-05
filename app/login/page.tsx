"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LoginPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-12rem)] py-12">
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">{t("login.title")}</TabsTrigger>
          <TabsTrigger value="register">{t("register.title")}</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>{t("login.title")}</CardTitle>
              <CardDescription>{t("login.desc")}</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("login.email")}</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">{t("login.password")}</Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      {t("login.forgot")}
                    </Link>
                  </div>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("login.loading") : t("login.button")}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>{t("register.title")}</CardTitle>
              <CardDescription>{t("register.desc")}</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("register.firstName")}</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("register.lastName")}</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("register.email")}</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">{t("register.password")}</Label>
                  <div className="relative">
                    <Input id="registerPassword" type={showPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("register.loading") : t("register.button")}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

