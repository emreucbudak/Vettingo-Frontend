import { z } from "zod";

export const examSettingsSchema = z.object({
  title: z.string().trim()
    .min(1, "Sınav adı boş bırakılamaz.")
    .max(2000, "Sınav adı en fazla 2000 karakter olabilir."),
  durationMinutes: z.int32({ error: "Sınav süresi tam sayı olmalıdır." })
    .positive("Sınav süresi sıfırdan büyük olmalıdır."),
  passingScore: z.int32({ error: "Geçme puanı tam sayı olmalıdır." })
    .min(0, "Geçme puanı negatif olamaz."),
});
