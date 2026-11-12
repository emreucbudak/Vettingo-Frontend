import type { Metadata } from "next";
import { VerifyEmailPage as VerifyEmailPageContent } from "@/pages/auth";

export const metadata: Metadata = {
  title: "E-posta Doğrulama | Vettingo",
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ accountType?: string | string[] }>;
}) {
  const { accountType } = await searchParams;

  return <VerifyEmailPageContent isEmployer={accountType === "employer"} />;
}
