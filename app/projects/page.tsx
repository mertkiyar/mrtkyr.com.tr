"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  // Translations for project categories
  const categoryTranslations = {
    en: {
      "Web Development": "Web Development",
      "Data Visualization": "Data Visualization",
      "Mobile App": "Mobile App",
      IoT: "IoT",
      Education: "Education",
      Analytics: "Analytics",
    },
    tr: {
      "Web Development": "Web Geliştirme",
      "Data Visualization": "Veri Görselleştirme",
      "Mobile App": "Mobil Uygulama",
      IoT: "Nesnelerin İnterneti",
      Education: "Eğitim",
      Analytics: "Analitik",
    },
    de: {
      "Web Development": "Webentwicklung",
      "Data Visualization": "Datenvisualisierung",
      "Mobile App": "Mobile App",
      IoT: "IoT",
      Education: "Bildung",
      Analytics: "Analytik",
    },
  }

  // Translations for project page
  const pageTranslations = {
    en: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of work showcasing our expertise and creative solutions.",
      viewDetails: "View Details",
    },
    tr: {
      title: "Projelerimiz",
      subtitle: "Uzmanlığımızı ve yaratıcı çözümlerimizi sergileyen çalışma portföyümüzü keşfedin.",
      viewDetails: "Detayları Görüntüle",
    },
    de: {
      title: "Unsere Projekte",
      subtitle: "Entdecken Sie unser Portfolio an Arbeiten, die unsere Expertise und kreativen Lösungen präsentieren.",
      viewDetails: "Details Anzeigen",
    },
  }

  const currentTranslations = pageTranslations[language as keyof typeof pageTranslations] || pageTranslations.en
  const currentCategoryTranslations =
    categoryTranslations[language as keyof typeof categoryTranslations] || categoryTranslations.en

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{currentTranslations.title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{currentTranslations.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <Badge variant="outline">
                  {currentCategoryTranslations[project.category as keyof typeof currentCategoryTranslations] ||
                    project.category}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="w-full border border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href={`/projects/${project.id}`}>{currentTranslations.viewDetails}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    id: "1",
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce solution with advanced filtering and search capabilities.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Financial Dashboard",
    description: "Interactive dashboard for tracking investments and financial metrics with real-time updates.",
    category: "Data Visualization",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Health & Fitness App",
    description:
      "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    category: "Mobile App",
    technologies: ["React Native", "GraphQL", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Smart Home Control System",
    description: "IoT solution for managing home devices with voice commands and automated routines.",
    category: "IoT",
    technologies: ["Python", "TensorFlow", "MQTT"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Educational Learning Platform",
    description: "Interactive learning environment with courses, quizzes, and progress tracking for students.",
    category: "Education",
    technologies: ["Angular", "Express", "PostgreSQL"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Social Media Analytics Tool",
    description: "Platform for tracking and analyzing social media performance across multiple channels.",
    category: "Analytics",
    technologies: ["Next.js", "Python", "Redis"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

