"use client";

import { MdOutlineCheckCircle, MdOutlineExpandMore } from "react-icons/md";

import { useState } from "react";
import { changePassword } from "@/features/auth/change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SettingsSections } from "@/shared/ui/settings-sections";
import { EmployerShell } from "@/widgets/employer/shell";
import {
  employerPasswordSchema,
  type EmployerPasswordFormValues,
} from "../model/employer-password-schema";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

const saveButtonClass =
  "inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145] disabled:cursor-not-allowed disabled:opacity-70";

const companySelectClass = `${inputClass} appearance-none pr-10`;

function EmployerProfileForm() {
  return (
    <form
      aria-label="Profil"
      className="scroll-mt-20 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
      id="employer-profile-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="account-first-name">
            İsim
          </label>
          <input
            autoComplete="given-name"
            className={inputClass}
            placeholder="İsim"
            id="account-first-name"
            name="firstName"
            required
            type="text"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="account-last-name">
            Soyisim
          </label>
          <input
            autoComplete="family-name"
            className={inputClass}
            placeholder="Soyisim"
            id="account-last-name"
            name="lastName"
            required
            type="text"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="account-email">
            E-posta
          </label>
          <input
            autoComplete="email"
            className={`${inputClass} scroll-mt-28`}
            defaultValue="ik@vettingo.com"
            id="account-email"
            name="email"
            type="email"
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

      <div className="mt-6 flex justify-end">
        <button className={`${saveButtonClass} shrink-0`} type="submit">
          Güncelle
        </button>
      </div>
    </form>
  );
}

function EmployerCompanyForm() {
  return (
    <form
      aria-label="Şirket Bilgileri"
      className="scroll-mt-20 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
      id="employer-company-form"
      onSubmit={(event) => event.preventDefault()}
    >
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
          <div className="relative">
            <select
            className={companySelectClass}
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
            <MdOutlineExpandMore aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0b1c30]" />
          </div>
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
          <div className="relative">
            <select
            className={companySelectClass}
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
            <MdOutlineExpandMore aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0b1c30]" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="company-about">
            Şirket Hakkında
          </label>
          <textarea
            className={`${inputClass} min-h-32 resize-none`}
            id="company-about"
            name="about"
            placeholder="Şirketiniz hakkında bilgi verin"
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="company-address">
            Şirket Adresi
          </label>
          <textarea
            className={`${inputClass} min-h-24 resize-none`}
            defaultValue="Maslak, Sarıyer / İstanbul"
            id="company-address"
            name="address"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className={`${saveButtonClass} shrink-0`} type="submit">
          Güncelle
        </button>
      </div>
    </form>
  );
}

function EmployerPasswordForm() {
  const [isSaved, setIsSaved] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
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

  async function onPasswordSubmit(values: EmployerPasswordFormValues) {
    setIsSaved(false);
    setPasswordError(null);
    try {
      await changePassword(values);
      resetPasswordForm();
      setIsSaved(true);
    } catch (error) {
      setPasswordError(error instanceof Error ? error.message : "Şifre değiştirilemedi. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form
      aria-busy={isPasswordSubmitting}
      aria-label="Şifre Değiştir"
      className="scroll-mt-20 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6"
      id="employer-password-form"
      noValidate
      onChange={() => { setIsSaved(false); setPasswordError(null); }}
      onSubmit={handlePasswordSubmit(onPasswordSubmit)}
    >
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

      <div>
        <p
          aria-live="polite"
          className={isSaved ? "mt-3 flex items-center gap-2 text-sm font-medium text-[#006c49]" : "sr-only"}
        >
          <MdOutlineCheckCircle aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[18px]" />
          Değişiklikler kaydedildi.
        </p>
        {passwordError && <p className="mt-3 text-sm text-[#8c1d18]" role="alert">{passwordError}</p>}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className={`${saveButtonClass} shrink-0`}
          disabled={isPasswordSubmitting}
          type="submit"
        >
          {isPasswordSubmitting ? "Güncelleniyor…" : "Şifreyi Güncelle"}
        </button>
      </div>
    </form>
  );
}

export function EmployerSettingsPage() {
  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <SettingsSections
          sections={[
            { id: "profile", label: "Profil", content: <EmployerProfileForm /> },
            { id: "company", label: "Şirket Bilgileri", content: <EmployerCompanyForm /> },
            { id: "password", label: "Şifre Değiştir", content: <EmployerPasswordForm /> },
            { id: "email", label: "E-mail Güncelle" },
            { id: "two-step-login", label: "2 Aşamalı Giriş Açma" },
          ]}
        />
      </main>
    </EmployerShell>
  );
}
