import type { Metadata } from "next";
import { HrSettingsPage } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: "HR Ayarları",
};

export default function HrSettingsRoute() {
  return <HrSettingsPage />;
}
