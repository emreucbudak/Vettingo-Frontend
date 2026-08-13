import type { Metadata } from "next";
import { HrInterviewsPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "Mülakatlar",
};

export default function HrInterviewsRoute() {
  return <HrInterviewsPage />;
}
