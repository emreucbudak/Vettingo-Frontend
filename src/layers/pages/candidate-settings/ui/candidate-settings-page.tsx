"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { apiRequest } from "@/shared/api";
import { ROUTES } from "@/shared/config/routes";
import { useUserInformation } from "@/shared/useUserInformation";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { CandidateShell } from "@/widgets/candidate/shell";
type CandidateProfile = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string | null;
  targetRole: string;
  biography: string | null;
};

const emptyProfile: CandidateProfile = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  targetRole: "",
  biography: "",
};

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

type ProfileTextField = Exclude<
  keyof CandidateProfile,
  "biography"
>;

function ProfileInput({
  autoComplete,
  label,
  name,
  placeholder,
  type = "text",
  value,
}: {
  autoComplete?: string;
  label: string;
  name: ProfileTextField;
  placeholder?: string;
  type?: "email" | "tel" | "text";
  value: string;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={`candidate-${name}`}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className={inputClass}
        id={`candidate-${name}`}
        name={name}
        placeholder={placeholder}
        readOnly
        required={name === "name" || name === "surname" || name === "email"}
        type={type}
        value={value}
      />
    </div>
  );
}

function ProfileForm({ profile }: { profile: CandidateProfile }) {
  return (
    <section className="rounded border border-[#c5c6cd] bg-white p-5 md:p-6">
      <div className="mb-6 border-b border-[#c5c6cd] pb-5">
        <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">
          Profil
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProfileInput
          autoComplete="given-name"
          label="Ad"
          name="name"
          value={profile.name}
        />
        <ProfileInput
          autoComplete="family-name"
          label="Soyad"
          name="surname"
          value={profile.surname}
        />
        <ProfileInput
          autoComplete="email"
          label="E-posta"
          name="email"
          type="email"
          value={profile.email}
        />
        <ProfileInput
          autoComplete="tel"
          label="Telefon"
          name="phoneNumber"
          placeholder="+90 5xx xxx xx xx"
          type="tel"
          value={profile.phoneNumber ?? ""}
        />
        <ProfileInput
          autoComplete="organization-title"
          label="Hedef Pozisyon"
          name="targetRole"
          placeholder="Örn. Kıdemli Ürün Tasarımcısı"
          value={profile.targetRole}
        />
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="candidate-biography">
            Hakkımda
          </label>
          <textarea
            className={`${inputClass} min-h-32 resize-y leading-6`}
            id="candidate-biography"
            maxLength={500}
            name="biography"
            placeholder="Deneyimini, güçlü yönlerini ve kariyer hedeflerini kısaca anlat."
            readOnly
            value={profile.biography ?? ""}
          />
          <p className="mt-2 text-right text-[11px] text-[#75777d]">
            {(profile.biography ?? "").length}/500
          </p>
        </div>
      </div>
    </section>
  );
}

type PasswordStatus = "idle" | "mismatch" | "same" | "saved";

function AccountSettingsForm() {
  const [passwordStatus, setPasswordStatus] = useState<PasswordStatus>("idle");

  function handlePasswordSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const currentPassword = String(formData.get("currentPassword") ?? "");
    const newPassword = String(formData.get("newPassword") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (newPassword !== confirmPassword) {
      setPasswordStatus("mismatch");
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordStatus("same");
      return;
    }

    form.reset();
    setPasswordStatus("saved");
  }

  const statusMessage =
    passwordStatus === "mismatch"
      ? "Yeni şifreler birbiriyle eşleşmiyor."
      : passwordStatus === "same"
        ? "Yeni şifren mevcut şifrenden farklı olmalı."
        : "Şifre bilgilerin güncellendi.";
  const hasStatus = passwordStatus !== "idle";
  const isError = passwordStatus === "mismatch" || passwordStatus === "same";

  return (
    <form
      className="rounded border border-[#c5c6cd] bg-white p-5 md:p-6"
      onChange={() => setPasswordStatus("idle")}
      onSubmit={handlePasswordSubmit}
    >
      <div className="mb-6 border-b border-[#c5c6cd] pb-5">
        <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">
          Şifre Değiştir
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className={labelClass} htmlFor="candidate-current-password">
            Mevcut Şifre
          </label>
          <input
            autoComplete="current-password"
            className={inputClass}
            id="candidate-current-password"
            minLength={6}
            name="currentPassword"
            placeholder="••••••••"
            required
            type="password"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="candidate-new-password">
            Yeni Şifre
          </label>
          <input
            autoComplete="new-password"
            className={inputClass}
            id="candidate-new-password"
            minLength={6}
            name="newPassword"
            placeholder="En az 6 karakter"
            required
            type="password"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="candidate-confirm-password">
            Yeni Şifre Tekrar
          </label>
          <input
            autoComplete="new-password"
            className={inputClass}
            id="candidate-confirm-password"
            minLength={6}
            name="confirmPassword"
            placeholder="Yeni şifreni tekrar gir"
            required
            type="password"
          />
        </div>
      </div>

      <div className="mt-6 border-t border-[#c5c6cd] pt-5">
        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
          type="submit"
        >
          Şifreyi Güncelle
          <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
        </button>
        <p
          aria-live="polite"
          className={`mt-3 flex items-start gap-2 text-sm font-medium ${
            isError ? "text-[#8c1d18]" : "text-[#006c49]"
          } ${hasStatus ? "" : "sr-only"}`}
        >
          <MaterialIcon className="mt-0.5 text-[18px]">
            {isError ? "warning" : "check_circle"}
          </MaterialIcon>
          {statusMessage}
        </p>
      </div>
    </form>
  );
}

