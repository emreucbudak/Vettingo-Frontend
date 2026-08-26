import type { Metadata } from "next";
import { candidateProfileDocumentation } from "@/entities/candidate-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Profil ve Özgeçmiş Rehberi | Vettingo",
  description:
    "Vettingo aday profilinizi, deneyimlerinizi, yetkinliklerinizi ve özgeçmişinizi etkili biçimde nasıl yöneteceğinizi öğrenin.",
};

export default function CandidateProfileDocumentationRoute() {
  return <HrProductDocumentationPage content={candidateProfileDocumentation} />;
}
