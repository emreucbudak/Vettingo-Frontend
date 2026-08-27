import { z } from "zod";

const passwordField = (emptyMessage: string) =>
  z
    .string()
    .min(1, emptyMessage)
    .min(6, "Şifre en az 6 karakter olmalıdır.");

export const employerPasswordSchema = z
  .object({
    currentPassword: passwordField("Mevcut şifrenizi girin."),
    newPassword: passwordField("Yeni şifrenizi girin."),
    confirmPassword: passwordField("Yeni şifrenizi tekrar girin."),
  })
  .superRefine(({ currentPassword, newPassword, confirmPassword }, context) => {
    if (currentPassword === newPassword) {
      context.addIssue({
        code: "custom",
        message: "Yeni şifren mevcut şifrenden farklı olmalı.",
        path: ["newPassword"],
      });
    }

    if (newPassword !== confirmPassword) {
      context.addIssue({
        code: "custom",
        message: "Yeni şifreler birbiriyle eşleşmiyor.",
        path: ["confirmPassword"],
      });
    }
  });

export type EmployerPasswordFormValues = z.infer<
  typeof employerPasswordSchema
>;
