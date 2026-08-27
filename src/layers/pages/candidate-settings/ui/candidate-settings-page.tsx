"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FieldError,
  type UseFormRegisterReturn,
  useForm,
  useWatch,
} from "react-hook-form";
import { apiRequest } from "@/shared/api";
import { useUserInformation } from "@/shared/useUserInformation";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { CandidateShell } from "@/widgets/candidate/shell";
import {
  passwordSchema,
  type PasswordFormValues,
} from "../model/password-schema";
import {
  profileSchema,
  type ProfileFormValues,
} from "../model/profile-schema";
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
  error,
  label,
  name,
  placeholder,
  registration,
  type = "text",
}: {
  autoComplete?: string;
  error?: FieldError;
  label: string;
  name: ProfileTextField;
  placeholder?: string;
  registration: UseFormRegisterReturn<ProfileTextField>;
  type?: "email" | "tel" | "text";
}) {
  const errorId = `candidate-${name}-error`;

  return (
    <div>
      <label className={labelClass} htmlFor={`candidate-${name}`}>
        {label}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className={`${inputClass} ${error ? "border-[#ba1a1a]" : ""}`}
        id={`candidate-${name}`}
        placeholder={placeholder}
        type={type}
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

type ProfileFormProps = {
  onSave: (profile: CandidateProfile) => void;
  profile: CandidateProfile;
};

function getProfileFormValues(profile: CandidateProfile): ProfileFormValues {
  return {
    ...profile,
    biography: profile.biography ?? "",
    phoneNumber: profile.phoneNumber ?? "",
  };
}

function ProfileForm({ onSave, profile }: ProfileFormProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: getProfileFormValues(profile),
  });
  const biography = useWatch({
    control,
    name: "biography",
  });

  useEffect(() => {
    reset(getProfileFormValues(profile));
  }, [profile, reset]);

  function onSubmit(values: ProfileFormValues) {
    onSave({
      ...values,
      biography: values.biography || null,
      phoneNumber: values.phoneNumber || null,
    });
  }

  return (
    <form
      aria-busy={isSubmitting}
      className="rounded border border-[#c5c6cd] bg-white p-5 md:p-6"
      id="candidate-profile-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 border-b border-[#c5c6cd] pb-5">
        <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">
          Profil
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
        <ProfileInput
          autoComplete="given-name"
          error={errors.name}
          label="Ad"
          name="name"
          registration={register("name")}
        />
        <ProfileInput
          autoComplete="family-name"
          error={errors.surname}
          label="Soyad"
          name="surname"
          registration={register("surname")}
        />
        <ProfileInput
          autoComplete="email"
          error={errors.email}
          label="E-posta"
          name="email"
          registration={register("email")}
          type="email"
        />
        <ProfileInput
          autoComplete="tel"
          error={errors.phoneNumber}
          label="Telefon"
          name="phoneNumber"
          placeholder="+90 5xx xxx xx xx"
          registration={register("phoneNumber")}
          type="tel"
        />
        <ProfileInput
          autoComplete="organization-title"
          error={errors.targetRole}
          label="Hedef Pozisyon"
          name="targetRole"
          placeholder="Örn. Kıdemli Ürün Tasarımcısı"
          registration={register("targetRole")}
        />
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="candidate-biography">
            Hakkımda
          </label>
          <textarea
            aria-describedby={
              errors.biography ? "candidate-biography-error" : undefined
            }
            aria-invalid={Boolean(errors.biography)}
            className={`${inputClass} min-h-32 resize-y leading-6 ${
              errors.biography ? "border-[#ba1a1a]" : ""
            }`}
            id="candidate-biography"
            maxLength={500}
            placeholder="Deneyimini, güçlü yönlerini ve kariyer hedeflerini kısaca anlat."
            {...register("biography")}
          />
          {errors.biography && (
            <p
              className="mt-2 text-xs text-[#8c1d18]"
              id="candidate-biography-error"
              role="alert"
            >
              {errors.biography.message}
            </p>
          )}
          <p className="mt-2 text-right text-[11px] text-[#75777d]">
            {biography.length}/500
          </p>
        </div>
      </div>

    </form>
  );
}

function AccountSettingsForm() {
  const [isSaved, setIsSaved] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
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
      className="rounded border border-[#c5c6cd] bg-white p-5 md:p-6"
      noValidate
      onChange={() => setIsSaved(false)}
      onSubmit={handleSubmit(onSubmit)}
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
            aria-describedby={
              errors.currentPassword
                ? "candidate-current-password-error"
                : undefined
            }
            aria-invalid={Boolean(errors.currentPassword)}
            autoComplete="current-password"
            className={`${inputClass} ${
              errors.currentPassword ? "border-[#ba1a1a]" : ""
            }`}
            id="candidate-current-password"
            placeholder="••••••••"
            type="password"
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <p
              className="mt-2 text-xs text-[#8c1d18]"
              id="candidate-current-password-error"
              role="alert"
            >
              {errors.currentPassword.message}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="candidate-new-password">
            Yeni Şifre
          </label>
          <input
            aria-describedby={
              errors.newPassword ? "candidate-new-password-error" : undefined
            }
            aria-invalid={Boolean(errors.newPassword)}
            autoComplete="new-password"
            className={`${inputClass} ${
              errors.newPassword ? "border-[#ba1a1a]" : ""
            }`}
            id="candidate-new-password"
            placeholder="En az 6 karakter"
            type="password"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <p
              className="mt-2 text-xs text-[#8c1d18]"
              id="candidate-new-password-error"
              role="alert"
            >
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="candidate-confirm-password">
            Yeni Şifre Tekrar
          </label>
          <input
            aria-describedby={
              errors.confirmPassword
                ? "candidate-confirm-password-error"
                : undefined
            }
            aria-invalid={Boolean(errors.confirmPassword)}
            autoComplete="new-password"
            className={`${inputClass} ${
              errors.confirmPassword ? "border-[#ba1a1a]" : ""
            }`}
            id="candidate-confirm-password"
            placeholder="Yeni şifreni tekrar gir"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p
              className="mt-2 text-xs text-[#8c1d18]"
              id="candidate-confirm-password-error"
              role="alert"
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-[#c5c6cd] pt-5">
        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
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

type CandidateSettingsContentProps = {
  error: string | null;
  isLoading: boolean;
  onProfileChange: (profile: CandidateProfile) => void;
  profile: CandidateProfile;
};

function CandidateSettingsContent({
  error,
  isLoading,
  onProfileChange,
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
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={isLoading}
            form="candidate-profile-form"
            type="submit"
          >
            <MaterialIcon className="text-[18px]">check</MaterialIcon>
            Kaydet
          </button>
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
          <ProfileForm onSave={onProfileChange} profile={profile} />

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
      onProfileChange={setProfile}
      profile={profile}
    />
  );
}
