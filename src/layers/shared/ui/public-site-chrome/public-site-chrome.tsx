import Link from "next/link";
import type { ReactNode } from "react";

type PublicSiteHeaderProps = {
  homeHref: string;
  productName: string;
};

type PublicSiteFooterProps = PublicSiteHeaderProps & {
  copyright?: string;
};

type PublicSiteShellProps = PublicSiteFooterProps & {
  children: ReactNode;
};

export function PublicSiteHeader({
  homeHref,
  productName,
}: PublicSiteHeaderProps) {
  return (
    <nav
      aria-label="Ana navigasyon"
      className="fixed top-0 z-50 w-full border-b border-[#c5c6cd] bg-white"
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <Link
          className="text-2xl font-bold tracking-[-0.01em] text-[#091426]"
          href={homeHref}
        >
          {productName}
        </Link>
      </div>
    </nav>
  );
}

export function PublicSiteFooter({
  copyright,
  homeHref,
  productName,
}: PublicSiteFooterProps) {
  return (
    <footer className="mt-auto w-full border-t border-[#c5c6cd] bg-white py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-6 md:flex-row md:justify-between">
        <Link
          className="text-xl font-bold leading-7 text-[#091426]"
          href={homeHref}
        >
          {productName}
        </Link>
        {copyright && <p className="text-center text-sm text-[#45474c]">{copyright}</p>}
      </div>
    </footer>
  );
}

export function PublicSiteShell({
  children,
  copyright,
  homeHref,
  productName,
}: PublicSiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <PublicSiteHeader homeHref={homeHref} productName={productName} />
      <main className="flex-grow pt-16">{children}</main>
      <PublicSiteFooter copyright={copyright} homeHref={homeHref} productName={productName} />
    </div>
  );
}
