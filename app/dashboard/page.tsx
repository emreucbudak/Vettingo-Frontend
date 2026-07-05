import type { Metadata } from "next";
import { MarketingDashboardPage } from "@/widgets/marketing-dashboard";

export const metadata: Metadata = {
  title: "Dashboard | Vettingo",
};

export default function DashboardRoute() {
  return <MarketingDashboardPage />;
}