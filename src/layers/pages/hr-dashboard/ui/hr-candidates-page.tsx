import { HrCandidatePipeline } from "@/widgets/hr/candidate-pipeline";

export function HrCandidatesPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrCandidatePipeline />
    </main>
  );
}
