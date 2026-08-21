import Link from "next/link";
import type { ReactNode } from "react";
import { hrFaqs } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrSectionHeading,
} from "@/entities/hr-dashboard/ui";

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
  description: string;
  icon: string;
  title: string;
}) {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <div className="mb-6 flex items-start gap-3 border-b border-[#c5c6cd] pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
          <MaterialIcon className="text-[21px]">{icon}</MaterialIcon>
        </span>
        <div>
          <h2 className="text-lg font-semibold text-[#0b1c30]">{title}</h2>
          <p className="mt-1 text-sm leading-5 text-[#45474c]">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export function HrSettingsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hr} icon="check">
            Kaydet
          </HrPrimaryLink>
        }
        title="Ayarlar"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          <SettingsSection
            description="HR panelinde kullanılacak temel kurum ve ekip bilgileri."
            icon="domain"
            title="Çalışma Alanı Profili"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="hr-workspace-name">
                  Çalışma Alanı
                </label>
                <input
                  className={inputClass}
                  defaultValue="Vettingo İnsan Kaynakları"
                  id="hr-workspace-name"
                  type="text"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-owner">
                  HR Operasyon Sahibi
                </label>
                <input
                  className={inputClass}
                  defaultValue="Deniz Öztürk"
                  id="hr-owner"
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

          <SettingsSection
            description="Talep ve mülakat görünümünde öne çıkarılacak varsayılan kurallar."
            icon="tune"
            title="Süreç Tercihleri"
          >
            <div className="space-y-4">
              {[
                {
                  title: "Yüksek öncelikli talepleri üste taşı",
                  description: "Kritik kadroları talep listelerinde önce göster.",
                  checked: true,
                },
                {
                  title: "24 saatlik geri bildirim hatırlatması",
                  description: "Mülakat notu açık kaldığında ekip görünümünde uyar.",
                  checked: true,
                },
                {
                  title: "Haftalık işe alım özeti",
                  description: "Pazartesi sabahı operasyon özetini panelde göster.",
                  checked: false,
                },
              ].map((preference) => (
                <label
                  className="flex cursor-pointer items-start justify-between gap-4 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4"
                  key={preference.title}
                >
                  <span>
                    <span className="block text-sm font-semibold text-[#0b1c30]">
                      {preference.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#45474c]">
                      {preference.description}
                    </span>
                  </span>
                  <input
                    className="mt-1 h-4 w-4 accent-[#006c49]"
                    defaultChecked={preference.checked}
                    type="checkbox"
                  />
                </label>
              ))}
            </div>
          </SettingsSection>
        </div>

        <aside className="space-y-6">
          <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
            <span className="flex h-14 w-14 items-center justify-center rounded bg-[#6cf8bb] text-lg font-semibold text-[#00714d]">
              HR
            </span>
            <h2 className="mt-5 text-lg font-semibold text-[#0b1c30]">HR Workspace</h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              İşe alım talepleri, adaylar ve değerlendirme ekipleri için ortak çalışma alanı.
            </p>
            <div className="mt-5 border-t border-[#c5c6cd] pt-5">
              <p className="flex items-center gap-2 text-sm font-medium text-[#006c49]">
                <MaterialIcon className="symbol-filled text-[18px]">verified</MaterialIcon>
                6 ekip üyesi aktif
              </p>
            </div>
          </section>

          <SettingsSection
            description="Hesabın için güçlü ve benzersiz bir şifre kullan."
            icon="lock"
            title="Şifre Değiştir"
          >
            <div className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="hr-current-password">
                  Mevcut Şifre
                </label>
                <input
                  autoComplete="current-password"
                  className={inputClass}
                  id="hr-current-password"
                  minLength={6}
                  name="currentPassword"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-new-password">
                  Yeni Şifre
                </label>
                <input
                  autoComplete="new-password"
                  className={inputClass}
                  id="hr-new-password"
                  minLength={6}
                  name="newPassword"
                  placeholder="En az 6 karakter"
                  type="password"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hr-confirm-password">
                  Yeni Şifre Tekrar
                </label>
                <input
                  autoComplete="new-password"
                  className={inputClass}
                  id="hr-confirm-password"
                  minLength={6}
                  name="confirmPassword"
                  placeholder="Yeni şifreni tekrar gir"
                  type="password"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-[#c5c6cd] pt-5">
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
                type="button"
              >
                Şifreyi Güncelle
                <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
              </button>
            </div>
          </SettingsSection>
        </aside>
      </div>
    </main>
  );
}

const helpTopics = [
  {
    icon: "assignment",
    title: "Talep Yönetimi",
    description: "Kadro ihtiyaçları ve onay akışları.",
    href: ROUTES.hrRequisitions,
  },
  {
    icon: "groups",
    title: "Aday Yönetimi",
    description: "Aday havuzu ve süreç aşamaları.",
    href: ROUTES.hrCandidates,
  },
  {
    icon: "calendar_month",
    title: "Mülakatlar",
    description: "Takvim, panel ve geri bildirim.",
    href: ROUTES.hrInterviews,
  },
  {
    icon: "monitoring",
    title: "Raporlama",
    description: "İşe alım verileri ve performans içgörüleri.",
    href: ROUTES.hrReports,
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
              className="group rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:-translate-y-0.5 hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)]"
              href={topic.href}
              key={topic.title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
                <MaterialIcon className="text-[21px]">{topic.icon}</MaterialIcon>
              </span>
              <h2 className="mt-4 text-sm font-semibold text-[#0b1c30] group-hover:underline">
                {topic.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#45474c]">{topic.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#006c49]">
                Bölümü Aç
                <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <HrSectionHeading
          description="HR arayüzünün tasarım akışlarıyla ilgili hızlı yanıtlar."
          title="Sık Sorulan Sorular"
        />
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
