import type { ScoutSearchRequest } from "../api/scout-api";

export type ScoutFilters = {
  experience: string;
  cityId: string;
  query: string;
  salaryRange: string;
  workModel: string;
};

export const emptyScoutFilters: ScoutFilters = {
  experience: "all",
  cityId: "",
  query: "",
  salaryRange: "all",
  workModel: "all",
};

export function buildScoutSearchRequest(filters: ScoutFilters, cityName?: string): ScoutSearchRequest {
  const request: ScoutSearchRequest = {
    role: filters.query.trim() || undefined,
    location: cityName,
    workPreference: filters.workModel === "all" ? undefined : filters.workModel,
  };

  if (filters.experience !== "all") {
    const [minimum, maximum] = filters.experience.replace("+", "").split("-");
    request.minExperienceYear = Number(minimum);
    if (maximum) request.maxExperienceYear = Number(maximum);
  }

  if (filters.salaryRange !== "all") {
    const [minimum, maximum] = filters.salaryRange.split("-");
    request.minSalary = Number(minimum);
    if (maximum) request.maxSalary = Number(maximum);
  }

  return request;
}
