"use client";

import { useCandidateApplicationStatistics } from "@/features/candidate-dashboard";

export function CandidateApplicationStatistics({ userId }: { userId: string }) {
  const { statistics: data, isLoading, error } = useCandidateApplicationStatistics(userId);
  const statistics = [
    { label: "Toplam Başvuru", value: data?.totalApplications ?? 0, color: "text-[#0b1c30]" },
    { label: "Devam Eden", value: data?.inProgress ?? 0, color: "text-[#0b1c30]" },
    { label: "Teklif Alınan", value: data?.offers ?? 0, color: "text-[#006c49]" },
    { label: "Reddedilen", value: data?.rejected ?? 0, color: "text-[#93000a]" },
  ];

  return (
    <section aria-labelledby="candidate-statistics-title" aria-busy={isLoading}>
      <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]" id="candidate-statistics-title">Başvuru İstatistikleri</h3>
      <div className="rounded border border-[#c5c6cd] bg-white p-4">
        {error ? <p className="mb-3 text-sm text-[#93000a]" role="alert">{error}</p> : null}
        <dl className="grid grid-cols-2 gap-4">
          {statistics.map((statistic) => (
            <div className="rounded bg-[#f8f9ff] p-3" key={statistic.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">{statistic.label}</dt>
              <dd className={`mt-2 text-2xl font-semibold ${statistic.color}`}>
                {error ? "—" : isLoading ? "…" : statistic.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
