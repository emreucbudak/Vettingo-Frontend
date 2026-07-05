import type { Metadata } from "next";
import { ResumeUploadWizardPage } from "@/widgets/resume-upload-wizard";

export const metadata: Metadata = {
  title: "Smart Resume Upload | Vettingo",
};

export default function ResumeUploadRoute() {
  return <ResumeUploadWizardPage />;
}