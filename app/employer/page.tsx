import type { Metadata } from "next";
import { EmployerDashboardPage } from "@/widgets/employer-dashboard";

export const metadata: Metadata = {
  title: "İşveren Paneli | Vettingo",
};

export default function EmployerPage() {
  return <EmployerDashboardPage />;
}