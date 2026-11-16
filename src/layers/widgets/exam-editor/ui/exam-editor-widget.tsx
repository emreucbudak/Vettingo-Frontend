"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { MdOutlineAdd } from "react-icons/md";
import { TrueFalseAnswer } from "@/entities/exam";
import type { Exam } from "@/features/exam-editor";
import { ExamSettingsCard } from "@/features/exam-settings";
import { MultipleChoiceQuestionCard, multipleChoiceLetters } from "@/features/multiple-choice-question";
import { TrueFalseQuestionCard } from "@/features/true-false-question";

const questionTypes = [
  { value: "multiple-choice", label: "Çoktan Seçmeli" },
  { value: "true-false", label: "Doğru / Yanlış" },
] as const;

type QuestionType = (typeof questionTypes)[number]["value"];
type ExamFormValues = Pick<Exam, "title" | "durationMinutes" | "passingScore"> & {
  questions: {
    type: QuestionType;
    questionText: string;
    weight: number;
    correctAnswer: string;
    options: { optionText: string }[];
  }[];
};

export function ExamEditorWidget() {
  const { control, register, handleSubmit } = useForm<ExamFormValues>({
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

  function saveExam({ questions, ...settings }: ExamFormValues) {
    const exam: Exam = {
      ...settings,
      multipleChoiceQuestions: [],
      trueFalseQuestions: [],
    };

    questions.forEach((question, index) => {
      const details = {
        questionText: question.questionText,
        weight: question.weight,
        displayOrder: index + 1,
      };

      if (question.type === "multiple-choice") {
        exam.multipleChoiceQuestions.push({
          ...details,
          options: question.options.map(({ optionText }, optionIndex) => ({
            optionText,
            isCorrect: multipleChoiceLetters[optionIndex] === question.correctAnswer,
            order: optionIndex + 1,
          })),
        });
      } else {
        exam.trueFalseQuestions.push({
          ...details,
          trueFalseOptions: [TrueFalseAnswer.True, TrueFalseAnswer.False].map(
            (value) => ({
              value,
              isCorrect: String(value) === question.correctAnswer,
            }),
          ),
        });
      }
    });


  }

  return (
    <form onSubmit={handleSubmit(saveExam)} className="space-y-4">
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded bg-[#091426] px-3 py-2 text-sm font-semibold text-white hover:bg-[#20334d] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Sınavı Kaydet
        </button>
      </div>
      <ExamSettingsCard
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
            className="inline-flex items-center justify-center gap-1.5 rounded border border-[#c5c6cd] bg-white px-2 py-2 text-center text-sm font-semibold hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-3"
          >
            <MdOutlineAdd aria-hidden="true" className="shrink-0 text-lg" />
            {label}
          </button>
        ))}
      </div>
      {fields.map((question, index) => {
        const cardProps = {
          questionId: `question-${question.id}`,
          number: index + 1,
          questionInput: register(`questions.${index}.questionText`),
          weightInput: register(`questions.${index}.weight`, { valueAsNumber: true }),
          answerInput: register(`questions.${index}.correctAnswer`),
          onDelete: () => remove(index),
        };

        return question.type === "multiple-choice" ? (
          <MultipleChoiceQuestionCard
            key={question.id}
            {...cardProps}
            registerOption={(optionIndex) =>
              register(`questions.${index}.options.${optionIndex}.optionText`)
            }
          />
        ) : (
          <TrueFalseQuestionCard key={question.id} {...cardProps} />
        );
      })}
    </form>
  );
}
