"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineAdd } from "react-icons/md";
import type { Exam } from "@/entities/exam";
import { UpdateExamSettingsCard } from "@/features/update-exam-settings";
import { multipleChoiceLetters, UpdateMultipleChoiceQuestionCard } from "@/features/update-multiple-choice-question";
import { UpdateTrueFalseQuestionCard } from "@/features/update-true-false-question";
import { examUpdateFormSchema, type ExamUpdateFormValues } from "../model/question-schemas";

const questionTypes = [
  { value: "multiple-choice", label: "Çoktan Seçmeli" },
  { value: "true-false", label: "Doğru / Yanlış" },
] as const;

type QuestionType = (typeof questionTypes)[number]["value"];

export function ExamUpdateWidget({ exam }: { exam: Exam }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ExamUpdateFormValues>({
    resolver: zodResolver(examUpdateFormSchema),
    defaultValues: { title: exam.name, questions: [] },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "questions" });

  function addQuestion(type: QuestionType) {
    append({
      type,
      questionText: "",
      weight: 1,
      correctAnswer: "",
      options: type === "multiple-choice"
        ? multipleChoiceLetters.map(() => ({ optionText: "" }))
        : [],
    }, { shouldFocus: false });
  }

  const validationError = errors.title?.message
    ?? errors.durationMinutes?.message
    ?? errors.passingScore?.message
    ?? errors.questions?.root?.message
    ?? errors.questions?.message
    ?? fields.map((_, index) => {
      const error = errors.questions?.[index];
      if (!error) return undefined;
      const message = error.questionText?.message
        ?? error.weight?.message
        ?? error.correctAnswer?.message
        ?? "Soru seçeneklerini kontrol edin.";
      return `Soru ${index + 1}: ${message}`;
    }).find(Boolean);

  return (
    <form noValidate onSubmit={handleSubmit(() => {})} className="space-y-4">
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-[#091426] px-3 py-2 text-sm font-semibold text-white enabled:hover:bg-[#20334d] disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Sınavı Güncelle
        </button>
      </div>
      {validationError && <p className="text-sm text-red-700" role="alert">{validationError}</p>}
      {isSubmitSuccessful && <p className="text-sm text-emerald-700" role="status">Form doğrulandı.</p>}
      <UpdateExamSettingsCard
        titleInput={register("title")}
        durationInput={register("durationMinutes", { valueAsNumber: true })}
        passingScoreInput={register("passingScore", { valueAsNumber: true })}
      />
      <div className="grid grid-cols-2 gap-2">
        {questionTypes.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => addQuestion(value)}
            className="inline-flex items-center justify-center gap-1.5 rounded border border-[#c5c6cd] bg-white px-2 py-2 text-center text-sm font-semibold text-[#091426] transition-colors hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-3"
          >
            <MdOutlineAdd aria-hidden="true" className="shrink-0 text-lg" />
            {label}
          </button>
        ))}
      </div>
      {fields.map((question, index) => {
        const cardProps = {
          questionId: `update-question-${question.id}`,
          number: index + 1,
          questionInput: register(`questions.${index}.questionText`),
          weightInput: register(`questions.${index}.weight`, { valueAsNumber: true }),
          answerInput: register(`questions.${index}.correctAnswer`),
          onDelete: () => remove(index),
        };

        return question.type === "multiple-choice" ? (
          <UpdateMultipleChoiceQuestionCard
            key={question.id}
            {...cardProps}
            registerOption={(optionIndex) =>
              register(`questions.${index}.options.${optionIndex}.optionText`)
            }
          />
        ) : (
          <UpdateTrueFalseQuestionCard key={question.id} {...cardProps} />
        );
      })}
    </form>
  );
}
