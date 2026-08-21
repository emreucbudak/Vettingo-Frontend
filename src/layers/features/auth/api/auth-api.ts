"use server";
import { getJWTToken, registerUser } from "@/shared/api";
import { decodeJwt } from "jose";
import { redirect } from "next/navigation";
export type LoginRequest = {
  email: string;
  password: string;
};

interface Role {
  Role?: string;
  role?: string;
}

export type RegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
};

export async function login(request: LoginRequest): Promise<string | undefined> {
  try {
    const token = await getJWTToken(request);
    const claims = decodeJwt(token) as Role;
    const role = (claims.Role ?? claims.role ?? "").trim().toLowerCase();

    switch (role) {
      case "candidate":
        return "/candidate";

      case "human resources":
        return "/hr";

      case "company":
        return "/employer";

      default:
        return undefined;
    }
  } catch {
    throw new Error(
      "API gateway'e ulaşılamadı lütfen auth service'in aktif olduğunu doğrulayınız.",
    );
  }
}

export async function register(request: RegisterRequest) {
  try {
    await registerUser(request);
    redirect("/login")
  } catch {
    throw new Error(
      "Kayıt yapılamadı lütfen tekrar deneyin.",
    );
  }
}
