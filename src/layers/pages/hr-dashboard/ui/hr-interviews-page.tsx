import { interviews } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrStatGrid,
} from "@/entities/hr-dashboard/ui";
import { HrInterviewAgenda } from "@/widgets/hr/interview-agenda";

export function HrInterviewsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hrReports} icon="monitoring">
            Görüşme Raporu
          </HrPrimaryLink>
        }
        description="Günlük görüşme akışını, panel katılımcılarını, değerlendirme hazırlığını ve bekleyen geri bildirimleri birlikte takip et."
        eyebrow="Görüşme Operasyonu"
        title="Mülakatlar"
      />

      <HrStatGrid
        items={[
          {
            label: "Bu Hafta",
            value: "16",
            helper: "5 farklı açık rol",
            icon: "calendar_month",
            tone: "blue",
          },
          {
            label: "Bugün",
            value: String(interviews.length),
            helper: "İlk görüşme 09.30",
            icon: "today",
            tone: "green",
          },
          {
            label: "Not Bekleyen",
            value: "5",
            helper: "24 saat içinde tamamlanmalı",
            icon: "rate_review",
            tone: "amber",
          },
          {
            label: "Panel Hazırlığı",
            value: "92%",
            helper: "Tüm katılımcılar bilgilendirildi",
            icon: "verified",
            tone: "purple",
          },
        ]}
      />

      <HrInterviewAgenda />
    </main>
  );
}
