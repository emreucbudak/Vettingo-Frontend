import type { Metadata } from "next";
import { JobRequisitionWizardPage } from "@/pages/job-requisition-wizard";

export const metadata: Metadata = {
  title: "Yeni İş İlanı | Vettingo",
};

export default function NewJobRoute() {
  return <JobRequisitionWizardPage />;
}