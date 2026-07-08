import { ROUTES } from "@/shared/config/routes";

export const AUTH_TOKEN_KEY = "vettingo-token";

type JwtPayload = {
  exp?: number;
  role?: string;
  roles?: string | string[];
  accountType?: string;
  ["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?: string;
};

function decodeJwtPayload(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = decodeURIComponent(
      atob(normalized)
        .split("")
        .map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, "0")}`)
        .join(""),
    );

    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  window.localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function getTokenRole(token: string): string | null {
  const payload = decodeJwtPayload(token);
  if (!payload) return null;

  const rawRole =
    payload.role ??
    payload.accountType ??
    payload.roles ??
    payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  const role = Array.isArray(rawRole) ? rawRole[0] : rawRole;
  return role?.toLowerCase() ?? null;
}

export function isTokenExpired(token: string): boolean {
  const expiration = decodeJwtPayload(token)?.exp;
  return typeof expiration === "number" && expiration * 1000 <= Date.now();
}

export function getAuthenticatedRoute(): string {
  const token = getAuthToken();
  if (!token || isTokenExpired(token)) {
    if (token) clearAuthToken();
    return ROUTES.login;
  }

  const role = getTokenRole(token);
  if (role === "employer" || role === "işveren" || role === "isveren") {
    return ROUTES.employer;
  }
  if (role === "candidate" || role === "aday" || role === "jobseeker") {
    return ROUTES.candidate;
  }

  return ROUTES.login;
}
