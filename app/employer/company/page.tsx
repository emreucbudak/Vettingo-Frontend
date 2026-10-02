import type { Metadata } from "next";
import { EmployerCompanyPage } from "@/pages/employer-company";

export const metadata: Metadata = {
  title: "Şirket | Vettingo",
  description: "Şirket profili ve şirket bilgileri.",
};

export default function EmployerCompanyRoute() {
  return <EmployerCompanyPage />;
}
