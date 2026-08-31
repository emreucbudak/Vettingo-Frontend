export type BillingPeriod = "monthly" | "annual";
export type SubscriptionAccountType = "candidate" | "employer";

export type SubscriptionPlan = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: readonly string[];
};

export type SelectedSubscriptionPlan = {
  accountType: SubscriptionAccountType;
  billingPeriod: BillingPeriod;
  plan: SubscriptionPlan;
};

type SubscriptionPlanApiResponse = {
  id: number;
  planName: string;
  price: number;
  planType: number;
  properties: ReadonlyArray<{
    name: string;
    count: number;
  }>;
};

const selectedPlanStorageKey = "vettingo:selected-subscription-plan";

function isSubscriptionPlan(value: unknown): value is SubscriptionPlan {
  if (!value || typeof value !== "object") {
    return false;
  }

  const plan = value as Partial<SubscriptionPlan>;

  return (
    Number.isInteger(plan.id) &&
    Number(plan.id) > 0 &&
    typeof plan.name === "string" &&
    plan.name.trim().length > 0 &&
    Number.isInteger(plan.price) &&
    Number(plan.price) >= 0 &&
    Array.isArray(plan.features) &&
    plan.features.every((feature) => typeof feature === "string")
  );
}

export async function fetchSubscriptionPlans(
  accountType: SubscriptionAccountType,
  signal?: AbortSignal,
): Promise<SubscriptionPlan[]> {
  const response = await fetch(`/api/plans?accountType=${accountType}`, {
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error("Abonelik planları backend üzerinden alınamadı.");
  }

  const plans = (await response.json()) as SubscriptionPlanApiResponse[];

  if (!Array.isArray(plans)) {
    throw new Error("Backend geçersiz plan verisi döndürdü.");
  }

  const expectedPlanType = accountType === "candidate" ? 1 : 0;

  return plans
    .filter(
      (plan) =>
        Number.isInteger(plan.id) &&
        plan.id > 0 &&
        Number.isInteger(plan.price) &&
        plan.price >= 0 &&
        plan.planType === expectedPlanType,
    )
    .map((plan) => ({
      id: plan.id,
      name: plan.planName,
      description: `${plan.planName} planının sunduğu özellikler.`,
      price: plan.price,
      features: plan.properties.map((property) =>
        property.count > 0
          ? `${property.name}: ${property.count}`
          : property.name,
      ),
    }));
}

export function saveSelectedSubscriptionPlan(
  selection: SelectedSubscriptionPlan,
) {
  window.sessionStorage.setItem(
    selectedPlanStorageKey,
    JSON.stringify(selection),
  );
}

export function getSelectedSubscriptionPlan(
  accountType: SubscriptionAccountType,
): SelectedSubscriptionPlan | null {
  const storedSelection = window.sessionStorage.getItem(selectedPlanStorageKey);

  if (!storedSelection) {
    return null;
  }

  try {
    const selection = JSON.parse(storedSelection) as Partial<SelectedSubscriptionPlan>;

    if (
      selection.accountType !== accountType ||
      (selection.billingPeriod !== "monthly" &&
        selection.billingPeriod !== "annual") ||
      !isSubscriptionPlan(selection.plan)
    ) {
      return null;
    }

    return selection as SelectedSubscriptionPlan;
  } catch {
    return null;
  }
}

export function clearSelectedSubscriptionPlan() {
  window.sessionStorage.removeItem(selectedPlanStorageKey);
}
