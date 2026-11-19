import { z } from "zod";
import { TrueFalseAnswer } from "@/entities/exam";
import { examSettingsSchema } from "./exam-settings-schema";

const nonEmptyTextSchema = z.string().trim()
  .min(1, "Metin boş bırakılamaz.")
  .max(2000, "Metin en fazla 2000 karakter olabilir.");

const questionFields = {
  questionText: nonEmptyTextSchema,
  weight: z.int32({ error: "Soru ağırlığı tam sayı olmalıdır." })
    .positive("Soru ağırlığı sıfırdan büyük olmalıdır."),
  displayOrder: z.int32().positive(),
};

const multipleChoiceOptionSchema = z.object({
  optionText: nonEmptyTextSchema,
  isCorrect: z.boolean().default(false),
  order: z.literal([1, 2, 3, 4, 5]),
});

const trueFalseOptionSchema = z.object({
  type: z.enum(TrueFalseAnswer),
  isCorrect: z.boolean().default(false),
});

export const multipleChoiceQuestionSchema = z.object({
  ...questionFields,
  type: z.literal("multiple-choice"),
  options: z.array(multipleChoiceOptionSchema).min(1),
});

export const trueFalseQuestionSchema = z.object({
  ...questionFields,
  type: z.literal("true-false"),
  options: z.array(trueFalseOptionSchema).length(2).refine(
    (options) =>
      new Set(options.map((option) => option.type)).size === 2 &&
      options.filter((option) => option.isCorrect).length === 1,
    "Bir doğru ve bir yanlış seçeneği gönderilmeli ve yalnızca biri doğru cevap olarak işaretlenmelidir.",
  ),
});
const questionSchema = z.discriminatedUnion("type", [
  trueFalseQuestionSchema,
  multipleChoiceQuestionSchema,
]);
export const examSchema = examSettingsSchema.safeExtend({
  questions: z.array(questionSchema).min(1, "En az bir soru ekleyin."),
});
