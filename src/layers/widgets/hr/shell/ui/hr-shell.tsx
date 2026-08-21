"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  hrNavigationItems,
  hrUtilityItems,
} from "@/entities/hr-dashboard";
import { DashboardShell } from "@/shared/ui/dashboard-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

function isRouteActive(pathname: string, href: string) {
  if (href === "/hr") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function HrMobileNavigation({ pathname }: { pathname: string }) {
  return (
    <div className="border-b border-[#c5c6cd] bg-[#eff4ff] md:hidden">
      <div className="flex items-center px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#006c49]">
            İnsan Kaynakları
          </p>
          <p className="mt-0.5 text-lg font-semibold text-[#0b1c30]">Vettingo</p>
        </div>
      </div>
      <nav
        aria-label="Mobil insan kaynakları navigasyonu"
        className="flex gap-2 overflow-x-auto px-4 pb-3"
      >
        {hrNavigationItems.map((item) => {
          const active = isRouteActive(pathname, item.href);

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.05em] transition-colors ${
                active
                  ? "bg-[#091426] text-white"
                  : "border border-[#c5c6cd] bg-[#f8f9ff] text-[#45474c]"
              }`}
              href={item.href}
              key={item.key}
            >
              <MaterialIcon className="text-[17px]">{item.icon}</MaterialIcon>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
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
      navigationItems={navigationItems}
      sidebarSubtitle=""
      sidebarTitle="Vettingo"
      utilityItems={utilityItems}
    >
      <HrMobileNavigation pathname={pathname} />
      {children}
      <HrFooter />
    </DashboardShell>
  );
}
