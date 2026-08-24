import type { Metadata } from "next";
import { CandidateSelfAnalysisPage } from "@/pages/candidate-self-analysis";

export const metadata: Metadata = {
  title: "Yapay Zeka Analizim | Vettingo",
  description: "Adayın kişisel yetkinlik ve kariyer değerlendirme raporu.",
};

export default function CandidateMyCandidateRoute() {
  return <CandidateSelfAnalysisPage />;
}
