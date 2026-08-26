import type { Metadata } from "next";
import { candidateAssessmentInterviewDocumentation } from "@/entities/candidate-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Değerlendirme ve Mülakat Rehberi | Vettingo",
  description:
    "Vettingo değerlendirmelerine ve mülakatlarına nasıl hazırlanacağınızı, katılım bilgilerini nasıl yöneteceğinizi öğrenin.",
};

export default function CandidateAssessmentInterviewDocumentationRoute() {
  return (
    <HrProductDocumentationPage
      content={candidateAssessmentInterviewDocumentation}
    />
  );
}
