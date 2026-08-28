import type { Metadata } from "next";
import { SubscriptionPage as SubscriptionPageContent } from "@/pages/subscription";

export const metadata: Metadata = {
  title: "Plan Seç | Vettingo",
  description: "Vettingo kullanımınıza uygun abonelik planını seçin.",
};

export default function SubscriptionPage() {
  return <SubscriptionPageContent />;
}
