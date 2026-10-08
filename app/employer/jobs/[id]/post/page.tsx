import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { employerJobs } from "@/entities/employer-recruiting/employer-recruiting-data";
import { EmployerJobEditPage } from "@/pages/employer-recruiting";

export const metadata: Metadata = {
  title: "İlan Düzenle | Vettingo",
};

export default async function EmployerJobPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = employerJobs.find((item) => item.id === id);

  if (!job) notFound();

  return <EmployerJobEditPage job={job} key={job.id} />;
}
