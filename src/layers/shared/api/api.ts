import { getRefreshToken } from "../auth/auth-token";
import { getToken, setToken } from "../auth";

const gatewayUrl = "http://localhost:5135";

const authPath = "/auth";

interface Auth {
  email: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface CandidateTempRegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface CandidateTempRegisterResponse {
  token: string;
}

interface EmployerTempRegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  companyName: string;
}

interface EmployerTempRegisterResponse {
  token: string;
}

export async function getJWTToken(
  loginCredentials: Auth,
): Promise<string> {
  const response = await fetch(`${gatewayUrl}${authPath}/login`, {
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

  const response = await fetch(path, {
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
    `${gatewayUrl}${authPath}/refresh-token`,
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

export async function candidateTempRegister(
  request: CandidateTempRegisterRequest,
): Promise<CandidateTempRegisterResponse> {
  const response = await fetch(
    `${gatewayUrl}${authPath}/candidate/temp-register`,
    {
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Geçici aday kaydı sırasında bir hatayla karşılaşıldı!");
  }

  return (await response.json()) as CandidateTempRegisterResponse;
}

export async function employerTempRegister(
  request: EmployerTempRegisterRequest,
): Promise<EmployerTempRegisterResponse> {
  const response = await fetch(
    `${gatewayUrl}${authPath}/employer/temp-register`,
    {
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Geçici işveren kaydı sırasında bir hatayla karşılaşıldı!");
  }

  return (await response.json()) as EmployerTempRegisterResponse;
}
