"use client";

import {
  CompanyCandidateSourceCard,
  CompanyHiringVolumeChart,
  HrReportStatistics,
  useCompanyApplicationStatistics,
  type CompanyApplicationStatistics,
} from "@/features/employer-dashboard";
import { HrSectionHeading } from "@/entities/hr-dashboard/ui";

function FunnelReport({ statistics, error }: {
  statistics: CompanyApplicationStatistics | null;
  error: boolean;
}) {
  const stages = [
    { label: "Başvuru", value: statistics?.totalApplications ?? 0 },
    { label: "İlk İnceleme", value: statistics?.underReview ?? 0 },
    { label: "Mülakat", value: statistics?.interviews ?? 0 },
    { label: "Reddedilen", value: statistics?.rejected ?? 0 },
    { label: "Teklif", value: statistics?.offers ?? 0 },
  ];

  return (
    <section
      className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
      aria-busy={statistics === null && !error}
      aria-live="polite"
    >
      <HrSectionHeading
        title="Sayısal İstatistikler"
      />
      <div className="space-y-3">
        {stages.map((stage, index) => {
          const percentage = statistics && statistics.totalApplications > 0
            ? stage.value * 100 / statistics.totalApplications
            : 0;
          const conversion = statistics
            ? `${percentage.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}%`
            : "—";

          return (
          <article
            className="grid grid-cols-[110px_minmax(0,1fr)_56px] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)_70px]"
            key={stage.label}
          >
            <div>
              <p className="text-xs font-semibold text-[#0b1c30]">{stage.label}</p>
              <p className="mt-0.5 text-[10px] text-[#75777d]">
                {statistics ? `${stage.value.toLocaleString("tr-TR")} aday` : error ? "—" : "Yükleniyor…"}
              </p>
            </div>
            <div className="h-9 overflow-hidden rounded bg-[#eff4ff]">
              <div
                className={`flex h-full items-center px-3 ${
                  index === stages.length - 1 ? "bg-[#006c49] text-white" : "bg-[#dce9ff] text-[#091426]"
                }`}
                style={{ width: `${percentage}%` }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.05em]">
                  {conversion}
                </span>
              </div>
            </div>
            <span className="text-right text-xs font-semibold text-[#45474c]">
              {conversion}
            </span>
          </article>
          );
        })}
      </div>
      {error && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          İstatistikler çekilemedi, lütfen tekrar deneyiniz.
        </p>
      )}
    </section>
  );
}

export function HrReportsPage() {
  const { statistics, error } = useCompanyApplicationStatistics();

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrReportStatistics statistics={statistics} applicationStatisticsError={error} />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <CompanyHiringVolumeChart />
        <CompanyCandidateSourceCard />
      </div>
      <FunnelReport statistics={statistics} error={error} />
    </main>
  );
}
