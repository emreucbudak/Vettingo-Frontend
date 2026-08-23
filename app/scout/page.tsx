import type { Metadata } from "next";
import { scoutDocumentation } from "@/entities/hr-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Scout Ağı | Vettingo",
  description:
    "Vettingo Scout ağıyla doğru adayları keşfetme, filtreleme ve kısa liste oluşturma süreçleri hakkında bilgi edinin.",
};

export default function ScoutDocumentationRoute() {
  return <HrProductDocumentationPage content={scoutDocumentation} />;
}
