const defaultGatewayUrl = "http://localhost:5135";

export async function GET(request: Request) {
  const accountType = new URL(request.url).searchParams.get("accountType");

  if (accountType !== "candidate" && accountType !== "employer") {
    return Response.json({ message: "Geçersiz hesap türü." }, { status: 400 });
  }

  const planType = accountType === "candidate" ? "Candidate" : "Employer";
  const gatewayUrl = process.env.VETTINGO_GATEWAY_URL ?? defaultGatewayUrl;

  try {
    const response = await fetch(
      `${gatewayUrl}/plans?planType=${encodeURIComponent(planType)}`,
      { cache: "no-store" },
    );
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
          "Plan servisine ulaşılamadı. Lütfen kısa süre sonra tekrar deneyin.",
      },
      { status: 502 },
    );
  }
}
