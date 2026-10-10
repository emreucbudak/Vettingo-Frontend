"use client";

import { useEffect, useState } from "react";
import { HrStatGrid } from "@/entities/hr-dashboard/ui";
import { getEmployerJobStatistics, type CompanyApplicationStatistics } from "../api/employer-dashboard-api";

export function HrReportStatistics({ statistics, applicationStatisticsError }: {
  statistics: CompanyApplicationStatistics | null;
  applicationStatisticsError: boolean;
}) {
  const [totalJobPostings, setTotalJobPostings] = useState<number | null>(null);
  const [jobStatisticsError, setJobStatisticsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getEmployerJobStatistics(controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setTotalJobPostings(result.totalJobPostings);
      })
      .catch(() => {
        if (!controller.signal.aborted) setJobStatisticsError(true);
      });
    return () => controller.abort();
  }, []);

  const applicationPlaceholder = applicationStatisticsError ? "—" : "Yükleniyor…";
  // Submitted, UnderReview and Interview are the ongoing application stages.
  const inProgress = statistics
    ? statistics.totalApplications - statistics.offers - statistics.rejected
    : null;

  return (
    <div
      aria-label="Rapor istatistikleri"
      aria-busy={
        (totalJobPostings === null && !jobStatisticsError)
        || (statistics === null && !applicationStatisticsError)
      }
      aria-live="polite"
    >
      <HrStatGrid
        showIcons={false}
        items={[
          {
            label: "Toplam İlan",
            value: totalJobPostings !== null
              ? totalJobPostings.toLocaleString("tr-TR")
              : jobStatisticsError ? "—" : "Yükleniyor…",
            icon: "description",
            tone: "blue",
          },
          {
            label: "Toplam Başvuru",
            value: statistics
              ? statistics.totalApplications.toLocaleString("tr-TR")
              : applicationPlaceholder,
            icon: "forum",
            tone: "green",
          },
          {
            label: "Devam Eden",
            value: inProgress !== null ? inProgress.toLocaleString("tr-TR") : applicationPlaceholder,
            icon: "handshake",
            tone: "purple",
          },
          {
            label: "Reddedilen",
            value: statistics ? statistics.rejected.toLocaleString("tr-TR") : applicationPlaceholder,
            icon: "work_history",
            tone: "amber",
          },
        ]}
      />
      {(jobStatisticsError || applicationStatisticsError) && (
        <p className="-mt-5 mb-8 text-sm text-red-700" role="alert">
          İstatistikler çekilemedi, lütfen tekrar deneyiniz.
        </p>
      )}
    </div>
  );
}
