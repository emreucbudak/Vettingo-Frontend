import type { Metadata } from "next";
import { EmployerDashboardPage } from "@/pages/employer-dashboard";

export const metadata: Metadata = {
  title: "İşveren Paneli | Vettingo",
};

export default function EmployerPage() {
  return <EmployerDashboardPage />;
}