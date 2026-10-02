import Link from "next/link";
import type { ReactNode } from "react";
import { hrFaqs } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrSectionHeading,
} from "@/entities/hr-dashboard/ui";
import { HrPasswordForm } from "./hr-password-form";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]";
const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.06em] text-[#45474c]";

function SettingsSection({
  children,
  description,
  icon,
  title,
}: {
  children: ReactNode;
  description?: string;
  icon?: string;
  title: string;
}) {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <div className="mb-6 flex items-start gap-3 border-b border-[#c5c6cd] pb-5">
        {icon ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
            <MaterialIcon className="text-[21px]">{icon}</MaterialIcon>
          </span>
        ) : null}
        <div>
          <h2 className="text-lg font-semibold text-[#0b1c30]">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm leading-5 text-[#45474c]">{description}</p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function HrSettingsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          <SettingsSection title="Profil">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="hr-first-name">
                  İsim
                </label>
                <input
                  className={inputClass}
                  autoComplete="given-name"
                  defaultValue="Deniz"
                  id="hr-first-name"
                  type="text"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-last-name">
                  Soyisim
                </label>
                <input
                  className={inputClass}
                  autoComplete="family-name"
                  defaultValue="Öztürk"
                  id="hr-last-name"
                  type="text"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-email">
                  Ekip E-postası
                </label>
                <input
                  className={inputClass}
                  defaultValue="hr@vettingo.com"
                  id="hr-email"
                  type="email"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-timezone">
                  Saat Dilimi
                </label>
                <select className={inputClass} defaultValue="istanbul" id="hr-timezone">
                  <option value="istanbul">Europe/Istanbul (UTC+3)</option>
                  <option value="london">Europe/London</option>
                  <option value="berlin">Europe/Berlin</option>
                </select>
              </div>
            </div>
          </SettingsSection>


        </div>

        <aside className="space-y-6">
          <HrPasswordForm />
        </aside>
      </div>
    </main>
  );
}

const helpTopics = [
  {
    title: "Scout",
    description: "Aday keşfi, filtreleme ve kısa liste.",
    href: ROUTES.scout,
  },
  {
    title: "Aday Yönetimi",
    description: "Aday havuzu ve süreç aşamaları.",
    href: ROUTES.candidateManagement,
  },
  {
    title: "Mülakatlar",
    description: "Takvim, panel ve geri bildirim.",
    href: ROUTES.interviews,
  },
  {
    title: "Raporlama",
    description: "İşe alım verileri ve performans içgörüleri.",
    href: ROUTES.reporting,
  },
] as const;

export function HrHelpCenterPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <section className="mb-10">
        <HrSectionHeading title="Hangi konuda yardıma ihtiyacın var?" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {helpTopics.map((topic) => (
            <Link
              className="group flex h-full min-h-[11.125rem] flex-col justify-center rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:-translate-y-0.5 hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)]"
              href={topic.href}
              key={topic.title}
            >
              <h2 className="text-sm font-semibold text-[#0b1c30]">
                {topic.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#45474c]">{topic.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#006c49]">
                Dokümantasyonu Oku
                <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <HrSectionHeading title="Sıkça Sorulan Sorular" />
        <div className="space-y-3">
          {hrFaqs.map((faq) => (
            <details
              className="group rounded border border-[#c5c6cd] bg-[#f8f9ff] open:border-[#091426]"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#0b1c30] marker:content-none md:px-6">
                {faq.question}
                <MaterialIcon className="shrink-0 text-[20px] text-[#45474c] transition-transform group-open:rotate-180">
                  expand_more
                </MaterialIcon>
              </summary>
              <p className="border-t border-[#c5c6cd] px-5 py-4 text-sm leading-6 text-[#45474c] md:px-6">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
