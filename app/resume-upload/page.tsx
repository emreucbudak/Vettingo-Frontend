import type { Metadata } from "next";
import { ResumeUploadWizardPage } from "@/widgets/resume-upload-wizard";

export const metadata: Metadata = {
  title: "CV Yükleme | Vettingo",
};

export default function ResumeUploadRoute() {
  return <ResumeUploadWizardPage />;
}