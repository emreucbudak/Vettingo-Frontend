import type { Metadata } from "next";
import { RegisterPage as RegisterPageContent } from "@/pages/auth";

export const metadata: Metadata = {
  title: "Kayıt Ol | Vettingo",
};

export default function RegisterPage() {
  return <RegisterPageContent />;
}
