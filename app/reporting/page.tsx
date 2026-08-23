import type { Metadata } from "next";
import { reportingDocumentation } from "@/entities/hr-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Raporlama Dokümantasyonu | Vettingo",
  description:
    "Vettingo işe alım hunisi, süreç süreleri ve departman performansı raporlarını nasıl kullanacağınızı öğrenin.",
};

export default function ReportingDocumentationRoute() {
  return <HrProductDocumentationPage content={reportingDocumentation} />;
}
