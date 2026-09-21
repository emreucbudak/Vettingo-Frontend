"use client";

import { employerStats } from "@/entities/employer-dashboard";
import { useEmployerJobStatistics } from "../model/use-employer-job-statistics";

export function EmployerStatistics() {
  const { statistics, error } = useEmployerJobStatistics();

  return (
    <section className="mb-8" aria-label="İşveren istatistikleri">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {employerStats.map((stat) => {
          const value = "metric" in stat
            ? statistics
              ? statistics[stat.metric].toLocaleString("tr-TR")
              : error ? "—" : "Yükleniyor…"
            : stat.value;
          return (
            <article className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-6" key={stat.label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                {stat.label}
              </h3>
              <p className="mt-4 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]" aria-live="polite">
                {value}
              </p>
            </article>
          );
        })}
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          İlan sayıları yüklenemedi.
        </p>
      )}
    </section>
  );
}
