import type { Metadata } from "next";
import { HrExamsPage } from "@/pages/exams";

export const metadata: Metadata = { title: "Sınavlar" };

export default function HrExamsRoute() {
  return <HrExamsPage />;
}
