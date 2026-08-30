import type { Metadata } from "next";
import { candidateSubscriptionPlans } from "@/entities/subscription";
import { SubscriptionPage as SubscriptionPageContent } from "@/pages/subscription";

export const metadata: Metadata = {
  title: "Aday Planı Seç | Vettingo",
  description: "Kariyer hedeflerinize uygun Vettingo aday planını seçin.",
};

export default function CandidateSubscriptionPage() {
  return <SubscriptionPageContent plans={candidateSubscriptionPlans} />;
}
