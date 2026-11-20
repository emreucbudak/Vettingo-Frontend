import { getToken } from "@/shared/auth";

export async function deleteExam(examId: string): Promise<void> {
  const token = await getToken();
  const response = await fetch(`/api/gateway/exams/${encodeURIComponent(examId)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Sınav silinemedi.");
}
