import type { Metadata } from "next";
import { EmployerSettingsPage } from "@/widgets/employer-settings";

export const metadata: Metadata = {
  title: "Hesap Ayarları | Vettingo",
  description: "Vettingo işveren şirket, iletişim ve güvenlik ayarları.",
};

export default function EmployerSettingsRoute() {
  return <EmployerSettingsPage />;
}
