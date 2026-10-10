import { HrInterviewStatistics } from "@/features/hr-interviews";
import { HrInterviewAgenda } from "@/widgets/hr/interview-agenda";

export function HrInterviewsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrInterviewStatistics />

      <HrInterviewAgenda />
    </main>
  );
}
