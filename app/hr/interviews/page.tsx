import type { Metadata } from "next";
import { HrInterviewsPage } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: "Mülakatlar",
};

export default function HrInterviewsRoute() {
  return <HrInterviewsPage />;
}
