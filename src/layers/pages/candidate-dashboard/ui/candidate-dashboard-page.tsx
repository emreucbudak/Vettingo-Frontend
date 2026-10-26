"use client";
import { useState } from "react";
import { MdClose, MdOutlineContactPage } from "react-icons/md";
import { useCandidateDashboardData } from "@/features/candidate-dashboard";
import { CandidateShell } from "@/widgets/candidate/shell";
import { CandidateDashboardApplications } from "@/widgets/candidate/dashboard-applications";
import { CandidateRecommendedJobs } from "@/widgets/candidate/recommended-jobs";
import { CandidateUpcomingInterviews } from "@/widgets/candidate/upcoming-interviews";
import { CandidateApplicationStatistics } from "@/widgets/candidate/application-statistics";
import { useUserInformation } from "@/shared/useUserInformation";

export function CandidateDashboardPage() {
  const [isCvReminderVisible, setIsCvReminderVisible] = useState(true);
  const user = useUserInformation();
  const displayName =
    [user?.GivenName, user?.FamilyName]
      .filter(Boolean)
      .join(" ");
  const { applications, interviews, error, isLoading } =
    useCandidateDashboardData(user?.Sub ?? "");
  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 overflow-x-hidden p-4 md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
              Tekrar hoş geldin{displayName ? `, ${displayName}` : ""}
            </h2>
            <p className="mt-2 text-base leading-6 text-[#45474c]">Bugünkü profesyonel durumun ve aktivite özetin burada.</p>
          </div>
        </div>

        {isCvReminderVisible ? (
          <section
            aria-labelledby="cv-reminder-title"
            className="relative mb-6 rounded border border-[#b4d9c6] bg-[#effaf3] p-5 pr-16 md:p-6 md:pr-16"
          >
            <button
              type="button"
              aria-label="CV hatırlatmasını kapat"
              onClick={() => setIsCvReminderVisible(false)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded text-[#45474c] transition-colors hover:bg-[#d8efdf] hover:text-[#0b1c30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006c49]"
            >
              <MdClose aria-hidden="true" focusable="false" className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#d8efdf] text-[#006c49]">
                <MdOutlineContactPage aria-hidden="true" focusable="false" className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <h3 id="cv-reminder-title" className="text-xl font-semibold leading-7 text-[#0b1c30]">
                  Henüz bir CV’n yok
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#45474c]">
                  Kariyerinde yeni bir adım atmaya hazır mısın? Sana uygun iş fırsatlarını keşfetmek,
                  Scout ağında işverenlerin karşısına çıkmak ve iş ilanlarında değerlendirmeye alınmak
                  için hemen CV’ni doldur. Eğitimini, deneyimlerini ve yeteneklerini paylaşarak
                  işverenlerin seni daha yakından tanımasını sağla, güçlü yönlerini öne çıkar ve
                  hayalindeki işe uzanan iş arama yolculuğuna bugün başla.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {error ? (
          <div className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]" role="alert">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <CandidateDashboardApplications applications={applications} isLoading={isLoading} />
            <CandidateRecommendedJobs userId={user?.Sub ?? ""} />
          </div>
          <div className="space-y-6 md:col-span-4">
            <CandidateUpcomingInterviews interviews={interviews} isLoading={isLoading} />
            <CandidateApplicationStatistics userId={user?.Sub ?? ""} />
          </div>
        </div>
      </main>
    </CandidateShell>
  );
}
