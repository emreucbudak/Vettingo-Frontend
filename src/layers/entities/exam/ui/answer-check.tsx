import { MdCheck } from "react-icons/md";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { TrueFalseAnswer } from "../model/question-types";

export function AnswerCheck({ answerInput, value, label, showLabel = false }: {
  answerInput: UseFormRegisterReturn;
  value: string | TrueFalseAnswer;
  label: string;
  showLabel?: boolean;
}) {
  return (
    <label className="inline-flex shrink-0 cursor-pointer items-center gap-2 text-sm">
      <span className={showLabel ? undefined : "sr-only"}>{label}</span>
      <input {...answerInput} type="radio" value={value} required className="peer sr-only" />
      <span className="grid size-9 place-items-center rounded border border-[#c5c6cd] text-slate-500 peer-checked:border-emerald-700 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 peer-checked:ring-1 peer-checked:ring-emerald-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
        <MdCheck aria-hidden="true" className="text-lg" />
      </span>
    </label>
  );
}
