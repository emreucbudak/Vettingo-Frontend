"use client";

import { LoadingSkeleton } from "@/shared/ui/dashboard-loading/loading-skeleton";

import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { useCandidateRecommendedJobs } from "@/features/candidate-dashboard";

export function CandidateRecommendedJobs({
  userId,
  showAll = false,
}: {
  userId: string;
  showAll?: boolean;
}) {
  const { jobs, error, isLoading } = useCandidateRecommendedJobs(userId);
  const uniqueJobs = [...new Map(jobs.map((job) => [job.jobPostingId, job])).values()];
  const visibleJobs = showAll ? uniqueJobs : uniqueJobs.slice(0, 3);

  return (
    <section aria-busy={isLoading}>
      {!showAll && (
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Yapay Zeka Önerili Fırsatlar</h3>
          <Link className="shrink-0 text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49] hover:underline" href={ROUTES.candidatePersonalizedJobPostings}>
            Tümünü Gör
          </Link>
        </div>
      )}
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {isLoading ? (
          <p className="p-4 text-sm text-[#45474c]" role="status"><LoadingSkeleton className="h-24 w-full" /></p>
        ) : error ? (
          <p className="p-4 text-sm text-[#93000a]" role="alert">{error}</p>
        ) : visibleJobs.length === 0 ? (
          <p className="p-4 text-sm text-[#45474c]">Henüz sana özel önerilen bir fırsat bulunmuyor.</p>
        ) : null}
        {visibleJobs.map((job, index) => (
          <article
            className={`group p-4 transition-colors hover:bg-[#eff4ff] ${index < visibleJobs.length - 1 ? "border-b border-[#c5c6cd]" : ""}`}
            key={job.jobPostingId}
          >
            <h4 className="text-xl font-semibold leading-7 text-[#0b1c30] transition-colors group-hover:text-[#091426]">
              {job.title}
            </h4>
            <p className="text-sm leading-5 text-[#45474c]">
              {job.cityName || "Konum belirtilmedi"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
