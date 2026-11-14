import { candidates } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { CandidateApplicationList } from "@/shared/ui/candidate-application-list";

export function HrCandidatePipeline() {
  const rows = candidates.map((candidate) => ({
    id: candidate.id,
    name: candidate.name,
    location: `${candidate.location} · ${candidate.experience}`,
    targetRole: candidate.role,
    status: candidate.stage,
    rating: candidate.rating,
    detailHref: `${ROUTES.hrCandidates}/${candidate.id}`,
    detailLabel: `${candidate.name} aday detayını aç`,
  }));

  return <CandidateApplicationList candidates={rows} />;
}
