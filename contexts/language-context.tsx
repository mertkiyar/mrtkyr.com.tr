"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "tr" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, Record<string, string>>
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.login": "Login",

    // Home page
    "home.welcome": "Welcome to Our Modern Platform",
    "home.subtitle":
      "A minimalist design focused on delivering the best user experience with clean interfaces and intuitive navigation.",
    "home.explore": "Explore Projects",
    "home.contact": "Contact Us",
    "home.feature1.title": "Modern Design",
    "home.feature1.desc": "Clean aesthetics with a focus on user experience and minimalist principles.",
    "home.feature2.title": "Responsive Layout",
    "home.feature2.desc": "Perfectly adapts to any device, from mobile phones to large desktop screens.",
    "home.feature3.title": "Subtle Animations",
    "home.feature3.desc": "Thoughtful animations enhance the experience without overwhelming the user.",
    "home.why": "Why Choose Us",
    "home.support.title": "Professional Support",
    "home.support.desc": "Our team of experts is available 24/7 to help you with any questions or issues you may have.",
    "home.delivery.title": "Fast Delivery",
    "home.delivery.desc": "We pride ourselves on quick turnaround times without compromising on quality.",

    // Login page
    "login.title": "Login",
    "login.desc": "Enter your credentials to access your account",
    "login.email": "Email",
    "login.password": "Password",
    "login.forgot": "Forgot password?",
    "login.button": "Login",
    "login.loading": "Logging in...",

    // Register page
    "register.title": "Create an account",
    "register.desc": "Enter your details to create a new account",
    "register.firstName": "First name",
    "register.lastName": "Last name",
    "register.email": "Email",
    "register.password": "Password",
    "register.button": "Create account",
    "register.loading": "Creating account...",

    // Forgot password page
    "forgot.title": "Reset Password",
    "forgot.desc": "Enter your email address and we'll send you a link to reset your password.",
    "forgot.email": "Email",
    "forgot.button": "Send Reset Link",
    "forgot.loading": "Sending...",
    "forgot.check": "Check your email",
    "forgot.sent": "We've sent a password reset link to",
    "forgot.expire": "The link will expire in 1 hour.",
    "forgot.didnt": "Didn't receive the email? Check your spam folder or",
    "forgot.try": "Try another email",
    "forgot.info":
      "We'll send you an email with a link to reset your password. For security reasons, the link will expire after 1 hour.",

    // Contact page
    "contact.title": "Contact Us",
    "contact.desc":
      "Have questions or want to discuss a project? Reach out to us using the form below or through our contact information.",
    "contact.form.title": "Send us a message",
    "contact.form.desc": "Fill out the form below and we'll get back to you as soon as possible.",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.button": "Send Message",
    "contact.loading": "Sending...",
    "contact.success.title": "Thank you for your message!",
    "contact.success.desc": "We've received your inquiry and will respond shortly.",
    "contact.another": "Send another message",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Reach out to us directly using the following contact details.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",

    // Footer
    "footer.about":
      "A minimalist design focused on delivering the best user experience with clean interfaces and intuitive navigation.",
    "footer.links": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",

    // Language
    language: "Language",
    "language.en": "English",
    "language.tr": "Turkish",
    "language.de": "German",
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "nav.login": "Giriş",

    // Home page
    "home.welcome": "Modern Platformumuza Hoş Geldiniz",
    "home.subtitle":
      "Temiz arayüzler ve sezgisel navigasyon ile en iyi kullanıcı deneyimini sunmaya odaklanan minimalist bir tasarım.",
    "home.explore": "Projeleri Keşfet",
    "home.contact": "Bize Ulaşın",
    "home.feature1.title": "Modern Tasarım",
    "home.feature1.desc": "Kullanıcı deneyimi ve minimalist prensiplere odaklanan temiz estetik.",
    "home.feature2.title": "Duyarlı Düzen",
    "home.feature2.desc": "Mobil telefonlardan büyük masaüstü ekranlara kadar her cihaza mükemmel uyum sağlar.",
    "home.feature3.title": "İnce Animasyonlar",
    "home.feature3.desc": "Düşünceli animasyonlar, kullanıcıyı bunaltmadan deneyimi geliştirir.",
    "home.why": "Neden Bizi Seçmelisiniz",
    "home.support.title": "Profesyonel Destek",
    "home.support.desc": "Uzman ekibimiz, sahip olabileceğiniz herhangi bir soru veya sorun için 7/24 hizmetinizdedir.",
    "home.delivery.title": "Hızlı Teslimat",
    "home.delivery.desc": "Kaliteden ödün vermeden hızlı geri dönüş süreleriyle gurur duyuyoruz.",

    // Login page
    "login.title": "Giriş",
    "login.desc": "Hesabınıza erişmek için kimlik bilgilerinizi girin",
    "login.email": "E-posta",
    "login.password": "Şifre",
    "login.forgot": "Şifremi unuttum?",
    "login.button": "Giriş Yap",
    "login.loading": "Giriş yapılıyor...",

    // Register page
    "register.title": "Hesap oluştur",
    "register.desc": "Yeni bir hesap oluşturmak için bilgilerinizi girin",
    "register.firstName": "Ad",
    "register.lastName": "Soyad",
    "register.email": "E-posta",
    "register.password": "Şifre",
    "register.button": "Hesap oluştur",
    "register.loading": "Hesap oluşturuluyor...",

    // Forgot password page
    "forgot.title": "Şifre Sıfırlama",
    "forgot.desc": "E-posta adresinizi girin, size şifrenizi sıfırlamanız için bir bağlantı göndereceğiz.",
    "forgot.email": "E-posta",
    "forgot.button": "Sıfırlama Bağlantısı Gönder",
    "forgot.loading": "Gönderiliyor...",
    "forgot.check": "E-postanızı kontrol edin",
    "forgot.sent": "Şifre sıfırlama bağlantısını şu adrese gönderdik:",
    "forgot.expire": "Bağlantı 1 saat içinde sona erecek.",
    "forgot.didnt": "E-postayı almadınız mı? Spam klasörünüzü kontrol edin veya",
    "forgot.try": "Başka bir e-posta deneyin",
    "forgot.info":
      "Size şifrenizi sıfırlamanız için bir e-posta göndereceğiz. Güvenlik nedeniyle, bağlantı 1 saat sonra sona erecek.",

    // Contact page
    "contact.title": "Bize Ulaşın",
    "contact.desc":
      "Sorularınız mı var veya bir proje hakkında konuşmak mı istiyorsunuz? Aşağıdaki formu kullanarak veya iletişim bilgilerimiz aracılığıyla bize ulaşın.",
    "contact.form.title": "Bize mesaj gönderin",
    "contact.form.desc": "Aşağıdaki formu doldurun, en kısa sürede size geri döneceğiz.",
    "contact.firstName": "Ad",
    "contact.lastName": "Soyad",
    "contact.email": "E-posta",
    "contact.subject": "Konu",
    "contact.message": "Mesaj",
    "contact.button": "Mesaj Gönder",
    "contact.loading": "Gönderiliyor...",
    "contact.success.title": "Mesajınız için teşekkürler!",
    "contact.success.desc": "Sorunuzu aldık ve kısa süre içinde yanıt vereceğiz.",
    "contact.another": "Başka bir mesaj gönder",
    "contact.info.title": "İletişim Bilgileri",
    "contact.info.desc": "Aşağıdaki iletişim bilgilerini kullanarak doğrudan bize ulaşın.",
    "contact.info.email": "E-posta",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Adres",

    // Footer
    "footer.about":
      "Temiz arayüzler ve sezgisel navigasyon ile en iyi kullanıcı deneyimini sunmaya odaklanan minimalist bir tasarım.",
    "footer.links": "Hızlı Bağlantılar",
    "footer.legal": "Yasal",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",
    "footer.cookies": "Çerez Politikası",
    "footer.rights": "Tüm hakları saklıdır.",

    // Language
    language: "Dil",
    "language.en": "İngilizce",
    "language.tr": "Türkçe",
    "language.de": "Almanca",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",

    // Home page
    "home.welcome": "Willkommen auf unserer modernen Plattform",
    "home.subtitle":
      "Ein minimalistisches Design, das sich auf die Bereitstellung der besten Benutzererfahrung mit klaren Schnittstellen und intuitiver Navigation konzentriert.",
    "home.explore": "Projekte erkunden",
    "home.contact": "Kontaktieren Sie uns",
    "home.feature1.title": "Modernes Design",
    "home.feature1.desc": "Klare Ästhetik mit Fokus auf Benutzererfahrung und minimalistische Prinzipien.",
    "home.feature2.title": "Responsives Layout",
    "home.feature2.desc":
      "Passt sich perfekt an jedes Gerät an, von Mobiltelefonen bis hin zu großen Desktop-Bildschirmen.",
    "home.feature3.title": "Subtile Animationen",
    "home.feature3.desc": "Durchdachte Animationen verbessern die Erfahrung, ohne den Benutzer zu überfordern.",
    "home.why": "Warum uns wählen",
    "home.support.title": "Professioneller Support",
    "home.support.desc":
      "Unser Expertenteam steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei Fragen oder Problemen zu helfen.",
    "home.delivery.title": "Schnelle Lieferung",
    "home.delivery.desc": "Wir sind stolz auf schnelle Bearbeitungszeiten ohne Kompromisse bei der Qualität.",

    // Login page
    "login.title": "Anmelden",
    "login.desc": "Geben Sie Ihre Anmeldedaten ein, um auf Ihr Konto zuzugreifen",
    "login.email": "E-Mail",
    "login.password": "Passwort",
    "login.forgot": "Passwort vergessen?",
    "login.button": "Anmelden",
    "login.loading": "Anmeldung läuft...",

    // Register page
    "register.title": "Konto erstellen",
    "register.desc": "Geben Sie Ihre Daten ein, um ein neues Konto zu erstellen",
    "register.firstName": "Vorname",
    "register.lastName": "Nachname",
    "register.email": "E-Mail",
    "register.password": "Passwort",
    "register.button": "Konto erstellen",
    "register.loading": "Konto wird erstellt...",

    // Forgot password page
    "forgot.title": "Passwort zurücksetzen",
    "forgot.desc":
      "Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.",
    "forgot.email": "E-Mail",
    "forgot.button": "Reset-Link senden",
    "forgot.loading": "Wird gesendet...",
    "forgot.check": "Überprüfen Sie Ihre E-Mail",
    "forgot.sent": "Wir haben einen Link zum Zurücksetzen des Passworts an gesendet",
    "forgot.expire": "Der Link läuft in 1 Stunde ab.",
    "forgot.didnt": "Keine E-Mail erhalten? Überprüfen Sie Ihren Spam-Ordner oder",
    "forgot.try": "Versuchen Sie eine andere E-Mail",
    "forgot.info":
      "Wir senden Ihnen eine E-Mail mit einem Link zum Zurücksetzen Ihres Passworts. Aus Sicherheitsgründen läuft der Link nach 1 Stunde ab.",

    // Contact page
    "contact.title": "Kontaktieren Sie uns",
    "contact.desc":
      "Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns über das untenstehende Formular oder über unsere Kontaktdaten.",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.desc":
      "Füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
    "contact.firstName": "Vorname",
    "contact.lastName": "Nachname",
    "contact.email": "E-Mail",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.button": "Nachricht senden",
    "contact.loading": "Wird gesendet...",
    "contact.success.title": "Vielen Dank für Ihre Nachricht!",
    "contact.success.desc": "Wir haben Ihre Anfrage erhalten und werden in Kürze antworten.",
    "contact.another": "Eine weitere Nachricht senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.desc": "Kontaktieren Sie uns direkt über die folgenden Kontaktdaten.",
    "contact.info.email": "E-Mail",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Adresse",

    // Footer
    "footer.about":
      "Ein minimalistisches Design, das sich auf die Bereitstellung der besten Benutzererfahrung mit klaren Schnittstellen und intuitiver Navigation konzentriert.",
    "footer.links": "Schnelllinks",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.rights": "Alle Rechte vorbehalten.",

    // Language
    language: "Sprache",
    "language.en": "Englisch",
    "language.tr": "Türkisch",
    "language.de": "Deutsch",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "tr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        translations,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

