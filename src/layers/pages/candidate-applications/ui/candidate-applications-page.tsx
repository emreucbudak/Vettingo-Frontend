"use client";
import { useEffect, useState } from "react";
import { useCandidateDashboardData, getCandidateApplicationStatistics, type CandidateApplicationStatistics } from "@/features/candidate-dashboard";
import { CandidateApplicationHistory } from "@/widgets/candidate/application-history";
import { CandidateShell } from "@/widgets/candidate/shell";
import { useUserInformation } from "@/shared/useUserInformation";

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <article className="rounded border border-[#c5c6cd] bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
            {label}
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-[#0b1c30]">
            {value}
          </p>
        </div>
      </div>
    </article>
  );
}

export function CandidateApplicationsPage() {
  const user = useUserInformation();
  const { applications, error, isLoading } = useCandidateDashboardData(
    user?.Sub ?? "",
  );
  const candidateId = user?.Sub;
  const [statsResult, setStatsResult] = useState<{ candidateId: string; data: CandidateApplicationStatistics | null; error: boolean } | null>(null);
  useEffect(() => {
    if (!candidateId) return;
    const controller = new AbortController();
    getCandidateApplicationStatistics(controller.signal)
      .then(data => { if (!controller.signal.aborted) setStatsResult({ candidateId, data, error: false }); })
      .catch(() => { if (!controller.signal.aborted) setStatsResult({ candidateId, data: null, error: true }); });
    return () => controller.abort();
  }, [candidateId]);
  const current = statsResult?.candidateId === candidateId ? statsResult : null;
  const statistics = current?.data;
  const placeholder = current?.error ? "—" : "Yükleniyor…";

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Toplam Başvuru" value={statistics?.totalApplications ?? placeholder} />
          <StatCard label="Devam Eden" value={statistics?.inProgress ?? placeholder} />
          <StatCard label="Mülakat" value={statistics?.interviews ?? placeholder} />
          <StatCard label="Sonuçlanan" value={statistics?.completed ?? placeholder} />
        </section>

        {current?.error && <p className="mb-6 text-sm text-[#93000a]" role="alert">İstatistikler çekilemedi, lütfen tekrar deneyiniz.</p>}

        {error ? (
          <div
            className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
          <div className="flex flex-col gap-2 border-b border-[#c5c6cd] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0b1c30]">
                Başvuru Geçmişi
              </h2>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {isLoading ? "Yükleniyor" : `${applications.length} başvuru`}
            </span>
          </div>
          <CandidateApplicationHistory applications={applications} isLoading={isLoading} />
        </section>
      </main>
    </CandidateShell>
  );
}
