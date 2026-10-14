"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getDashboardPendingRequests, subscribeDashboardLoading } from "@/shared/api/dashboard-loading";
import { DashboardPageSkeleton } from "./dashboard-page-skeleton";

function PageDataBoundary({ children, pathname }: { children: ReactNode; pathname: string }) {
  const [mounted, setMounted] = useState(false);
  const pendingRequests = useSyncExternalStore(
    subscribeDashboardLoading,
    () => getDashboardPendingRequests(pathname),
    () => 0,
  );

  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setMounted(true));
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  const loading = !mounted || pendingRequests > 0;

  return (
    <>
      {loading && <DashboardPageSkeleton pathname={pathname} />}
      <div
        className="flex min-w-0 flex-1 flex-col"
        hidden={loading}
        inert={loading}
        style={loading ? { display: "none" } : undefined}
      >
        {children}
      </div>
    </>
  );
}

export function DashboardDataBoundary({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <PageDataBoundary key={pathname} pathname={pathname}>{children}</PageDataBoundary>;
}
