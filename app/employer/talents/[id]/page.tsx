import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTalentCandidate,
  talentCandidates,
} from "@/entities/employer-recruiting/employer-recruiting-data";
import { CandidateAnalysisPage } from "@/widgets/candidate-analysis";

export const metadata: Metadata = {
  title: "Yetenek Detayı | Vettingo",
};

export function generateStaticParams() {
  return talentCandidates.map((candidate) => ({ id: candidate.id }));
}

export default async function EmployerTalentDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidate = getTalentCandidate(id);

  if (!candidate) notFound();

  return (
    <CandidateAnalysisPage candidate={candidate} detailKind="talent" />
  );
}
