"use client";

import { HrSectionHeading } from "@/entities/hr-dashboard/ui";
import { useCompanyCandidateSource } from "../model/use-company-candidate-source";

export function CompanyCandidateSourceCard() {
  const { source, error } = useCompanyCandidateSource();
  const scout = Math.max(0, source?.scout ?? 0);
  const application = Math.max(0, source?.application ?? 0);
  const total = scout + application;
  const scoutPercentage = total > 0 ? scout * 100 / total : 0;
  const applicationPercentage = total > 0 ? 100 - scoutPercentage : 0;
  const formatPercentage = (value: number) => value.toLocaleString("tr-TR", { maximumFractionDigits: 1 });
  const sources = [
    { label: "Scout", value: scoutPercentage, color: "bg-[#091426]" },
    { label: "Uygulamadan", value: applicationPercentage, color: "bg-[#006c49]" },
  ];

  return (
    <section
      className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
      aria-busy={source === null && !error}
      aria-live="polite"
    >
      <HrSectionHeading title="Aday Kaynakları" />
      <div
        aria-label={source
          ? `${source.candidateCount.toLocaleString("tr-TR")} aday. Scout: %${formatPercentage(scoutPercentage)}, Uygulamadan: %${formatPercentage(applicationPercentage)}`
          : error ? "Aday kaynakları yüklenemedi" : "Aday kaynakları yükleniyor"}
        className="relative mx-auto mt-4 h-40 w-40 rounded-full"
        role="img"
        style={{
          background: total > 0
            ? `conic-gradient(#091426 0 ${scoutPercentage}%, #006c49 ${scoutPercentage}% 100%)`
            : "#eff4ff",
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#f8f9ff]">
          <span className="text-2xl font-semibold text-[#0b1c30]">
            {source ? source.candidateCount.toLocaleString("tr-TR") : "—"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.05em] text-[#75777d]">Aday</span>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {sources.map((item) => (
          <div className="flex items-center justify-between gap-3" key={item.label}>
            <span className="flex items-center gap-2 text-xs text-[#45474c]">
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              {item.label}
            </span>
            <span className="text-xs font-semibold text-[#0b1c30]">
              {source ? `%${formatPercentage(item.value)}` : "—"}
            </span>
          </div>
        ))}
      </div>
      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          Aday kaynakları yüklenemedi, lütfen tekrar deneyiniz.
        </p>
      ) : source === null ? (
        <p className="mt-4 text-sm text-[#75777d]" role="status">Yükleniyor…</p>
      ) : total === 0 && source.candidateCount === 0 ? (
        <p className="mt-4 text-sm text-[#75777d]" role="status">Henüz aday kaynağı kaydı bulunmuyor.</p>
      ) : null}
    </section>
  );
}
