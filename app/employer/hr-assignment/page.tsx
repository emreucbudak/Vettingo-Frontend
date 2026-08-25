import type { Metadata } from "next";
import { EmployerHrAssignmentPage } from "@/pages/employer-hr-assignment";

export const metadata: Metadata = {
  title: "İşe Alımcı Ata | Vettingo",
  description: "Vettingo işveren hesabına işe alımcı tanımlama ve yetkilendirme ekranı.",
};

export default function EmployerHrAssignmentRoute() {
  return <EmployerHrAssignmentPage />;
}
