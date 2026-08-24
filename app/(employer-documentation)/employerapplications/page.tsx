import type { Metadata } from "next";
import { employerApplicationsDocumentation } from "@/entities/employer-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Başvurular Dokümantasyonu | Vettingo",
  description:
    "Başvuruları ortak ölçütlerle inceleme, aşamaları yönetme ve aday iletişimini takip etme süreçlerini öğrenin.",
};

export default function EmployerApplicationsDocumentationRoute() {
  return (
    <HrProductDocumentationPage content={employerApplicationsDocumentation} />
  );
}
