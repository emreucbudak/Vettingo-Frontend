import type { Metadata } from "next";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = { title: "Sınavı Düzenle | Vettingo" };

export default function EmployerUpdateExamRoute() {
  return (
    <EmployerShell>
      <main
        aria-label="Sınavı düzenle"
        className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8"
      />
    </EmployerShell>
  );
}
