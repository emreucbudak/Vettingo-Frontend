import { VerifyEmailForm } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { AuthShell } from "@/widgets/auth-shell";

export function VerifyEmailPage({ isEmployer }: { isEmployer: boolean }) {
  return (
    <AuthShell
      activeTab="register"
      title="E-posta Adresinizi Doğrulayın"
      description="Kayıt işleminizi tamamlamak için e-posta doğrulama adımı."
    >
      <VerifyEmailForm
        nextHref={isEmployer ? ROUTES.subscription : ROUTES.login}
      />
    </AuthShell>
  );
}
