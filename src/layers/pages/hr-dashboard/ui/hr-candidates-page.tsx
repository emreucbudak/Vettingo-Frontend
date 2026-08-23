import { HrStatGrid } from "@/entities/hr-dashboard/ui";
import { HrCandidatePipeline } from "@/widgets/hr/candidate-pipeline";

export function HrCandidatesPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrStatGrid
        items={[
          {
            label: "Aktif Aday",
            value: "74",
            icon: "groups",
            tone: "blue",
          },
          {
            label: "Yeni Başvuru",
            value: "21",
            icon: "person_add",
            tone: "green",
          },
          {
            label: "Mülakat Aşaması",
            value: "16",
            icon: "forum",
            tone: "purple",
          },
          {
            label: "Teklif Aşaması",
            value: "4",
            icon: "handshake",
            tone: "amber",
          },
        ]}
      />

      <HrCandidatePipeline />
    </main>
  );
}
