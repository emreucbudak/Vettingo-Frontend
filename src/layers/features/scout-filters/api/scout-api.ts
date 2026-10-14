import { apiRequest } from "@/shared/api";

export type ScoutSearchRequest = {
  role?: string;
  location?: string;
  workPreference?: string;
  minExperienceYear?: number;
  maxExperienceYear?: number;
  minSalary?: number;
  maxSalary?: number;
};

export type ScoutProfile = {
  name: string;
  surname: string;
  salary: number;
  rating: number;
  role: string;
  workPreference: string;
  skills: string[];
};

function isScoutProfile(value: unknown): value is ScoutProfile {
  if (!value || typeof value !== "object") return false;
  const profile = value as Record<string, unknown>;
  return typeof profile.name === "string" &&
    typeof profile.surname === "string" &&
    typeof profile.salary === "number" &&
    typeof profile.rating === "number" &&
    typeof profile.role === "string" &&
    typeof profile.workPreference === "string" &&
    Array.isArray(profile.skills) &&
    profile.skills.every((skill) => typeof skill === "string");
}

export async function getScoutProfiles(request: ScoutSearchRequest, signal?: AbortSignal) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(request)) {
    if (value !== undefined && value !== "") query.set(key, String(value));
  }

  const response = await apiRequest<unknown>(
    `/api/gateway/evaluations/scout${query.size ? `?${query}` : ""}`,
    "GET",
    { signal, cache: "no-store" },
  );

  // The current CQRS contract returns one profile; also accept a result list.
  const profiles = Array.isArray(response) ? response : [response];
  if (!profiles.every(isScoutProfile)) {
    throw new Error("Scout servisinden geçerli bir aday yanıtı alınamadı.");
  }
  return profiles;
}
