import { z } from "zod";
import { TrueFalseAnswer } from "@/entities/exam";
import { multipleChoiceLetters } from "@/features/multiple-choice-question";
import { examSettingsSchema } from "./exam-settings-schema";
import { examSchema, multipleChoiceQuestionSchema } from "./question-schemas";

const trueFalseAnswers = [TrueFalseAnswer.True, TrueFalseAnswer.False];
const multipleChoiceOrders = [1, 2, 3, 4, 5] as const;

const questionFormSchema = multipleChoiceQuestionSchema
  .pick({ questionText: true, weight: true })
  .extend({
    type: z.enum(["multiple-choice", "true-false"]),
    correctAnswer: z.string().nullish(),
    options: z.array(z.object({
      optionText: z.string().trim().max(2000, "Seçenek en fazla 2000 karakter olabilir."),
    })).max(multipleChoiceLetters.length),
  })
  .superRefine((question, context) => {
    const selectedOption = multipleChoiceLetters.findIndex(
      (letter) => letter === question.correctAnswer,
    );
    const hasCorrectAnswer = question.type === "multiple-choice"
      ? Boolean(question.options[selectedOption]?.optionText)
      : trueFalseAnswers.some((answer) => String(answer) === question.correctAnswer);

    if (!hasCorrectAnswer) {
      context.addIssue({
        code: "custom",
        path: ["correctAnswer"],
        message: question.type === "multiple-choice"
          ? "Metni girilmiş bir seçeneği doğru cevap olarak işaretleyin."
          : "Doğru cevabı işaretleyin.",
      });
    }
  });

export const examFormSchema = examSettingsSchema
  .safeExtend({ questions: z.array(questionFormSchema).min(1, "En az bir soru ekleyin.") })
  .transform(({ questions, ...settings }): z.input<typeof examSchema> => ({
    ...settings,
    questions: questions.map((question, index) => {
      const details = {
        questionText: question.questionText,
        weight: question.weight,
        displayOrder: index + 1,
      };

      if (question.type === "multiple-choice") {
        return {
          ...details,
          type: question.type,
          options: question.options
            .map(({ optionText }, optionIndex) => ({
              optionText,
              order: multipleChoiceOrders[optionIndex],
              isCorrect: multipleChoiceLetters[optionIndex] === question.correctAnswer,
            }))
            .filter((option) => option.optionText !== ""),
        };
      }

      return {
        ...details,
        type: question.type,
        options: trueFalseAnswers.map((type) => ({
          type,
          isCorrect: String(type) === question.correctAnswer,
        })),
      };
    }),
  }))
  .pipe(examSchema);

export type ExamFormValues = z.input<typeof examFormSchema>;
export type ValidatedExam = z.output<typeof examFormSchema>;
