import type { PropsWithChildren } from "react";
import { MdOutlineDelete } from "react-icons/md";
import type { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { ExamFieldError } from "./exam-field-error";

export const examQuestionFieldClass = "block w-full rounded border border-[#c5c6cd] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

export type ExamQuestionCardProps = {
  questionId: string;
  number: number;
  questionInput: UseFormRegisterReturn;
  weightInput: UseFormRegisterReturn;
  errors?: FieldErrors<{
    questionText: string;
    weight: number;
    correctAnswer?: string | null;
    options: { optionText: string }[];
  }>;
  onDelete: () => void;
};

export function ExamQuestionCardLayout({
  questionId,
  number,
  questionInput,
  weightInput,
  errors,
  onDelete,
  children,
}: PropsWithChildren<ExamQuestionCardProps>) {
  return (
    <section
      aria-labelledby={`${questionId}-title`}
      className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id={`${questionId}-title`} className="text-base font-semibold">Soru {number}</h2>
        <button
          type="button"
          aria-label={`Soru ${number} kartını sil`}
          onClick={onDelete}
          className="rounded p-2 text-[#45474c] hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <MdOutlineDelete aria-hidden="true" className="text-xl" />
        </button>
      </div>
      <label htmlFor={questionId} className="mb-2 block text-sm font-medium">Soru metni</label>
      <textarea
        {...questionInput}
        id={questionId}
        rows={3}
        required
        aria-invalid={Boolean(errors?.questionText?.message)}
        aria-describedby={errors?.questionText?.message ? `${questionId}-text-error` : undefined}
        className={`${examQuestionFieldClass} resize-none`}
      />
      <ExamFieldError id={`${questionId}-text-error`} message={errors?.questionText?.message} />
      {children}
      {[..."ABCDE"].map((letter, index) => {
        const message = errors?.options?.[index]?.optionText?.message;
        return message && <ExamFieldError key={letter} message={`${letter} seçeneği: ${message}`} />;
      })}
      <ExamFieldError message={errors?.options?.root?.message ?? errors?.options?.message} />
      <ExamFieldError message={errors?.correctAnswer?.message} />
      <div className="mt-4 flex justify-end">
        <label className="flex items-center gap-3 text-sm font-medium">
          Soru ağırlığı
          <input
            {...weightInput}
            type="number"
            min={1}
            required
            aria-invalid={Boolean(errors?.weight?.message)}
            aria-describedby={errors?.weight?.message ? `${questionId}-weight-error` : undefined}
            className="size-11 rounded border border-[#c5c6cd] bg-white px-1 text-center outline-none [appearance:textfield] focus:border-[#091426] focus:ring-1 focus:ring-[#091426] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </label>
      </div>
      <ExamFieldError id={`${questionId}-weight-error`} message={errors?.weight?.message} />
    </section>
  );
}
