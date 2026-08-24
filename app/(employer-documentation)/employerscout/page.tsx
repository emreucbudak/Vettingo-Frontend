import type { Metadata } from "next";
import { employerScoutDocumentation } from "@/entities/employer-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Employer Scout Dokümantasyonu | Vettingo",
  description:
    "Scout ile aday keşfi, gelişmiş filtreleme, profil karşılaştırma ve kısa liste süreçlerini öğrenin.",
};

export default function EmployerScoutDocumentationRoute() {
  return <HrProductDocumentationPage content={employerScoutDocumentation} />;
}
