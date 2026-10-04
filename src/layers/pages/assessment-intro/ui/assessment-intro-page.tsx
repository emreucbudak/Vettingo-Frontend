"use client";

import { MdOutlineAutoAwesome, MdOutlineDescription, MdOutlineSchedule, MdOutlineVerifiedUser } from "react-icons/md";

import { useRouter } from "next/navigation";
import { assessmentOverview } from "@/entities/assessment";
import { grantAssessmentAccess } from "@/features/assessment-access";
import { ROUTES } from "@/shared/config/routes";

const examDetails = [
  {
    label: "Sınav süresi",
    value: `${assessmentOverview.durationInSeconds / 60} dakika`,
    detail: "Sayaç sınav başladığında çalışır.",
  },
  {
    label: "Toplam soru",
    value: `${assessmentOverview.totalQuestions} soru`,
    detail: "Çoktan seçmeli teknik sorular.",
  },
  {
    label: "Değerlendirme türü",
    value: "AI mülakatı",
    detail: "Yanıtlar otomatik olarak değerlendirilir.",
  },
  {
    label: "Oturum",
    value: "Tek oturum",
    detail: "Sınavı kesintisiz tamamlamanız beklenir.",
  },
] as const;

const examRules = [
  "Sınava başlamadan önce internet bağlantınızı kontrol edin.",
  "Sorular arasında ilerleyebilir ve soruları incelemek üzere işaretleyebilirsiniz.",
  "Süre sona erdiğinde mevcut yanıtlarınız otomatik olarak kaydedilir.",
  "Sınav sırasında bu tarayıcı sekmesini kapatmayın.",
] as const;

function InfoIcon({ name }: { name: "clock" | "document" | "spark" | "shield" }) {
  const icons = { clock: MdOutlineSchedule, document: MdOutlineDescription, spark: MdOutlineAutoAwesome, shield: MdOutlineVerifiedUser };
  const Icon = icons[name];
  return <Icon aria-hidden="true" className="h-5 w-5" />;
}

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
            <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[#dce9ff]">
              Teknik değerlendirme
            </span>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Sınava başlamadan önce
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#dce9ff] sm:text-base">
              Bu değerlendirme teknik problem çözme ve yazılım geliştirme yaklaşımınızı ölçer. Başlamadan önce sınav bilgilerini ve kuralları inceleyin.
            </p>
          </header>

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_320px]">
            <div>
              <h2 className="text-xl font-semibold text-[#091426]">Sınav bilgileri</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {examDetails.map((detail, index) => (
                  <article className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-5" key={detail.label}>
                    <div className="assessment-info-icon mb-4 flex h-10 w-10 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
                      <InfoIcon name={(["clock", "document", "spark", "shield"] as const)[index]} />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.06em] text-[#75777d]">{detail.label}</p>
                    <p className="mt-1 text-lg font-semibold text-[#091426]">{detail.value}</p>
                    <p className="mt-2 text-sm leading-5 text-[#45474c]">{detail.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
              <h2 className="text-lg font-semibold text-[#091426]">Başlamadan önce</h2>
              <ul className="mt-4 space-y-4">
                {examRules.map((rule) => (
                  <li className="flex gap-3 text-sm leading-5 text-[#45474c]" key={rule}>
                    <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d7f3e7] text-xs font-bold text-[#006c49]">✓</span>
                    {rule}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded border border-[#c5c6cd] bg-white p-4 text-xs leading-5 text-[#45474c]">
                “Sınava Başla” seçeneğine tıkladığınızda süre hemen başlar.
              </div>
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
