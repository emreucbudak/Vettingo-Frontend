import type { Metadata } from "next";
import { EmployerJobsPage } from "@/widgets/employer-recruiting";

export const metadata: Metadata = {
  title: "İlanlarım | Vettingo",
};

export default function EmployerJobsRoute() {
  return <EmployerJobsPage />;
}
