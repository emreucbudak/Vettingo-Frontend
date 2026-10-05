"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  hrNavigationItems,
  hrUtilityItems,
} from "@/entities/hr-dashboard";
import { DashboardShell } from "@/shared/ui/dashboard-shell";
import { HrSidebar } from "./hr-sidebar";

function isRouteActive(pathname: string, href: string) {
  if (href === "/hr") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function HrFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 text-[11px] text-[#45474c] md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#0b1c30]">
          Vettingo
        </span>
        <span>© 2026 Vettingo. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}

export function HrShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navigationItems = hrNavigationItems.map((item) => ({
    ...item,
    active: isRouteActive(pathname, item.href),
  }));

  const utilityItems = hrUtilityItems.map(({ key, ...item }) => ({
    ...item,
    active:
      key === "help"
        ? isRouteActive(pathname, "/hr/help-center")
        : key === "settings"
          ? isRouteActive(pathname, "/hr/settings")
          : false,
  }));

  return (
    <DashboardShell
      renderSidebar={({ mobile, onNavigate }) => (
        <HrSidebar
          mobile={mobile}
          navigationItems={navigationItems}
          utilityItems={utilityItems}
          onNavigate={onNavigate}
        />
      )}
    >
      {children}
      <HrFooter />
    </DashboardShell>
  );
}
