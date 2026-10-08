import type { Metadata } from "next";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = {
  title: "İlan Düzenle | Vettingo",
};

export default function EmployerJobPostPage() {
  return (
    <EmployerShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" />
    </EmployerShell>
  );
}
