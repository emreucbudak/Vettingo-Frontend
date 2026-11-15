import type { Metadata } from "next";
import { NewExamPage } from "@/pages/exams";

export const metadata: Metadata = { title: "Sınav Soruları" };

export default function HrNewExamRoute() {
  return <NewExamPage />;
}
