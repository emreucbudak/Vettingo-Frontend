import Link from "next/link";
import { MaterialIcon } from "@/shared/ui/material-icon";
import type { PaymentPageData } from "../model/payment-page-data";
import { FreePlanPanel } from "./free-plan-panel";
import { StripePaymentElement } from "./stripe-payment-element";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function PaymentPage({
  accountType,
  amountInCents,
  backHref,
  billingPeriod,
  plan,
  totalPrice,
}: PaymentPageData) {
  const isAnnual = billingPeriod === "annual";
  const accountLabel = accountType === "candidate" ? "Çalışan" : "İşveren";
  const billingLabel = isAnnual ? "Yıllık" : "Aylık";
  const monthlyEquivalent = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const listPrice = isAnnual ? plan.monthlyPrice * 12 : totalPrice;
  const annualSavings = Math.max(
    0,
    (plan.monthlyPrice - plan.annualPrice) * 12,
  );

  return (
    <main className="min-h-screen bg-[#f8f9ff] px-4 py-6 text-[#091426] sm:px-6 sm:py-9 lg:px-8">
      <section className="mx-auto w-full max-w-[1180px]">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="inline-flex items-center gap-3 text-[#091426]"
            href="/"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#091426] text-base font-black text-white shadow-[0_8px_20px_rgba(9,20,38,0.18)]">
              V
            </span>
            <span>
              <span className="block text-lg font-bold leading-none">Vettingo</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777b84]">
                Güvenli Ödeme
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5d626b]">
            <MaterialIcon className="text-[#006c49]">lock</MaterialIcon>
            256-bit SSL ile korunan ödeme
          </div>
        </header>

        <div className="mt-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5d626b] transition hover:text-[#6f42e8]"
            href={backHref}
          >
            <MaterialIcon className="text-lg">arrow_back</MaterialIcon>
            Planlara dön
          </Link>

          <div className="mt-5 grid items-start gap-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(480px,1.12fr)]">
            <aside className="overflow-hidden rounded-[28px] border border-[#e0e2e7] bg-white shadow-[0_20px_55px_rgba(9,20,38,0.08)]">
              <div className="bg-[#091426] px-6 py-7 text-white sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#ded5ff]">
                    {accountLabel} Planı
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-[#d9deea]">
                    {billingLabel}
                  </span>
                </div>

                <h1 className="mt-6 text-3xl font-bold tracking-[-0.035em]">
                  {plan.name}
                </h1>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#bfc8d8]">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-[-0.04em]">
                    {formatPrice(monthlyEquivalent)}
                  </span>
                  <span className="pb-1 text-sm font-medium text-[#bfc8d8]">
                    / ay
                  </span>
                </div>
                {isAnnual && totalPrice > 0 && (
                  <p className="mt-2 text-xs font-medium text-[#bfc8d8]">
                    {formatPrice(totalPrice)} yıllık olarak tahsil edilir
                  </p>
                )}
              </div>

              <div className="px-6 py-7 sm:px-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[#777b84]">
                  Planınıza dahil
                </h2>
                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-5 text-[#34373d]"
                      key={feature}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eee8ff] text-[#6f42e8]">
                        <MaterialIcon className="text-xs">check</MaterialIcon>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-[#ebecef] pt-6">
                  <div className="flex items-center justify-between text-sm text-[#5d626b]">
                    <span>
                      {plan.name} · {billingLabel}
                    </span>
                    <span>{formatPrice(listPrice)}</span>
                  </div>
                  {isAnnual && annualSavings > 0 && (
                    <div className="mt-3 flex items-center justify-between text-sm font-semibold text-[#006c49]">
                      <span>Yıllık plan avantajı</span>
                      <span>-{formatPrice(annualSavings)}</span>
                    </div>
                  )}
                  <div className="mt-5 flex items-end justify-between border-t border-[#ebecef] pt-5">
                    <div>
                      <span className="block text-sm font-bold">Bugün ödenecek</span>
                      <span className="mt-1 block text-xs text-[#777b84]">
                        Vergiler dahil değildir
                      </span>
                    </div>
                    <span className="text-2xl font-bold tracking-[-0.03em]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <section className="rounded-[28px] border border-[#e0e2e7] bg-white p-6 shadow-[0_20px_55px_rgba(9,20,38,0.08)] sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#6f42e8]">
                    Son Adım
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-[#091426]">
                    Ödeme Bilgileri
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5d626b]">
                    Bilgileriniz doğrudan Stripe tarafından güvenle işlenir.
                  </p>
                </div>
                <span className="rounded-lg bg-[#635bff] px-3 py-1.5 text-sm font-black tracking-[-0.03em] text-white">
                  stripe
                </span>
              </div>

              <div className="mt-7 border-t border-[#ebecef] pt-7">
                {amountInCents === 0 ? (
                  <FreePlanPanel
                    accountType={accountType}
                    billingPeriod={billingPeriod}
                    planCode={plan.id}
                  />
                ) : (
                  <StripePaymentElement
                    accountType={accountType}
                    amountInCents={amountInCents}
                    billingPeriod={billingPeriod}
                    planId={plan.id}
                  />
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#ebecef] pt-5 text-[11px] font-semibold text-[#777b84]">
                <span className="inline-flex items-center gap-1.5">
                  <MaterialIcon className="text-sm text-[#006c49]">lock</MaterialIcon>
                  Güvenli ödeme
                </span>
                <span>PCI DSS uyumlu</span>
                <span>Stripe tarafından korunur</span>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-[#777b84]">
          © 2026 Vettingo. Tüm hakları saklıdır.
        </footer>
      </section>
    </main>
  );
}
