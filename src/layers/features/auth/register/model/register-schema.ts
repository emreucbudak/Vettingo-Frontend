import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Adınızı ve soyadınızı girin.")
    .refine((value) => value.split(/\s+/).length >= 2, {
      message: "Ad ve soyad bilgilerini birlikte girin.",
    }),
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresinizi girin.")
    .pipe(z.email("Geçerli bir e-posta adresi girin.")),
  password: z
    .string()
    .min(1, "Şifrenizi girin.")
    .min(6, "Şifre en az 6 karakter olmalıdır."),
  accountType: z.enum(["candidate", "employer"]),
  terms: z.boolean().refine((accepted) => accepted, {
    message: "Devam etmek için koşulları kabul edin.",
  }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
