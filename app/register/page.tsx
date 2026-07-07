import type { Metadata } from "next";
import { AuthPage } from "@/widgets/auth";

export const metadata: Metadata = {
  title: "Kayıt Ol | Vettingo",
};

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}