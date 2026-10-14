import { CandidateJobsSkeleton } from "@/shared/ui/dashboard-loading/dashboard-page-skeleton";
import { CandidateShell } from "@/widgets/candidate/shell";

export default function Loading() {
  return <CandidateShell><CandidateJobsSkeleton /></CandidateShell>;
}
