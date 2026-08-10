import type { Metadata } from "next";
import { CandidateSettingsPage } from "@/widgets/candidate-settings";

export const metadata: Metadata = {
  title: "Ayarlar | Vettingo",
  description: "Aday profil ve iletişim bilgileri ayarları.",
};

export default function CandidateSettingsRoute() {
  return <CandidateSettingsPage />;
}
