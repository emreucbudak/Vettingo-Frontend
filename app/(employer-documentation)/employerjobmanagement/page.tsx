import type { Metadata } from "next";
import { employerJobManagementDocumentation } from "@/entities/employer-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "İlan Yönetimi | Vettingo",
  description:
    "İş ilanlarını hazırlama, yayınlama, durumlarını yönetme ve performanslarını izleme süreçlerini öğrenin.",
};

export default function EmployerJobManagementDocumentationRoute() {
  return (
    <HrProductDocumentationPage
      content={employerJobManagementDocumentation}
    />
  );
}
