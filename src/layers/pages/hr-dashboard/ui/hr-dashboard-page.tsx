"use client";

import { useEffect, useState } from "react";
import { CompanyJobPostingsOverview, getEmployerJobStatistics, useCompanyApplicationStatistics } from "@/features/employer-dashboard";
import { useTodayInterviews } from "@/features/hr-interviews";
import Link from "next/link";
import { hrDashboardStats } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import {
  HrAvatar,
  HrSectionHeading,
  HrStatGrid,
} from "@/entities/hr-dashboard/ui";

function TodayInterviews() {
  const { interviews, error } = useTodayInterviews();

  return (
    <section className="flex flex-col rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 lg:p-6">
      <HrSectionHeading
        actionHref={ROUTES.hrInterviews}
        actionLabel="Takvim"
        title="Bugünün Mülakatları"
      />
      <div className="flex max-h-80 flex-1 flex-col justify-start gap-4 overflow-y-auto" aria-live="polite">
        {error ? (
          <div className="text-sm text-red-700" role="alert">
            <p>Mülakatlar yüklenemedi.</p>
          </div>
        ) : interviews === null ? (
          <p className="text-sm text-[#75777d]">Mülakatlar yükleniyor…</p>
        ) : interviews.length === 0 ? (
          <p className="text-sm text-[#75777d]">Bugün planlanmış mülakat bulunmuyor.</p>
        ) : interviews.map((interview) => (
          <Link
            className="flex shrink-0 items-center gap-3 border-b border-[#c5c6cd] pb-4 last:border-0 last:pb-0"
            href={ROUTES.hrInterviews}
            key={interview.id}
          >
            <time className="w-12 shrink-0 text-sm font-semibold text-[#091426]" dateTime={interview.startedTime.slice(0, 5)}>
              {interview.startedTime.slice(0, 5).replace(":", ".")}
            </time>
            <HrAvatar initials={`${interview.name.trim().charAt(0)}${interview.surname.trim().charAt(0)}`.toLocaleUpperCase("tr-TR")} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-[#0b1c30]">
                {interview.name} {interview.surname}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FunnelPreview() {
  const { statistics, error } = useCompanyApplicationStatistics();
  const stages = [
    { label: "Başvuru", metric: "totalApplications" },
    { label: "İlk İnceleme", metric: "underReview" },
    { label: "Mülakat", metric: "interviews" },
    { label: "Teklif", metric: "offers" },
    { label: "Red", metric: "rejected" },
  ] as const;

  return (
    <section
      aria-busy={statistics === null && !error}
      className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
    >
      <HrSectionHeading
        actionHref={ROUTES.hrReports}
        actionLabel="Detaylı Rapor"
        title="İşe Alım İstatistikleri"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {stages.map((stage) => (
          <article
            className="relative overflow-hidden rounded border border-[#c5c6cd] bg-[#eff4ff] p-4"
            key={stage.label}
          >
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                {stage.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#0b1c30]" aria-live="polite">
                {statistics
                  ? statistics[stage.metric].toLocaleString("tr-TR")
                  : error ? "—" : "Yükleniyor…"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HrDashboardPage() {
  const [openJobCount, setOpenJobCount] = useState<number | null>(null);
  const [statisticsError, setStatisticsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getEmployerJobStatistics(controller.signal)
      .then((statistics) => {
        if (!controller.signal.aborted) setOpenJobCount(statistics.activeJobPostings);
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatisticsError(true);
      });
    return () => controller.abort();
  }, []);

  const statistics = hrDashboardStats.map((stat) =>
    stat.label === "Açık İlan"
      ? { ...stat, value: openJobCount !== null ? openJobCount.toLocaleString("tr-TR") : statisticsError ? "—" : "Yükleniyor…" }
      : stat,
  );

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrStatGrid items={statistics} showIcons={false} />
      {statisticsError && (
        <p className="-mt-5 mb-8 text-sm text-red-700" role="alert">
          İstatistikler çekilemedi, lütfen tekrar deneyiniz.
        </p>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <CompanyJobPostingsOverview showRetry={false} />
        <TodayInterviews />
      </div>

      <FunnelPreview />
    </main>
  );
}
