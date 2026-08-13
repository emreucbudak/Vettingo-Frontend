"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  employerNavigationItems,
  employerProfile,
  employerUtilityItems,
} from "@/entities/employer-dashboard";
import {
  DashboardShell,
  type DashboardNavigationItem,
} from "@/shared/ui/dashboard-shell";
import { ROUTES } from "@/shared/config/routes";
import { EmployerDashboardFooter } from "./employer-dashboard-footer";

function isCurrentRoute(pathname: string, href?: string) {
  if (!href) return false;
  if (href === ROUTES.employer) return pathname === href;
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

export function EmployerShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <DashboardShell
      navigationItems={withActiveRoute(employerNavigationItems, pathname)}
      sidebarSubtitle={employerProfile.edition}
      sidebarTitle={employerProfile.companyLabel}
      utilityItems={withActiveRoute(employerUtilityItems, pathname)}
    >
      {children}
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}
