import type { Metadata } from "next";
import { candidateManagementDocumentation } from "@/entities/hr-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Aday Yönetimi Dokümantasyonu | Vettingo",
  description:
    "Vettingo ile aday havuzunu, süreç aşamalarını, sahipliği ve aday iletişimini nasıl yöneteceğinizi öğrenin.",
};

export default function CandidateManagementDocumentationRoute() {
  return <HrProductDocumentationPage content={candidateManagementDocumentation} />;
}
