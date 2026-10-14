import { CandidateApplicationsSkeleton } from "@/shared/ui/dashboard-loading/dashboard-page-skeleton";
import { CandidateShell } from "@/widgets/candidate/shell";

export default function Loading() {
  return <CandidateShell><CandidateApplicationsSkeleton /></CandidateShell>;
}
