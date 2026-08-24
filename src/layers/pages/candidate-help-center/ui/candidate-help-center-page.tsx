import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { CandidateShell } from "@/widgets/candidate/shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const helpTopics = [
  {
    icon: "assignment_ind",
    title: "Başvurular",
    description: "Başvuru durumları ve işe alım süreci.",
    href: ROUTES.candidateApplicationsDocumentation,
  },
  {
    icon: "badge",
    title: "Profil ve Özgeçmiş",
    description: "Profil bilgileri, deneyimler ve yetkinlikler.",
    href: ROUTES.candidateProfileDocumentation,
  },
  {
    icon: "work",
    title: "İş Önerileri",
    description: "İlan önerileri ve yapay zeka eşleşmeleri.",
    href: ROUTES.candidateJobRecommendationsDocumentation,
  },
  {
    icon: "calendar_month",
    title: "Değerlendirme ve Mülakat",
    description: "Mülakat ve değerlendirmeler.",
    href: ROUTES.candidateAssessmentInterviewDocumentation,
  },
] as const;

const frequentlyAskedQuestions = [
  {
    question: "Profilimi ve özgeçmişimi nasıl güncelleyebilirim?",
    answer:
      "Aday panelindeki Profili Güncelle adımından kişisel bilgilerini, deneyimlerini ve yetkinliklerini düzenleyebilirsin. Güncel bilgiler iş önerilerinin ve eşleşme sonuçlarının doğruluğunu artırır.",
  },
  {
    question: "Başvurularımın hangi aşamada olduğunu nereden görebilirim?",
    answer:
      "Sol menüdeki Başvurular sayfasında her başvurunun güncel durumunu ve sürecin hangi adımında olduğunu görebilirsin. Görüşme planlandığında ayrıntılar Yaklaşan Mülakatlar alanında da gösterilir.",
  },
  {
    question: "Yapay zeka eşleşme skoru neyi gösterir?",
    answer:
      "Eşleşme skoru; deneyim, yetkinlik, rol gereksinimleri ve çalışma tercihlerini birlikte değerlendirir. Bu skor bir işe alım kararı değil, sana uygun fırsatları önceliklendiren yardımcı bir göstergedir.",
  },
  {
    question: "Önerilen işlere nasıl başvurabilirim?",
    answer:
      "İşler sayfasından ilan ayrıntılarını inceleyebilir ve başvuru adımını başlatabilirsin. Başvurun tamamlandığında ilan Aday Paneli içindeki Başvurular bölümünde görünür.",
  },
  {
    question: "Mülakat veya değerlendirme bağlantım çalışmıyor, ne yapmalıyım?",
    answer:
      "Önce bağlantının tarih ve saatini kontrol et. Sorun devam ederse destek ekibiyle ekran görüntüsü ve hata ayrıntılarını paylaşabilirsin.",
  },
  {
    question: "Hesabım ve kişisel verilerimle ilgili nasıl destek alabilirim?",
    answer:
      "Hesap güvenliği veya kişisel verilerle ilgili taleplerin için destek ekibiyle iletişime geçebilirsin. Kimlik ya da hesap güvenliği içeren talepler ek doğrulama gerektirebilir.",
  },
] as const;

function HelpTopics() {
  return (
    <section className="mb-10">
      <h1 className="mb-5 text-xl font-semibold leading-7 text-[#0b1c30]">
        Hangi konuda yardıma ihtiyacın var?
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {helpTopics.map((topic) => (
          <Link
            className="group flex h-full flex-col rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:-translate-y-0.5 hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)]"
            href={topic.href}
            key={topic.title}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
              <MaterialIcon className="text-[21px]">{topic.icon}</MaterialIcon>
            </span>
            <h2 className="mt-4 text-sm font-semibold text-[#0b1c30]">
              {topic.title}
            </h2>
            <p className="mt-2 text-xs leading-5 text-[#45474c]">
              {topic.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#006c49]">
              Dokümantasyonu Oku
              <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section>
      <h2 className="mb-5 text-xl font-semibold leading-7 text-[#0b1c30]">
        Sıkça Sorulan Sorular
      </h2>

      <div className="space-y-3">
        {frequentlyAskedQuestions.map((item) => (
          <details
            className="group rounded border border-[#c5c6cd] bg-[#f8f9ff] open:border-[#091426]"
            key={item.question}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#0b1c30] marker:content-none md:px-6">
              {item.question}
              <MaterialIcon className="shrink-0 text-[20px] text-[#45474c] transition-transform group-open:rotate-180">
                expand_more
              </MaterialIcon>
            </summary>
            <p className="border-t border-[#c5c6cd] px-5 py-4 text-sm leading-6 text-[#45474c] md:px-6">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CandidateHelpCenterPage() {
  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <HelpTopics />
        <FrequentlyAskedQuestions />
      </main>
    </CandidateShell>
  );
}
