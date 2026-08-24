import {
  employerJobs,
  type EmployerJob,
} from "@/entities/employer-recruiting/employer-recruiting-data";
import { MaterialIcon } from "@/shared/ui/material-icon";

function StatusBadge({ status }: { status: EmployerJob["status"] }) {
  const className =
    status === "Aktif"
      ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
      : status === "Taslak"
        ? "border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]"
        : "border-[#f2c94c] bg-[#fff7d6] text-[#7a5d00]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] ${className}`}
    >
      {status}
    </span>
  );
}

function JobRow({ job }: { job: EmployerJob }) {
  return (
    <article className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] lg:grid-cols-12 lg:items-center lg:gap-3 lg:px-6">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
            <MaterialIcon className="text-[21px]">work</MaterialIcon>
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold leading-6 text-[#0b1c30]">{job.title}</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:contents">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Çalışma
          </p>
          <p className="text-sm text-[#45474c]">{job.location}</p>
          <p className="text-[11px] text-[#75777d]">{job.workingModel}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Aday Akışı
          </p>
          <p className="text-sm font-semibold text-[#0b1c30]">{job.applicants} başvuru</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Tarih
          </p>
          <p className="text-sm text-[#45474c]">{job.publishedAt}</p>
          <p className="text-[11px] text-[#75777d]">Bitiş: {job.closesAt}</p>
        </div>
        <div className="flex items-center justify-between gap-3 lg:col-span-2 lg:justify-end">
          <StatusBadge status={job.status} />
          <button
            aria-label={`${job.title} ilan seçenekleri`}
            className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426]"
            type="button"
          >
            <MaterialIcon>more_horiz</MaterialIcon>
          </button>
        </div>
      </div>
    </article>
  );
}

export function EmployerJobList() {
  return (
    <section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
      <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] lg:grid">
        <span className="col-span-4">İlan</span>
        <span className="col-span-2">Lokasyon</span>
        <span className="col-span-2">Aday Akışı</span>
        <span className="col-span-2">Yayın / Bitiş</span>
        <span className="col-span-2 pr-12 text-right">Durum</span>
      </div>
      <div className="divide-y divide-[#c5c6cd]">
        {employerJobs.map((job) => (
          <JobRow job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
}
