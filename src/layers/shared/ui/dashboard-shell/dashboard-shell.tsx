"use client";

import { MdClose, MdMenu, MdOutlineNotifications, MdOutlineSettings, MdPerson } from "react-icons/md";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";

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
      <MdPerson aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[22px]" />
    </div>
  );
}

function DashboardTopBar({
  beforeActions,
  menuId,
  menuOpen,
  onOpenMenu,
  leading,
  showSettings,
}: {
  beforeActions?: ReactNode;
  menuId: string;
  menuOpen: boolean;
  onOpenMenu: () => void;
  leading?: ReactNode;
  showSettings: boolean;
}) {
  return (
    <header
      className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 text-[#091426] md:px-6"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <button
          aria-label="Menüyü aç"
          aria-controls={menuId}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#091426] hover:bg-[#eff4ff] md:hidden"
          onClick={onOpenMenu}
          type="button"
        >
          <MdMenu aria-hidden="true" className="text-2xl" />
        </button>
        {leading}
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {beforeActions}
        <div className="flex items-center gap-2">
          <button
            aria-label="Bildirimler"
            className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
            type="button"
          >
            <MdOutlineNotifications aria-hidden="true" focusable="false"  className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em]" />
          </button>
          {showSettings ? (
            <button
              aria-label="Ayarlar"
              className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
              type="button"
            >
              <MdOutlineSettings aria-hidden="true" focusable="false"  className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em]" />
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
  renderSidebar: (props: { mobile: boolean; onNavigate?: () => void }) => ReactNode;
  showSettings?: boolean;
  topBarLeading?: ReactNode;
};

export function DashboardShell({
  beforeTopBarActions,
  children,
  renderSidebar,
  showSettings = false,
  topBarLeading,
}: DashboardShellProps) {
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
        <DashboardTopBar
          beforeActions={beforeTopBarActions}
          menuId={menuId}
          menuOpen={menuOpen}
          onOpenMenu={() => setMenuOpen(true)}
          leading={topBarLeading}
          showSettings={showSettings}
        />
        {children}
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
