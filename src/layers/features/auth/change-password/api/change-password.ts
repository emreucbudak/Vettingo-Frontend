import { getToken } from "@/shared/auth";

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export async function changePassword({ currentPassword, newPassword }: ChangePasswordRequest): Promise<void> {
  const token = await getToken();
  const response = await fetch("/api/gateway/auth/change-password", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentPassword, newPassword }),
    cache: "no-store",
  });

  if (response.ok) return;
  if (response.status === 401) throw new Error("Oturumunuz geçersiz. Lütfen tekrar giriş yapın.");
  if (response.status === 403) throw new Error("Şifre değiştirme yetkiniz bulunmuyor.");

  const error = await response.json().catch(() => null);
  const validationErrors = error?.errors && typeof error.errors === "object"
    ? Object.values(error.errors).flat().filter((message): message is string => typeof message === "string")
    : [];
  throw new Error(
    validationErrors.length > 0
      ? validationErrors.join(" ")
      : typeof error?.message === "string" ? error.message : "Şifre değiştirilemedi. Lütfen tekrar deneyin.",
  );
}
