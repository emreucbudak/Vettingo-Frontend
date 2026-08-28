"use client";

import { useState } from "react";
import {
  subscriptionPlans,
  type BillingPeriod,
  type SubscriptionPlan,
  type SubscriptionPlanId,
} from "@/entities/subscription";
import { MaterialIcon } from "@/shared/ui/material-icon";

const billingOptions: ReadonlyArray<{
  label: string;
  value: BillingPeriod;
}> = [
  { label: "Aylık", value: "monthly" },
  { label: "Yıllık", value: "annual" },
];

function formatPrice(price: number) {
  return price === 0 ? "0" : price.toFixed(2);
}

function PlanCard({
  billingPeriod,
  isSelected,
  onSelect,
  plan,
}: {
  billingPeriod: BillingPeriod;
  isSelected: boolean;
  onSelect: (planId: SubscriptionPlanId) => void;
  plan: SubscriptionPlan;
}) {
  const price =
    billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice;
  const hasAnnualDiscount =
    billingPeriod === "annual" && plan.annualPrice < plan.monthlyPrice;

  return (
    <article
      className={`relative flex min-h-[420px] flex-col rounded-[28px] border-2 bg-white p-6 transition duration-200 sm:p-7 ${
        isSelected
          ? "border-[#6f42e8] shadow-[0_20px_55px_rgba(111,66,232,0.17)]"
          : plan.isPopular
            ? "border-[#e7dcff] shadow-[0_18px_45px_rgba(9,20,38,0.08)]"
            : "border-[#e3e5e9] shadow-[0_14px_36px_rgba(9,20,38,0.06)]"
      }`}
    >
      <div className="flex min-h-7 items-start justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#091426]">
          {plan.name}
        </h2>
        {plan.isPopular && (
          <span className="shrink-0 rounded-md border border-[#f3d88e] bg-[#fff8e7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.04em] text-[#b57910]">
            En Popüler
          </span>
        )}
      </div>

      <p className="mt-1.5 min-h-10 text-sm leading-5 text-[#72767e]">
        {plan.description}
      </p>

      <div className="mt-6 flex items-center gap-2.5">
        <div className="flex items-start text-[#091426]">
          <span className="mt-1 text-lg font-semibold">$</span>
          <span className="text-[40px] font-bold leading-none tracking-[-0.04em]">
            {formatPrice(price)}
          </span>
        </div>
        {hasAnnualDiscount && (
          <span className="rounded-md border border-[#bce7ce] bg-[#e8f8ef] px-2 py-1 text-xs font-bold text-[#39a86b]">
            %50 indirim
          </span>
        )}
      </div>

      <p className="mt-2 text-xs leading-5 text-[#5d626b]">
        {price === 0
          ? "Her zaman ücretsiz"
          : `Kullanıcı / ay, ${
              billingPeriod === "annual" ? "yıllık" : "aylık"
            } faturalandırılır`}
      </p>

      <ul className="mt-6 space-y-3.5" aria-label={`${plan.name} özellikleri`}>
        {plan.features.map((feature) => (
          <li
            className="flex items-start gap-2.5 text-sm leading-5 text-[#34373d]"
            key={feature}
          >
            <span
              className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                plan.isPopular ? "bg-[#6f42e8]" : "bg-[#34373d]"
              } text-white`}
            >
              <MaterialIcon className="text-[12px]">check</MaterialIcon>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        aria-pressed={isSelected}
        className={`mt-auto flex w-full items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f42e8] focus-visible:ring-offset-2 ${
          isSelected || plan.isPopular
            ? "border-[#6f42e8] bg-[#6f42e8] text-white shadow-[0_8px_20px_rgba(111,66,232,0.22)] hover:bg-[#5f35d1]"
            : "border-[#d7d9de] bg-white text-[#091426] hover:border-[#6f42e8] hover:text-[#6f42e8]"
        }`}
        onClick={() => onSelect(plan.id)}
        type="button"
      >
        {isSelected ? "Seçildi" : `${plan.name} Planını Seç`}
      </button>
    </article>
  );
}

export function SubscriptionPage() {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("annual");
  const [selectedPlan, setSelectedPlan] =
    useState<SubscriptionPlanId | null>(null);

  return (
    <main className="min-h-screen bg-[#f8f9ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="mx-auto w-full max-w-[1180px]">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.035em] text-[#091426] sm:text-5xl">
            Plan Seç
          </h1>

          <div
            aria-label="Faturalandırma dönemi"
            className="mx-auto mt-8 grid w-full max-w-[380px] grid-cols-2 rounded-full bg-[#ececef] p-1"
            role="group"
          >
            {billingOptions.map((option) => {
              const isActive = billingPeriod === option.value;

              return (
                <button
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f42e8] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#6f42e8] text-white shadow-[0_8px_18px_rgba(111,66,232,0.24)]"
                      : "text-[#7a7d84] hover:text-[#091426]"
                  }`}
                  key={option.value}
                  onClick={() => setBillingPeriod(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <PlanCard
              billingPeriod={billingPeriod}
              isSelected={selectedPlan === plan.id}
              key={plan.id}
              onSelect={setSelectedPlan}
              plan={plan}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
