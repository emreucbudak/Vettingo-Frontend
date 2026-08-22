import type { Metadata } from "next";
import { HrScoutPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "Scout",
};

export default function HrScoutRoute() {
  return <HrScoutPage />;
}
