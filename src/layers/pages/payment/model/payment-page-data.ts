import {
  getSelectedSubscriptionPlan,
  type BillingPeriod,
  type SubscriptionAccountType,
  type SubscriptionPlan,
} from "@/entities/subscription";

export type { SubscriptionAccountType } from "@/entities/subscription";

export type PaymentPageData = {
  accountType: SubscriptionAccountType;
  amount: number;
  amountInMinorUnits: number;
  backHref: string;
  billingPeriod: BillingPeriod;
  plan: SubscriptionPlan;
  totalPrice: number;
};

export function getPaymentPageData(
  accountType: SubscriptionAccountType,
): PaymentPageData | null {
  const selection = getSelectedSubscriptionPlan(accountType);

  if (!selection) {
    return null;
  }

  const totalPrice =
    selection.billingPeriod === "annual"
      ? selection.plan.price * 12
      : selection.plan.price;

  return {
    accountType,
    amount: totalPrice,
    amountInMinorUnits: totalPrice * 100,
    backHref:
      accountType === "candidate"
        ? "/subscription/candidate"
        : "/subscription",
    billingPeriod: selection.billingPeriod,
    plan: selection.plan,
    totalPrice,
  };
}
