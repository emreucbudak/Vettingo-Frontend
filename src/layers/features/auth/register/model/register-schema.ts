import { z } from "zod";

export const passwordRequirements = [
  {
    id: "minimum-length",
    label: "En az 6 karakter",
    errorMessage: "Şifre en az 6 karakter olmalıdır.",
    isMet: (password: string) => password.length >= 6,
  },
  {
    id: "uppercase-letter",
    label: "En az bir büyük harf",
    errorMessage: "Şifre en az bir büyük harf içermelidir.",
    isMet: (password: string) => /\p{Lu}/u.test(password),
  },
  {
    id: "lowercase-letter",
    label: "En az bir küçük harf",
    errorMessage: "Şifre en az bir küçük harf içermelidir.",
    isMet: (password: string) => /\p{Ll}/u.test(password),
  },
  {
    id: "digit",
    label: "En az bir rakam",
    errorMessage: "Şifre en az bir rakam içermelidir.",
    isMet: (password: string) => /\p{Nd}/u.test(password),
  },
  {
    id: "special-character",
    label: "En az bir özel karakter (!, @, # vb.)",
    errorMessage: "Şifre en az bir özel karakter içermelidir.",
    isMet: (password: string) => /[^\p{L}\p{Nd}]/u.test(password),
  },
] as const;

const passwordSchema = z
  .string()
  .min(1, "Şifrenizi girin.")
  .superRefine((password, context) => {
    if (password.length === 0) {
      return;
    }

    for (const requirement of passwordRequirements) {
      if (!requirement.isMet(password)) {
        context.addIssue({
          code: "custom",
          message: requirement.errorMessage,
        });
      }
    }
  });

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Adınızı girin."),
  surname: z
    .string()
    .trim()
    .min(1, "Soyadınızı girin."),
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresinizi girin.")
    .pipe(z.email("Geçerli bir e-posta adresi girin.")),
  password: passwordSchema,
  accountType: z.enum(["candidate", "employer"]),
  terms: z.boolean().refine((accepted) => accepted, {
    message: "Devam etmek için koşulları kabul edin.",
  }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
