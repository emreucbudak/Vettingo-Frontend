import type { Metadata } from "next";
import { CandidateAnalysisPage } from "@/widgets/candidate-analysis";

export const metadata: Metadata = {
  title: "Aday Analizi | Vettingo",
};

export default async function CandidateAnalysisRoute({
  searchParams,
}: {
  searchParams: Promise<{ candidateId?: string | string[] }>;
}) {
  const candidateIdParam = (await searchParams).candidateId;
  const candidateId = Array.isArray(candidateIdParam)
    ? candidateIdParam[0]
    : candidateIdParam;

  return <CandidateAnalysisPage candidateId={candidateId ?? null} />;
}