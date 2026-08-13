import type { Metadata } from "next";
import { AuthPage } from "@/pages/auth";

export const metadata: Metadata = {
  title: "Giriş Yap | Vettingo",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}