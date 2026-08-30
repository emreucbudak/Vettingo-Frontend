"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import type {
  BillingPeriod,
  SubscriptionPlanId,
} from "@/entities/subscription";
import { MaterialIcon } from "@/shared/ui/material-icon";
import type { SubscriptionAccountType } from "../model/payment-page-data";

type StripePaymentElementProps = {
  accountType: SubscriptionAccountType;
  amountInCents: number;
  billingPeriod: BillingPeriod;
  planId: SubscriptionPlanId;
};

type ConfirmSubscriptionResponse = {
  clientSecret?: string;
  message?: string;
};

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

const registrationTokenKeys: Record<SubscriptionAccountType, string> = {
  candidate: "vettingo:candidate-registration-token",
  employer: "vettingo:employer-registration-token",
};

function PaymentForm({
  accountType,
  billingPeriod,
  planId,
}: Omit<StripePaymentElementProps, "amountInCents">) {
  const stripe = useStripe();
  const elements = useElements();
  const [isElementReady, setIsElementReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!stripe || !elements || isSubmitting) {
      return;
    }

    const registrationToken = sessionStorage.getItem(
      registrationTokenKeys[accountType],
    );

    if (!registrationToken) {
      setErrorMessage(
        "Kayıt oturumunuz bulunamadı. Lütfen kayıt adımından yeniden başlayın.",
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(
        submitError.message ?? "Ödeme bilgilerinizi kontrol edip tekrar deneyin.",
      );
      setIsSubmitting(false);
      return;
    }

    const { error: tokenError, confirmationToken } =
      await stripe.createConfirmationToken({
        elements,
        params: {
          return_url: window.location.href,
        },
      });

    if (tokenError || !confirmationToken) {
      setErrorMessage(
        tokenError?.message ?? "Ödeme bilgileri güvenli biçimde hazırlanamadı.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/payments/confirm-subscription", {
        body: JSON.stringify({
          accountType,
          billingPeriod,
          confirmationTokenId: confirmationToken.id,
          planId,
          registrationToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response
        .json()
        .catch(() => ({}))) as ConfirmSubscriptionResponse;

      if (!response.ok) {
        throw new Error(
          result.message ?? "Ödeme şu anda tamamlanamadı. Lütfen tekrar deneyin.",
        );
      }

      if (result.clientSecret) {
        const { error: nextActionError } = await stripe.handleNextAction({
          clientSecret: result.clientSecret,
        });

        if (nextActionError) {
          throw new Error(
            nextActionError.message ?? "Banka doğrulaması tamamlanamadı.",
          );
        }
      }

      setIsComplete(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ödeme şu anda tamamlanamadı. Lütfen tekrar deneyin.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isComplete) {
    return (
      <div
        aria-live="polite"
        className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[#bce7ce] bg-[#f0fbf5] px-6 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006c49] text-white">
          <MaterialIcon className="text-3xl">check</MaterialIcon>
        </span>
        <h3 className="mt-5 text-xl font-bold text-[#091426]">
          Ödemeniz başarıyla alındı
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#5d626b]">
          Aboneliğiniz hazırlanıyor. Hesabınız etkinleştiğinde kullanmaya
          başlayabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form aria-busy={isSubmitting} onSubmit={handleSubmit}>
      <PaymentElement
        onReady={() => setIsElementReady(true)}
        options={{
          layout: {
            type: "tabs",
            defaultCollapsed: false,
          },
        }}
      />

      {errorMessage && (
        <p
          aria-live="polite"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6f42e8] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(111,66,232,0.24)] transition hover:bg-[#5f35d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f42e8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!stripe || !elements || !isElementReady || isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <>
            <MaterialIcon className="animate-spin text-lg">
              progress_activity
            </MaterialIcon>
            Ödeme İşleniyor
          </>
        ) : (
          <>
            <MaterialIcon className="text-lg">lock</MaterialIcon>
            Güvenli Ödemeyi Tamamla
          </>
        )}
      </button>
    </form>
  );
}

function StripeConfigurationNotice() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#cfc3f6] bg-[#faf8ff] px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eee8ff] text-[#6f42e8]">
        <MaterialIcon className="text-3xl">lock</MaterialIcon>
      </span>
      <h3 className="mt-5 text-lg font-bold text-[#091426]">
        Stripe ödeme alanı yapılandırılmalı
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#5d626b]">
        Güvenli ödeme formunu göstermek için Stripe publishable key ortam
        değişkenini ekleyin.
      </p>
    </div>
  );
}

export function StripePaymentElement({
  accountType,
  amountInCents,
  billingPeriod,
  planId,
}: StripePaymentElementProps) {
  const options = useMemo<StripeElementsOptions>(
    () => ({
      amount: amountInCents,
      appearance: {
        labels: "above",
        theme: "stripe",
        variables: {
          borderRadius: "12px",
          colorBackground: "#ffffff",
          colorDanger: "#b42318",
          colorPrimary: "#6f42e8",
          colorText: "#091426",
          colorTextSecondary: "#5d626b",
          fontFamily: "Geist, Arial, sans-serif",
          spacingGridRow: "18px",
        },
        rules: {
          ".Input": {
            border: "1px solid #d7d9de",
            boxShadow: "none",
            padding: "13px 14px",
          },
          ".Input:focus": {
            border: "1px solid #6f42e8",
            boxShadow: "0 0 0 1px #6f42e8",
          },
          ".Tab": {
            border: "1px solid #d7d9de",
            boxShadow: "none",
          },
          ".Tab--selected": {
            border: "1px solid #6f42e8",
            boxShadow: "0 0 0 1px #6f42e8",
          },
        },
      },
      currency: "usd",
      loader: "auto",
      locale: "tr",
      mode: "subscription",
      setupFutureUsage: "off_session",
    }),
    [amountInCents],
  );

  if (!stripePromise) {
    return <StripeConfigurationNotice />;
  }

  return (
    <Elements options={options} stripe={stripePromise}>
      <PaymentForm
        accountType={accountType}
        billingPeriod={billingPeriod}
        planId={planId}
      />
    </Elements>
  );
}
