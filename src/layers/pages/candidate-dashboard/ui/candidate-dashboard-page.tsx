"use client";
import { useCandidateDashboardData } from "@/features/candidate-dashboard";
import { CandidateShell } from "@/widgets/candidate/shell";
import { CandidateDashboardApplications } from "@/widgets/candidate/dashboard-applications";
import { CandidateRecommendedJobs } from "@/widgets/candidate/recommended-jobs";
import { CandidateUpcomingInterviews } from "@/widgets/candidate/upcoming-interviews";
import { useUserInformation } from "@/shared/useUserInformation";

export function CandidateDashboardPage() {
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

        {error ? (
          <div className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]" role="alert">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <CandidateDashboardApplications applications={applications} isLoading={isLoading} />
            <CandidateRecommendedJobs />
          </div>
          <div className="space-y-6 md:col-span-4">
            <CandidateUpcomingInterviews interviews={interviews} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </CandidateShell>
  );
}
