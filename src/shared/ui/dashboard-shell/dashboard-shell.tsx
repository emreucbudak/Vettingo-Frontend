import type { ReactNode } from "react";
import { MaterialIcon } from "@/shared/ui/material-icon";

export type DashboardNavigationItem = {
  label: string;
  icon: string;
  active?: boolean;
  href?: string;
};

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

function DashboardSidebarLink({ item }: { item: DashboardNavigationItem }) {
  return (
    <a
      aria-current={item.active ? "page" : undefined}
      className={`flex items-center gap-4 rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-[0.05em] transition-all ${
        item.active
          ? "bg-[#6cf8bb] text-[#00714d]"
          : "text-[#45474c] hover:bg-[#dce9ff] hover:text-[#0b1c30]"
      }`}
      href={item.href ?? "#"}
    >
      <MaterialIcon className="text-[22px] leading-none">{item.icon}</MaterialIcon>
      {item.label}
    </a>
  );
}

function DashboardSidebar({
  navigationItems,
  subtitle,
  title,
  utilityItems,
}: {
  navigationItems: readonly DashboardNavigationItem[];
  subtitle: string;
  title: string;
  utilityItems: readonly DashboardNavigationItem[];
}) {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-[#c5c6cd] bg-[#eff4ff] text-[#091426] md:flex">
      <div className="px-6 pb-6 pt-5">
        <h1 className="text-xl font-semibold leading-7 text-[#0b1c30]">{title}</h1>
        <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">{subtitle}</p>
      </div>

      <div className="flex flex-1 items-center overflow-y-auto px-4 py-6">
        <div className="w-full space-y-2">
          {navigationItems.map((item) => (
            <DashboardSidebarLink item={item} key={item.label} />
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-2 px-4 pb-6 pt-4">
        {utilityItems.map((item) => (
          <DashboardSidebarLink item={item} key={item.label} />
        ))}
      </div>
    </nav>
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
