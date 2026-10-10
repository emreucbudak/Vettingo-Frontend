import type { Metadata } from "next";
import { EmployerJobsPage } from "@/pages/employer-recruiting";
import { ROUTES } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: "İlanlar",
};

export default function HrJobsRoute() {
  return (
    <EmployerJobsPage
      embedded
      jobsHref={ROUTES.hrJobs}
      newJobHref={ROUTES.hrNewJob}
      title="İlanlar"
    />
  );
}
