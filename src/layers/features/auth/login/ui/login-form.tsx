"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { AuthSocialButtons } from "../../ui/auth-social-buttons";
import { login } from "../api/login";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const leadingIconClass =
  "absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#45474c]";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const destination = await login({ email, password });

      if (!destination) {
        throw new Error("Oturum açma başarısız, lütfen tekrar deneyiniz.");
      }

      router.replace(destination);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Oturum açılamadı, lütfen tekrar deneyiniz.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form
        aria-busy={isSubmitting}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          E-posta Adresi
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>mail</MaterialIcon>
            <input
              name="email"
              required
              autoComplete="email"
              placeholder="ornek@sirket.com"
              className={`${inputClass} pl-10 pr-3`}
              type="email"
            />
          </span>
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          <span className="flex items-center justify-between">
            Şifre
            <Link
              className="text-xs font-medium text-[#0d0093] hover:underline"
              href={ROUTES.login}
            >
              Şifremi Unuttum?
            </Link>
          </span>
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>lock</MaterialIcon>
            <input
              name="password"
              minLength={6}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className={`${inputClass} pl-10 pr-10`}
              type={showPassword ? "text" : "password"}
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
        </label>

        <label className="mt-1 flex cursor-pointer items-center gap-2 text-sm text-[#45474c]">
          <input
            name="remember"
            className="h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
            type="checkbox"
          />
          Beni Hatırla
        </label>

        {formError && (
          <p
            aria-live="polite"
            className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            role="alert"
          >
            {formError}
          </p>
        )}

        <button
          className="mt-1 flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          Giriş Yap
          {isSubmitting && (
            <MaterialIcon className="animate-spin text-[18px]">
              progress_activity
            </MaterialIcon>
          )}
          <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
        </button>
      </form>

      <AuthSocialButtons separator="veya şununla devam et" />

      <p className="mt-8 text-center text-sm text-[#45474c]">
        Hesabınız yok mu?{" "}
        <Link
          className="font-bold text-[#091426] hover:underline"
          href={ROUTES.register}
        >
          Kayıt Ol
        </Link>
      </p>
    </>
  );
}
