"use client";

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { EmployerShell } from "@/widgets/employer/shell";
import {
  employerPasswordSchema,
  type EmployerPasswordFormValues,
} from "../model/employer-password-schema";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

type SavedSection = "company" | "account" | "security" | null;

function SaveButton({
  active,
  disabled = false,
  label,
}: {
  active: boolean;
  disabled?: boolean;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-[#c5c6cd] pt-5 sm:flex-row sm:items-center">
      <button
        className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={disabled}
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[#c5c6cd] pb-5">
      <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">{title}</h2>
    </div>
  );
}

export function EmployerSettingsPage() {
  const [savedSection, setSavedSection] = useState<SavedSection>(null);
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    reset: resetPasswordForm,
    formState: { errors: passwordErrors, isSubmitting: isPasswordSubmitting },
  } = useForm<EmployerPasswordFormValues>({
    resolver: zodResolver(employerPasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function handleSectionSubmit(
    section: Exclude<SavedSection, null>,
    event: React.SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setSavedSection(section);
  }

  function onPasswordSubmit() {
    resetPasswordForm();
    setSavedSection("security");
  }

  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <header className="mb-8 flex flex-col gap-5 border-b border-[#c5c6cd] pb-7 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Ayarlar
          </h1>
          <Link
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            href={ROUTES.employer}
          >
            <MaterialIcon className="text-[18px]">check</MaterialIcon>
            Kaydet
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <div className="space-y-6">
            <form
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              onSubmit={(event) => handleSectionSubmit("company", event)}
            >
              <SectionHeader title="Şirket Bilgileri" />

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


            </form>

            <form
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              onSubmit={(event) => handleSectionSubmit("account", event)}
            >
              <SectionHeader title="Hesap ve İletişim" />

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
              aria-busy={isPasswordSubmitting}
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
              noValidate
              onChange={() => setSavedSection(null)}
              onSubmit={handlePasswordSubmit(onPasswordSubmit)}
            >
              <SectionHeader title="Şifreni Değiştir" />

              <div className="space-y-5">
                <div>
                  <label className={labelClass} htmlFor="current-password">
                    Mevcut Şifre
                  </label>
                  <input
                    aria-describedby={
                      passwordErrors.currentPassword
                        ? "current-password-error"
                        : undefined
                    }
                    aria-invalid={Boolean(passwordErrors.currentPassword)}
                    autoComplete="current-password"
                    className={`${inputClass} ${
                      passwordErrors.currentPassword
                        ? "border-[#ba1a1a]"
                        : ""
                    }`}
                    id="current-password"
                    placeholder="Mevcut şifren"
                    type="password"
                    {...registerPassword("currentPassword")}
                  />
                  {passwordErrors.currentPassword && (
                    <p
                      className="mt-2 text-xs text-[#8c1d18]"
                      id="current-password-error"
                      role="alert"
                    >
                      {passwordErrors.currentPassword.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="new-password">
                    Yeni Şifre
                  </label>
                  <input
                    aria-describedby={
                      passwordErrors.newPassword
                        ? "new-password-error"
                        : undefined
                    }
                    aria-invalid={Boolean(passwordErrors.newPassword)}
                    autoComplete="new-password"
                    className={`${inputClass} ${
                      passwordErrors.newPassword ? "border-[#ba1a1a]" : ""
                    }`}
                    id="new-password"
                    placeholder="En az 6 karakter"
                    type="password"
                    {...registerPassword("newPassword")}
                  />
                  {passwordErrors.newPassword && (
                    <p
                      className="mt-2 text-xs text-[#8c1d18]"
                      id="new-password-error"
                      role="alert"
                    >
                      {passwordErrors.newPassword.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="confirm-password">
                    Yeni Şifre Tekrar
                  </label>
                  <input
                    aria-describedby={
                      passwordErrors.confirmPassword
                        ? "confirm-password-error"
                        : undefined
                    }
                    aria-invalid={Boolean(passwordErrors.confirmPassword)}
                    autoComplete="new-password"
                    className={`${inputClass} ${
                      passwordErrors.confirmPassword
                        ? "border-[#ba1a1a]"
                        : ""
                    }`}
                    id="confirm-password"
                    placeholder="Yeni şifreni tekrar gir"
                    type="password"
                    {...registerPassword("confirmPassword")}
                  />
                  {passwordErrors.confirmPassword && (
                    <p
                      className="mt-2 text-xs text-[#8c1d18]"
                      id="confirm-password-error"
                      role="alert"
                    >
                      {passwordErrors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <SaveButton
                  active={savedSection === "security"}
                  disabled={isPasswordSubmitting}
                  label="Şifreyi Güncelle"
                />
              </div>
            </form>
          </aside>
        </div>
      </main>
    </EmployerShell>
  );
}
