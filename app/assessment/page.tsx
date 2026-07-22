import type { Metadata } from "next";
import { AssessmentIntroPage } from "@/widgets/assessment-intro";

export const metadata: Metadata = {
  title: "Sınav Bilgileri | Vettingo",
};

export default function AssessmentRoute() {
  return <AssessmentIntroPage />;
}
