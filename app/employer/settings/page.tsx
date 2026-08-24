import type { Metadata } from "next";
import { EmployerSettingsPage } from "@/pages/employer-settings";

export const metadata: Metadata = {
  title: "Ayarlar | Vettingo",
  description: "Vettingo işveren şirket, iletişim ve güvenlik ayarları.",
};

export default function EmployerSettingsRoute() {
  return <EmployerSettingsPage />;
}
