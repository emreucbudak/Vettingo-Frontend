import type { Metadata } from "next";
import { EmployerNewExamPage } from "@/pages/exams";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = { title: "Sınav Soruları | Vettingo" };

export default function EmployerNewExamRoute() {
  return (
    <EmployerShell>
      <EmployerNewExamPage />
    </EmployerShell>
  );
}
