"use client";

import Link from "next/link";
import { useCompanyJobPostings } from "@/features/employer-dashboard";
import { EmployerJobEditPage } from "@/pages/employer-recruiting";
import { ROUTES } from "@/shared/config/routes";

export function HrJobEditPage({ jobId }: { jobId: string }) {
  const { postings, error, retry } = useCompanyJobPostings();
  const job = postings?.find((posting) => posting.id === jobId);

  if (job) {
    return <EmployerJobEditPage embedded job={job} jobsHref={ROUTES.hrJobs} />;
  }

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <Link className="text-sm font-medium text-[#45474c] hover:text-[#006c49]" href={ROUTES.hrJobs}>
        İlanlara dön
      </Link>
      <p className="mt-6 text-sm text-[#45474c]" role={error ? "alert" : "status"}>
        {error ? "İlan yüklenemedi." : postings === null ? "İlan yükleniyor…" : "İlan bulunamadı."}
      </p>
      {error && (
        <button className="mt-4 rounded bg-[#091426] px-4 py-2 text-sm font-semibold text-white" onClick={retry} type="button">
          Tekrar dene
        </button>
      )}
    </main>
  );
}
