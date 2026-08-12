import type { Metadata } from "next";
import { HrReportsPage } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: "HR Raporları",
};

export default function HrReportsRoute() {
  return <HrReportsPage />;
}
