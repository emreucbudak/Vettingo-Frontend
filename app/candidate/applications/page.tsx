import type { Metadata } from "next";
import { CandidateApplicationsPage } from "@/pages/candidate-applications";

export const metadata: Metadata = {
  title: "Başvurularım | Vettingo",
  description: "Adayın yaptığı iş başvuruları ve güncel süreç durumları.",
};

export default function CandidateApplicationsRoute() {
  return <CandidateApplicationsPage />;
}
