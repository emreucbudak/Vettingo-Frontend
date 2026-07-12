import type { Metadata } from "next";
import { AssessmentPage } from "@/widgets/assessment";

export const metadata: Metadata = {
  title: "Değerlendirme | Vettingo",
};

export default function AssessmentRoute() {
  return <AssessmentPage />;
}
