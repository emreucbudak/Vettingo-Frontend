const defaultGatewayUrl = "http://localhost:5135";

type CompleteRegistrationRequest = {
  accountType?: unknown;
  billingPeriod?: unknown;
  planId?: unknown;
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
    !Number.isInteger(payload.planId) ||
    Number(payload.planId) <= 0 ||
    !isNonEmptyString(payload.billingPeriod) ||
    !["monthly", "annual"].includes(
      payload.billingPeriod.trim().toLowerCase(),
    )
  ) {
    return Response.json(
      {
        message:
          "Ücretsiz plan aktivasyon bilgileri geçersiz.",
      },
      { status: 400 },
    );
  }

  const gatewayUrl = process.env.VETTINGO_GATEWAY_URL ?? defaultGatewayUrl;
  const registerPath = "/payments/subscriptions/activate-free";
  const registerBody = {
    accountType: payload.accountType,
    billingPeriod: payload.billingPeriod,
    planId: payload.planId,
    registrationToken: payload.registrationToken,
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
