import type { Metadata } from "next";
import { EmployerJobsPage } from "@/pages/employer-recruiting";

export const metadata: Metadata = {
  title: "İlanlar | Vettingo",
};

export default function EmployerJobsRoute() {
  return <EmployerJobsPage />;
}
