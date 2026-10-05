"use client";

import { DashboardSidebarLink, type DashboardNavigationItem } from "@/shared/ui/dashboard-sidebar";

type HrSidebarProps = {
  mobile?: boolean;
  navigationItems: readonly DashboardNavigationItem[];
  utilityItems: readonly DashboardNavigationItem[];
  onNavigate?: () => void;
};

export function HrSidebar({ mobile = false, navigationItems, utilityItems, onNavigate }: HrSidebarProps) {
  return (
    <nav
      aria-label="İnsan kaynakları menüsü"
      className={mobile
        ? "flex min-h-0 flex-1 flex-col overflow-y-auto text-[#091426] md:hidden"
        : "fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-[#c5c6cd] bg-[#eff4ff] text-[#091426] md:flex"}
    >
      {!mobile ? (
        <div className="px-6 pb-6 pt-5">
          <h1 className="text-xl font-semibold leading-7 text-[#0b1c30]">Vettingo</h1>
        </div>
      ) : null}
      <div className={mobile ? "flex flex-col gap-2 px-4 py-6" : "flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-4 py-6"}>
        <div className={`flex flex-col gap-2 ${mobile ? "" : "translate-y-3"}`}>
          {navigationItems.map((item) => (
            <DashboardSidebarLink item={item} key={item.label} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col px-4 pb-6 pt-3">
        {utilityItems.map((item) => (
          <DashboardSidebarLink compact item={item} key={item.label} onNavigate={onNavigate} />
        ))}
      </div>
    </nav>
  );
}
