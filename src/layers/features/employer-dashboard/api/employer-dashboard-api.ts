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

export type EmployerApplicationStatistics = {
  totalApplications: number;
  activeApplications: number;
};

export function getEmployerApplicationStatistics(signal?: AbortSignal) {
  return apiRequest<EmployerApplicationStatistics>("/api/gateway/job-applications/statistics", "GET", { signal, cache: "no-store" });
}

export type EmployerStats = EmployerJobStatistics & EmployerApplicationStatistics;

export async function getStats(signal?: AbortSignal): Promise<EmployerStats> {
  const [jobs, applications] = await Promise.all([
    getEmployerJobStatistics(signal),
    getEmployerApplicationStatistics(signal),
  ]);
  return { ...jobs, ...applications };
}
