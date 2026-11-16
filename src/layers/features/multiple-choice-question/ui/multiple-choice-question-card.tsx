import {
  AnswerCheck,
  ExamQuestionCardLayout,
  examQuestionFieldClass,
  type ExamQuestionCardProps,
} from "@/entities/exam";

export const multipleChoiceLetters = ["A", "B", "C", "D", "E"] as const;

export function MultipleChoiceQuestionCard({
  answerInput,
  registerOption,
  ...cardProps
}: ExamQuestionCardProps & {
  answerInput: UseFormRegisterReturn;
  registerOption: (index: number) => UseFormRegisterReturn;
}) {
  return (
    <ExamQuestionCardLayout {...cardProps}>
      <fieldset className="mt-4 space-y-2">
        <legend className="mb-2 text-sm font-medium">Seçenekler</legend>
        {multipleChoiceLetters.map((letter, index) => (
          <div key={letter} className="flex items-center gap-2">
            <label className="flex min-w-0 flex-1 items-center gap-3 text-sm font-medium">
              <span className="sr-only">Seçenek </span>
              {letter}
              <input {...registerOption(index)} type="text" className={examQuestionFieldClass} />
            </label>
            <AnswerCheck
              answerInput={answerInput}
              value={letter}
              label={`${letter} seçeneğini doğru cevap olarak işaretle`}
            />
          </div>
        ))}
      </fieldset>
    </ExamQuestionCardLayout>
  );
}
import type { UseFormRegisterReturn } from "react-hook-form";
