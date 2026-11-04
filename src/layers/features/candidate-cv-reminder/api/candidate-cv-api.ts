import { apiRequest } from "@/shared/api";

export function getCandidateHasCv(): Promise<boolean> {
  return apiRequest<boolean>(
    "/api/gateway/evaluations/cv/exists",
    "GET",
    { cache: "no-store" },
  );
}
