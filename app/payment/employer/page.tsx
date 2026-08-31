import type { Metadata } from "next";
import { PaymentPage } from "@/pages/payment";

export const metadata: Metadata = {
  title: "İşveren Ödemesi | Vettingo",
  description: "Vettingo işveren planınız için güvenli ödeme işlemi.",
};

export default function EmployerPaymentPage() {
  return <PaymentPage accountType="employer" />;
}
