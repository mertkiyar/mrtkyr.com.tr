"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function CookiePolicyPage() {
  const { t, language } = useLanguage()

  // Content based on language
  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated: March 5, 2025",
      introduction:
        "This Cookie Policy explains how ModernSite uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
      sections: [
        {
          title: "What are cookies?",
          content:
            "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, ModernSite) are called 'first-party cookies'. Cookies set by parties other than the website owner are called 'third-party cookies'. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).",
        },
        {
          title: "Why do we use cookies?",
          content:
            "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.",
        },
        {
          title: "How can you control cookies?",
          content:
            "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services. The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.",
        },
        {
          title: "Types of cookies we use",
          content:
            "The specific types of first and third-party cookies served through our website and the purposes they perform are described below: Essential website cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Performance and functionality cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable. Analytics and customization cookies: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you. Advertising cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.",
        },
        {
          title: "How often will we update this Cookie Policy?",
          content:
            "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.",
        },
        {
          title: "Where can you get further information?",
          content:
            "If you have any questions about our use of cookies or other technologies, please email us at privacy@example.com.",
        },
      ],
    },
    tr: {
      title: "Çerez Politikası",
      lastUpdated: "Son Güncelleme: 5 Mart 2025",
      introduction:
        "Bu Çerez Politikası, ModernSite'ın web sitemizi ziyaret ettiğinizde sizi tanımak için çerezleri ve benzer teknolojileri nasıl kullandığını açıklar. Bu teknolojilerin ne olduğunu ve neden kullandığımızı, ayrıca bunların kullanımını kontrol etme haklarınızı açıklar.",
      sections: [
        {
          title: "Çerezler nedir?",
          content:
            "Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük veri dosyalarıdır. Çerezler, web sitesi sahipleri tarafından web sitelerinin çalışmasını sağlamak veya daha verimli çalışmasını sağlamak ve ayrıca raporlama bilgileri sağlamak için yaygın olarak kullanılır. Web sitesi sahibi (bu durumda ModernSite) tarafından ayarlanan çerezlere 'birinci taraf çerezleri' denir. Web sitesi sahibi dışındaki taraflarca ayarlanan çerezlere 'üçüncü taraf çerezleri' denir. Üçüncü taraf çerezleri, web sitesinde veya web sitesi aracılığıyla üçüncü taraf özellikleri veya işlevselliği sağlanmasını mümkün kılar (örneğin, reklam, etkileşimli içerik ve analitik).",
        },
        {
          title: "Neden çerez kullanıyoruz?",
          content:
            "Birinci taraf ve üçüncü taraf çerezleri birkaç nedenden dolayı kullanıyoruz. Bazı çerezler, web sitemizin çalışması için teknik nedenlerden dolayı gereklidir ve bunları 'temel' veya 'kesinlikle gerekli' çerezler olarak adlandırırız. Diğer çerezler ayrıca web sitemizdeki deneyimi geliştirmek için kullanıcılarımızın ilgi alanlarını izlememizi ve hedeflememizi sağlar. Üçüncü taraflar, reklam, analitik ve diğer amaçlar için web sitemiz aracılığıyla çerez sunar.",
        },
        {
          title: "Çerezleri nasıl kontrol edebilirsiniz?",
          content:
            "Çerezleri kabul etme veya reddetme hakkına sahipsiniz. Çerez Onay Yöneticisi'nde tercihlerinizi ayarlayarak çerez haklarınızı kullanabilirsiniz. Çerez Onay Yöneticisi, hangi çerez kategorilerini kabul ettiğinizi veya reddettiğinizi seçmenize olanak tanır. Temel çerezler, size hizmet sağlamak için kesinlikle gerekli oldukları için reddedilemez. Çerez Onay Yöneticisi, bildirim banner'ında ve web sitemizde bulunabilir. Çerezleri reddetmeyi seçerseniz, web sitemizi kullanmaya devam edebilirsiniz, ancak web sitemizin bazı işlevselliklerine ve alanlarına erişiminiz kısıtlanabilir.",
        },
        {
          title: "Kullandığımız çerez türleri",
          content:
            "Web sitemiz aracılığıyla sunulan belirli birinci ve üçüncü taraf çerez türleri ve gerçekleştirdikleri amaçlar aşağıda açıklanmıştır: Temel web sitesi çerezleri: Bu çerezler, web sitemiz aracılığıyla size sunulan hizmetleri sağlamak ve güvenli alanlar gibi bazı özelliklerini kullanmak için kesinlikle gereklidir. Performans ve işlevsellik çerezleri: Bu çerezler, web sitemizin performansını ve işlevselliğini geliştirmek için kullanılır, ancak kullanımları için temel değildir. Bununla birlikte, bu çerezler olmadan, belirli işlevsellik kullanılamaz hale gelebilir. Analitik ve özelleştirme çerezleri: Bu çerezler, web sitemizin nasıl kullanıldığını veya pazarlama kampanyalarımızın ne kadar etkili olduğunu anlamamıza yardımcı olmak için toplu form halinde kullanılan veya web sitemizi sizin için özelleştirmemize yardımcı olan bilgileri toplar. Reklam çerezleri: Bu çerezler, reklam mesajlarını sizin için daha alakalı hale getirmek için kullanılır. Aynı reklamın sürekli olarak yeniden görünmesini önleme, reklamların reklamverenler için düzgün görüntülenmesini sağlama ve bazı durumlarda ilgi alanlarınıza dayalı reklamlar seçme gibi işlevleri yerine getirirler.",
        },
        {
          title: "Bu Çerez Politikasını ne sıklıkla güncelleyeceğiz?",
          content:
            "Bu Çerez Politikasını, örneğin, kullandığımız çerezlerdeki değişiklikleri veya diğer operasyonel, yasal veya düzenleyici nedenleri yansıtmak için zaman zaman güncelleyebiliriz. Bu nedenle, çerez ve ilgili teknolojilerin kullanımı hakkında bilgi sahibi olmak için lütfen bu Çerez Politikasını düzenli olarak tekrar ziyaret edin. Bu Çerez Politikasının üst kısmındaki tarih, en son ne zaman güncellendiğini gösterir.",
        },
        {
          title: "Daha fazla bilgiyi nereden alabilirsiniz?",
          content:
            "Çerezlerin veya diğer teknolojilerin kullanımı hakkında herhangi bir sorunuz varsa, lütfen privacy@example.com adresinden bize e-posta gönderin.",
        },
      ],
    },
    de: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 5. März 2025",
      introduction:
        "Diese Cookie-Richtlinie erklärt, wie ModernSite Cookies und ähnliche Technologien verwendet, um Sie zu erkennen, wenn Sie unsere Website besuchen. Sie erklärt, was diese Technologien sind und warum wir sie verwenden, sowie Ihre Rechte, unsere Verwendung dieser Technologien zu kontrollieren.",
      sections: [
        {
          title: "Was sind Cookies?",
          content:
            "Cookies sind kleine Datendateien, die auf Ihrem Computer oder mobilen Gerät platziert werden, wenn Sie eine Website besuchen. Cookies werden von Website-Betreibern weithin verwendet, um ihre Websites funktionsfähig zu machen oder effizienter zu arbeiten, sowie um Berichtsinformationen bereitzustellen. Cookies, die vom Website-Betreiber (in diesem Fall ModernSite) gesetzt werden, werden als 'First-Party-Cookies' bezeichnet. Cookies, die von anderen Parteien als dem Website-Betreiber gesetzt werden, werden als 'Third-Party-Cookies' bezeichnet. Third-Party-Cookies ermöglichen Drittfunktionen oder -funktionalitäten, die auf oder über die Website bereitgestellt werden (z.B. Werbung, interaktive Inhalte und Analysen).",
        },
        {
          title: "Warum verwenden wir Cookies?",
          content:
            "Wir verwenden First-Party- und Third-Party-Cookies aus mehreren Gründen. Einige Cookies sind aus technischen Gründen erforderlich, damit unsere Website funktioniert, und wir bezeichnen diese als 'wesentliche' oder 'unbedingt notwendige' Cookies. Andere Cookies ermöglichen es uns auch, die Interessen unserer Benutzer zu verfolgen und zu zielen, um die Erfahrung auf unserer Website zu verbessern. Dritte stellen Cookies über unsere Website für Werbung, Analysen und andere Zwecke bereit.",
        },
        {
          title: "Wie können Sie Cookies kontrollieren?",
          content:
            "Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihre Cookie-Rechte ausüben, indem Sie Ihre Präferenzen im Cookie-Consent-Manager festlegen. Der Cookie-Consent-Manager ermöglicht es Ihnen, auszuwählen, welche Kategorien von Cookies Sie akzeptieren oder ablehnen. Wesentliche Cookies können nicht abgelehnt werden, da sie unbedingt notwendig sind, um Ihnen Dienste bereitzustellen. Der Cookie-Consent-Manager ist im Benachrichtigungsbanner und auf unserer Website zu finden. Wenn Sie sich entscheiden, Cookies abzulehnen, können Sie unsere Website weiterhin nutzen, obwohl Ihr Zugriff auf einige Funktionen und Bereiche unserer Website möglicherweise eingeschränkt ist.",
        },
        {
          title: "Arten von Cookies, die wir verwenden",
          content:
            "Die spezifischen Arten von First- und Third-Party-Cookies, die über unsere Website bereitgestellt werden, und die Zwecke, die sie erfüllen, werden nachfolgend beschrieben: Wesentliche Website-Cookies: Diese Cookies sind unbedingt notwendig, um Ihnen Dienste über unsere Website bereitzustellen und einige ihrer Funktionen zu nutzen, wie z.B. den Zugriff auf sichere Bereiche. Leistungs- und Funktionalitäts-Cookies: Diese Cookies werden verwendet, um die Leistung und Funktionalität unserer Website zu verbessern, sind aber für deren Nutzung nicht wesentlich. Ohne diese Cookies kann jedoch bestimmte Funktionalität nicht verfügbar sein. Analyse- und Anpassungs-Cookies: Diese Cookies sammeln Informationen, die entweder in aggregierter Form verwendet werden, um uns zu helfen zu verstehen, wie unsere Website genutzt wird oder wie effektiv unsere Marketingkampagnen sind, oder um uns zu helfen, unsere Website für Sie anzupassen. Werbe-Cookies: Diese Cookies werden verwendet, um Werbebotschaften für Sie relevanter zu machen. Sie führen Funktionen aus wie das Verhindern, dass dieselbe Anzeige ständig wieder erscheint, das Sicherstellen, dass Anzeigen für Werbetreibende ordnungsgemäß angezeigt werden, und in einigen Fällen das Auswählen von Anzeigen, die auf Ihren Interessen basieren.",
        },
        {
          title: "Wie oft werden wir diese Cookie-Richtlinie aktualisieren?",
          content:
            "Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen an den von uns verwendeten Cookies oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Bitte besuchen Sie diese Cookie-Richtlinie daher regelmäßig, um über unsere Verwendung von Cookies und verwandten Technologien informiert zu bleiben. Das Datum oben in dieser Cookie-Richtlinie gibt an, wann sie zuletzt aktualisiert wurde.",
        },
        {
          title: "Wo können Sie weitere Informationen erhalten?",
          content:
            "Wenn Sie Fragen zu unserer Verwendung von Cookies oder anderen Technologien haben, senden Sie uns bitte eine E-Mail an privacy@example.com.",
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

