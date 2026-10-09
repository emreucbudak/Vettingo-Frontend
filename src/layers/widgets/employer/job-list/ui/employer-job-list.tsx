"use client";

import { MdOutlineEdit } from "react-icons/md";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import {
  companyJobStatusLabels,
  useCompanyJobPostings,
  type CompanyJobPosting,
} from "@/features/employer-dashboard";

function StatusBadge({ status }: { status: CompanyJobPosting["status"] }) {
  const className =
    status === "Active"
      ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
      : status === "Draft"
        ? "border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]"
        : "border-[#f2c94c] bg-[#fff7d6] text-[#7a5d00]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] ${className}`}
    >
      {companyJobStatusLabels[status] ?? status}
    </span>
  );
}

function JobRow({ job }: { job: CompanyJobPosting }) {
  return (
    <article className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] lg:grid-cols-[repeat(14,minmax(0,1fr))] lg:items-center lg:gap-3 lg:px-6">
      <div className="min-w-0 lg:col-span-4">
        <h2 className="text-base font-semibold leading-6 text-[#0b1c30]">{job.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:contents">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Lokasyon
          </p>
          <p className="text-sm text-[#45474c]">{job.cityName}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Aday Akışı
          </p>
          <p className="text-sm font-semibold text-[#0b1c30]">{job.applicants.toLocaleString("tr-TR")} başvuru</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Yayın Tarihi
          </p>
          <p className="text-sm text-[#45474c]">
            {job.publishedAt
              ? new Date(job.publishedAt).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "—"}
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 lg:col-span-2 lg:justify-end">
          <StatusBadge status={job.status} />
        </div>
        <div className="lg:col-span-2 lg:text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            İşlem Yap
          </p>
          <Link
            aria-label={`${job.title} ilanını düzenle`}
            className="inline-flex rounded p-2 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426]"
            href={`${ROUTES.employerJobs}/${encodeURIComponent(job.id)}/post`}
          >
            <MdOutlineEdit aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[18px]" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function EmployerJobList() {
  const { postings, error } = useCompanyJobPostings();
  const loading = postings === null && !error;

  return (
    <section
      aria-busy={loading}
      aria-label="Şirket ilanları"
      className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]"
    >
      <div className="hidden grid-cols-[repeat(14,minmax(0,1fr))] gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] lg:grid">
        <span className="col-span-4">İlan</span>
        <span className="col-span-2">Lokasyon</span>
        <span className="col-span-2">Aday Akışı</span>
        <span className="col-span-2">Yayın Tarihi</span>
        <span className="col-span-2 text-right">Durum</span>
        <span className="col-span-2 text-center">İşlem Yap</span>
      </div>
      <div className="divide-y divide-[#c5c6cd]">
        {error ? (
          <div className="px-6 py-8 text-center">
            <p className="text-sm text-red-700" role="alert">
              İlanlar yüklenemedi.
            </p>
          </div>
        ) : loading ? (
          <p className="px-6 py-10 text-center text-sm text-[#45474c]" role="status">
            İlanlar yükleniyor…
          </p>
        ) : postings?.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-[#45474c]" role="status">
            Henüz şirketinize ait bir ilan bulunmuyor.
          </p>
        ) : postings?.map((job) => (
          <JobRow job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
}
