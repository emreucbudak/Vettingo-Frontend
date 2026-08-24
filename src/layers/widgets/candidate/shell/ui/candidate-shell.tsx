"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";
import {
  DashboardShell,
  type DashboardNavigationItem,
} from "@/shared/ui/dashboard-shell";

const candidateNavigationItems = [
  { label: "Ana Sayfa", icon: "home", href: ROUTES.candidate },
  {
    label: "Başvurular",
    icon: "assignment_ind",
    href: ROUTES.candidateApplications,
  },
  {
    label: "Yapay Zeka Analizi",
    icon: "auto_awesome",
    href: ROUTES.myCandidate,
  },
  { label: "İşler", icon: "business_center", href: ROUTES.candidateJobs },
] as const;

const candidateUtilityItems = [
  {
    label: "Yardım Merkezi",
    icon: "support_agent",
    href: ROUTES.candidateHelpCenter,
  },
  { label: "Ayarlar", icon: "settings", href: ROUTES.candidateSettings },
  { label: "Çıkış Yap", icon: "door_open", action: "logout" },
] as const;

function isCurrentRoute(pathname: string, href?: string) {
  if (!href) return false;
  if (href === ROUTES.candidate) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function withActiveRoute(
  items: readonly DashboardNavigationItem[],
  pathname: string,
) {
  return items.map((item) => ({
    ...item,
    active: isCurrentRoute(pathname, item.href),
  }));
}

function CandidateFooter() {
  return (
    <footer className="mt-auto border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#45474c]">
        © 2026 Vettingo. Tüm hakları saklıdır.
      </span>
    </footer>
  );
}

export function CandidateShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const navigationItems = withActiveRoute(candidateNavigationItems, pathname);
  const utilityItems = withActiveRoute(candidateUtilityItems, pathname);

  return (
    <DashboardShell
      navigationItems={navigationItems}
      sidebarSubtitle=""
      sidebarTitle="Vettingo"
      utilityItems={utilityItems}
    >
      {children}
      <CandidateFooter />
    </DashboardShell>
  );
}
