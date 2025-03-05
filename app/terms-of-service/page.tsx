"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function TermsOfServicePage() {
  const { t, language } = useLanguage()

  // Content based on language
  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 5, 2025",
      introduction:
        "Welcome to ModernSite. Please read these Terms of Service carefully before using our website or services.",
      sections: [
        {
          title: "Acceptance of Terms",
          content:
            "By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
        },
        {
          title: "Use License",
          content:
            "Permission is granted to temporarily download one copy of the materials on ModernSite's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on ModernSite's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
        },
        {
          title: "Disclaimer",
          content:
            "The materials on ModernSite's website are provided on an 'as is' basis. ModernSite makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          title: "Limitations",
          content:
            "In no event shall ModernSite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ModernSite's website, even if ModernSite or a ModernSite authorized representative has been notified orally or in writing of the possibility of such damage.",
        },
        {
          title: "Accuracy of Materials",
          content:
            "The materials appearing on ModernSite's website could include technical, typographical, or photographic errors. ModernSite does not warrant that any of the materials on its website are accurate, complete or current. ModernSite may make changes to the materials contained on its website at any time without notice.",
        },
        {
          title: "Links",
          content:
            "ModernSite has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ModernSite of the site. Use of any such linked website is at the user's own risk.",
        },
        {
          title: "Modifications",
          content:
            "ModernSite may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
        },
        {
          title: "Governing Law",
          content:
            "These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
        },
      ],
    },
    tr: {
      title: "Kullanım Koşulları",
      lastUpdated: "Son Güncelleme: 5 Mart 2025",
      introduction:
        "ModernSite'a hoş geldiniz. Web sitemizi veya hizmetlerimizi kullanmadan önce lütfen bu Kullanım Koşullarını dikkatlice okuyun.",
      sections: [
        {
          title: "Koşulların Kabulü",
          content:
            "Web sitemize erişerek veya kullanarak, bu Kullanım Koşullarına ve tüm geçerli yasa ve düzenlemelere bağlı kalmayı kabul edersiniz. Bu koşulların herhangi biriyle aynı fikirde değilseniz, bu siteyi kullanmanız veya erişmeniz yasaktır.",
        },
        {
          title: "Kullanım Lisansı",
          content:
            "ModernSite'ın web sitesindeki materyallerin bir kopyasını yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirme izni verilir. Bu, bir lisansın verilmesidir, bir mülkiyet devri değildir ve bu lisans altında şunları yapamazsınız: materyalleri değiştirmek veya kopyalamak; materyalleri herhangi bir ticari amaç için kullanmak; ModernSite'ın web sitesinde bulunan herhangi bir yazılımı decompile etmeye veya tersine mühendislik yapmaya çalışmak; materyallerden herhangi bir telif hakkı veya diğer mülkiyet notasyonlarını kaldırmak; veya materyalleri başka bir kişiye aktarmak veya materyalleri başka bir sunucuda 'yansıtmak'.",
        },
        {
          title: "Feragatname",
          content:
            "ModernSite'ın web sitesindeki materyaller 'olduğu gibi' temelinde sağlanır. ModernSite, açık veya zımni hiçbir garanti vermez ve burada, sınırlama olmaksızın, ticari elverişlilik, belirli bir amaca uygunluk veya fikri mülkiyet veya diğer hak ihlallerinin zımni garantileri veya koşulları dahil olmak üzere diğer tüm garantileri reddeder ve olumsuzlar.",
        },
        {
          title: "Sınırlamalar",
          content:
            "Hiçbir durumda ModernSite veya tedarikçileri, ModernSite'ın web sitesindeki materyallerin kullanımından veya kullanılamamasından kaynaklanan herhangi bir zarardan (sınırlama olmaksızın, veri veya kar kaybı veya iş kesintisi nedeniyle oluşan zararlar dahil), ModernSite veya ModernSite yetkili bir temsilcisi böyle bir zararın olasılığı hakkında sözlü veya yazılı olarak bilgilendirilmiş olsa bile, sorumlu olmayacaktır.",
        },
        {
          title: "Materyallerin Doğruluğu",
          content:
            "ModernSite'ın web sitesinde görünen materyaller teknik, tipografik veya fotografik hatalar içerebilir. ModernSite, web sitesindeki materyallerin herhangi birinin doğru, eksiksiz veya güncel olduğunu garanti etmez. ModernSite, web sitesinde bulunan materyallerde herhangi bir zamanda bildirimde bulunmaksızın değişiklik yapabilir.",
        },
        {
          title: "Bağlantılar",
          content:
            "ModernSite, web sitesine bağlantılı tüm siteleri incelememiştir ve bu tür bağlantılı herhangi bir sitenin içeriğinden sorumlu değildir. Herhangi bir bağlantının dahil edilmesi, ModernSite tarafından sitenin onaylandığı anlamına gelmez. Bu tür bağlantılı herhangi bir web sitesinin kullanımı kullanıcının kendi sorumluluğundadır.",
        },
        {
          title: "Değişiklikler",
          content:
            "ModernSite, web sitesi için bu hizmet şartlarını herhangi bir zamanda bildirimde bulunmaksızın revize edebilir. Bu web sitesini kullanarak, bu hizmet şartlarının o anki geçerli versiyonuna bağlı kalmayı kabul ediyorsunuz.",
        },
        {
          title: "Geçerli Yasa",
          content:
            "Bu şartlar ve koşullar, Amerika Birleşik Devletleri yasalarına göre yönetilir ve yorumlanır ve o konumdaki mahkemelerin münhasır yargı yetkisine geri dönülemez şekilde tabi olursunuz.",
        },
      ],
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 5. März 2025",
      introduction:
        "Willkommen bei ModernSite. Bitte lesen Sie diese Nutzungsbedingungen sorgfältig durch, bevor Sie unsere Website oder Dienste nutzen.",
      sections: [
        {
          title: "Annahme der Bedingungen",
          content:
            "Durch den Zugriff auf oder die Nutzung unserer Website stimmen Sie zu, an diese Nutzungsbedingungen und alle geltenden Gesetze und Vorschriften gebunden zu sein. Wenn Sie mit einer dieser Bedingungen nicht einverstanden sind, ist es Ihnen untersagt, diese Website zu nutzen oder darauf zuzugreifen.",
        },
        {
          title: "Nutzungslizenz",
          content:
            "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf der Website von ModernSite nur für persönliche, nicht-kommerzielle, vorübergehende Ansicht herunterzuladen. Dies ist die Gewährung einer Lizenz, nicht eine Übertragung des Eigentums, und unter dieser Lizenz dürfen Sie nicht: die Materialien modifizieren oder kopieren; die Materialien für kommerzielle Zwecke verwenden; versuchen, Software, die auf der Website von ModernSite enthalten ist, zu dekompilieren oder zurückzuentwickeln; Urheberrechts- oder andere Eigentumsvermerke aus den Materialien entfernen; oder die Materialien an eine andere Person übertragen oder die Materialien auf einem anderen Server 'spiegeln'.",
        },
        {
          title: "Haftungsausschluss",
          content:
            "Die Materialien auf der Website von ModernSite werden 'wie sie sind' bereitgestellt. ModernSite gibt keine Garantien, weder ausdrücklich noch stillschweigend, und lehnt hiermit alle anderen Garantien ab, einschließlich, ohne Einschränkung, stillschweigende Garantien oder Bedingungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von geistigem Eigentum oder anderen Rechtsverletzungen.",
        },
        {
          title: "Einschränkungen",
          content:
            "In keinem Fall haften ModernSite oder seine Lieferanten für Schäden (einschließlich, ohne Einschränkung, Schäden durch Datenverlust oder Gewinnausfall oder aufgrund von Geschäftsunterbrechung), die aus der Nutzung oder Unmöglichkeit der Nutzung der Materialien auf der Website von ModernSite entstehen, selbst wenn ModernSite oder ein von ModernSite autorisierter Vertreter mündlich oder schriftlich über die Möglichkeit solcher Schäden informiert wurde.",
        },
        {
          title: "Genauigkeit der Materialien",
          content:
            "Die auf der Website von ModernSite erscheinenden Materialien können technische, typografische oder fotografische Fehler enthalten. ModernSite garantiert nicht, dass die Materialien auf seiner Website genau, vollständig oder aktuell sind. ModernSite kann jederzeit ohne Vorankündigung Änderungen an den Materialien vornehmen, die auf seiner Website enthalten sind.",
        },
        {
          title: "Links",
          content:
            "ModernSite hat nicht alle mit seiner Website verlinkten Seiten überprüft und ist nicht für den Inhalt solcher verlinkten Seiten verantwortlich. Die Aufnahme eines Links bedeutet nicht, dass ModernSite die Website befürwortet. Die Nutzung einer solchen verlinkten Website erfolgt auf eigenes Risiko des Benutzers.",
        },
        {
          title: "Änderungen",
          content:
            "ModernSite kann diese Nutzungsbedingungen für seine Website jederzeit ohne Vorankündigung überarbeiten. Durch die Nutzung dieser Website erklären Sie sich damit einverstanden, an die jeweils aktuelle Version dieser Nutzungsbedingungen gebunden zu sein.",
        },
        {
          title: "Geltendes Recht",
          content:
            "Diese Bedingungen unterliegen den Gesetzen der Vereinigten Staaten und werden in Übereinstimmung mit diesen ausgelegt, und Sie unterwerfen sich unwiderruflich der ausschließlichen Zuständigkeit der Gerichte an diesem Ort.",
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

