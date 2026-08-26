import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export type AuthTabMode = "login" | "register";

function AuthTab({
  href,
  active,
  children,
}: {
  href: typeof ROUTES.login | typeof ROUTES.register;
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

export function AuthTabs({ activeTab }: { activeTab: AuthTabMode }) {
  return (
    <nav
      aria-label="Kimlik doğrulama seçimi"
      className="mb-6 flex rounded bg-[#eff4ff] p-1 ring-1 ring-[#c5c6cd]/40"
    >
      <AuthTab href={ROUTES.login} active={activeTab === "login"}>
        Giriş Yap
      </AuthTab>
      <AuthTab href={ROUTES.register} active={activeTab === "register"}>
        Kayıt Ol
      </AuthTab>
    </nav>
  );
}
