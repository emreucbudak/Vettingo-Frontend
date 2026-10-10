import { apiRequest } from "@/shared/api";

export type TodayInterview = {
  id: string;
  name: string;
  surname: string;
  startedTime: string;
};

export type ScheduledInterview = TodayInterview & {
  userId: string;
  interviewDate: string;
  chapter: string;
  role: string;
  whereIsMeeting: string;
  meetingLink: string | null;
};

export function getInterviewsByDate(date: string, signal?: AbortSignal) {
  return apiRequest<ScheduledInterview[]>(
    `/api/gateway/interviews/company/by-date?${new URLSearchParams({ date })}`,
    "GET",
    { signal, cache: "no-store" },
  );
}

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
