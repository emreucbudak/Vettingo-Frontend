import type { Metadata } from "next";
import { ExamsPage } from "@/pages/exams";
import { ROUTES } from "@/shared/config/routes";

export const metadata: Metadata = { title: "Sınavlar" };

export default function HrExamsRoute() {
  return <ExamsPage newExamHref={ROUTES.hrNewExam} />;
}
