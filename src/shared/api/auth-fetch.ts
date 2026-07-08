import { clearAuthToken, getAuthToken, isTokenExpired } from "@/shared/auth";

export function authFetch(input: RequestInfo | URL, init: RequestInit = {}) {
  const token = getAuthToken();
  const headers = new Headers(init.headers);

  if (token && !isTokenExpired(token)) {
    headers.set("Authorization", `Bearer ${token}`);
  } else if (token) {
    clearAuthToken();
  }

  return fetch(input, { ...init, headers });
}
