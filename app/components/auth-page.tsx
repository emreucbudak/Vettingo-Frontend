"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type AuthMode = "login" | "register";

type AuthPageProps = {
  mode: AuthMode;
};

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzqC9JmeDIn719J8YgjH4a_HZBYRRU-XUR7zcaYheiqF_qk3ftr4MoB64i7ibnzCDDBhT6wNcJYVVErY4tdbxYAsAE4YkgBI1AiDzNYghEDfWqJT3pa6Zi0ZG4_Afil-wvG6qHBWJ9YQjrUma3SZMxTO1wV6tJLokkXtafvMyniLj0QUicZpvW6P3xhAL9zzuJZ_m3TayjUpzIldprWvV7O0F-vbi1LMliD2QeUUBhH8jMDzme1wJ-8IglDeK2RIO17fYU_R7fOWo";

const features = [
  {
    icon: "psychology",
    title: "Yapay Zeka Analizi",
    description:
      "Aday profillerini derinlemesine inceleyen akıllı eşleştirme algoritmaları.",
  },
  {
    icon: "analytics",
    title: "Veri Odaklı Kararlar",
    description:
      "İşe alım metriklerinizi ve pipeline performansınızı gerçek zamanlı izleyin.",
  },
];

const content = {
  login: {
    title: "Hesabınıza Giriş Yapın",
    description:
      "Profesyonel kariyer ağınıza veya kurumsal portalınıza erişin.",
    submitLabel: "Giriş Yap",
    separator: "veya şununla devam et",
    footerText: "Hesabınız yok mu?",
    footerLink: "Kayıt Ol",
    footerHref: "/register",
  },
  register: {
    title: "Yeni Hesap Oluşturun",
    description:
      "Vettingo ile aday havuzunuzu yönetin veya yeni fırsatlara başvurun.",
    submitLabel: "Kayıt Ol",
    separator: "veya şununla kayıt ol",
    footerText: "Zaten hesabınız var mı?",
    footerLink: "Giriş Yap",
    footerHref: "/login",
  },
} satisfies Record<
  AuthMode,
  {
    title: string;
    description: string;
    submitLabel: string;
    separator: string;
    footerText: string;
    footerLink: string;
    footerHref: "/login" | "/register";
  }
>;

