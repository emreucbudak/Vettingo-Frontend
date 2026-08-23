import { interviews } from "@/entities/hr-dashboard";
import { HrStatGrid } from "@/entities/hr-dashboard/ui";
import { HrInterviewAgenda } from "@/widgets/hr/interview-agenda";

export function HrInterviewsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrStatGrid
        items={[
          {
            label: "Bu Hafta",
            value: "16",
            icon: "calendar_month",
            tone: "blue",
          },
          {
            label: "Bugün",
            value: String(interviews.length),
            icon: "work_history",
            tone: "green",
          },
          {
            label: "Dönüş Bekleyen",
            value: "5",
            icon: "forum",
            tone: "amber",
          },
          {
            label: "Katılım Onayı",
            value: "92%",
            icon: "verified",
            tone: "purple",
          },
        ]}
      />

      <HrInterviewAgenda />
    </main>
  );
}
