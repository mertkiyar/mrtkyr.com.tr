"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage()

  // Content based on language
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 5, 2025",
      introduction:
        "This Privacy Policy describes how ModernSite collects, uses, and discloses your personal information when you visit our website or use our services.",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, referring/exit pages, and operating system.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect to provide, maintain, and improve our services, to process your requests and transactions, to send you technical notices and support messages, to communicate with you about products, services, offers, and events, and to respond to your comments and questions.",
        },
        {
          title: "Information Sharing",
          content:
            "We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share your information if we believe it is necessary to comply with applicable laws or regulations, to protect the rights, property, or safety of ModernSite or others, or in connection with a business transfer such as a merger, acquisition, or sale of assets.",
        },
        {
          title: "Your Choices",
          content:
            "You can opt out of receiving promotional communications from us by following the instructions in those communications. You can also update your account information or delete your account at any time by logging into your account settings.",
        },
        {
          title: "Data Security",
          content:
            "We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.",
        },
        {
          title: "Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective.",
        },
        {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at privacy@example.com.",
        },
      ],
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 5 Mart 2025",
      introduction:
        "Bu Gizlilik Politikası, ModernSite'ın web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığını, kullandığını ve açıkladığını açıklar.",
      sections: [
        {
          title: "Topladığımız Bilgiler",
          content:
            "Doğrudan bize sağladığınız bilgileri topluyoruz, örneğin bir hesap oluşturduğunuzda, bültenimize abone olduğunuzda veya destek için bizimle iletişime geçtiğinizde. Bu, adınızı, e-posta adresinizi, telefon numaranızı ve sağlamayı seçtiğiniz diğer bilgileri içerebilir. Ayrıca, cihazınız ve web sitemizle nasıl etkileşimde bulunduğunuz hakkında IP adresiniz, tarayıcı türünüz, yönlendiren/çıkış sayfaları ve işletim sistemi dahil olmak üzere belirli bilgileri otomatik olarak topluyoruz.",
        },
        {
          title: "Bilgilerinizi Nasıl Kullanıyoruz",
          content:
            "Topladığımız bilgileri hizmetlerimizi sağlamak, sürdürmek ve geliştirmek, isteklerinizi ve işlemlerinizi işlemek, size teknik bildirimler ve destek mesajları göndermek, ürünler, hizmetler, teklifler ve etkinlikler hakkında sizinle iletişim kurmak ve yorumlarınıza ve sorularınıza yanıt vermek için kullanıyoruz.",
        },
        {
          title: "Bilgi Paylaşımı",
          content:
            "Bilgilerinizi, adımıza çalışma yürütmek için bu tür bilgilere erişmesi gereken üçüncü taraf satıcılar, danışmanlar ve diğer hizmet sağlayıcılarla paylaşabiliriz. Ayrıca, geçerli yasa veya düzenlemelere uymak, ModernSite'ın veya başkalarının haklarını, mülkiyetini veya güvenliğini korumak için gerekli olduğuna inanırsak veya birleşme, satın alma veya varlık satışı gibi bir iş transferi ile bağlantılı olarak bilgilerinizi paylaşabiliriz.",
        },
        {
          title: "Seçimleriniz",
          content:
            "Bu iletişimlerdeki talimatları izleyerek bizden tanıtım iletişimleri almayı reddedebilirsiniz. Ayrıca, hesap ayarlarınıza giriş yaparak hesap bilgilerinizi güncelleyebilir veya hesabınızı istediğiniz zaman silebilirsiniz.",
        },
        {
          title: "Veri Güvenliği",
          content:
            "Kişisel bilgilerinizi kayıp, hırsızlık, kötüye kullanım ve yetkisiz erişim, ifşa, değiştirme ve imhadan korumak için makul önlemler alıyoruz.",
        },
        {
          title: "Bu Politikadaki Değişiklikler",
          content:
            "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yaparsak, değişiklik yürürlüğe girmeden önce size e-posta göndererek veya web sitemizde bir bildirim yayınlayarak sizi bilgilendireceğiz.",
        },
        {
          title: "Bize Ulaşın",
          content:
            "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen privacy@example.com adresinden bizimle iletişime geçin.",
        },
      ],
    },
    de: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 5. März 2025",
      introduction:
        "Diese Datenschutzrichtlinie beschreibt, wie ModernSite Ihre persönlichen Daten sammelt, verwendet und offenlegt, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.",
      sections: [
        {
          title: "Informationen, die wir sammeln",
          content:
            "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, unseren Newsletter abonnieren oder uns für Support kontaktieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und andere Informationen umfassen, die Sie angeben möchten. Wir sammeln auch automatisch bestimmte Informationen über Ihr Gerät und wie Sie mit unserer Website interagieren, einschließlich Ihrer IP-Adresse, Browsertyp, verweisende/Ausgangsseiten und Betriebssystem.",
        },
        {
          title: "Wie wir Ihre Informationen verwenden",
          content:
            "Wir verwenden die gesammelten Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern, um Ihre Anfragen und Transaktionen zu bearbeiten, um Ihnen technische Hinweise und Support-Nachrichten zu senden, um mit Ihnen über Produkte, Dienstleistungen, Angebote und Veranstaltungen zu kommunizieren und um auf Ihre Kommentare und Fragen zu antworten.",
        },
        {
          title: "Informationsaustausch",
          content:
            "Wir können Ihre Informationen mit Drittanbietern, Beratern und anderen Dienstleistern teilen, die Zugang zu solchen Informationen benötigen, um Arbeiten in unserem Auftrag durchzuführen. Wir können Ihre Informationen auch teilen, wenn wir glauben, dass dies notwendig ist, um geltende Gesetze oder Vorschriften einzuhalten, um die Rechte, das Eigentum oder die Sicherheit von ModernSite oder anderen zu schützen, oder im Zusammenhang mit einer Geschäftsübertragung wie einer Fusion, Übernahme oder Vermögensverkauf.",
        },
        {
          title: "Ihre Wahlmöglichkeiten",
          content:
            "Sie können sich von Werbenachrichten von uns abmelden, indem Sie den Anweisungen in diesen Mitteilungen folgen. Sie können auch Ihre Kontoinformationen aktualisieren oder Ihr Konto jederzeit löschen, indem Sie sich in Ihre Kontoeinstellungen einloggen.",
        },
        {
          title: "Datensicherheit",
          content:
            "Wir ergreifen angemessene Maßnahmen, um Ihre persönlichen Daten vor Verlust, Diebstahl, Missbrauch und unbefugtem Zugriff, Offenlegung, Änderung und Zerstörung zu schützen.",
        },
        {
          title: "Änderungen dieser Richtlinie",
          content:
            "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wenn wir wesentliche Änderungen vornehmen, werden wir Sie per E-Mail oder durch Veröffentlichung einer Mitteilung auf unserer Website benachrichtigen, bevor die Änderung wirksam wird.",
        },
        {
          title: "Kontaktieren Sie uns",
          content:
            "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter privacy@example.com.",
        },
      ],
    },
  }

  // Get content for current language
  const currentContent = content[language as keyof typeof content] || content.en

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">{currentContent.title}</CardTitle>
          <CardDescription>{currentContent.lastUpdated}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">{currentContent.introduction}</p>

          {currentContent.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

