import type { Metadata } from "next";
import { getPaymentPageData, PaymentPage } from "@/pages/payment";

type CandidatePaymentPageProps = {
  searchParams: Promise<{
    billing?: string | string[];
    plan?: string | string[];
  }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export const metadata: Metadata = {
  title: "Çalışan Ödemesi | Vettingo",
  description: "Vettingo çalışan planınız için güvenli ödeme işlemi.",
};

export default async function CandidatePaymentPage({
  searchParams,
}: CandidatePaymentPageProps) {
  const query = await searchParams;
  const paymentData = getPaymentPageData(
    "candidate",
    firstValue(query.plan),
    firstValue(query.billing),
  );

  return <PaymentPage {...paymentData} />;
}
