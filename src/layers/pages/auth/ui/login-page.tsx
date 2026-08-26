import { LoginForm } from "@/features/auth";
import { AuthShell } from "@/widgets/auth-shell";

export function LoginPage() {
  return (
    <AuthShell
      activeTab="login"
      title="Hesabınıza Giriş Yapın"
      description="Profesyonel kariyer ağınıza veya kurumsal portalınıza erişin."
    >
      <LoginForm />
    </AuthShell>
  );
}
