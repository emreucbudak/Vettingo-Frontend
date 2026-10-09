import { apiRequest } from "@/shared/api";

export type City = {
  id: number;
  cityName: string;
  countryCode: string;
};

export function getCities(signal?: AbortSignal) {
  return apiRequest<City[]>("/api/gateway/cities", "GET", { signal, cache: "no-store" });
}
