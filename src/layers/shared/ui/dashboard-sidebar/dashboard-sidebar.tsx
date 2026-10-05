"use client";

import { AppIcon } from "@/shared/ui/icon";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";

export type DashboardNavigationItem = {
  label: string;
  icon: string;
  active?: boolean;
  href?: string;
  action?: "logout";
};

function DashboardSidebarIcon({ icon }: { icon: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
      <AppIcon
        className={`${icon === "binoculars" ? "text-[24px]" : "text-[22px]"} leading-none`}
      >
        {icon}
      </AppIcon>
    </span>
  );
}
export function DashboardSidebarLink({
  compact = false,
  item,
  onNavigate,
}: {
  compact?: boolean;
  item: DashboardNavigationItem;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const isLogout = item.action === "logout";
  const className = `flex items-center gap-4 rounded-lg px-4 ${
    compact ? "py-2" : "py-3"
  } text-xs font-semibold uppercase tracking-[0.05em] transition-all ${
    item.active
      ? "bg-[#6cf8bb] text-[#00714d]"
      : isLogout
        ? "text-[#8c1d18] hover:bg-[#ffdad6] hover:text-[#6f1612]"
        : "text-[#45474c] hover:bg-[#dce9ff] hover:text-[#0b1c30]"
  }`;

  if (isLogout) {
    return (
      <button
        className={`${className} w-full`}
        onClick={() => {
          onNavigate?.();
          router.replace(ROUTES.login);
          router.refresh();
        }}
        type="button"
      >
        <DashboardSidebarIcon icon={item.icon} />
        {item.label}
      </button>
    );
  }

  return (
    <Link
      aria-current={item.active ? "page" : undefined}
      className={className}
      href={item.href ?? "#"}
      onClick={onNavigate}
    >
      <DashboardSidebarIcon icon={item.icon} />
      {item.label}
    </Link>
  );
}
