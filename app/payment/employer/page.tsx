import type { Metadata } from "next";
import { getPaymentPageData, PaymentPage } from "@/pages/payment";

type EmployerPaymentPageProps = {
  searchParams: Promise<{
    billing?: string | string[];
    plan?: string | string[];
  }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export const metadata: Metadata = {
  title: "İşveren Ödemesi | Vettingo",
  description: "Vettingo işveren planınız için güvenli ödeme işlemi.",
};

export default async function EmployerPaymentPage({
  searchParams,
}: EmployerPaymentPageProps) {
  const query = await searchParams;
  const paymentData = getPaymentPageData(
    "employer",
    firstValue(query.plan),
    firstValue(query.billing),
  );

  return <PaymentPage {...paymentData} />;
}
