const defaultGatewayUrl = "http://localhost:5135";

type CompleteRegistrationRequest = {
  accountType?: unknown;
  billingPeriod?: unknown;
  planCode?: unknown;
  registrationToken?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: CompleteRegistrationRequest;

  try {
    payload = (await request.json()) as CompleteRegistrationRequest;
  } catch {
    return Response.json({ message: "Geçersiz kayıt isteği." }, { status: 400 });
  }

  const isCandidate = payload.accountType === "candidate";
  const isEmployer = payload.accountType === "employer";

  if ((!isCandidate && !isEmployer) || !isNonEmptyString(payload.registrationToken)) {
    return Response.json({ message: "Kayıt bilgileri eksik." }, { status: 400 });
  }

  if (
    isEmployer &&
    (!isNonEmptyString(payload.planCode) ||
      !isNonEmptyString(payload.billingPeriod))
  ) {
    return Response.json(
      { message: "İşveren abonelik bilgileri eksik." },
      { status: 400 },
    );
  }

  const gatewayUrl = process.env.VETTINGO_GATEWAY_URL ?? defaultGatewayUrl;
  const registerPath = isCandidate
    ? "/auth/candidate/register"
    : "/auth/employer/register";
  const registerBody = isCandidate
    ? { token: payload.registrationToken }
    : {
        token: payload.registrationToken,
        planCode: payload.planCode,
        billingPeriod: payload.billingPeriod,
      };

  try {
    const response = await fetch(`${gatewayUrl}${registerPath}`, {
      body: JSON.stringify(registerBody),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const responseBody = await response.text();

    return new Response(responseBody || null, {
      headers: {
        "Content-Type":
          response.headers.get("Content-Type") ?? "application/json",
      },
      status: response.status,
    });
  } catch {
    return Response.json(
      {
        message:
          "Kayıt servisine ulaşılamadı. Lütfen kısa süre sonra tekrar deneyin.",
      },
      { status: 502 },
    );
  }
}
