import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  applicationCandidates,
  getApplicationCandidate,
} from "@/entities/employer-recruiting/employer-recruiting-data";
import { CandidateAnalysisPage } from "@/widgets/candidate-analysis";

export const metadata: Metadata = {
  title: "Başvuru Detayı | Vettingo",
};

export function generateStaticParams() {
  return applicationCandidates.map((candidate) => ({ id: candidate.id }));
}

export default async function EmployerApplicationDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidate = getApplicationCandidate(id);

  if (!candidate) notFound();

  return (
    <CandidateAnalysisPage
      candidate={candidate}
      detailKind="application"
    />
  );
}
