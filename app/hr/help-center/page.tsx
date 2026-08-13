import type { Metadata } from "next";
import { HrHelpCenterPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "HR Yardım Merkezi",
};

export default function HrHelpCenterRoute() {
  return <HrHelpCenterPage />;
}