type CandidateSettingsContentProps = {
  error: string | null;
  isLoading: boolean;
  profile: CandidateProfile;
};

function CandidateSettingsContent({
  error,
  isLoading,
  profile,
}: CandidateSettingsContentProps) {
  const completedFields = [
    profile.name,
    profile.surname,
    profile.email,
    profile.phoneNumber ?? "",
    profile.targetRole,
    profile.biography ?? "",
  ].filter((value) => value.trim().length > 0).length;
  const completion = Math.round((completedFields / 6) * 100);
  const fullName =
    [profile.name, profile.surname].filter(Boolean).join(" ") ||
    "Aday Kullanıcı";
  const initials =
    [profile.name, profile.surname]
      .filter(Boolean)
      .map((value) => value[0])
      .join("")
      .toLocaleUpperCase("tr-TR") || "AK";

  return (
    <CandidateShell>
      <main
        aria-busy={isLoading}
        className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8"
      >
        <header className="mb-8 flex flex-col gap-5 border-b border-[#c5c6cd] pb-7 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Ayarlar
          </h1>
          <Link
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            href={ROUTES.candidate}
          >
            <MaterialIcon className="text-[18px]">check</MaterialIcon>
            Kaydet
          </Link>
        </header>

        {error ? (
          <div
            className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <ProfileForm profile={profile} />

          <aside className="space-y-6">
            <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-[#6cf8bb] text-lg font-semibold text-[#00714d]">
                {initials}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0b1c30]">
                {fullName}
              </h2>
              <p className="mt-1 text-sm text-[#45474c]">{profile.email}</p>
              <div className="mt-6 border-t border-[#c5c6cd] pt-5">
                <div className="mb-2 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                  <span>Profil Tamamlanma</span>
                  <span>{completion}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-[#006c49]"
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>
            </section>

            <AccountSettingsForm />
          </aside>
        </div>
      </main>
    </CandidateShell>
  );
}

export function CandidateSettingsPage() {
  const user = useUserInformation();
  const [profile, setProfile] = useState<CandidateProfile>(emptyProfile);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const email = user?.Email;

  useEffect(() => {
    if (!email) {
      return;
    }

    const abortController = new AbortController();

    async function loadProfile(profileEmail: string) {
      try {
        setIsLoading(true);
        setError(null);

        const response = await apiRequest<CandidateProfile>(
          `/api/gateway/auth/user?email=${encodeURIComponent(profileEmail)}`,
          "GET",
          {
            cache: "no-store",
            signal: abortController.signal,
          },
        );

        if (!abortController.signal.aborted) {
          setProfile(response);
        }
      } catch {
        if (!abortController.signal.aborted) {
          setError("Kullanıcı profil bilgileriniz alınamadı.");
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadProfile(email);

    return () => abortController.abort();
  }, [email]);

  return (
    <CandidateSettingsContent
      error={error}
      isLoading={isLoading}
      profile={profile}
    />
  );
}