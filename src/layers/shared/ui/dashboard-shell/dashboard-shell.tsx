"use client";

import type { ReactNode } from "react";
import {
  DashboardSidebar,
  type DashboardNavigationItem,
} from "@/shared/ui/dashboard-sidebar";
import { MaterialIcon } from "@/shared/ui/material-icon";

type DashboardProfileIconProps = {
  className?: string;
};

export function DashboardProfileIcon({ className = "" }: DashboardProfileIconProps) {
  return (
    <div
      aria-label="Kullanıcı profili"
      className={`${className} flex h-9 w-9 items-center justify-center rounded-full border border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]`}
      role="img"
    >
      <MaterialIcon className="text-[22px]">person_silhouette</MaterialIcon>
    </div>
  );
}

function DashboardTopBar({
  beforeActions,
  hideOnMobile,
  leading,
  showSettings,
}: {
  beforeActions?: ReactNode;
  hideOnMobile: boolean;
  leading?: ReactNode;
  showSettings: boolean;
}) {
  return (
    <header
      className={`sticky top-0 z-50 h-16 w-full items-center border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 text-[#091426] md:px-6 ${
        hideOnMobile ? "hidden md:flex" : "flex"
      } ${leading ? "justify-between" : "justify-end"}`}
    >
      {leading ? <div className="flex items-center gap-4">{leading}</div> : null}

      <div className="flex items-center gap-3 md:gap-4">
        {beforeActions}
        <div className="flex items-center gap-2">
          <button
            aria-label="Bildirimler"
            className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
            type="button"
          >
            <MaterialIcon>notifications</MaterialIcon>
          </button>
          {showSettings ? (
            <button
              aria-label="Ayarlar"
              className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
              type="button"
            >
              <MaterialIcon>settings</MaterialIcon>
            </button>
          ) : null}
        </div>
        <DashboardProfileIcon className="ml-1" />
      </div>
    </header>
  );
}

type DashboardShellProps = {
  beforeTopBarActions?: ReactNode;
  children: ReactNode;
  hideTopBarOnMobile?: boolean;
  navigationItems: readonly DashboardNavigationItem[];
  showSettings?: boolean;
  sidebarSubtitle: string;
  sidebarTitle: string;
  topBarLeading?: ReactNode;
  utilityItems: readonly DashboardNavigationItem[];
};

export function DashboardShell({
  beforeTopBarActions,
  children,
  hideTopBarOnMobile = false,
  navigationItems,
  showSettings = false,
  sidebarSubtitle,
  sidebarTitle,
  topBarLeading,
  utilityItems,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <DashboardSidebar
        navigationItems={navigationItems}
        subtitle={sidebarSubtitle}
        title={sidebarTitle}
        utilityItems={utilityItems}
      />
      <div className="flex min-h-screen min-w-0 flex-col md:ml-60">
        <DashboardTopBar
          beforeActions={beforeTopBarActions}
          hideOnMobile={hideTopBarOnMobile}
          leading={topBarLeading}
          showSettings={showSettings}
        />
        {children}
      </div>
    </div>
  );
}
