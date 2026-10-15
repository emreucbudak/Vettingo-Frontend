import type { Metadata } from "next";
import { ExamsPage } from "@/pages/exams";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = { title: "Sınavlar | Vettingo" };

export default function EmployerExamsRoute() {
  return <EmployerShell><ExamsPage /></EmployerShell>;
}
