import { apiRequest } from "@/shared/api";

export function getCandidateHasCv(userId: string): Promise<boolean> {
  return apiRequest<boolean>(
    `/api/gateway/evaluations/cv/user/${encodeURIComponent(userId)}/exists`,
    "GET",
    { cache: "no-store" },
  );
}
