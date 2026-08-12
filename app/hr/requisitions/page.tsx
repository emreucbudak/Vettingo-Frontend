import type { Metadata } from "next";
import { HrRequisitionsPage } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: "İşe Alım Talepleri",
};

export default function HrRequisitionsRoute() {
  return <HrRequisitionsPage />;
}
