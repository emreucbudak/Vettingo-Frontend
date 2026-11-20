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

export async function getCompanyExams(signal: AbortSignal): Promise<Exam[]> {
  const exams = await apiRequest<CompanyExamResponse[]>("/api/gateway/exams/company", "GET", {
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
