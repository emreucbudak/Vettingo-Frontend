import type { Metadata } from "next";
import { HrRequisitionsPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "İşe Alım Talepleri",
};

export default function HrRequisitionsRoute() {
  return <HrRequisitionsPage />;
}
