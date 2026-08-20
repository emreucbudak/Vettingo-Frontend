import { getRefreshToken } from "../auth/auth-token";
import { getToken, setToken } from "../auth";

const getBasePath = () =>
  typeof window === "undefined"
    ? (process.env.VETTINGO_FRONTEND_URL ?? "http://localhost:3000").replace(
        /\/+$/,
        "",
      )
    : "";

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

async function readTokens(response: Response): Promise<Tokens> {
  if (!response.ok) {
    throw new Error("Kimlik doğrulama isteği başarısız oldu.");
  }

  return (await response.json()) as Tokens;
}

export async function getJWTToken(
  loginCredentials: Auth,
): Promise<string> {
  const response = await fetch(`${getBasePath()}${authPath}/login`, {
    body: JSON.stringify(loginCredentials),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const token = await readTokens(response);

  await setToken(token.accessToken, token.refreshToken);
  return token.accessToken;
}

export async function apiRequest<T = unknown>(
  path: string,
  method: string,
  options?: RequestInit,
): Promise<T> {
  const headers = new Headers(options?.headers);
  const accessToken = await getToken();

  headers.set("Authorization", `Bearer ${accessToken}`);
  headers.set("Content-Type", "application/json");

  const response = await fetch(getBasePath() + path, {
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
    `${getBasePath()}${authPath}/refresh-token`,
    {
      body: JSON.stringify({ accessToken, refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );
  const newTokens = await readTokens(response);

  await setToken(newTokens.accessToken, newTokens.refreshToken);
}

export async function register(request: RegisterRequest) {
  const response = await fetch(`${getBasePath()}${authPath}/register`, {
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