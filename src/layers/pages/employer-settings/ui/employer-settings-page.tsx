"use client";

import { useState, type FormEvent } from "react";
import { ROUTES } from "@/shared/config/routes";
import { DashboardShell } from "@/widgets/app-shell";
import { EmployerDashboardFooter } from "@/widgets/app-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const navigationItems = [
  { label: "Panel", icon: "space_dashboard", href: ROUTES.employer },
  { label: "İlanlarım", icon: "business_center", href: ROUTES.employerJobs },
  { label: "Başvurular", icon: "assignment_ind", href: ROUTES.employerApplications },
  { label: "Yetenekler", icon: "auto_awesome", href: ROUTES.employerTalents },
] as const;

const utilityItems = [
  { label: "Yardım Merkezi", icon: "support_agent", href: ROUTES.employerHelpCenter },
  {
    label: "Ayarlar",
    icon: "settings",
    href: ROUTES.employerSettings,
    active: true,
  },
  { label: "Çıkış Yap", icon: "door_open", action: "logout" },
] as const;

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

type SavedSection = "company" | "account" | "security" | null;

function SaveButton({
  active,
  label = "Değişiklikleri Kaydet",
}: {
  active: boolean;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-[#c5c6cd] pt-5 sm:flex-row sm:items-center">
      <button
        className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
        type="submit"
      >
        {label}
        <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
      </button>
      <p
        aria-live="polite"
        className={`flex items-center gap-2 text-sm font-medium text-[#006c49] ${
          active ? "" : "sr-only"
        }`}
      >
        <MaterialIcon className="text-[18px]">check_circle</MaterialIcon>
        Değişiklikler kaydedildi.
      </p>
    </div>
  );
}

function SectionHeader({
  description,
  icon,
  title,
}: {
  description: string;
  icon: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4 border-b border-[#c5c6cd] pb-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
        <MaterialIcon className="text-[22px]">{icon}</MaterialIcon>
      </div>
      <div>
        <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">{title}</h2>
        <p className="mt-1 text-sm leading-5 text-[#45474c]">{description}</p>
      </div>
    </div>
  );
}

export function EmployerSettingsPage() {
  const [savedSection, setSavedSection] = useState<SavedSection>(null);

  function handleSubmit(section: Exclude<SavedSection, null>, event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSavedSection(section);
  }

  return (
    <DashboardShell
      navigationItems={navigationItems}
      sidebarSubtitle=""
      sidebarTitle="Vettingo"
      utilityItems={utilityItems}
    >
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Yönetim
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Hesap Ayarları
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#45474c]">
            Şirket profilini, hesap iletişim bilgilerini ve güvenlik tercihlerini tek
            yerden güncelle.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <div className="space-y-6">
            <form
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              onSubmit={(event) => handleSubmit("company", event)}
            >
              <SectionHeader
                description="İlanlarda ve aday iletişimlerinde görünen kurumsal bilgileri düzenle."
                icon="domain"
                title="Şirket Bilgileri"
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="company-name">
                    Şirket Adı
                  </label>
                  <input
                    className={inputClass}
                    defaultValue="Vettingo"
                    id="company-name"
                    name="companyName"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company-sector">
                    Sektör
                  </label>
                  <select
                    className={inputClass}
                    defaultValue="technology"
                    id="company-sector"
                    name="sector"
                  >
                    <option value="technology">Teknoloji</option>
                    <option value="finance">Finans</option>
                    <option value="retail">Perakende</option>
                    <option value="consulting">Danışmanlık</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="company-website">
                    Web Sitesi
                  </label>
                  <input
                    className={inputClass}
                    defaultValue="https://vettingo.com"
                    id="company-website"
                    name="website"
                    placeholder="https://sirketiniz.com"
                    type="url"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company-size">
                    Şirket Büyüklüğü
                  </label>
                  <select
                    className={inputClass}
                    defaultValue="51-200"
                    id="company-size"
                    name="companySize"
                  >
                    <option value="1-10">1-10 çalışan</option>
                    <option value="11-50">11-50 çalışan</option>
                    <option value="51-200">51-200 çalışan</option>
                    <option value="201-500">201-500 çalışan</option>
                    <option value="501+">501+ çalışan</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="company-address">
                    Şirket Adresi
                  </label>
                  <textarea
                    className={`${inputClass} min-h-24 resize-y`}
                    defaultValue="Maslak, Sarıyer / İstanbul"
                    id="company-address"
                    name="address"
                  />
                </div>
              </div>

              <div className="mt-6">
                <SaveButton active={savedSection === "company"} />
              </div>
            </form>

            <form
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              onSubmit={(event) => handleSubmit("account", event)}
            >
              <SectionHeader
                description="Hesap sahibi ve bildirimler için kullanılacak iletişim bilgilerini güncelle."
                icon="settings"
                title="Hesap ve İletişim"
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="account-name">
                    Yetkili Adı
                  </label>
                  <input
                    autoComplete="name"
                    className={inputClass}
                    defaultValue="Vettingo İK Ekibi"
                    id="account-name"
                    name="contactName"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="account-email">
                    İş E-postası
                  </label>
                  <input
                    autoComplete="email"
                    className={inputClass}
                    defaultValue="ik@vettingo.com"
                    id="account-email"
                    name="email"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="account-phone">
                    Telefon
                  </label>
                  <input
                    autoComplete="tel"
                    className={inputClass}
                    defaultValue="+90 212 555 01 24"
                    id="account-phone"
                    name="phone"
                    type="tel"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="account-language">
                    Arayüz Dili
                  </label>
                  <select
                    className={inputClass}
                    defaultValue="tr"
                    id="account-language"
                    name="language"
                  >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <SaveButton active={savedSection === "account"} />
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-[#6cf8bb] text-lg font-semibold text-[#00714d]">
                VE
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0b1c30]">Vettingo</h2>
              <p className="mt-1 text-sm text-[#45474c]">Kurumsal işveren hesabı</p>
              <div className="mt-5 border-t border-[#c5c6cd] pt-5">
                <div className="flex items-center gap-2 text-sm font-medium text-[#006c49]">
                  <MaterialIcon className="symbol-filled text-[18px]">verified</MaterialIcon>
                  E-posta doğrulandı
                </div>
              </div>
            </section>

            <form
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              onSubmit={(event) => handleSubmit("security", event)}
            >
              <SectionHeader
                description="Hesabın için güçlü ve benzersiz bir şifre kullan."
                icon="shield_lock"
                title="Güvenlik"
              />

              <div className="space-y-5">
                <div>
                  <label className={labelClass} htmlFor="current-password">
                    Mevcut Şifre
                  </label>
                  <input
                    autoComplete="current-password"
                    className={inputClass}
                    id="current-password"
                    minLength={6}
                    name="currentPassword"
                    placeholder=""
                    required
                    type="password"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="new-password">
                    Yeni Şifre
                  </label>
                  <input
                    autoComplete="new-password"
                    className={inputClass}
                    id="new-password"
                    minLength={6}
                    name="newPassword"
                    placeholder="En az 6 karakter"
                    required
                    type="password"
                  />
                </div>
              </div>

              <div className="mt-6">
                <SaveButton
                  active={savedSection === "security"}
                  label="Şifreyi Güncelle"
                />
              </div>
            </form>
          </aside>
        </div>
      </main>
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}
