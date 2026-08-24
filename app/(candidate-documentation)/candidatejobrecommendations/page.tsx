import type { Metadata } from "next";
import { candidateJobRecommendationsDocumentation } from "@/entities/candidate-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "İş Önerileri Rehberi | Vettingo",
  description:
    "Vettingo iş önerilerini ve yapay zeka eşleşme sinyallerini kariyer hedeflerinize göre nasıl değerlendireceğinizi öğrenin.",
};

export default function CandidateJobRecommendationsDocumentationRoute() {
  return (
    <HrProductDocumentationPage
      content={candidateJobRecommendationsDocumentation}
    />
  );
}
