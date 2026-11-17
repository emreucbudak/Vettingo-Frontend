"use client";

import { useRouter } from "next/navigation";
import { assessmentOverview } from "@/entities/assessment";
import { grantAssessmentAccess } from "@/features/assessment-access";
import { ROUTES } from "@/shared/config/routes";

const examDetails = [
  {
    label: "Sınav süresi",
    value: `${assessmentOverview.durationInSeconds / 60} dakika`,
  },
  {
    label: "Toplam soru",
    value: `${assessmentOverview.totalQuestions} soru`,
  },
  {
    label: "Geçme puanı",
    value: assessmentOverview.passingScore,
  },
  {
    label: "Oturum",
    value: "Tek oturum",
  },
] as const;

const examRules = [
  "Sınava başlamadan önce internet bağlantınızı kontrol edin.",
  "Sorular arasında ilerleyebilir ve soruları incelemek üzere işaretleyebilirsiniz.",
  "Süre sona erdiğinde mevcut yanıtlarınız otomatik olarak kaydedilir.",
  "Sınav sırasında bu tarayıcı sekmesini kapatmayın.",
  "“Sınava Başla” seçeneğine tıkladığınızda süre hemen başlar.",
] as const;

export function AssessmentIntroPage() {
  const router = useRouter();

  const startAssessment = () => {
    grantAssessmentAccess();
    router.push(ROUTES.assessmentSession);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] px-4 py-8 text-[#0b1c30] md:px-8 md:py-12">
      <main className="mx-auto w-full max-w-[1056px]">
        <section className="overflow-hidden rounded-lg border border-[#c5c6cd] bg-white shadow-[0_20px_60px_rgba(9,20,38,0.08)]">
          <header className="border-b border-[#c5c6cd] bg-[#091426] px-6 py-8 text-white sm:px-10 sm:py-10">
            <h1 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Sınav Adı
            </h1>
          </header>

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-6 text-[#45474c] sm:text-base">
                Sınava geçmeden önce aşağıdaki sınav bilgilerini ve “Başlamadan önce” bölümünde yer alan kuralları dikkatlice okuyun.
                Sınav süresini ve soru sayısını göz önünde bulundurarak sınavı tamamlamak için yeterli zaman ayırın.
                Başlamadan önce internet bağlantınızı kontrol edin ve sınavı kesintisiz sürdürebileceğiniz bir ortam hazırlayın.
                “Sınava Başla” düğmesine bastığınızda sınav süresi başlar. Bu düğmeye basan her aday, belirtilen kuralları okumuş
                ve sınav boyunca bu kurallara uymayı kabul etmiş sayılır.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:mt-auto">
                {examDetails.map((detail) => (
                  <article className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-5" key={detail.label}>
                    <p className="text-xs font-medium uppercase tracking-[0.06em] text-[#75777d]">{detail.label}</p>
                    <p className="mt-1 text-lg font-semibold text-[#091426]">{detail.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
              <h2 className="text-lg font-semibold text-[#091426]">Başlamadan önce</h2>
              <ul className="mt-4 list-disc space-y-4 ps-5 text-sm leading-5 text-[#45474c]">
                {examRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded bg-[#091426] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091426]" onClick={startAssessment} type="button">
                Sınava Başla
              </button>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
