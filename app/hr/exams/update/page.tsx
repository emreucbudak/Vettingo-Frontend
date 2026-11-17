import type { Metadata } from "next";
import { HrUpdateExamPage } from "@/pages/exams";

export const metadata: Metadata = { title: "Sınavı Düzenle" };

export default function HrUpdateExamRoute() {
  return <HrUpdateExamPage />;
}
