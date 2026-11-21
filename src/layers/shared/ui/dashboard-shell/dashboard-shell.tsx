"use client";

import { MdClose, MdMenu } from "react-icons/md";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { DashboardDataBoundary } from "@/shared/ui/dashboard-loading/dashboard-data-boundary";

type DashboardShellProps = {
  children: ReactNode;
  renderSidebar: (props: { mobile: boolean; onNavigate?: () => void }) => ReactNode;
};

export function DashboardShell({ children, renderSidebar }: DashboardShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
      if (event.key === "Tab") {
        const controls = menuRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => {
      if (!closeButtonRef.current?.getClientRects().length) closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [menuOpen, closeMenu]);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      {renderSidebar({ mobile: false })}
      <div className="flex min-h-screen min-w-0 flex-col md:ml-60">
        <button
          aria-label="Menüyü aç"
          aria-controls={menuId}
          aria-expanded={menuOpen}
          className="sticky top-3 z-30 mt-3 ml-4 flex size-11 shrink-0 items-center justify-center self-start rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] text-[#091426] hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <MdMenu aria-hidden="true" className="text-2xl" />
        </button>
        <DashboardDataBoundary>{children}</DashboardDataBoundary>
      </div>
      <div
        ref={menuRef}
        id={menuId}
        role="dialog"
        aria-modal={menuOpen ? true : undefined}
        aria-label="Mobil menü"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed left-0 top-0 z-[100] flex flex-col overflow-hidden bg-[#eff4ff] text-[#091426] md:hidden ${menuOpen ? "w-screen h-screen" : "w-0 h-0"}`}
      >
        <div className="flex shrink-0 items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold leading-7 text-[#0b1c30]">Vettingo</span>
          <button
            ref={closeButtonRef}
            aria-label="Menüyü kapat"
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#dce9ff]"
            onClick={closeMenu}
            type="button"
          >
            <MdClose aria-hidden="true" className="text-2xl" />
          </button>
        </div>
        {renderSidebar({ mobile: true, onNavigate: closeMenu })}
      </div>
    </div>
  );
}
