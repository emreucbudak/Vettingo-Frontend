import type { Metadata } from "next";
import { ExamsPage } from "@/pages/exams";

export const metadata: Metadata = { title: "Sınavlar" };

export default function HrExamsRoute() {
  return <ExamsPage />;
}
