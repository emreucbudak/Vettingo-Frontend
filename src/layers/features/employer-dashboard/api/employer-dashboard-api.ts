import { apiRequest } from "@/shared/api";

export type CompanyJobPosting = {
  id: string;
  title: string;
  cityId: number;
  cityName: string;
  applicants: number;
  publishedAt: string | null;
  status: "Draft" | "Active" | "Closed" | "Archived";
};

export function getCompanyJobPostings(signal?: AbortSignal, limit?: number) {
  const query = limit === undefined ? "" : `?limit=${limit}`;
  return apiRequest<CompanyJobPosting[]>(
    `/api/gateway/job-postings/company${query}`, "GET", { signal, cache: "no-store" },
  );
}

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

export type CompanyApplicationStatistics = {
  totalApplications: number;
  underReview: number;
  interviews: number;
  offers: number;
  rejected: number;
};

export function getCompanyApplicationStatistics(signal?: AbortSignal) {
  return apiRequest<CompanyApplicationStatistics>(
    "/api/gateway/job-applications/company/statistics",
    "GET",
    { signal, cache: "no-store" },
  );
}

export type EmployerStats = EmployerJobStatistics & EmployerApplicationStatistics;

export async function getStats(signal?: AbortSignal): Promise<EmployerStats> {
  const [jobs, applications] = await Promise.all([
    getEmployerJobStatistics(signal),
    getEmployerApplicationStatistics(signal),
  ]);
  return { ...jobs, ...applications };
}
