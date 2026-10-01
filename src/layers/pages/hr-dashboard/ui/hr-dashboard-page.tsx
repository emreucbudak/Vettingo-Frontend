"use client";

import { useEffect, useState } from "react";
import { getEmployerJobStatistics } from "@/features/employer-dashboard";
import Link from "next/link";
import {
  funnelStages,
  hrDashboardStats,
  interviews,
  requisitions,
} from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import {
  HrAvatar,
  HrPageHeader,
  HrSectionHeading,
  HrStatGrid,
  HrStatusBadge,
} from "@/entities/hr-dashboard/ui";

function RequisitionOverview() {
  return (
    <section className="min-w-0 lg:col-span-2">
      <HrSectionHeading
        title="Aktif İlanlar"
      />
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] lg:grid">
          <span className="col-span-7">Pozisyon</span>
          <span className="col-span-2">Aday</span>
          <span className="col-span-3 text-right">Durum</span>
        </div>
        <div className="divide-y divide-[#c5c6cd]">
          {requisitions.slice(0, 4).map((requisition) => (
            <article
              className="grid grid-cols-1 gap-3 px-5 py-4 transition-colors hover:bg-[#eff4ff] lg:grid-cols-12 lg:items-center"
              key={requisition.id}
            >
              <span className="lg:col-span-7">
                <span className="block text-sm font-semibold text-[#0b1c30]">
                  {requisition.title}
                </span>
              </span>
              <span className="text-sm font-semibold text-[#0b1c30] lg:col-span-2">
                {requisition.candidates} aday
              </span>
              <span className="lg:col-span-3 lg:text-right">
                <HrStatusBadge status={requisition.status} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TodayInterviews() {
  return (
    <section className="flex flex-col rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 lg:p-6">
      <HrSectionHeading
        actionHref={ROUTES.hrInterviews}
        actionLabel="Takvim"
        title="Bugünün Mülakatları"
      />
      <div className="flex flex-1 flex-col justify-center gap-4">
        {interviews.slice(0, 3).map((interview) => (
          <Link
            className="flex items-start gap-3 border-b border-[#c5c6cd] pb-4 last:border-0 last:pb-0"
            href={ROUTES.hrInterviews}
            key={`${interview.time}-${interview.candidate}`}
          >
            <span className="w-12 shrink-0 text-sm font-semibold text-[#091426]">
              {interview.time}
            </span>
            <HrAvatar initials={interview.initials} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-[#0b1c30]">
                {interview.candidate}
              </span>
              <span className="mt-0.5 block text-[11px] text-[#75777d]">
                {interview.type} · {interview.duration}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FunnelPreview() {
  return (
    <section className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <HrSectionHeading
        actionHref={ROUTES.hrReports}
        actionLabel="Detaylı Rapor"
        title="İşe Alım İstatistikleri"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {funnelStages.map((stage, index) => (
          <article
            className="relative overflow-hidden rounded border border-[#c5c6cd] bg-[#eff4ff] p-4"
            key={stage.label}
          >
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                {index === 3 ? "Teknik Görüşme" : stage.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#0b1c30]">{stage.value}</p>
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
      <HrPageHeader
        title="İşe Alım Kontrol Merkezi"
      />

      <HrStatGrid items={statistics} showIcons={false} />
      {statisticsError && (
        <p className="-mt-5 mb-8 text-sm text-red-700" role="alert">
          İstatistikler çekilemedi, lütfen tekrar deneyiniz.
        </p>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <RequisitionOverview />
        <TodayInterviews />
      </div>

      <FunnelPreview />
    </main>
  );
}
