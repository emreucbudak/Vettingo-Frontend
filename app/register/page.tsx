import type { Metadata } from "next";
import { AuthPage } from "@/pages/auth";

export const metadata: Metadata = {
  title: "Kayıt Ol | Vettingo",
};

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}