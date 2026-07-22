import { authFetch } from "@/shared/api";

const candidateApiPaths = {
  applications: "/api/gateway/application/job-applications",
  interviews: "/api/gateway/interview/interview-exams",
  jobs: "/api/gateway/job/job-postings",
} as const;

export type JobApplicationDto = {
  id: string;
  candidateId: string;
  jobPostingId: string;
  appliedAt: string;
  status: string | number;
};

export type JobPostingDto = {
  id: string;
  companyId: string;
  title: string;
  location: string;
};

export type InterviewDto = {
  id: string;
  companyId: string;
  candidateId: string;
  title: string;
  description: string;
  type: "AI" | "Human" | number;
  startDate: string;
  endDate: string | null;
};

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  let response: Response;

  try {
    response = await authFetch(path, { signal });
  } catch {
    throw new Error("Vettingo servislerine ulaşılamadı. Lütfen daha sonra tekrar deneyin.");
  }

  if (!response.ok) {
    throw new Error("Panel verileri alınamadı. Lütfen daha sonra tekrar deneyin.");
  }

  return (await response.json()) as T;
}

export function getCandidateApplications(candidateId: string, signal?: AbortSignal) {
  const query = new URLSearchParams({ candidateId });
  return getJson<JobApplicationDto[]>(`${candidateApiPaths.applications}?${query}`, signal);
}

export function getJobPosting(jobPostingId: string, signal?: AbortSignal) {
  return getJson<JobPostingDto>(
    `${candidateApiPaths.jobs}/${encodeURIComponent(jobPostingId)}`,
    signal,
  );
}

export function getUpcomingInterviews(candidateId: string, signal?: AbortSignal) {
  const query = new URLSearchParams({
    candidateId,
    upcomingOnly: "true",
  });

  return getJson<InterviewDto[]>(`${candidateApiPaths.interviews}?${query}`, signal);
}
