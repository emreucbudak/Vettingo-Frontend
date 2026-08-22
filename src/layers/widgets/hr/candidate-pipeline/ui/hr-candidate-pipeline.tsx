import Link from "next/link";
import { candidates } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrAvatar,
  HrSectionHeading,
  HrStatusBadge,
} from "@/entities/hr-dashboard/ui";

function CandidateScore({ score }: { score: number }) {
  const tone =
    score >= 90
      ? "bg-[#dcfce7] text-[#006c49]"
      : score >= 85
        ? "bg-[#dce9ff] text-[#091426]"
        : "bg-[#eff4ff] text-[#45474c]";

  return (
    <span className={`inline-flex min-w-12 justify-center rounded px-2 py-1 text-sm font-semibold ${tone}`}>
      {score}
    </span>
  );
}

export function HrCandidatePipeline() {
  return (
    <>
      <section className="mb-6 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(3,minmax(150px,auto))]">
          <label className="relative block">
            <span className="sr-only">Aday ara</span>
            <MaterialIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#75777d]">
              search
            </MaterialIcon>
            <input
              className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2.5 pl-10 pr-4 text-sm text-[#0b1c30] outline-none placeholder:text-[#75777d] focus:border-[#091426]"
              placeholder="İsim, rol veya yetkinlik ara"
              type="search"
            />
          </label>
          <select
            aria-label="Rol filtresi"
            className="rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-xs text-[#0b1c30] outline-none focus:border-[#091426]"
            defaultValue="all"
          >
            <option value="all">Tüm Roller</option>
            <option value="engineering">Mühendislik</option>
            <option value="product">Ürün</option>
            <option value="sales">Satış</option>
          </select>
          <select
            aria-label="Aşama filtresi"
            className="rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-xs text-[#0b1c30] outline-none focus:border-[#091426]"
            defaultValue="all"
          >
            <option value="all">Tüm Aşamalar</option>
            <option value="new">Yeni Başvuru</option>
            <option value="hr">İK Görüşmesi</option>
            <option value="technical">Teknik Mülakat</option>
          </select>
          <button
            className="inline-flex items-center justify-center gap-2 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-4 py-2.5 text-xs font-semibold text-[#091426] transition-colors hover:bg-[#dce9ff]"
            type="button"
          >
            <MaterialIcon className="text-[18px]">tune</MaterialIcon>
            Filtreler
          </button>
        </div>
      </section>

      <section>
        <HrSectionHeading
          actionHref={ROUTES.hrRequisitions}
          actionLabel="Talepleri Gör"
          title="Görüşülen Adaylar"
        />
        <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] xl:grid">
            <span className="col-span-3">Aday</span>
            <span className="col-span-3">Hedef Rol</span>
            <span className="col-span-2">Aşama</span>
            <span className="col-span-2">Sorumlu</span>
            <span className="col-span-1">Skor</span>
            <span className="col-span-1 text-right">Aksiyon</span>
          </div>
          <div className="divide-y divide-[#c5c6cd]">
            {candidates.map((candidate) => (
              <article
                className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] xl:grid-cols-12 xl:items-center xl:gap-3 xl:px-6"
                key={candidate.id}
              >
                <div className="flex items-center gap-3 xl:col-span-3">
                  <HrAvatar initials={candidate.initials} />
                  <div>
                    <h2 className="text-sm font-semibold text-[#0b1c30]">{candidate.name}</h2>
                    <p className="mt-1 text-[11px] text-[#75777d]">
                      {candidate.location} · {candidate.experience}
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm font-medium text-[#0b1c30]">{candidate.role}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {candidate.skills.map((skill) => (
                      <span
                        className="rounded bg-[#eff4ff] px-2 py-1 text-[10px] font-medium text-[#45474c]"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="xl:col-span-2">
                  <HrStatusBadge status={candidate.stage} />
                  <p className="mt-2 text-[10px] text-[#75777d]">{candidate.activity}</p>
                </div>
                <div className="xl:col-span-2">
                  <p className="text-sm font-medium text-[#0b1c30]">{candidate.owner}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.05em] text-[#75777d]">
                    Süreç sahibi
                  </p>
                </div>
                <div className="xl:col-span-1">
                  <CandidateScore score={candidate.score} />
                </div>
                <div className="flex justify-end xl:col-span-1">
                  <Link
                    aria-label={`${candidate.name} için mülakatları aç`}
                    className="inline-flex items-center gap-1 rounded border border-[#9aa6bc] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#dce9ff]"
                    href={ROUTES.hrInterviews}
                  >
                    Aç
                    <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
