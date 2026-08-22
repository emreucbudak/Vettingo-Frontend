import type { ReactNode } from "react";

type MaterialIconProps = {
  children: string;
  className?: string;
};

const iconPaths: Record<string, ReactNode> = {
  account_balance: (
    <>
      <path d="M3 9h18" />
      <path d="M5 9v10" />
      <path d="M9 9v10" />
      <path d="M15 9v10" />
      <path d="M19 9v10" />
      <path d="M3 19h18" />
      <path d="M12 3 4 7h16z" />
    </>
  ),
  add: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  add_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-3" />
      <path d="M7 7h3l2 2 4-5 2 2" />
    </>
  ),
  apartment: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M16 9h2a2 2 0 0 1 2 2v10" />
      <path d="M9 21v-4h3v4" />
      <path d="M8 7h1" />
      <path d="M12 7h1" />
      <path d="M8 11h1" />
      <path d="M12 11h1" />
      <path d="M8 15h1" />
      <path d="M12 15h1" />
    </>
  ),
  arrow_back: (
    <>
      <path d="M19 12H5" />
      <path d="m12 5-7 7 7 7" />
    </>
  ),
  arrow_drop_down: <path d="m7 9 5 6 5-6z" fill="currentColor" stroke="none" />,
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  assignment: (
    <>
      <rect height="4" rx="1" width="8" x="8" y="2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </>
  ),
  assignment_add: (
    <>
      <rect height="4" rx="1" width="8" x="8" y="2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v5" />
      <path d="M20 19v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M8 11h5" />
      <path d="M8 16h3" />
      <path d="M17 13v6" />
      <path d="M14 16h6" />
    </>
  ),
  expand_more: <path d="m6 9 6 6 6-6" />,
  assignment_ind: (
    <>
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <circle cx="9" cy="10" r="2" />
      <path d="M6 16a3 3 0 0 1 6 0" />
      <path d="M14 9h4" />
      <path d="M14 13h4" />
    </>
  ),
  auto_awesome: (
    <>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="m5 16 .8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8z" />
      <path d="m18 14 .6 1.4L20 16l-1.4.6L18 18l-.6-1.4L16 16l1.4-.6z" />
    </>
  ),
  badge: (
    <>
      <rect height="14" rx="2" width="18" x="3" y="5" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6.5 16a3 3 0 0 1 5 0" />
      <path d="M14 10h4" />
      <path d="M14 14h3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 10-13h-7z" />,
  business: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M8 9h1" />
      <path d="M12 9h1" />
      <path d="M16 9h1" />
      <path d="M8 13h1" />
      <path d="M16 13h1" />
    </>
  ),
  business_center: (
    <>
      <rect height="13" rx="2" width="18" x="3" y="7" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12c5 3 13 3 18 0" />
      <path d="M12 11v4" />
    </>
  ),
  calendar_month: (
    <>
      <rect height="17" rx="2" width="18" x="3" y="4" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 9h18" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
      <path d="M8 17h.01" />
      <path d="M12 17h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  checklist_edit: (
    <>
      <rect height="15" rx="2" width="13" x="4" y="4" />
      <path d="M8 8h5" />
      <path d="M8 12h4" />
      <path d="M8 16h3" />
      <path d="m14 18 5-5 2 2-5 5h-2z" />
      <path d="m18.5 13.5 2 2" />
    </>
  ),
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  chevron_right: <path d="m9 18 6-6-6-6" />,
  close: (
    <>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </>
  ),
  corporate_fare: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 8h2a2 2 0 0 1 2 2v11" />
      <path d="M8 21v-4h4v4" />
      <path d="M8 7h4" />
      <path d="M8 11h4" />
      <path d="M8 15h4" />
    </>
  ),
  dashboard: (
    <>
      <rect height="7" rx="1" width="7" x="3" y="3" />
      <rect height="7" rx="1" width="7" x="14" y="3" />
      <rect height="7" rx="1" width="7" x="3" y="14" />
      <rect height="7" rx="1" width="7" x="14" y="14" />
    </>
  ),
  dark_mode: (
    <>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z" />
    </>
  ),  description: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  document_scanner: (
    <>
      <path d="M5 4H3v5" />
      <path d="M19 4h2v5" />
      <path d="M5 20H3v-5" />
      <path d="M19 20h2v-5" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </>
  ),
  domain: (
    <>
      <path d="M4 21V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v15" />
      <path d="M17 10h3v11" />
      <path d="M8 8h1" />
      <path d="M12 8h1" />
      <path d="M8 12h1" />
      <path d="M12 12h1" />
      <path d="M8 16h1" />
      <path d="M12 16h1" />
    </>
  ),
  door_open: (
    <>
      <path d="M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7" />
      <path d="M10 12h11" />
      <path d="m17 8 4 4-4 4" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 15.5a5 5 0 0 1 6 4.5" />
    </>
  ),
  forum: (
    <>
      <path d="M4 4h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M18 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v3l-4-3h-3a2 2 0 0 1-2-2v-3" />
      <path d="M6 9h8" />
      <path d="M6 12h5" />
    </>
  ),
  handshake: (
    <>
      <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l108-108q11-11 27.5-11.5T398-528q11 11 11 28t-11 28L291-364q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l108-107q11-11 27.5-11.5T483-443q11 11 11 28t-11 28L376-279q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l108-107q11-11 27.5-11.5T568-358q11 11 11 28t-11 28L460-194q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l175-175q23-23 56.5-23t56.5 23l75 75q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-14 14-20 33t-3 38q3 17-7 30t-27 15q-17 2-30-7.5T42-553q-6-38 5.5-74.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-98-560Z" fill="currentColor" stroke="none" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.8 2.8 0 1 1 4.6 2.2c-.9.7-2.1 1.3-2.1 2.8" />
      <path d="M12 17h.01" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M10 18v-2.5a6 6 0 1 1 4 0V18" />
      <path d="M12 2v2" />
      <path d="M4.9 5.6 6.3 7" />
      <path d="M19.1 5.6 17.7 7" />
    </>
  ),  light_mode: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),  location_on: (
    <>
      <path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  lock: (
    <>
      <rect height="10" rx="2" width="14" x="5" y="11" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  mail: (
    <>
      <rect height="14" rx="2" width="18" x="3" y="5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  monitoring: (
    <>
      <path d="M4 4v16h16" />
      <path d="m7 16 4-5 3 3 5-7" />
      <path d="M16 7h3v3" />
    </>
  ),
  notifications: (
    <>
      <path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  notifications_active: (
    <>
      <path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
      <path d="M4 4 2.5 5.5" />
      <path d="M20 4l1.5 1.5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  person_add: (
    <>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21a7 7 0 0 1 14 0" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </>
  ),
  person_edit: (
    <>
      <circle cx="10" cy="7" r="4" />
      <path d="M3 21a7 7 0 0 1 10.5-6.1" />
      <path d="m14 19 5-5 2 2-5 5h-2z" />
      <path d="m18.5 14.5 2 2" />
    </>
  ),
  person_silhouette: (
    <>
      <circle cx="12" cy="8" fill="currentColor" r="4" stroke="none" />
      <path d="M4 21a8 8 0 0 1 16 0z" fill="currentColor" stroke="none" />
    </>
  ),
  psychology: (
    <>
      <path d="M9 18a4 4 0 0 1-4-4 4 4 0 0 1 1.2-2.8A4 4 0 0 1 10 5a4 4 0 0 1 7.4 1.8A4 4 0 0 1 19 14a4 4 0 0 1-4 4" />
      <path d="M9 18v3" />
      <path d="M15 18v3" />
      <path d="M9 13h6" />
      <path d="M12 10v6" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" />
      <path d="M12 12 19 5" />
      <path d="M12 21a9 9 0 1 1 9-9" />
    </>
  ),
  school: (
    <>
      <path d="m3 9 9-5 9 5-9 5z" />
      <path d="M7 12v4c3 2 7 2 10 0v-4" />
      <path d="M21 9v6" />
    </>
  ),
  science: (
    <>
      <path d="M10 3h4" />
      <path d="M11 3v6l-5 9a2 2 0 0 0 1.7 3h8.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M8 16h8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  settings: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.09a2 2 0 0 1 1 1.74v.5a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4" />
      <path d="m8.6 13.5 6.8 4" />
    </>
  ),
  space_dashboard: (
    <>
      <rect height="6" rx="1" width="8" x="3" y="3" />
      <rect height="10" rx="1" width="8" x="13" y="3" />
      <rect height="10" rx="1" width="8" x="3" y="11" />
      <rect height="6" rx="1" width="8" x="13" y="15" />
    </>
  ),
  support_agent: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M6 17H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1z" />
      <path d="M18 11h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1z" />
      <path d="M18 17a6 6 0 0 1-6 4" />
      <path d="M10 21h2" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9.5 16a4 4 0 0 0 5 0" />
    </>
  ),
  support_check: (
    <>
      <path d="M7 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" />
      <path d="M9 7h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v3l-4-3H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      <path d="m11 12 2 2 4-4" />
    </>
  ),
  storefront: (
    <>
      <path d="M4 10h16l-1-5H5z" />
      <path d="M5 10v10h14V10" />
      <path d="M8 20v-6h8v6" />
      <path d="M4 10a3 3 0 0 0 6 0" />
      <path d="M10 10a3 3 0 0 0 6 0" />
      <path d="M16 10a3 3 0 0 0 6 0" />
    </>
  ),
  trending_up: (
    <>
      <path d="m3 17 6-6 4 4 7-8" />
      <path d="M14 7h6v6" />
    </>
  ),
  tune: (
    <>
      <path d="M4 6h4" />
      <path d="M12 6h8" />
      <circle cx="10" cy="6" r="2" />
      <path d="M4 12h9" />
      <path d="M17 12h3" />
      <circle cx="15" cy="12" r="2" />
      <path d="M4 18h2" />
      <path d="M10 18h10" />
      <circle cx="8" cy="18" r="2" />
    </>
  ),
  verified: (
    <>
      <path d="m12 2 2.3 2.1 3.1-.2.8 3 2.5 1.8-1.2 2.9 1.2 2.9-2.5 1.8-.8 3-3.1-.2L12 22l-2.3-2.1-3.1.2-.8-3-2.5-1.8 1.2-2.9-1.2-2.9 2.5-1.8.8-3 3.1.2z" />
      <path d="m8.5 12 2.4 2.4 4.8-5" />
    </>
  ),
  visibility: (
    <>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  visibility_off: (
    <>
      <path d="m3 3 18 18" />
      <path d="M10.6 5.2A9 9 0 0 1 12 5c6 0 9.5 7 9.5 7a15 15 0 0 1-3.1 3.8" />
      <path d="M6.5 6.8A15 15 0 0 0 2.5 12s3.5 7 9.5 7a9 9 0 0 0 4.1-1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 2.5 20h19z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </>
  ),
  work: (
    <>
      <rect height="13" rx="2" width="18" x="3" y="7" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  work_history: (
    <>
      <rect height="12" rx="2" width="17" x="3" y="8" />
      <path d="M8 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15v2l1.5 1" />
    </>
  ),
  workspace_premium: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m9 13-1 8 4-2 4 2-1-8" />
      <path d="m9.5 8 1.7 1.7L15 6" />
    </>
  ),
};

export function MaterialIcon({ children, className = "" }: MaterialIconProps) {
  const iconName = children.trim();

  return (
    <svg
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] ${className}`}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox={iconName === "handshake" ? "0 -960 960 960" : "0 0 24 24"}
    >
      {iconPaths[iconName]}
    </svg>
  );
}

