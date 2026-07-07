import type { Metadata } from "next";
import { CandidateDashboardPage } from "@/widgets/candidate-dashboard";

export const metadata: Metadata = {
  title: "Aday Paneli | Vettingo",
};

export default function CandidatePage() {
  return <CandidateDashboardPage />;
}