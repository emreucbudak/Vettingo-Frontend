import { apiRequest } from "@/shared/api";

const evaluationsPath = "/api/gateway/evaluation/evaluations";

export type EvaluationDto = {
  id: string;
  userId: string;
  skillName: string;
  skillLevel: number;
  overallScore: number;
  createdAt: string;
  updatedAt: string | null;
};

export async function getCandidateEvaluations(
  candidateId: string,
  signal?: AbortSignal,
): Promise<EvaluationDto[]> {
  const query = new URLSearchParams({ userId: candidateId });

  try {
    return (await apiRequest(
      `${evaluationsPath}?${query}`,
      "GET",
      { signal },
    )) as unknown as EvaluationDto[];
  } catch (requestError) {
    if (requestError instanceof DOMException && requestError.name === "AbortError") {
      throw requestError;
    }
    throw new Error("Evaluation servisine ulaşılamadı. Lütfen daha sonra tekrar deneyin.");
  }
}
