"use client";

import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { useCandidateRecommendedJobs } from "@/features/candidate-dashboard";

function formatPublishedDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? "Yayın tarihi belirtilmedi"
    : `${new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium" }).format(date)} tarihinde yayınlandı`;
}

export function CandidateRecommendedJobs({ userId }: { userId: string }) {
  const { jobs, error, isLoading } = useCandidateRecommendedJobs(userId);
  return (
    <section aria-busy={isLoading}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Yapay Zeka Önerili Fırsatlar</h3>
        <Link className="shrink-0 text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49] hover:underline" href={ROUTES.candidateJobs}>
          Tümünü Gör
        </Link>
      </div>
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {isLoading ? (
          <p className="p-4 text-sm text-[#45474c]" role="status">Önerilen fırsatlar yükleniyor…</p>
        ) : error ? (
          <p className="p-4 text-sm text-[#93000a]" role="alert">{error}</p>
        ) : jobs.length === 0 ? (
          <p className="p-4 text-sm text-[#45474c]">Henüz sana özel önerilen bir fırsat bulunmuyor.</p>
        ) : null}
        {jobs.map((job, index) => (
          <article
            className={`group flex flex-col gap-4 p-4 transition-colors hover:bg-[#eff4ff] sm:flex-row sm:items-center sm:justify-between ${index < jobs.length - 1 ? "border-b border-[#c5c6cd]" : ""}`}
            key={job.id}
          >
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-xl font-semibold leading-7 text-[#0b1c30] transition-colors group-hover:text-[#091426]">
                  {job.title}
                </h4>
                <p className="text-sm leading-5 text-[#45474c]">
                  {job.cityName || "Konum belirtilmedi"}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 sm:flex-col sm:items-end">
              <p className="text-[11px] font-medium leading-4 text-[#45474c]">
                <time dateTime={job.publishedDate}>{formatPublishedDate(job.publishedDate)}</time>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
