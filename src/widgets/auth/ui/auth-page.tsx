import { AuthForm, type AuthMode } from "@/features/auth";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { authBenefits, authHeroImageUrl } from "../model/auth-hero-content";

type AuthPageProps = {
  mode: AuthMode;
};

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f9ff] p-4 text-[#0b1c30] sm:p-5 lg:p-8">
      <section className="mx-auto flex w-full max-w-[1440px] overflow-hidden rounded-lg border border-[#c5c6cd] bg-white shadow-[0_24px_80px_rgba(9,20,38,0.08)] lg:min-h-[760px]">
        <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#091426] p-8 text-white lg:flex">
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

          <div className="relative z-10 flex items-center gap-2">
            <MaterialIcon className="text-[32px] text-[#6ffbbe]">radar</MaterialIcon>
            <span className="text-2xl font-bold tracking-[-0.01em]">Vettingo</span>
          </div>

          <div className="relative z-10 mt-auto max-w-md">
            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Yetenek Havuzunuzu Keşfedin.
            </h1>
            <p className="mb-8 text-base leading-6 text-[#bcc7de]">
              Kurumsal işe alım süreçlerinizi yapay zeka destekli analizler ve
              optimize edilmiş iş akışlarıyla dönüştürün. Geleceğin liderlerini
              bugün bulun.
            </p>

            <div className="flex flex-col gap-4">
              {authBenefits.map((benefit) => (
                <div className="flex items-start gap-4" key={benefit.title}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#1e293b]">
                    <MaterialIcon className="text-[20px] text-[#6ffbbe]">
                      {benefit.icon}
                    </MaterialIcon>
                  </div>
                  <div>
                    <h2 className="mb-1 text-lg font-medium">{benefit.title}</h2>
                    <p className="text-sm leading-5 text-[#bcc7de]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex w-full flex-col bg-white p-6 lg:w-1/2 lg:p-8">
          <div className="mb-6 flex items-center gap-2 lg:hidden">
            <MaterialIcon className="text-[24px] text-[#091426]">radar</MaterialIcon>
            <span className="text-xl font-bold text-[#091426]">Vettingo</span>
          </div>

          <AuthForm mode={mode} />

          <footer className="mt-8 border-t border-[#c5c6cd]/50 pt-6 text-center text-xs font-medium text-[#45474c] lg:border-none lg:text-left">
            © 2026 Vettingo. Tüm hakları saklıdır.
          </footer>
        </div>
      </section>
    </main>
  );
}