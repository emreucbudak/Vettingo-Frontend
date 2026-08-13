import type { Metadata } from "next";
import { EmployerApplicationsPage } from "@/pages/employer-recruiting";

export const metadata: Metadata = {
  title: "Başvurular | Vettingo",
};

export default function EmployerApplicationsRoute() {
  return <EmployerApplicationsPage />;
}
