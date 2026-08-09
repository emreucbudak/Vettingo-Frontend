import type { Metadata } from "next";
import { CandidateHelpCenterPage } from "@/widgets/candidate-help-center";

export const metadata: Metadata = {
  title: "Yardım Merkezi | Vettingo",
  description: "Vettingo aday destek talepleri ve sık sorulan sorular.",
};

export default function CandidateHelpCenterRoute() {
  return <CandidateHelpCenterPage />;
}
