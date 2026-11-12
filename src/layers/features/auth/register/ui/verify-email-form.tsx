"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export function VerifyEmailForm({ nextHref }: { nextHref: string }) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.replace(nextHref);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2 text-sm font-medium text-[#0b1c30]">
        Doğrulama kodu
        <input
          aria-describedby="verification-status"
          autoComplete="one-time-code"
          className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-sm text-[#0b1c30] outline-none placeholder:text-[#75777d] focus:border-[#091426]"
          inputMode="numeric"
          maxLength={6}
          pattern="[0-9]{6}"
          placeholder="6 haneli kod"
          type="text"
        />
      </label>

      <p className="text-xs leading-5 text-[#45474c]" id="verification-status">
        E-posta doğrulaması henüz etkin değil. Şimdilik kod girmeden devam edebilirsiniz.
      </p>

      <button
        className="flex w-full items-center justify-center rounded bg-[#091426] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
        type="submit"
      >
        Devam Et
      </button>
    </form>
  );
}
