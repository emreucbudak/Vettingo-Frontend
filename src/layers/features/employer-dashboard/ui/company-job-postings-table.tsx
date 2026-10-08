"use client";

import type { CompanyJobPosting } from "../api/employer-dashboard-api";

export const companyJobStatusLabels: Record<CompanyJobPosting["status"], string> = {
  Draft: "Taslak",
  Active: "Aktif",
  Closed: "Kapalı",
  Archived: "Arşivlenmiş",
};

export function CompanyJobPostingsTable({
  postings,
  error = false,
  onRetry,
  showDetails = false,
  emptyMessage = "Henüz şirketinize ait bir ilan bulunmuyor.",
}: {
  postings: readonly CompanyJobPosting[] | null;
  error?: boolean;
  onRetry?: () => void;
  showDetails?: boolean;
  emptyMessage?: string;
}) {
  const loading = postings === null && !error;

  return (
    <div className="overflow-x-auto rounded border border-[#c5c6cd] bg-[#f8f9ff]" aria-busy={loading}>
      <table className="w-full min-w-[580px] table-fixed text-left">
        <caption className="sr-only">Şirket ilanları, aday sayıları ve durumları</caption>
        <thead className="border-b border-[#c5c6cd] bg-[#eff4ff] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          <tr>
            <th className="w-[56%] px-6 py-4" scope="col">Pozisyon</th>
            <th className="w-[20%] px-6 py-4" scope="col">Aday Sayısı</th>
            <th className="w-[24%] px-6 py-4 text-right" scope="col">Durum</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#c5c6cd] text-sm text-[#0b1c30]">
          {error ? (
            <tr>
              <td className="px-6 py-8 text-center" colSpan={3}>
                <p className="text-red-700" role="alert">İlanlar yüklenemedi. Lütfen tekrar deneyin.</p>
                {onRetry ? (
                  <button className="mt-3 rounded border border-[#c5c6cd] px-4 py-2 font-semibold hover:bg-[#eff4ff]" onClick={onRetry} type="button">
                    Tekrar Dene
                  </button>
                ) : null}
              </td>
            </tr>
          ) : loading ? (
            Array.from({ length: 3 }, (_, index) => (
              <tr key={index}>
                <td className="px-6 py-5"><span className="sr-only">İlanlar yükleniyor…</span><div aria-hidden="true" className="h-5 w-3/4 animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none" /></td>
                <td className="px-6 py-5"><div aria-hidden="true" className="h-5 w-16 animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none" /></td>
                <td className="px-6 py-5"><div aria-hidden="true" className="ml-auto h-5 w-20 animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none" /></td>
              </tr>
            ))
          ) : postings?.length === 0 ? (
            <tr><td className="px-6 py-10 text-center text-[#45474c]" colSpan={3}>{emptyMessage}</td></tr>
          ) : postings?.map((posting) => (
            <tr className="transition-colors hover:bg-[#eff4ff]" key={posting.id}>
              <th className="break-words px-6 py-5 font-semibold" scope="row">
                {posting.title}
                {showDetails ? (
                  <span className="mt-1 block text-xs font-normal text-[#45474c]">
                    {posting.cityName} · {posting.publishedAt
                      ? `${new Date(posting.publishedAt).toLocaleDateString("tr-TR")} tarihinde yayınlandı`
                      : "Henüz yayınlanmadı"}
                  </span>
                ) : null}
              </th>
              <td className="px-6 py-5 font-semibold">{posting.applicants.toLocaleString("tr-TR")} aday</td>
              <td className="px-6 py-5 text-right">
                <span className="inline-flex items-center gap-2 text-xs text-[#45474c]">
                  <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${posting.status === "Active" ? "bg-[#006c49]" : "bg-[#75777d]"}`} />
                  {companyJobStatusLabels[posting.status] ?? posting.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
