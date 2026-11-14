import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CandidateAnalysisProfile } from "@/entities/candidate-analysis/candidate-analysis-profile";
import { candidates } from "@/entities/hr-dashboard";
import { CandidateAnalysisPage } from "@/pages/candidate-analysis";

export const metadata: Metadata = { title: "Aday Detayı" };

export default async function HrCandidateDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidate = candidates.find((item) => item.id === id);

  if (!candidate) notFound();

  const profile: CandidateAnalysisProfile = {
    id: candidate.id,
    name: candidate.name,
    title: candidate.role,
    targetRole: candidate.role,
    photoUrl: "",
    location: candidate.location,
    email: "",
    experience: candidate.experience,
    status: candidate.stage,
    expectedSalary: "Belirtilmedi",
    roleSuitability: 0,
    rating: candidate.rating,
    ratingAttributes: [],
    summary: "",
    strengths: [],
    risks: [],
    experienceTimeline: [],
    educationItems: [],
    certifications: [],
  };

  return <CandidateAnalysisPage candidate={profile} detailKind="application" embedded />;
}
