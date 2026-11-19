import { z } from "zod";
import { TrueFalseAnswer } from "@/entities/exam";
import { multipleChoiceLetters } from "@/features/update-multiple-choice-question";
import { examSettingsSchema } from "./exam-settings-schema";

const optionTextSchema = z.string().trim()
  .max(2000, "Seçenek metni en fazla 2000 karakter olabilir.");
const nonEmptyTextSchema = z.string().trim()
  .min(1, "Soru metni boş bırakılamaz.")
  .max(2000, "Soru metni en fazla 2000 karakter olabilir.");

const questionFields = {
  questionText: nonEmptyTextSchema,
  weight: z.int32({ error: "Soru ağırlığı tam sayı olmalıdır." })
    .positive("Soru ağırlığı sıfırdan büyük olmalıdır."),
  displayOrder: z.int32().positive(),
};

const multipleChoiceOptionSchema = z.object({
  optionText: optionTextSchema.min(1, "Seçenek metni boş bırakılamaz."),
  isCorrect: z.boolean().default(false),
  order: z.literal([1, 2, 3, 4, 5]),
});

const trueFalseOptionSchema = z.object({
  type: z.enum(TrueFalseAnswer),
  isCorrect: z.boolean().default(false),
});

export const multipleChoiceQuestionSchema = z.object({
  ...questionFields,
  options: z.array(multipleChoiceOptionSchema).min(1),
});

export const trueFalseQuestionSchema = z.object({
  ...questionFields,
  options: z.array(trueFalseOptionSchema).length(2).refine(
    (options) =>
      new Set(options.map((option) => option.type)).size === 2 &&
      options.filter((option) => option.isCorrect).length === 1,
    "Bir doğru ve bir yanlış seçeneği gönderilmeli ve yalnızca biri doğru cevap olarak işaretlenmelidir.",
  ),
});

const questionFormInputs = {
  correctAnswer: z.string().nullish(),
  options: z.array(z.object({ optionText: optionTextSchema }))
    .max(multipleChoiceLetters.length),
};

const updateQuestionFormSchema = z.discriminatedUnion("type", [
  multipleChoiceQuestionSchema
    .pick({ questionText: true, weight: true })
    .extend({ type: z.literal("multiple-choice"), ...questionFormInputs })
    .refine(
      ({ correctAnswer, options }) => multipleChoiceLetters.some(
        (letter, index) => letter === correctAnswer && Boolean(options[index]?.optionText),
      ),
      {
        path: ["correctAnswer"],
        message: "Metni girilmiş bir seçeneği doğru cevap olarak işaretleyin.",
      },
    ),
  trueFalseQuestionSchema
    .pick({ questionText: true, weight: true })
    .extend({ type: z.literal("true-false"), ...questionFormInputs })
    .refine(
      ({ correctAnswer }) => [TrueFalseAnswer.True, TrueFalseAnswer.False]
        .some((answer) => String(answer) === correctAnswer),
      { path: ["correctAnswer"], message: "Doğru cevabı işaretleyin." },
    ),
]);

export const examUpdateFormSchema = examSettingsSchema.extend({
  questions: z.array(updateQuestionFormSchema).min(1, "En az bir soru ekleyin."),
});

export type ExamUpdateFormValues = z.input<typeof examUpdateFormSchema>;
