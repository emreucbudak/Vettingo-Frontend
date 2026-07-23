import { authFetch } from "@/shared/api";

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
  let response: Response;

  try {
    response = await authFetch(`${evaluationsPath}?${query}`, { signal });
  } catch (requestError) {
    if (requestError instanceof DOMException && requestError.name === "AbortError") {
      throw requestError;
    }
    throw new Error("Evaluation servisine ulaşılamadı. Lütfen daha sonra tekrar deneyin.");
  }

  if (!response.ok) {
    throw new Error("Aday değerlendirmeleri alınamadı. Lütfen daha sonra tekrar deneyin.");
  }

  return (await response.json()) as EvaluationDto[];
}
