"use client";

import { useState } from "react";

type NotificationListItem = {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
};

const notificationFilters = [
  { label: "Okunmuş Bildirimler", isRead: true },
  { label: "Okunmamış Bildirimler", isRead: false },
] as const;

export function NotificationsPage({
  notifications = [],
}: {
  notifications?: readonly NotificationListItem[];
}) {
  const [showRead, setShowRead] = useState(false);
  const visibleNotifications = notifications.filter((notification) => notification.isRead === showRead);

  return (
    <main aria-label="Bildirimler" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
      <div
        aria-label="Bildirim durumu"
        className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#c5c6cd] bg-white p-1.5 shadow-sm"
        role="group"
      >
        {notificationFilters.map(({ label, isRead }) => (
          <button
            key={label}
            aria-pressed={showRead === isRead}
            className="shrink-0 rounded-full px-2.5 py-2.5 text-xs font-semibold whitespace-nowrap text-[#091426] transition-colors hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091426] aria-pressed:bg-[#091426] aria-pressed:text-white aria-pressed:hover:bg-[#213145] sm:px-5 sm:text-sm"
            onClick={() => setShowRead(isRead)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      {visibleNotifications.length > 0 && (
        <ul aria-label="Bildirim listesi" className="mt-6 space-y-3">
          {visibleNotifications.map((notification) => (
            <li
              key={notification.id}
              className="rounded-lg border border-[#c5c6cd] bg-white px-4 py-4 sm:px-5"
            >
              <h2 className="font-semibold break-words text-[#0b1c30]">{notification.title}</h2>
              <p className="mt-1 text-sm leading-6 break-words text-[#45474c]">{notification.message}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
