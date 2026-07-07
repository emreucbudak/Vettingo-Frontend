import type { Metadata } from "next";
import { MarketingDashboardPage } from "@/widgets/marketing-dashboard";

export const metadata: Metadata = {
  title: "Vettingo",
};

export default function Home() {
  return <MarketingDashboardPage />;
}