import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresinizi girin.")
    .pipe(z.email("Geçerli bir e-posta adresi girin.")),
  password: z
    .string()
    .min(1, "Şifrenizi girin.")
    .min(6, "Şifre en az 6 karakter olmalıdır."),
  remember: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
