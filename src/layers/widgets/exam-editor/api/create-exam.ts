import { decodeJwt } from "jose";
import { getToken } from "@/shared/auth";
import type { ValidatedExam } from "../model/exam-form-schema";

const companyExamOwnerType = 2;

export async function createExam({ questions, ...settings }: ValidatedExam) {
  const token = await getToken().catch(() => null);
  if (!token) throw new Error("Oturumunuz geçersiz. Lütfen tekrar giriş yapın.");

  const { companyId } = decodeJwt(token);
  if (typeof companyId !== "string" || !companyId) {
    throw new Error("Oturumunuzda şirket bilgisi bulunamadı.");
  }

  const multipleChoiceQuestions = [];
  const trueFalseQuestions = [];
  for (const { type, questionText, weight, displayOrder, options } of questions) {
    if (type === "multiple-choice") {
      multipleChoiceQuestions.push({ questionText, weight, displayOrder, options });
    } else {
      trueFalseQuestions.push({ questionText, weight, displayOrder, options });
    }
  }

  const response = await fetch("/api/gateway/exams", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...settings,
      companyId,
      ownerType: companyExamOwnerType,
      multipleChoiceQuestions,
      trueFalseQuestions,
    }),
  });

  if (response.status === 401) throw new Error("Oturumunuz geçersiz. Lütfen tekrar giriş yapın.");
  if (response.status === 403) throw new Error("Sınav oluşturma yetkiniz bulunmuyor.");
  if (!response.ok) throw new Error("Sınav kaydedilemedi. Lütfen tekrar deneyin.");
}
