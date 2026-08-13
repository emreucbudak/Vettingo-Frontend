import { getJWTToken } from "@/shared/api";
import { redirect } from "next/navigation";
export type LoginRequest = {
  email: string;
  password: string;
  kind: "login";
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
  kind: "register"
};

type ApiErrorResponse = {
  message?: string;
  errors?: Record<string, string[]>;
};

function getErrorMessage(response: ApiErrorResponse, fallback: string) {
  const validationMessage = response.errors
    ? Object.values(response.errors).flat()[0]
    : undefined;

  return validationMessage ?? response.message ?? fallback;
}

async function post<TResponse>(request : LoginRequest | RegisterRequest): Promise<TResponse> {
  let response: Response;

  try {
    if (request.kind === "login"){
     await getJWTToken(request)
     redirect("/")

    }
  } catch {
    throw new Error(
      "API gateway'e ulaşılamadı lütfen auth service'in aktif olduğunu doğrulayınız.",
    );
  }

  if (!response.ok) {
    let errorResponse: ApiErrorResponse = {};

    try {
      errorResponse = (await response.json()) as ApiErrorResponse;
    } catch {
    }

    throw new Error(
      getErrorMessage(errorResponse, "İşlem tamamlanamadı lütfen tekrar deneyin."),
    );
  }

  if (response.status === 204 || response.headers.get("content-length") === "0") {
    return undefined as TResponse;
  }

  const contentType = response.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return undefined as TResponse;
  }

  return (await response.json()) as TResponse;
}

export function login(request: LoginRequest) {
  return post<LoginResponse>( request);
}

export function register(request: RegisterRequest) {
  return post<void>(request);
}
