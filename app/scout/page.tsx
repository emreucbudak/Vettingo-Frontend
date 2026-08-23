import type { Metadata } from "next";
import { scoutDocumentation } from "@/entities/hr-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Scout Dokümantasyonu | Vettingo",
  description:
    "Vettingo Scout ile aday keşfi, filtreleme ve kısa liste süreçlerini nasıl yöneteceğinizi öğrenin.",
};

export default function ScoutDocumentationRoute() {
  return <HrProductDocumentationPage content={scoutDocumentation} />;
}
