"use client";

import { monthlyHiring } from "@/entities/hr-dashboard";
import {
  HrReportStatistics,
  useCompanyApplicationStatistics,
  type CompanyApplicationStatistics,
} from "@/features/employer-dashboard";
import { HrSectionHeading } from "@/entities/hr-dashboard/ui";

function HiringTrendChart() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6 xl:col-span-2">
      <HrSectionHeading
        title="Aylık İşe Alım Hacmi"
      />
      <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-[#c5c6cd] px-3 pt-4 sm:gap-6 sm:px-6">
        {monthlyHiring.map((month, index) => (
          <div className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={month.label}>
            <span className="text-xs font-semibold text-[#0b1c30]">{month.value}</span>
            <div
              className={`w-full max-w-14 rounded-t transition-colors ${
                index === monthlyHiring.length - 1
                  ? "bg-[#006c49]"
                  : "bg-[#dce9ff] hover:bg-[#9cb7e8]"
              }`}
              style={{ height: `${month.value}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 px-3 pt-3 sm:gap-6 sm:px-6">
        {monthlyHiring.map((month) => (
          <span
            className="flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]"
            key={month.label}
          >
            {month.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function SourceMixCard() {
  const sources = [
    { label: "Doğrudan Başvuru", value: 46, color: "bg-[#091426]" },
    { label: "Referans", value: 24, color: "bg-[#006c49]" },
    { label: "Kariyer Platformları", value: 18, color: "bg-[#9cb7e8]" },
    { label: "Yetenek Havuzu", value: 12, color: "bg-[#e0a62b]" },
  ] as const;

  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <HrSectionHeading title="Aday Kaynakları" />
      <div
        aria-label="Aday kaynaklarının yüzdesel dağılımı"
        className="relative mx-auto mt-4 h-40 w-40 rounded-full"
        role="img"
        style={{
          background:
            "conic-gradient(#091426 0 46%, #006c49 46% 70%, #9cb7e8 70% 88%, #e0a62b 88% 100%)",
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#f8f9ff]">
          <span className="text-2xl font-semibold text-[#0b1c30]">428</span>
          <span className="text-[10px] uppercase tracking-[0.05em] text-[#75777d]">Aday</span>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {sources.map((source) => (
          <div className="flex items-center justify-between gap-3" key={source.label}>
            <span className="flex items-center gap-2 text-xs text-[#45474c]">
              <span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />
              {source.label}
            </span>
            <span className="text-xs font-semibold text-[#0b1c30]">%{source.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

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
        <HiringTrendChart />
        <SourceMixCard />
      </div>
      <FunnelReport statistics={statistics} error={error} />
    </main>
  );
}
