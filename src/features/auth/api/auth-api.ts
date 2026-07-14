const AUTH_API_PATH = "/api/gateway/auth";

export type LoginRequest = {
  email: string;
  password: string;
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

async function post<TResponse>(path: string, payload: object): Promise<TResponse> {
  let response: Response;

  try {
    response = await fetch(`${AUTH_API_PATH}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "API gateway'e ula\u015f\u0131lamad\u0131. Gateway ve AuthService'in \u00e7al\u0131\u015ft\u0131\u011f\u0131ndan emin olun.",
    );
  }

  if (!response.ok) {
    let errorResponse: ApiErrorResponse = {};

    try {
      errorResponse = (await response.json()) as ApiErrorResponse;
    } catch {
      // The gateway can return an empty or non-JSON response when its destination is unavailable.
    }

    throw new Error(
      getErrorMessage(errorResponse, "\u0130\u015flem tamamlanamad\u0131. L\u00fctfen tekrar deneyin."),
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
  return post<LoginResponse>("login", request);
}

export function register(request: RegisterRequest) {
  return post<void>("register", request);
}
