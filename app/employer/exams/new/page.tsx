import type { Metadata } from "next";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = { title: "Sınav Soruları | Vettingo" };

export default function EmployerNewExamRoute() {
  return (
    <EmployerShell>
      <main aria-label="Sınav soruları" className="flex-1" />
    </EmployerShell>
  );
}
