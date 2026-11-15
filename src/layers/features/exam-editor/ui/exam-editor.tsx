"use client";

import { useRef, useState } from "react";
import { MdCheck, MdOutlineAdd, MdOutlineDelete } from "react-icons/md";

const questionTypes = [
  { value: "multiple-choice", label: "Çoktan Seçmeli" },
  { value: "true-false", label: "Doğru / Yanlış" },
] as const;

type QuestionType = (typeof questionTypes)[number]["value"];
type Question = { key: number; type: QuestionType };

const panelClass = "rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6";
const fieldClass = "block w-full rounded border border-[#c5c6cd] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";
const optionLetters = ["A", "B", "C", "D", "E"];
const trueFalseOptions = [
  { value: "true", label: "Doğru" },
  { value: "false", label: "Yanlış" },
];

function AnswerCheck({ name, value, label, showLabel = false }: {
  name: string;
  value: string;
  label: string;
  showLabel?: boolean;
}) {
  return (
    <label className="inline-flex shrink-0 cursor-pointer items-center gap-2 text-sm">
      <span className={showLabel ? undefined : "sr-only"}>{label}</span>
      <input type="radio" name={name} value={value} className="peer sr-only" />
      <span className="grid size-9 place-items-center rounded border border-[#c5c6cd] text-slate-500 peer-checked:border-emerald-700 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 peer-checked:ring-1 peer-checked:ring-emerald-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
        <MdCheck aria-hidden="true" className="text-lg" />
      </span>
    </label>
  );
}

function QuestionPanel({ question, number, onDelete }: {
  question: Question;
  number: number;
  onDelete: (key: number) => void;
}) {
  const questionId = `question-${question.key}`;
  const answerName = `${questionId}-answer`;

  return (
    <section aria-labelledby={`${questionId}-title`} className={panelClass}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id={`${questionId}-title`} className="text-base font-semibold">Soru {number}</h2>
        <button
          type="button"
          aria-label={`Soru ${number} kartını sil`}
          onClick={() => onDelete(question.key)}
          className="rounded p-2 text-[#45474c] hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <MdOutlineDelete aria-hidden="true" className="text-xl" />
        </button>
      </div>
      <label htmlFor={questionId} className="mb-2 block text-sm font-medium">Soru metni</label>
      <textarea id={questionId} name={`${questionId}-text`} rows={3} className={`${fieldClass} resize-none`} />
      {question.type === "multiple-choice" ? (
        <fieldset className="mt-4 space-y-2">
          <legend className="mb-2 text-sm font-medium">Seçenekler</legend>
          {optionLetters.map((letter) => (
            <div key={letter} className="flex items-center gap-2">
              <label className="flex min-w-0 flex-1 items-center gap-3 text-sm font-medium">
                <span className="sr-only">Seçenek </span>
                {letter}
                <input type="text" name={`${questionId}-option-${letter}`} className={fieldClass} />
              </label>
              <AnswerCheck name={answerName} value={letter} label={`${letter} seçeneğini doğru cevap olarak işaretle`} />
            </div>
          ))}
        </fieldset>
      ) : (
        <fieldset className="mt-4">
          <legend className="mb-2 text-sm font-medium">Doğru cevap</legend>
          <div className="flex flex-wrap gap-4">
            {trueFalseOptions.map(({ value, label }) => (
              <AnswerCheck key={value} name={answerName} value={value} label={label} showLabel />
            ))}
          </div>
        </fieldset>
      )}
    </section>
  );
}

export function ExamEditor() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const nextQuestionKey = useRef(1);

  function addQuestion(type: QuestionType) {
    const question = { key: nextQuestionKey.current, type };
    nextQuestionKey.current += 1;
    setQuestions((current) => [...current, question]);
  }

  function deleteQuestion(key: number) {
    setQuestions((current) => current.filter((question) => question.key !== key));
  }

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded bg-[#091426] px-3 py-2 text-sm font-semibold text-white hover:bg-[#20334d] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Sınavı Kaydet
        </button>
      </div>
      <div className={panelClass}>
        <label htmlFor="exam-name" className="mb-2 block text-sm font-medium">
          Sınav adı
        </label>
        <input
          id="exam-name"
          name="examName"
          type="text"
          maxLength={150}
          placeholder="Sınav adını girin"
          className={fieldClass}
        />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="exam-duration" className="mb-2 block text-sm font-medium">
              Sınav süresi (dakika)
            </label>
            <input id="exam-duration" name="durationMinutes" type="number" min={1} className={fieldClass} />
          </div>
          <div>
            <label htmlFor="exam-passing-score" className="mb-2 block text-sm font-medium">
              Geçme skoru (0–100)
            </label>
            <input id="exam-passing-score" name="passingScore" type="number" min={0} max={100} className={fieldClass} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        {questionTypes.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => addQuestion(value)}
            className="inline-flex items-center gap-1.5 rounded border border-[#c5c6cd] bg-white px-3 py-2 text-sm font-semibold hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <MdOutlineAdd aria-hidden="true" className="text-lg" />
            {label}
          </button>
        ))}
      </div>
      {questions.map((question, index) => (
        <QuestionPanel key={question.key} question={question} number={index + 1} onDelete={deleteQuestion} />
      ))}
    </>
  );
}
