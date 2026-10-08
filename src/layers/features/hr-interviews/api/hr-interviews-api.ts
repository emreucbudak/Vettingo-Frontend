import { apiRequest } from "@/shared/api";

export type TodayInterview = {
  id: string;
  name: string;
  surname: string;
  startedTime: string;
};

export function getTodayInterviews(signal?: AbortSignal) {
  return apiRequest<TodayInterview[]>(
    "/api/gateway/interviews/today",
    "GET",
    { signal, cache: "no-store" },
  );
}
