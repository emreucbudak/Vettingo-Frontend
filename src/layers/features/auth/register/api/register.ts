"use server";

import { registerUser } from "@/shared/api";

export type RegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
};

export async function register(request: RegisterRequest) {
  try {
    await registerUser(request);
  } catch {
    throw new Error("Kayıt yapılamadı, lütfen tekrar deneyin.");
  }
}
