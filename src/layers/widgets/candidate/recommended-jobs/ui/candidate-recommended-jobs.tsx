import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { recommendedJobs } from "@/entities/candidate-dashboard";

export function CandidateRecommendedJobs() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Yapay Zeka Önerili Fırsatlar</h3>
        <Link className="shrink-0 text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49] hover:underline" href={ROUTES.candidateJobs}>
          Tümünü Gör
        </Link>
      </div>
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {recommendedJobs.map((job, index) => (
          <article
            className={`group flex cursor-pointer flex-col gap-4 p-4 transition-colors hover:bg-[#eff4ff] sm:flex-row sm:items-center sm:justify-between ${index < recommendedJobs.length - 1 ? "border-b border-[#c5c6cd]" : ""}`}
            key={job.role}
          >
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-xl font-semibold leading-7 text-[#0b1c30] transition-colors group-hover:text-[#091426]">
                  {job.role}
                </h4>
                <p className="text-sm leading-5 text-[#45474c]">
                  {job.company} • {job.location}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 sm:flex-col sm:items-end">
              <p className="text-[11px] font-medium leading-4 text-[#45474c]">{job.postedAt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
