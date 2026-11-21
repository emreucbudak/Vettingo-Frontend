import type { Metadata } from "next";
import { NotificationsPage } from "@/pages/notifications";
import { EmployerShell } from "@/widgets/employer/shell";

export const metadata: Metadata = { title: "Bildirimler | Vettingo" };

export default function EmployerNotificationsRoute() {
  return (
    <EmployerShell>
      <NotificationsPage />
    </EmployerShell>
  );
}
