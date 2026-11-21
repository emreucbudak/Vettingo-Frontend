import type { Metadata } from "next";
import { NotificationsPage } from "@/pages/notifications";

export const metadata: Metadata = { title: "Bildirimler" };

export default function HrNotificationsRoute() {
  return <NotificationsPage />;
}
