import { ROUTES } from "@/shared/config/routes";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrStatGrid,
} from "@/entities/hr-dashboard/ui";
import { HrCandidatePipeline } from "@/widgets/hr/candidate-pipeline";

export function HrCandidatesPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hrInterviews} icon="calendar_month">
            Mülakat Takvimi
          </HrPrimaryLink>
        }
        description="Farklı pozisyonlardaki adayları, süreç sahiplerini, yetkinliklerini ve değerlendirme skorlarını tek havuzda karşılaştır."
        title="Aday Havuzu"
      />

      <HrStatGrid
        items={[
          {
            label: "Aktif Aday",
            value: "74",
            helper: "18 açık talebe bağlı",
            icon: "groups",
            tone: "blue",
          },
          {
            label: "Yeni Başvuru",
            value: "21",
            helper: "Son 7 gün",
            icon: "person_add",
            tone: "green",
          },
          {
            label: "Mülakat Aşaması",
            value: "16",
            helper: "Bu hafta 9 görüşme",
            icon: "forum",
            tone: "purple",
          },
          {
            label: "Teklif Aşaması",
            value: "4",
            helper: "Ortalama skor 92",
            icon: "handshake",
            tone: "amber",
          },
        ]}
      />

      <HrCandidatePipeline />
    </main>
  );
}
