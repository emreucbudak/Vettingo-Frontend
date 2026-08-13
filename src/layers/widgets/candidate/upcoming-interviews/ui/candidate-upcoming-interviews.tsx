import Link from "next/link";
import type { UpcomingInterview } from "@/features/candidate-dashboard";
import { ROUTES } from "@/shared/config/routes";

export function CandidateUpcomingInterviews({
  interviews,
  isLoading,
}: {
  interviews: UpcomingInterview[];
  isLoading: boolean;
}) {
  return (
    <section className="rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]">Yaklaşan Mülakatlar</h3>
      {isLoading ? (
        <div className="space-y-4" aria-label="Mülakatlar yükleniyor">
          {[0, 1].map((item) => (
            <div className="h-16 animate-pulse rounded bg-[#eff4ff]" key={item} />
          ))}
        </div>
      ) : interviews.length > 0 ? (
        <div className="space-y-5">
          {interviews.map((interview) => (
            <article className="flex gap-4" key={interview.id}>
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded border border-[#c5c6cd] bg-[#e5eeff]">
                <span className="text-[11px] font-medium uppercase leading-4 text-[#45474c]">{interview.month}</span>
                <span className="text-xl font-semibold leading-7 text-[#0b1c30]">{interview.day}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-base font-medium leading-6 text-[#0b1c30]">{interview.title}</h4>
                  <span className={`rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] ${interview.typeClassName}`}>
                    {interview.typeLabel}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#45474c]">{interview.description}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-medium leading-4 text-[#091426]">{interview.time}</p>
                  {interview.type === "AI" ? (
                    <Link className="text-[11px] font-semibold text-[#006c49] hover:underline" href={ROUTES.assessment}>
                      Sınav bilgileri
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded bg-[#f8f9ff] px-4 py-6 text-center text-sm text-[#45474c]">
          Yaklaşan mülakat bulunmuyor.
        </p>
      )}
    </section>
  );
}
