import { getRefreshToken } from "../auth/auth-token";
import { getToken, setToken } from "../auth";

const basePath = "http://localhost:3000";

const authPath = "/api/gateway/auth";

interface Auth {
  email: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
}

export async function getJWTToken(
  loginCredentials: Auth,
): Promise<string> {
  const response = await fetch(`${basePath}${authPath}/login`, {
    body: JSON.stringify(loginCredentials),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Kimlik doğrulama isteği başarısız oldu.");
  }

  const token = (await response.json()) as Tokens;

  await setToken(token.accessToken, token.refreshToken);
  return token.accessToken;
}

export async function apiRequest<T>(
  path: string,
  method: string,
  options?: RequestInit,
): Promise<T> {
  const headers = new Headers(options?.headers);
  const accessToken = await getToken();

  headers.set("Authorization", `Bearer ${accessToken}`);
  headers.set("Content-Type", "application/json");

  const response = await fetch(basePath + path, {
    ...options,
    headers,
    method,
  });

  if (!response.ok) {
    throw new Error(`API isteği başarısız oldu (${response.status}).`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export async function getNewJwtFromRefresh() {
  const refreshToken = await getRefreshToken();
  const accessToken = await getToken();
  const response = await fetch(
    `${basePath}${authPath}/refresh-token`,
    {
      body: JSON.stringify({ accessToken, refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );
  if (!response.ok) {
    throw new Error("Kimlik doğrulama isteği başarısız oldu.");
  }

  const newTokens = (await response.json()) as Tokens;

  await setToken(newTokens.accessToken, newTokens.refreshToken);
}

export async function register(request: RegisterRequest) {
  const response = await fetch(`${basePath}${authPath}/register`, {
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Kayıt sırasında bir hatayla karşılaşıldı!");
  }
}