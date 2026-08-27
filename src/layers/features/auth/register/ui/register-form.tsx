"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { AuthSocialButtons } from "../../ui/auth-social-buttons";
import { register } from "../api/register";
import type { LegalDocument } from "../model/legal-content";
import {
  registerSchema,
  type RegisterFormValues,
} from "../model/register-schema";
import { LegalModal } from "./legal-modal";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const leadingIconClass =
  "absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#45474c]";

function SelectChevron() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#45474c]"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [activeLegalDocument, setActiveLegalDocument] =
    useState<LegalDocument | null>(null);
  const {
    register: registerField,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      accountType: "candidate",
      terms: false,
    },
  });

  async function onSubmit({
    name,
    surname,
    email,
    password,
    accountType,
  }: RegisterFormValues) {
    try {
      await register({
        name: name.trim(),
        surname: surname.trim(),
        email: email.trim(),
        password,
        role: accountType === "employer" ? "Company" : "Worker",
      });

      router.replace(ROUTES.login);
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error instanceof Error
            ? error.message
            : "Kayıt tamamlanamadı, lütfen tekrar deneyiniz.",
      });
    }
  }

  return (
    <>
      <form
        aria-busy={isSubmitting}
        className="flex flex-col gap-4"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          Ad
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>badge</MaterialIcon>
            <input
              aria-describedby={
                errors.name ? "register-name-error" : undefined
              }
              aria-invalid={Boolean(errors.name)}
              autoComplete="given-name"
              placeholder="Adınız"
              className={`${inputClass} pl-10 pr-3`}
              type="text"
              {...registerField("name")}
            />
          </span>
          {errors.name && (
            <span
              className="text-xs text-red-700"
              id="register-name-error"
              role="alert"
            >
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          Soyad
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>badge</MaterialIcon>
            <input
              aria-describedby={
                errors.surname ? "register-surname-error" : undefined
              }
              aria-invalid={Boolean(errors.surname)}
              autoComplete="family-name"
              placeholder="Soyadınız"
              className={`${inputClass} pl-10 pr-3`}
              type="text"
              {...registerField("surname")}
            />
          </span>
          {errors.surname && (
            <span
              className="text-xs text-red-700"
              id="register-surname-error"
              role="alert"
            >
              {errors.surname.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          E-posta Adresi
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>mail</MaterialIcon>
            <input
              aria-describedby={
                errors.email ? "register-email-error" : undefined
              }
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              placeholder="ornek@sirket.com"
              className={`${inputClass} pl-10 pr-3`}
              type="email"
              {...registerField("email")}
            />
          </span>
          {errors.email && (
            <span
              className="text-xs text-red-700"
              id="register-email-error"
              role="alert"
            >
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          Şifre
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>lock</MaterialIcon>
            <input
              aria-describedby={
                errors.password ? "register-password-error" : undefined
              }
              aria-invalid={Boolean(errors.password)}
              autoComplete="new-password"
              placeholder="••••••••"
              className={`${inputClass} pl-10 pr-10`}
              type={showPassword ? "text" : "password"}
              {...registerField("password")}
            />
            <button
              aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#45474c] transition-colors hover:text-[#0b1c30]"
              onClick={() => setShowPassword((value) => !value)}
              type="button"
            >
              <MaterialIcon className="text-[18px]">
                {showPassword ? "visibility" : "visibility_off"}
              </MaterialIcon>
            </button>
          </span>
          {errors.password && (
            <span
              className="text-xs text-red-700"
              id="register-password-error"
              role="alert"
            >
              {errors.password.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          Hesap Türü
          <span className="relative">
            <select
              className="w-full appearance-none rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2 pr-10 text-sm text-[#0b1c30] outline-none transition-colors focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
              {...registerField("accountType")}
            >
              <option value="candidate">İş Arayan</option>
              <option value="employer">İşveren</option>
            </select>
            <SelectChevron />
          </span>
        </label>

        <div className="mt-1 flex items-start gap-2 text-sm leading-5 text-[#45474c]">
          <input
            id="terms"
            aria-describedby={
              errors.terms ? "register-terms-error" : undefined
            }
            aria-invalid={Boolean(errors.terms)}
            className="mt-0.5 h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
            type="checkbox"
            {...registerField("terms")}
          />
          <p>
            <button
              className="font-semibold text-[#091426] underline-offset-2 hover:underline"
              onClick={() => setActiveLegalDocument("terms")}
              type="button"
            >
              Kullanım koşullarını
            </button>{" "}
            ve{" "}
            <button
              className="font-semibold text-[#091426] underline-offset-2 hover:underline"
              onClick={() => setActiveLegalDocument("privacy")}
              type="button"
            >
              gizlilik politikasını
            </button>{" "}
            kabul ediyorum.
          </p>
        </div>

        {errors.terms && (
          <p
            className="text-xs text-red-700"
            id="register-terms-error"
            role="alert"
          >
            {errors.terms.message}
          </p>
        )}

        {errors.root?.message && (
          <p
            aria-live="polite"
            className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            role="alert"
          >
            {errors.root.message}
          </p>
        )}

        <button
          className="mt-1 flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          Kayıt Ol
          {isSubmitting && (
            <MaterialIcon className="animate-spin text-[18px]">
              progress_activity
            </MaterialIcon>
          )}
          <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
        </button>
      </form>

      <AuthSocialButtons separator="veya şununla kayıt ol" />

      <p className="mt-8 text-center text-sm text-[#45474c]">
        Zaten hesabınız var mı?{" "}
        <Link
          className="font-bold text-[#091426] hover:underline"
          href={ROUTES.login}
        >
          Giriş Yap
        </Link>
      </p>

      {activeLegalDocument && (
        <LegalModal
          document={activeLegalDocument}
          onClose={() => setActiveLegalDocument(null)}
        />
      )}
    </>
  );
}
