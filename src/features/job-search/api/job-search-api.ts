import { authFetch } from "@/shared/api";

const jobSearchPath = "/api/gateway/job/job-postings/search";

export type EmploymentType = 1 | 2 | 3 | 4;
export type WorkingModel = 1 | 2 | 3;
export type ExperienceLevel = 1 | 2 | 3 | 4 | 5;

export type JobSearchFilters = {
  title?: string;
  location?: string;
  employmentType?: EmploymentType;
  workingModel?: WorkingModel;
  experienceLevel?: ExperienceLevel;
  minSalary?: number;
  maxSalary?: number;
};

export type JobPostingSearchDto = {
  id: string;
  companyId: string;
  title: string;
  description: string;
  location: string;
  employmentType: EmploymentType;
  workingModel: WorkingModel;
  experienceLevel: ExperienceLevel;
  minSalary: number | null;
  maxSalary: number | null;
  applicationDeadline: string | null;
  status: number;
  createdAt: string;
};

export async function searchJobPostings(
  filters: JobSearchFilters,
  signal?: AbortSignal,
): Promise<JobPostingSearchDto[]> {
  const query = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      query.set(key, String(value));
    }
  });

  let response: Response;
  try {
    response = await authFetch(`${jobSearchPath}?${query}`, { signal });
  } catch {
    throw new Error("Jobs servisine ulaşılamadı. Lütfen daha sonra tekrar deneyin.");
  }

  if (!response.ok) {
    throw new Error("İş ilanları aranamadı. Filtreleri kontrol edip tekrar deneyin.");
  }

  return (await response.json()) as JobPostingSearchDto[];
}
