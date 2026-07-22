import { ROUTES } from "@/shared/config/routes";

export const AUTH_TOKEN_KEY = "vettingo-token";

type JwtPayload = {
  exp?: number;
  sub?: string;
  email?: string;
  given_name?: string;
  family_name?: string;
  name?: string;
  unique_name?: string;
  role?: string;
  roles?: string | string[];
  accountType?: string;
  ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]?: string;
  ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]?: string;
  ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]?: string;
  ["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?: string;
};

export type SessionUser = {
  id: string;
  email: string;
  firstName: string;
  fullName: string;
};

function decodeJwtPayload(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const decoded = decodeURIComponent(
      atob(padded)
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
  return (
    window.localStorage.getItem(AUTH_TOKEN_KEY) ??
    window.sessionStorage.getItem(AUTH_TOKEN_KEY)
  );
}

export function setAuthToken(token: string, persistent = true): void {
  clearAuthToken();
  const storage = persistent ? window.localStorage : window.sessionStorage;
  storage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
  window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
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

export function getTokenSessionUser(token: string): SessionUser | null {
  const payload = decodeJwtPayload(token);
  if (!payload) return null;

  const id =
    payload.sub ??
    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
  const email =
    payload.email ??
    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] ??
    "";
  const claimName =
    payload.name ??
    payload.unique_name ??
    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
  const composedName = [payload.given_name, payload.family_name].filter(Boolean).join(" ");
  const emailName = email.split("@")[0] ?? "";
  const fullName = composedName || claimName || emailName;
  const firstName = payload.given_name || fullName.split(/\s+/)[0];

  if (!id || !firstName) {
    return null;
  }

  return { id, email, firstName, fullName };
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
  if (role === "company" || role === "human resources") {
    return ROUTES.employer;
  }
  if (role === "employer" || role === "işveren" || role === "isveren") {
    return ROUTES.employer;
  }
  if (role === "worker") {
    return ROUTES.candidate;
  }
  if (role === "candidate" || role === "aday" || role === "jobseeker") {
    return ROUTES.candidate;
  }

  return ROUTES.login;
}
