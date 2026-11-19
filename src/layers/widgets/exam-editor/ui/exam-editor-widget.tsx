"use client";

import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineAdd } from "react-icons/md";
import { ExamFieldError } from "@/entities/exam";
import { ExamSettingsCard } from "@/features/exam-settings";
import { MultipleChoiceQuestionCard, multipleChoiceLetters } from "@/features/multiple-choice-question";
import { TrueFalseQuestionCard } from "@/features/true-false-question";
import { createExam } from "../api/create-exam";
import { examFormSchema, type ExamFormValues, type ValidatedExam } from "../model/exam-form-schema";

const questionTypes = [
  { value: "true-false", label: "Doğru / Yanlış" },
  { value: "multiple-choice", label: "Çoktan Seçmeli" },
] as const;

type QuestionType = (typeof questionTypes)[number]["value"];

export function ExamEditorWidget() {
  const [saveFeedback, setSaveFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExamFormValues, unknown, ValidatedExam>({
    resolver: zodResolver(examFormSchema),
    defaultValues: { title: "", questions: [] },
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

  async function saveExam(exam: ValidatedExam) {
    setSaveFeedback(null);
    try {
      await createExam(exam);
      setSaveFeedback({ type: "success", message: "Sınav kaydedildi." });
    } catch (error) {
      setSaveFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Sınav kaydedilemedi.",
      });
    }
  }

  const questionListError = fields.length === 0
    ? errors.questions?.root?.message ?? errors.questions?.message
    : undefined;

  return (
    <form noValidate onSubmit={handleSubmit(saveExam, () => setSaveFeedback(null))} className="space-y-4">
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-[#091426] px-3 py-2 text-sm font-semibold text-white hover:bg-[#20334d] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        >
          {isSubmitting ? "Kaydediliyor…" : "Sınavı Kaydet"}
        </button>
      </div>
      {saveFeedback && (
        <p
          role={saveFeedback.type === "error" ? "alert" : "status"}
          className={saveFeedback.type === "error" ? "text-sm text-red-700" : "text-sm text-emerald-700"}
        >
          {saveFeedback.message}
        </p>
      )}
      <ExamSettingsCard
        titleInput={register("title")}
        durationInput={register("durationMinutes", { valueAsNumber: true })}
        passingScoreInput={register("passingScore", { valueAsNumber: true })}
        titleError={errors.title?.message}
        durationError={errors.durationMinutes?.message}
        passingScoreError={errors.passingScore?.message}
      />
      <div className="grid grid-cols-2 gap-2">
        {questionTypes.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => addQuestion(value)}
            className="inline-flex items-center justify-center gap-1.5 rounded border border-[#c5c6cd] bg-white px-2 py-2 text-center text-sm font-semibold hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-3"
          >
            <MdOutlineAdd aria-hidden="true" className="shrink-0 text-lg" />
            {label}
          </button>
        ))}
      </div>
      <ExamFieldError message={questionListError} />
      {fields.map((question, index) => {
        const cardProps = {
          questionId: `question-${question.id}`,
          number: index + 1,
          questionInput: register(`questions.${index}.questionText`),
          weightInput: register(`questions.${index}.weight`, { valueAsNumber: true }),
          answerInput: register(`questions.${index}.correctAnswer`),
          errors: errors.questions?.[index],
          onDelete: () => remove(index),
        };

        return question.type === "multiple-choice" ? (
          <MultipleChoiceQuestionCard
            key={question.id}
            {...cardProps}
            registerOption={(optionIndex) =>
              register(`questions.${index}.options.${optionIndex}.optionText`, {
                deps: `questions.${index}.correctAnswer`,
              })
            }
          />
        ) : (
          <TrueFalseQuestionCard key={question.id} {...cardProps} />
        );
      })}
    </form>
  );
}
