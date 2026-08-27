import { z } from "zod";

const optionalPhoneNumber = z
  .string()
  .trim()
  .max(20, "Telefon numarası en fazla 20 karakter olabilir.")
  .refine((value) => {
    if (!value) {
      return true;
    }

    const digitCount = value.replace(/\D/g, "").length;

    return /^\+?[\d\s()-]+$/.test(value) && digitCount >= 10 && digitCount <= 15;
  }, "Geçerli bir telefon numarası girin.");

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Adınızı girin.")
    .max(50, "Ad en fazla 50 karakter olabilir."),
  surname: z
    .string()
    .trim()
    .min(1, "Soyadınızı girin.")
    .max(50, "Soyad en fazla 50 karakter olabilir."),
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresinizi girin.")
    .max(254, "E-posta adresi en fazla 254 karakter olabilir.")
    .pipe(z.email("Geçerli bir e-posta adresi girin.")),
  phoneNumber: optionalPhoneNumber,
  targetRole: z
    .string()
    .trim()
    .max(100, "Hedef pozisyon en fazla 100 karakter olabilir."),
  biography: z
    .string()
    .trim()
    .max(500, "Hakkımda alanı en fazla 500 karakter olabilir."),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
