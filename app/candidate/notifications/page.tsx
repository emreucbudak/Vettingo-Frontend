import type { Metadata } from "next";
import { NotificationsPage } from "@/pages/notifications";
import { CandidateShell } from "@/widgets/candidate/shell";

export const metadata: Metadata = { title: "Bildirimler | Vettingo" };

export default function CandidateNotificationsRoute() {
  return (
    <CandidateShell>
      <NotificationsPage />
    </CandidateShell>
  );
}
