"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="flex flex-col items-center text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t("home.welcome")}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">{t("home.subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" className="border border-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/projects">
              {t("home.explore")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/contact">{t("home.contact")}</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{t(feature.title)}</h3>
            <p className="text-muted-foreground">{t(feature.desc)}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("home.why")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6 message-info">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-info dark:text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t("home.support.title")}
            </h3>
            <p className="text-muted-foreground">{t("home.support.desc")}</p>
          </div>
          <div className="rounded-lg border p-6 message-info">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-info dark:text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t("home.delivery.title")}
            </h3>
            <p className="text-muted-foreground">{t("home.delivery.desc")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "home.feature1.title",
    desc: "home.feature1.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "home.feature2.title",
    desc: "home.feature2.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "home.feature3.title",
    desc: "home.feature3.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

