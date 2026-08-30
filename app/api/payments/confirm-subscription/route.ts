const defaultGatewayUrl = "http://localhost:5135";
const defaultConfirmPath = "/payments/subscriptions/confirm";

export async function POST(request: Request) {
  const gatewayUrl = process.env.VETTINGO_GATEWAY_URL ?? defaultGatewayUrl;
  const confirmPath =
    process.env.VETTINGO_PAYMENT_CONFIRM_PATH ?? defaultConfirmPath;

  try {
    const body = await request.text();
    const response = await fetch(`${gatewayUrl}${confirmPath}`, {
      body,
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
          "Ödeme servisine ulaşılamadı. Lütfen kısa süre sonra tekrar deneyin.",
      },
      { status: 502 },
    );
  }
}
