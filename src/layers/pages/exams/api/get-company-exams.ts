import type { Exam } from "@/entities/exam";
import { apiRequest } from "@/shared/api";

type CompanyExamResponse = {
  id: string;
  title: string;
  durationMinutes: number;
  passingScore: number;
  totalQuestionCount: number;
  createdAt: string;
};

export async function getCompanyExams(accessToken: string, signal: AbortSignal): Promise<Exam[]> {
  const exams = await apiRequest<CompanyExamResponse[]>("/api/gateway/exams/company", "GET", {
    accessToken,
    signal,
    cache: "no-store",
  });

  return exams.map(({ id, title, totalQuestionCount, createdAt }) => ({
    id,
    name: title,
    questionCount: totalQuestionCount,
    createdAt,
  }));
}
