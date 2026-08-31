import type { Metadata } from "next";
import { PaymentPage } from "@/pages/payment";

export const metadata: Metadata = {
  title: "Çalışan Ödemesi | Vettingo",
  description: "Vettingo çalışan planınız için güvenli ödeme işlemi.",
};

export default function CandidatePaymentPage() {
  return <PaymentPage accountType="candidate" />;
}
