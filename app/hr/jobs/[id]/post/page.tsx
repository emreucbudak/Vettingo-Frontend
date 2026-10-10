import type { Metadata } from "next";
import { HrJobEditPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "İlan Düzenle",
};

export default async function HrJobPostRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <HrJobEditPage jobId={id} key={id} />;
}
