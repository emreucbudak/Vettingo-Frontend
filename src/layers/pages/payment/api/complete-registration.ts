import "client-only";

import type {
  BillingPeriod,
  SubscriptionPlanId,
} from "@/entities/subscription";
import type { SubscriptionAccountType } from "../model/payment-page-data";

type CompleteRegistrationRequest = {
  accountType: SubscriptionAccountType;
  billingPeriod: BillingPeriod;
  planCode: SubscriptionPlanId;
  registrationToken: string;
};

type ErrorResponse = {
  detail?: string;
  message?: string;
  title?: string;
};

const registrationTokenKeys: Record<SubscriptionAccountType, string> = {
  candidate: "vettingo:candidate-registration-token",
  employer: "vettingo:employer-registration-token",
};

export function getRegistrationToken(accountType: SubscriptionAccountType) {
  return sessionStorage.getItem(registrationTokenKeys[accountType]);
}

export async function completeRegistration({
  accountType,
  billingPeriod,
  planCode,
  registrationToken,
}: CompleteRegistrationRequest) {
  const response = await fetch("/api/auth/complete-registration", {
    body: JSON.stringify({
      accountType,
      billingPeriod,
      planCode,
      registrationToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const responseText = await response.text();
  let result: ErrorResponse = {};

  if (responseText) {
    try {
      result = JSON.parse(responseText) as ErrorResponse;
    } catch {
      result = {};
    }
  }

  if (!response.ok) {
    throw new Error(
      result.message ??
        result.detail ??
        result.title ??
        "Hesabınız etkinleştirilemedi. Lütfen tekrar deneyin.",
    );
  }

  sessionStorage.removeItem(registrationTokenKeys[accountType]);
}
