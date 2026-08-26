import { RegisterForm } from "@/features/auth";
import { AuthShell } from "@/widgets/auth-shell";

export function RegisterPage() {
  return (
    <AuthShell
      activeTab="register"
      title="Yeni Hesap Oluşturun"
      description="Vettingo ile aday havuzunuzu yönetin veya yeni fırsatlara başvurun."
    >
      <RegisterForm />
    </AuthShell>
  );
}
