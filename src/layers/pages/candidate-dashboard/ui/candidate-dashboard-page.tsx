"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useCandidateDashboardData } from "@/features/candidate-dashboard";
import { getAuthToken, getTokenSessionUser, isTokenExpired } from "@/shared/auth";
import { ROUTES } from "@/shared/config/routes";
import { CandidateShell } from "@/widgets/candidate/shell";
import { CandidateDashboardApplications } from "@/widgets/candidate/dashboard-applications";
import { CandidateRecommendedJobs } from "@/widgets/candidate/recommended-jobs";
import { CandidateSkillRadar } from "@/widgets/candidate/skill-radar";
import { CandidateUpcomingInterviews } from "@/widgets/candidate/upcoming-interviews";


const subscribeToBrowserState = () => () => undefined;
const getServerToken = (): string | null => null;
export function CandidateDashboardPage() {
  const token = useSyncExternalStore<string | null>(subscribeToBrowserState, getAuthToken, getServerToken);
  const sessionUser = token && !isTokenExpired(token) ? getTokenSessionUser(token) : null;
  const { applications, interviews, error, isLoading } = useCandidateDashboardData(sessionUser?.id ?? null);

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 overflow-x-hidden p-4 md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
              Tekrar hoş geldin, {sessionUser?.firstName ?? "Aday"}.
            </h2>
            <p className="mt-2 text-base leading-6 text-[#45474c]">Bugünkü profesyonel durumun ve aktivite özetin burada.</p>
          </div>
          <Link
            className="w-full rounded bg-[#091426] px-6 py-2 text-center text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b] md:w-auto"
            href={ROUTES.candidateSettings}
          >
            Profili Güncelle
          </Link>
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
            <CandidateSkillRadar />
          </div>
        </div>
      </main>
    </CandidateShell>
  );
}
