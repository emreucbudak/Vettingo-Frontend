import { apiRequest } from "@/shared/api";

export type EmployerJobStatistics = {
  totalJobPostings: number;
  activeJobPostings: number;
};

export function getEmployerJobStatistics(signal?: AbortSignal) {
  return apiRequest<EmployerJobStatistics>(
    "/api/gateway/job-postings/statistics",
    "GET",
    { signal, cache: "no-store" },
  );
}
