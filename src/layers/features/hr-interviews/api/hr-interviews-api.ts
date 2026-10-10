import { apiRequest } from "@/shared/api";

export type TodayInterview = {
  id: string;
  name: string;
  surname: string;
  startedTime: string;
};

export type InterviewStatistics = {
  totalInterviews: number;
  thisMonth: number;
  thisWeek: number;
  today: number;
};

export function getInterviewStatistics(signal?: AbortSignal) {
  return apiRequest<InterviewStatistics>(
    "/api/gateway/interviews/company/statistics",
    "GET",
    { signal, cache: "no-store" },
  );
}

export function getTodayInterviews(signal?: AbortSignal) {
  return apiRequest<TodayInterview[]>(
    "/api/gateway/interviews/today",
    "GET",
    { signal, cache: "no-store" },
  );
}
