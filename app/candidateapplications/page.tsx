import type { Metadata } from "next";
import { candidateApplicationsDocumentation } from "@/entities/candidate-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Başvurular Rehberi | Vettingo",
  description:
    "Vettingo'da başvuru durumlarını, süreç aşamalarını ve görüşme güncellemelerini nasıl takip edeceğinizi öğrenin.",
};

export default function CandidateApplicationsDocumentationRoute() {
  return (
    <HrProductDocumentationPage
      content={candidateApplicationsDocumentation}
    />
  );
}