function MaterialIcon({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

function AuthTab({
  href,
  active,
  children,
}: {
  href: "/login" | "/register";
  active: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex-1 rounded-md px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.05em] transition-all ${
        active
          ? "border border-[#c5c6cd]/70 bg-white text-[#091426] shadow-sm"
          : "text-[#45474c] hover:bg-[#dce9ff]/70 hover:text-[#0b1c30]"
      }`}
    >
      {children}
    </Link>
  );
}

export default function AuthPage({ mode }: AuthPageProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";
  const pageContent = content[mode];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(isLogin ? "/login" : "/register");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f9ff] p-4 text-[#0b1c30] sm:p-5 lg:p-8">
      <section className="mx-auto flex w-full max-w-[1440px] overflow-hidden rounded-lg border border-[#c5c6cd] bg-white shadow-[0_24px_80px_rgba(9,20,38,0.08)] lg:min-h-[760px]">
        <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#091426] p-8 text-white lg:flex">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(9, 20, 38, 0.82), rgba(9, 20, 38, 0.9)), url(${heroImageUrl})`,
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
              {features.map((feature) => (
                <div className="flex items-start gap-4" key={feature.title}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#1e293b]">
                    <MaterialIcon className="text-[20px] text-[#6ffbbe]">
                      {feature.icon}
                    </MaterialIcon>
                  </div>
                  <div>
                    <h2 className="mb-1 text-lg font-medium">{feature.title}</h2>
                    <p className="text-sm leading-5 text-[#bcc7de]">
                      {feature.description}
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

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
            <div className="mb-6">
              <h2 className="mb-1 text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
                {pageContent.title}
              </h2>
              <p className="text-sm leading-5 text-[#45474c]">
                {pageContent.description}
              </p>
            </div>

            <nav className="mb-6 flex rounded bg-[#eff4ff] p-1 ring-1 ring-[#c5c6cd]/40">
              <AuthTab href="/login" active={isLogin}>Giriş Yap</AuthTab>
              <AuthTab href="/register" active={!isLogin}>Kayıt Ol</AuthTab>
            </nav>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
                  Ad Soyad
                  <span className="relative">
                    <MaterialIcon className="absolute left-3 top-1/2 text-[18px] text-[#45474c] -translate-y-1/2">
                      badge
                    </MaterialIcon>
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Adınız ve soyadınız"
                      className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 pl-10 pr-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
                      type="text"
                    />
                  </span>
                </label>
              )}

              <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
                E-posta Adresi
                <span className="relative">
                  <MaterialIcon className="absolute left-3 top-1/2 text-[18px] text-[#45474c] -translate-y-1/2">
                    mail
                  </MaterialIcon>
                  <input
                    name="email"
                    autoComplete="email"
                    placeholder="ornek@sirket.com"
                    className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 pl-10 pr-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
                    type="email"
                  />
                </span>
              </label>

              <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
                <span className="flex items-center justify-between">
                  Şifre
                  {isLogin && (
                    <Link
                      className="text-xs font-medium text-[#0d0093] hover:underline"
                      href="/login"
                    >
                      Şifremi Unuttum?
                    </Link>
                  )}
                </span>
                <span className="relative">
                  <MaterialIcon className="absolute left-3 top-1/2 text-[18px] text-[#45474c] -translate-y-1/2">
                    lock
                  </MaterialIcon>
                  <input
                    name="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    placeholder="••••••••"
                    className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 pl-10 pr-10 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                    className="absolute right-3 top-1/2 text-[#45474c] transition-colors hover:text-[#0b1c30] -translate-y-1/2"
                    onClick={() => setShowPassword((value) => !value)}
                    type="button"
                  >
                    <MaterialIcon className="text-[18px]">
                      {showPassword ? "visibility" : "visibility_off"}
                    </MaterialIcon>
                  </button>
                </span>
              </label>

              {!isLogin && (
                <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
                  Hesap Türü
                  <select
                    name="accountType"
                    className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2 text-sm text-[#0b1c30] outline-none transition-colors focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
                    defaultValue="candidate"
                  >
                    <option value="candidate">İş Arayan</option>
                    <option value="employer">İşveren</option>
                  </select>
                </label>
              )}

              {isLogin ? (
                <label className="mt-1 flex cursor-pointer items-center gap-2 text-sm text-[#45474c]">
                  <input
                    name="remember"
                    className="h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
                    type="checkbox"
                  />
                  Beni Hatırla
                </label>
              ) : (
                <label className="mt-1 flex cursor-pointer items-start gap-2 text-sm leading-5 text-[#45474c]">
                  <input
                    name="terms"
                    className="mt-0.5 h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
                    type="checkbox"
                  />
                  Kullanım koşullarını ve gizlilik politikasını kabul ediyorum.
                </label>
              )}

              <button
                className="mt-1 flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
                type="submit"
              >
                {pageContent.submitLabel}
                <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
              </button>
            </form>

            <div className="flex items-center py-6">
              <div className="h-px flex-1 bg-[#c5c6cd]" />
              <span className="mx-4 shrink-0 text-xs font-medium text-[#45474c]">
                {pageContent.separator}
              </span>
              <div className="h-px flex-1 bg-[#c5c6cd]" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
                type="button"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#c5c6cd] text-[10px] font-bold">
                  G
                </span>
                Google
              </button>
              <button
                className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
                type="button"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded bg-[#091426] text-[9px] font-bold text-white">
                  in
                </span>
                LinkedIn
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-[#45474c]">
              {pageContent.footerText}{" "}
              <Link
                className="font-bold text-[#091426] hover:underline"
                href={pageContent.footerHref}
              >
                {pageContent.footerLink}
              </Link>
            </p>
          </div>

          <footer className="mt-8 border-t border-[#c5c6cd]/50 pt-6 text-center text-xs font-medium text-[#45474c] lg:border-none lg:text-left">
            © 2026 Vettingo. Tüm hakları saklıdır.
          </footer>
        </div>
      </section>
    </main>
  );
}
