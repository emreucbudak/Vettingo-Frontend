"use client";

import { HrStatGrid } from "@/entities/hr-dashboard/ui";
import { useInterviewStatistics } from "../model/use-interview-statistics";

export function HrInterviewStatistics() {
  const { statistics, error } = useInterviewStatistics();
  const placeholder = error ? "—" : "Yükleniyor…";

  return (
    <div
      aria-label="Mülakat istatistikleri"
      aria-busy={statistics === null && !error}
      aria-live="polite"
    >
      <HrStatGrid showIcons={false}
        items={[
          {
            label: "Toplam",
            value: statistics ? statistics.totalInterviews.toLocaleString("tr-TR") : placeholder,
            icon: "calendar_month",
            tone: "blue",
          },
          {
            label: "Bu Ay",
            value: statistics ? statistics.thisMonth.toLocaleString("tr-TR") : placeholder,
            icon: "work_history",
            tone: "green",
          },
          {
            label: "Bu Hafta",
            value: statistics ? statistics.thisWeek.toLocaleString("tr-TR") : placeholder,
            icon: "forum",
            tone: "amber",
          },
          {
            label: "Bugün",
            value: statistics ? statistics.today.toLocaleString("tr-TR") : placeholder,
            icon: "verified",
            tone: "purple",
          },
        ]}
      />
    </div>
  );
}
