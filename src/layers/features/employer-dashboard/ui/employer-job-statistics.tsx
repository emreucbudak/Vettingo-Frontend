"use client";

import { useEffect, useState } from "react";
import { getStats, type EmployerStats } from "../api/employer-dashboard-api";
import { MaterialIcon } from "@/shared/ui/material-icon";

export function EmployerJobStatistics() {
  const [statistics, setStatistics] = useState<EmployerStats | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    getStats(controller.signal)
      .then(result => { if (!controller.signal.aborted) setStatistics(result); })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, []);
  const placeholder = error ? "—" : "Yükleniyor…";
  const items = [
    { label: "Toplam İlan", value: statistics ? statistics.totalJobPostings.toLocaleString("tr-TR") : placeholder, icon: "list_alt" },
    { label: "Aktif İlan", value: statistics ? statistics.activeJobPostings.toLocaleString("tr-TR") : placeholder, icon: "campaign" },
    { label: "Toplam Başvuru", value: statistics ? statistics.totalApplications.toLocaleString("tr-TR") : placeholder, icon: "group" },
    { label: "Aktif Başvuru", value: statistics ? statistics.activeApplications.toLocaleString("tr-TR") : placeholder },
  ];

  return (
    <section className="mb-7" aria-label="İlan istatistikleri">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4" key={item.label}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                {item.label}
              </p>
              {item.icon && (
                <MaterialIcon className="text-[20px] text-[#45474c]">{item.icon}</MaterialIcon>
              )}
            </div>
            <p className="mt-3 text-2xl font-semibold text-[#0b1c30]" aria-live="polite">{item.value}</p>
          </article>
        ))}
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-700" role="alert">İstatistikler çekilemedi, lütfen tekrar deneyiniz.</p>
      )}
    </section>
  );
}
