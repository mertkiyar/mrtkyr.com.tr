"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "en", name: t("language.en") },
    { code: "tr", name: t("language.tr") },
    { code: "de", name: t("language.de") },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between"
            onClick={() => {
              setLanguage(lang.code as "en" | "tr" | "de")
              setOpen(false)
            }}
          >
            {lang.name}
            {language === lang.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

