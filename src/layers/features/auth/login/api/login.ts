"use server";

import { decodeJwt } from "jose";
import { getJWTToken } from "@/shared/api";

export type LoginRequest = {
  email: string;
  password: string;
};

type RoleClaims = {
  Role?: string;
  role?: string;
};

export async function login(
  request: LoginRequest,
): Promise<string | undefined> {
  try {
    const token = await getJWTToken(request);
    const claims = decodeJwt(token) as RoleClaims;
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
