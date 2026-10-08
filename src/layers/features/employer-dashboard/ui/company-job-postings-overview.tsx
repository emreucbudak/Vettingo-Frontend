"use client";

import Link from "next/link";
import { useCompanyJobPostings } from "../model/use-company-job-postings";
import { CompanyJobPostingsTable } from "./company-job-postings-table";

export function CompanyJobPostingsOverview({
  allJobsHref,
  showRetry = true,
}: {
  allJobsHref?: string;
  showRetry?: boolean;
}) {
  const { postings, error, retry } = useCompanyJobPostings(3);

  return (
    <section className="min-w-0 lg:col-span-2">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold leading-7 text-[#0b1c30]">Son İlanlar</h2>
        {allJobsHref ? (
          <Link className="text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] hover:underline" href={allJobsHref}>
            Tümünü Gör
          </Link>
        ) : null}
      </div>
      <CompanyJobPostingsTable error={error} onRetry={showRetry ? retry : undefined} postings={postings} />
    </section>
  );
}
