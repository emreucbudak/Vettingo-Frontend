import type { Metadata } from "next";
import { CandidateSettingsPage } from "@/pages/candidate-settings";

export const metadata: Metadata = {
  title: "Ayarlar | Vettingo",
  description: "Aday profil ve iletişim bilgileri ayarları.",
};

export default function CandidateSettingsRoute() {
  return <CandidateSettingsPage />;
}
