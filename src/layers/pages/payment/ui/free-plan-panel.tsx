"use client";

import { useState } from "react";
import {
  clearSelectedSubscriptionPlan,
  type BillingPeriod,
} from "@/entities/subscription";
import { MaterialIcon } from "@/shared/ui/material-icon";
import type { SubscriptionAccountType } from "../model/payment-page-data";
import {
  completeRegistration,
  getRegistrationToken,
} from "../api/complete-registration";

type FreePlanPanelProps = {
  accountType: SubscriptionAccountType;
  billingPeriod: BillingPeriod;
  planId: number;
};

export function FreePlanPanel({
  accountType,
  billingPeriod,
  planId,
}: FreePlanPanelProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleActivate() {
    if (isSubmitting) {
      return;
    }

    const registrationToken = getRegistrationToken(accountType);
    if (!registrationToken) {
      setErrorMessage(
        "Kayıt oturumunuz bulunamadı. Lütfen kayıt adımından yeniden başlayın.",
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await completeRegistration({
        accountType,
        billingPeriod,
        planId,
        registrationToken,
      });
      clearSelectedSubscriptionPlan();
      setIsComplete(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Hesabınız şu anda etkinleştirilemedi. Lütfen tekrar deneyin.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[#bce7ce] bg-[#f0fbf5] px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006c49] text-white">
        <MaterialIcon className="text-3xl">check</MaterialIcon>
      </span>
      <h3 className="mt-5 text-xl font-bold text-[#091426]">
        {isComplete ? "Hesabınız oluşturuldu" : "Kart bilgisi gerekmiyor"}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#5d626b]">
        {isComplete
          ? "Ücretsiz planınız hazırlanıyor. Kısa süre içinde kullanmaya başlayabilirsiniz."
          : `Ücretsiz planınızı hemen etkinleştirerek ${
              accountType === "candidate"
                ? "kariyer araçlarını"
                : "işe alım araçlarını"
            } kullanmaya başlayabilirsiniz.`}
      </p>

      {errorMessage && (
        <p
          aria-live="polite"
          className="mt-5 w-full max-w-sm rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {!isComplete && (
        <button
          className="mt-6 flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#006c49] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00563b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006c49] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          onClick={handleActivate}
          type="button"
        >
          {isSubmitting ? "Hesap Oluşturuluyor" : "Ücretsiz Planla Devam Et"}
          <MaterialIcon className={isSubmitting ? "animate-spin text-lg" : "text-lg"}>
            {isSubmitting ? "progress_activity" : "arrow_forward"}
          </MaterialIcon>
        </button>
      )}
    </div>
  );
}
