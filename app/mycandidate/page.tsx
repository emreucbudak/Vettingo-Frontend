import type { Metadata } from "next";
import { CandidateSelfAnalysisPage } from "@/widgets/candidate-self-analysis";

export const metadata: Metadata = {
  title: "Yapay Zeka Analizim | Vettingo",
  description: "Adayın kişisel yetkinlik ve kariyer değerlendirme raporu.",
};

export default function MyCandidateRoute() {
  return <CandidateSelfAnalysisPage />;
}
