import { applicationCandidates } from "@/entities/employer-recruiting/employer-recruiting-data";
import { ROUTES } from "@/shared/config/routes";
import { CandidateApplicationList } from "@/shared/ui/candidate-application-list";

export function EmployerApplicationList() {
  const candidates = applicationCandidates.map((candidate) => ({
    ...candidate,
    detailHref: `${ROUTES.employerApplications}/${candidate.id}`,
    detailLabel: `${candidate.name} başvuru detayını aç`,
  }));

  return <CandidateApplicationList candidates={candidates} />;
}
