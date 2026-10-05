"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  employerNavigationItems,
  employerUtilityItems,
} from "@/entities/employer-dashboard";
import {
  DashboardShell,
  type DashboardNavigationItem,
} from "@/shared/ui/dashboard-shell";
import { ROUTES } from "@/shared/config/routes";
import { EmployerDashboardFooter } from "./employer-dashboard-footer";
import { EmployerSidebar } from "./employer-sidebar";

function isCurrentRoute(pathname: string, href?: string) {
  if (!href) return false;
  if (href === ROUTES.employerJobs && pathname === ROUTES.newJob) return true;
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
      renderSidebar={({ mobile, onNavigate }) => (
        <EmployerSidebar
          mobile={mobile}
          navigationItems={withActiveRoute(employerNavigationItems, pathname)}
          utilityItems={withActiveRoute(employerUtilityItems, pathname)}
          onNavigate={onNavigate}
        />
      )}
    >
      {children}
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}
