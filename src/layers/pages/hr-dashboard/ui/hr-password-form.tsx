"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FieldError,
  type UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  hrPasswordSchema,
  type HrPasswordFormValues,
} from "../model/hr-password-schema";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]";
const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.06em] text-[#45474c]";

type PasswordFieldName = keyof HrPasswordFormValues;

type PasswordFieldProps = {
  autoComplete: "current-password" | "new-password";
  error?: FieldError;
  id: string;
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn<PasswordFieldName>;
};

function PasswordField({
  autoComplete,
  error,
  id,
  label,
  placeholder,
  registration,
}: PasswordFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className={`${inputClass} ${error ? "border-[#ba1a1a]" : ""}`}
        id={id}
        placeholder={placeholder}
        type="password"
        {...registration}
      />
      {error && (
        <p className="mt-2 text-xs text-[#8c1d18]" id={errorId} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

export function HrPasswordForm() {
  const [isSaved, setIsSaved] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HrPasswordFormValues>({
    resolver: zodResolver(hrPasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit() {
    reset();
    setIsSaved(true);
  }

  return (
    <form
      aria-busy={isSubmitting}
      noValidate
      onChange={() => setIsSaved(false)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-5">
        <PasswordField
          autoComplete="current-password"
          error={errors.currentPassword}
          id="hr-current-password"
          label="Mevcut Şifre"
          placeholder="••••••••"
          registration={register("currentPassword")}
        />
        <PasswordField
          autoComplete="new-password"
          error={errors.newPassword}
          id="hr-new-password"
          label="Yeni Şifre"
          placeholder="En az 6 karakter"
          registration={register("newPassword")}
        />
        <PasswordField
          autoComplete="new-password"
          error={errors.confirmPassword}
          id="hr-confirm-password"
          label="Yeni Şifre Tekrar"
          placeholder="Yeni şifreni tekrar gir"
          registration={register("confirmPassword")}
        />
      </div>

      <div className="mt-6 border-t border-[#c5c6cd] pt-5">
        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          Şifreyi Güncelle
          <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
        </button>
        <p
          aria-live="polite"
          className={`mt-3 flex items-start gap-2 text-sm font-medium text-[#006c49] ${
            isSaved ? "" : "sr-only"
          }`}
        >
          <MaterialIcon className="mt-0.5 text-[18px]">check_circle</MaterialIcon>
          Şifre bilgilerin güncellendi.
        </p>
      </div>
    </form>
  );
}
