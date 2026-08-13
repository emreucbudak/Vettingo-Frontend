"use client";

import {
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import { getAuthToken, getTokenSessionUser, isTokenExpired } from "@/shared/auth";
import { CandidateShell } from "@/widgets/app-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const PROFILE_STORAGE_KEY = "vettingo-candidate-profile";
const subscribeToBrowserState = () => () => undefined;
const getServerToken = (): string | null => null;

type CandidateProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  targetRole: string;
  bio: string;
};

const emptyProfile: CandidateProfileForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  targetRole: "",
  bio: "",
};

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

function createSessionProfile(fullName?: string, email?: string) {
  const nameParts = fullName?.trim().split(/\s+/).filter(Boolean) ?? [];

  return {
    ...emptyProfile,
    firstName: nameParts[0] ?? "",
    lastName: nameParts.slice(1).join(" "),
    email: email ?? "",
  };
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

type ProfileTextField = Exclude<
  keyof CandidateProfileForm,
  "bio"
>;

function ProfileInput({
  autoComplete,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  autoComplete?: string;
  label: string;
  name: ProfileTextField;
  onChange: (name: ProfileTextField, value: string) => void;
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
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        required={name === "firstName" || name === "lastName" || name === "email"}
        type={type}
        value={value}
      />
    </div>
  );
}

function ProfileForm({
  isSaved,
  onChange,
  onSubmit,
  profile,
}: {
  isSaved: boolean;
  onChange: <Key extends keyof CandidateProfileForm>(
    name: Key,
    value: CandidateProfileForm[Key],
  ) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  profile: CandidateProfileForm;
}) {
  const updateText = (name: ProfileTextField, value: string) =>
    onChange(name, value);

  return (
    <form
      className="rounded border border-[#c5c6cd] bg-white p-5 md:p-6"
      onSubmit={onSubmit}
    >
      <SectionHeader
        description="İşverenlerin ve Vettingo önerilerinin kullandığı iletişim ve kariyer bilgilerini düzenle."
        icon="person_edit"
        title="Kişisel Bilgiler"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProfileInput
          autoComplete="given-name"
          label="Ad"
          name="firstName"
          onChange={updateText}
          value={profile.firstName}
        />
        <ProfileInput
          autoComplete="family-name"
          label="Soyad"
          name="lastName"
          onChange={updateText}
          value={profile.lastName}
        />
        <ProfileInput
          autoComplete="email"
          label="E-posta"
          name="email"
          onChange={updateText}
          type="email"
          value={profile.email}
        />
        <ProfileInput
          autoComplete="tel"
          label="Telefon"
          name="phone"
          onChange={updateText}
          placeholder="+90 5xx xxx xx xx"
          type="tel"
          value={profile.phone}
        />
        <ProfileInput
          autoComplete="address-level2"
          label="Konum"
          name="location"
          onChange={updateText}
          placeholder="İstanbul, Türkiye"
          value={profile.location}
        />
        <ProfileInput
          autoComplete="organization-title"
          label="Hedef Pozisyon"
          name="targetRole"
          onChange={updateText}
          placeholder="Örn. Kıdemli Ürün Tasarımcısı"
          value={profile.targetRole}
        />
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="candidate-bio">
            Hakkımda
          </label>
          <textarea
            className={`${inputClass} min-h-32 resize-y leading-6`}
            id="candidate-bio"
            maxLength={500}
            name="bio"
            onChange={(event) => onChange("bio", event.target.value)}
            placeholder="Deneyimini, güçlü yönlerini ve kariyer hedeflerini kısaca anlat."
            value={profile.bio}
          />
          <p className="mt-2 text-right text-[11px] text-[#75777d]">
            {profile.bio.length}/500
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-[#c5c6cd] pt-5 sm:flex-row sm:items-center">
        <button
          className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
          type="submit"
        >
          Değişiklikleri Kaydet
          <MaterialIcon className="text-[18px]">save</MaterialIcon>
        </button>
        <p
          aria-live="polite"
          className={`flex items-center gap-2 text-sm font-medium text-[#006c49] ${isSaved ? "" : "sr-only"}`}
        >
          <MaterialIcon className="text-[18px]">check_circle</MaterialIcon>
          Bilgilerin kaydedildi.
        </p>
      </div>
    </form>
  );
}

type PasswordStatus = "idle" | "mismatch" | "same" | "saved";

function AccountSettingsForm() {
  const [passwordStatus, setPasswordStatus] = useState<PasswordStatus>("idle");

  function handlePasswordSubmit(event: FormEvent<HTMLFormElement>) {
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
      <SectionHeader
        description="Hesabın için güçlü ve benzersiz bir şifre kullan."
        icon="lock"
        title="Hesap Ayarları"
      />

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

function CandidateSettingsContent({
  sessionEmail,
  sessionFullName,
  sessionId,
}: {
  sessionEmail?: string;
  sessionFullName?: string;
  sessionId?: string;
}) {
  const storageKey = `${PROFILE_STORAGE_KEY}:${sessionId ?? "anonymous"}`;
  const [profile, setProfile] = useState<CandidateProfileForm>(() => {
    const sessionProfile = createSessionProfile(sessionFullName, sessionEmail);
    if (typeof window === "undefined") return sessionProfile;

    try {
      const savedProfile = window.localStorage.getItem(storageKey);
      return savedProfile
        ? {
            ...sessionProfile,
            ...(JSON.parse(savedProfile) as Partial<CandidateProfileForm>),
          }
        : sessionProfile;
    } catch {
      return sessionProfile;
    }
  });
  const [isSaved, setIsSaved] = useState(false);

  function updateProfile<Key extends keyof CandidateProfileForm>(
    name: Key,
    value: CandidateProfileForm[Key],
  ) {
    setProfile((current) => ({ ...current, [name]: value }));
    setIsSaved(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem(storageKey, JSON.stringify(profile));
    setIsSaved(true);
  }

  const completedFields = [
    profile.firstName,
    profile.lastName,
    profile.email,
    profile.phone,
    profile.location,
    profile.targetRole,
    profile.bio,
  ].filter((value) => value.trim().length > 0).length;
  const completion = Math.round((completedFields / 7) * 100);
  const fullName =
    [profile.firstName, profile.lastName].filter(Boolean).join(" ") ||
    "Aday Kullanıcı";
  const initials =
    [profile.firstName, profile.lastName]
      .filter(Boolean)
      .map((value) => value[0])
      .join("")
      .toLocaleUpperCase("tr-TR") || "AK";

  return (
    <CandidateShell showTopBarLabel={false}>
      <main className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Hesap Yönetimi
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Ayarlar
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <ProfileForm
            isSaved={isSaved}
            onChange={updateProfile}
            onSubmit={handleSubmit}
            profile={profile}
          />

          <aside className="space-y-6">
            <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-[#6cf8bb] text-lg font-semibold text-[#00714d]">
                {initials}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0b1c30]">{fullName}</h2>
              <p className="mt-1 text-sm text-[#45474c]">
                {profile.email || "E-posta bilgisi bekleniyor"}
              </p>
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
  const token = useSyncExternalStore<string | null>(
    subscribeToBrowserState,
    getAuthToken,
    getServerToken,
  );
  const sessionUser =
    token && !isTokenExpired(token) ? getTokenSessionUser(token) : null;

  return (
    <CandidateSettingsContent
      key={token ?? "anonymous"}
      sessionEmail={sessionUser?.email}
      sessionFullName={sessionUser?.fullName}
      sessionId={sessionUser?.id}
    />
  );
}
