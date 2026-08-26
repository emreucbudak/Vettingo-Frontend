import type { Metadata } from "next";
import { LoginPage as LoginPageContent } from "@/pages/auth";

export const metadata: Metadata = {
  title: "Giriş Yap | Vettingo",
};

export default function LoginPage() {
  return <LoginPageContent />;
}
