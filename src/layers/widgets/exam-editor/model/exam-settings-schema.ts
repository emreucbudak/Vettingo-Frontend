import { z } from "zod";

export const examSettingsSchema = z.object({
  title: z.string().trim()
    .min(1, "Sınav adı boş bırakılamaz.")
    .max(100, "Sınav adı en fazla 100 karakter olabilir."),
  durationMinutes: z.int32({ error: "Sınav süresi tam sayı olmalıdır." })
    .positive("Sınav süresi sıfırdan büyük olmalıdır."),
  passingScore: z.int32({ error: "Geçme puanı tam sayı olmalıdır." })
    .min(1, "Geçme puanı en az 1 olmalıdır."),
});
