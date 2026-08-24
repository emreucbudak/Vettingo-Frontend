import type { Metadata } from "next";
import { employerAccountTeamDocumentation } from "@/entities/employer-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Hesap ve Ekip Yönetimi | Vettingo",
  description:
    "Ekip davetleri, rol bazlı erişimler, üyelik durumları ve hesap güvenliği süreçlerini öğrenin.",
};

export default function EmployerAccountTeamDocumentationRoute() {
  return (
    <HrProductDocumentationPage
      content={employerAccountTeamDocumentation}
    />
  );
}
