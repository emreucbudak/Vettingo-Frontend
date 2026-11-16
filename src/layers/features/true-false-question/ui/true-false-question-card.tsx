import {
  AnswerCheck,
  ExamQuestionCardLayout,
  TrueFalseAnswer,
  type ExamQuestionCardProps,
} from "@/entities/exam";

const trueFalseOptions = [
  { value: TrueFalseAnswer.True, label: "Doğru" },
  { value: TrueFalseAnswer.False, label: "Yanlış" },
];

export function TrueFalseQuestionCard({
  answerInput,
  ...cardProps
}: ExamQuestionCardProps & { answerInput: UseFormRegisterReturn }) {
  return (
    <ExamQuestionCardLayout {...cardProps}>
      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-medium">Doğru cevap</legend>
        <div className="flex flex-wrap gap-4">
          {trueFalseOptions.map(({ value, label }) => (
            <AnswerCheck key={value} answerInput={answerInput} value={value} label={label} showLabel />
          ))}
        </div>
      </fieldset>
    </ExamQuestionCardLayout>
  );
}
import type { UseFormRegisterReturn } from "react-hook-form";
