import { requisitions } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrStatGrid,
} from "@/shared/ui/hr-page-elements";
import { HrRequisitionBoard } from "@/widgets/hr/requisition-board";

export function HrRequisitionsPage() {
  const totalCandidates = requisitions.reduce(
    (total, requisition) => total + requisition.candidates,
    0,
  );

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hrCandidates} icon="groups">
            Aday Havuzunu Aç
          </HrPrimaryLink>
        }
        description="Departmanlardan gelen kadro ihtiyaçlarını, işe alım sahiplerini, aday yoğunluğunu ve süreç yaşını birlikte takip et."
        eyebrow="Kadro Planlama"
        title="İşe Alım Talepleri"
      />

      <HrStatGrid
        items={[
          {
            label: "Toplam Talep",
            value: String(requisitions.length),
            helper: "Tüm açık ve taslak talepler",
            icon: "assignment",
            tone: "blue",
          },
          {
            label: "Toplam Kadro",
            value: String(requisitions.reduce((total, item) => total + item.headcount, 0)),
            helper: "Onaylanan ihtiyaç",
            icon: "group_add",
            tone: "green",
          },
          {
            label: "Bağlı Aday",
            value: String(totalCandidates),
            helper: "Taleplerdeki toplam aday",
            icon: "person_search",
            tone: "purple",
          },
          {
            label: "Onay Bekleyen",
            value: "4",
            helper: "Yönetici aksiyonu gerekiyor",
            icon: "approval",
            tone: "amber",
          },
        ]}
      />

      <HrRequisitionBoard />
    </main>
  );
}
