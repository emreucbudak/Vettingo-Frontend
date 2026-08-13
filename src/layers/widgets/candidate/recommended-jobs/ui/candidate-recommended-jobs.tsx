import { recommendedJobs } from "@/entities/candidate-dashboard";
import { MaterialIcon } from "@/shared/ui/material-icon";

export function CandidateRecommendedJobs() {
  return (
    <section>
      <h3 className="mb-4 flex items-center gap-1 text-lg font-medium leading-6 text-[#0b1c30]">
        <MaterialIcon className="text-[#006c49]">psychology</MaterialIcon>
        Yapay Zeka Önerili Fırsatlar
      </h3>
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {recommendedJobs.map((job, index) => (
          <article
            className={`group flex cursor-pointer flex-col gap-4 p-4 transition-colors hover:bg-[#eff4ff] sm:flex-row sm:items-center sm:justify-between ${index === 0 ? "border-b border-[#c5c6cd]" : ""}`}
            key={job.role}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-[#c5c6cd] bg-[#d3e4fe]">
                <MaterialIcon className="text-[#45474c]">{job.icon}</MaterialIcon>
              </div>
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
              <span className="rounded-full border border-[#34d399] bg-[#dcfce7] px-2 py-1 text-[11px] font-medium leading-4 text-[#10b981]">
                {job.match}
              </span>
              <p className="text-[11px] font-medium leading-4 text-[#45474c]">{job.postedAt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
