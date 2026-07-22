import type { Metadata } from "next";
import { AssessmentPage } from "@/widgets/assessment";

export const metadata: Metadata = {
  title: "Değerlendirme Oturumu | Vettingo",
};

export default function AssessmentSessionRoute() {
  return <AssessmentPage />;
}
