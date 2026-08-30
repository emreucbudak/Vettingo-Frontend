import {
  candidateSubscriptionPlans,
  subscriptionPlans,
  type BillingPeriod,
  type SubscriptionPlan,
  type SubscriptionPlanId,
} from "@/entities/subscription";

export type SubscriptionAccountType = "candidate" | "employer";

export type PaymentPageData = {
  accountType: SubscriptionAccountType;
  amountInCents: number;
  backHref: string;
  billingPeriod: BillingPeriod;
  plan: SubscriptionPlan;
  totalPrice: number;
};

function isPlanId(value: string | undefined): value is SubscriptionPlanId {
  return value === "basic" || value === "pro" || value === "ultra";
}

function isBillingPeriod(value: string | undefined): value is BillingPeriod {
  return value === "monthly" || value === "annual";
}

export function getPaymentPageData(
  accountType: SubscriptionAccountType,
  rawPlanId?: string,
  rawBillingPeriod?: string,
): PaymentPageData {
  const plans =
    accountType === "candidate"
      ? candidateSubscriptionPlans
      : subscriptionPlans;
  const planId = isPlanId(rawPlanId) ? rawPlanId : "pro";
  const billingPeriod = isBillingPeriod(rawBillingPeriod)
    ? rawBillingPeriod
    : "annual";
  const plan = plans.find((item) => item.id === planId) ?? plans[1];
  const unitPrice =
    billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice;
  const totalPrice =
    billingPeriod === "annual" ? unitPrice * 12 : unitPrice;

  return {
    accountType,
    amountInCents: Math.round(totalPrice * 100),
    backHref:
      accountType === "candidate"
        ? "/subscription/candidate"
        : "/subscription",
    billingPeriod,
    plan,
    totalPrice,
  };
}
