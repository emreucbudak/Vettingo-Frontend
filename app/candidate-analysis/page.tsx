import type { Metadata } from "next";
import { CandidateAnalysisPage } from "@/widgets/candidate-analysis";

export const metadata: Metadata = {
  title: "Candidate Analysis | Vettingo",
};

export default function CandidateAnalysisRoute() {
  return <CandidateAnalysisPage />;
}