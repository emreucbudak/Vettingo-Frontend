import { ROUTES } from "@/shared/config/routes";
import type { AuthMode } from "./types";

export const authContent = {
  login: {
    title: "Hesabınıza Giriş Yapın",
    description:
      "Profesyonel kariyer ağınıza veya kurumsal portalınıza erişin.",
    submitLabel: "Giriş Yap",
    separator: "veya şununla devam et",
    footerText: "Hesabınız yok mu?",
    footerLink: "Kayıt Ol",
    footerHref: ROUTES.register,
  },
  register: {
    title: "Yeni Hesap Oluşturun",
    description:
      "Vettingo ile aday havuzunuzu yönetin veya yeni fırsatlara başvurun.",
    submitLabel: "Kayıt Ol",
    separator: "veya şununla kayıt ol",
    footerText: "Zaten hesabınız var mı?",
    footerLink: "Giriş Yap",
    footerHref: ROUTES.login,
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
    footerHref: typeof ROUTES.login | typeof ROUTES.register;
  }
>;