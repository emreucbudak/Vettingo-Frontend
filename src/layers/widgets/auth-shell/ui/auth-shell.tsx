import type { ReactNode } from "react";
import { AuthTabs, type AuthTabMode } from "@/features/auth";
import { authHeroImageUrl } from "../model/auth-hero-content";

type AuthShellProps = {
  activeTab: AuthTabMode;
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthShell({
  activeTab,
  title,
  description,
  children,
}: AuthShellProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f9ff] p-4 text-[#0b1c30] sm:p-5 lg:p-8">
      <section className="mx-auto flex w-full max-w-[1440px] overflow-hidden rounded-lg border border-[#c5c6cd] bg-white shadow-[0_24px_80px_rgba(9,20,38,0.08)] lg:min-h-[760px]">
        <aside className="relative hidden w-1/2 flex-col justify-end overflow-hidden bg-[#091426] p-8 text-white lg:flex">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(9, 20, 38, 0.82), rgba(9, 20, 38, 0.9)), url(${authHeroImageUrl})`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-64 w-64 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(30,41,59,0.5),_transparent_70%)]"
          />

          <div className="relative z-10 max-w-md">
            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Yetenek Havuzunuzu Keşfedin.
            </h1>
            <p className="mb-8 text-base leading-6 text-[#bcc7de]">
              Kurumsal işe alım süreçlerinizi yapay zeka destekli analizler ve
              optimize edilmiş iş akışlarıyla dönüştürün. Geleceğin liderlerini
              bugün bulun.
            </p>
          </div>
        </aside>

        <div className="flex w-full flex-col bg-white p-6 lg:w-1/2 lg:p-8">
          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
            <div className="mb-6">
              <h2 className="mb-1 text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
                {title}
              </h2>
              <p className="text-sm leading-5 text-[#45474c]">{description}</p>
            </div>

            <AuthTabs activeTab={activeTab} />
            {children}
          </div>

          <footer className="mt-8 border-t border-[#c5c6cd]/50 pt-6 text-center text-xs font-medium text-[#45474c] lg:border-none lg:text-left">
            © 2026 Vettingo. Tüm hakları saklıdır.
          </footer>
        </div>
      </section>
    </main>
  );
}
