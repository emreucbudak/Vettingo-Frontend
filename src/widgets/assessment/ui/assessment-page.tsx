"use client";

import {
  assessmentAnswerOptions,
  assessmentLegend,
  assessmentOverview,
  assessmentQuestion,
  assessmentQuestionNavigation,
  initialAssessmentAnswer,
  type AssessmentAnswerId,
} from "@/entities/assessment";
import { useAssessmentSession } from "@/features/assessment-session";

const questionStatusClasses = {
  answered: "border-[#c5c6cd] bg-[#d3e4fe] text-[#0b1c30]",
  current: "border-2 border-[#091426] bg-white font-bold text-[#091426]",
  flagged: "border-[#ba1a1a] bg-[#ffdad6] text-[#93000a]",
  unanswered: "border-[#c5c6cd] bg-white text-[#75777d] hover:border-[#091426]",
} as const;

const legendStatusClasses = {
  answered: "border-[#c5c6cd] bg-[#d3e4fe]",
  current: "border-2 border-[#091426] bg-white",
  flagged: "border-[#ba1a1a] bg-[#ffdad6]",
  unanswered: "border-[#c5c6cd] bg-white",
} as const;

const questionStatusLabels = {
  answered: "yanıtlandı",
  current: "mevcut soru",
  flagged: "inceleme için işaretlendi",
  unanswered: "yanıtlanmadı",
} as const;

function AssessmentIcon({ name }: { name: "flag" | "timer" }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {name === "timer" ? (
        <>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2.5 1.5M9 2h6M12 2v3" />
        </>
      ) : (
        <>
          <path d="M5 21V4" />
          <path d="M5 5h10l-1.5 3L15 11H5" />
        </>
      )}
    </svg>
  );
}

function AssessmentHeader({
  formattedTime,
  isFinished,
  onFinish,
}: {
  formattedTime: string;
  isFinished: boolean;
  onFinish: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#c5c6cd] bg-[#f8f9ff]/95 px-4 backdrop-blur md:px-8">
      <div className="mx-auto flex min-h-16 w-full max-w-[1440px] flex-wrap items-center justify-end gap-3 py-3">
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 rounded bg-[#dce9ff] px-4 py-1 text-[#75777d]" aria-live="polite">
            <AssessmentIcon name="timer" />
            <span className="min-w-12 text-center text-sm font-medium leading-5 text-[#0b1c30]">
              {formattedTime}
            </span>
          </div>
          <button
            className="rounded bg-[#091426] px-4 py-2 text-sm font-medium leading-5 text-white transition-colors hover:bg-[#1e293b] disabled:cursor-default disabled:bg-[#45474c] sm:px-6"
            disabled={isFinished}
            onClick={onFinish}
            type="button"
          >
            {isFinished ? "Test Tamamlandı" : "Testi Bitir"}
          </button>
        </div>
      </div>
    </header>
  );
}

function AnswerOption({
  answer,
  selectedAnswer,
  onSelect,
}: {
  answer: (typeof assessmentAnswerOptions)[number];
  selectedAnswer: AssessmentAnswerId;
  onSelect: (answer: AssessmentAnswerId) => void;
}) {
  const isSelected = selectedAnswer === answer.id;

  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded border p-4 transition-colors focus-within:ring-1 focus-within:ring-[#091426] ${
        isSelected
          ? "border-[#091426] bg-white"
          : "border-[#c5c6cd] bg-white hover:bg-[#eff4ff]"
      }`}
    >
      <input
        checked={isSelected}
        className="mt-1 h-4 w-4 accent-[#091426]"
        name="assessment-answer"
        onChange={() => onSelect(answer.id)}
        type="radio"
        value={answer.id}
      />
      <span className="min-w-0">
        <span className={`mb-1 block text-sm leading-5 sm:text-base sm:leading-6 ${isSelected ? "font-medium text-[#091426]" : "text-[#0b1c30]"}`}>
          {answer.label}
        </span>
        {answer.detailType === "code" ? (
          <code className="block overflow-x-auto font-mono text-xs leading-5 text-[#75777d] sm:text-sm">
            {answer.detail}
          </code>
        ) : (
          <span className="block text-sm leading-5 text-[#75777d]">{answer.detail}</span>
        )}
      </span>
    </label>
  );
}

function QuestionCard({
  isFlagged,
  selectedAnswer,
  onSelectAnswer,
  onToggleFlag,
}: {
  isFlagged: boolean;
  selectedAnswer: AssessmentAnswerId;
  onSelectAnswer: (answer: AssessmentAnswerId) => void;
  onToggleFlag: () => void;
}) {
  return (
    <section className="flex flex-col gap-6 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-4 sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-[#75777d]">
            Soru {assessmentOverview.currentQuestion} / {assessmentOverview.totalQuestions}
          </span>
          <h2 className="mt-1 text-xl font-semibold leading-7 text-[#091426] sm:text-2xl sm:leading-8">
            {assessmentQuestion.title}
          </h2>
        </div>
        <button
          aria-pressed={isFlagged}
          className={`flex shrink-0 items-center gap-1 self-start text-[11px] font-medium leading-4 transition-colors ${isFlagged ? "text-[#ba1a1a]" : "text-[#75777d] hover:text-[#091426]"}`}
          onClick={onToggleFlag}
          type="button"
        >
          <AssessmentIcon name="flag" />
          {isFlagged ? "İnceleme İçin İşaretlendi" : "İnceleme İçin İşaretle"}
        </button>
      </div>

      <div className="text-sm leading-5 text-[#45474c] sm:text-base sm:leading-6">
        <p className="mb-4">{assessmentQuestion.description}</p>
        <pre className="mb-6 overflow-x-auto rounded bg-[#091426] p-4 font-mono text-sm leading-6 text-[#eaf1ff]">
          <code>{assessmentQuestion.code}</code>
        </pre>
      </div>

      <form className="flex flex-col gap-4">
        {assessmentAnswerOptions.map((answer) => (
          <AnswerOption
            answer={answer}
            key={answer.id}
            onSelect={onSelectAnswer}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </form>
    </section>
  );
}

function QuestionNavigation({ isCurrentFlagged }: { isCurrentFlagged: boolean }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <section className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-4">
        <h3 className="mb-4 border-b border-[#c5c6cd] pb-1 text-sm font-medium uppercase leading-5 tracking-[0.04em] text-[#75777d]">
          İlerleme Özeti
        </h3>
        <div className="mb-1 flex justify-between text-[11px] font-medium leading-4 text-[#45474c]">
          <span>Tamamlanan</span>
          <span>
            {assessmentOverview.completedQuestions} / {assessmentOverview.totalQuestions}
          </span>
        </div>
        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-[#dce9ff]">
          <div
            className="h-full bg-[#006c49]"
            style={{
              width: `${(assessmentOverview.completedQuestions / assessmentOverview.totalQuestions) * 100}%`,
            }}
          />
        </div>

        <div className="grid grid-cols-5 gap-2">
          {assessmentQuestionNavigation.map((item) => {
            const status = item.status === "current" && isCurrentFlagged ? "flagged" : item.status;

            return (
              <button
                aria-current={item.status === "current" ? "step" : undefined}
                aria-label={`Soru ${item.number}: ${questionStatusLabels[status]}`}
                className={`relative flex h-8 w-8 items-center justify-center rounded border text-sm leading-5 transition-colors ${questionStatusClasses[status]}`}
                key={item.number}
                type="button"
              >
                {item.number}
                {status === "flagged" && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#ba1a1a]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-[#c5c6cd] pt-4 text-[11px] font-medium leading-4 text-[#45474c]">
          {assessmentLegend.map((item) => (
            <div className="flex items-center gap-1" key={item.label}>
              <span className={`relative inline-block h-3 w-3 rounded-sm border ${legendStatusClasses[item.status]}`}>
                {item.status === "flagged" && (
                  <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#ba1a1a]" />
                )}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

function AssessmentActions() {
  return (
    <div className="mt-auto flex items-center justify-between gap-4">
      <button className="rounded border border-[#75777d] px-6 py-2 text-sm font-medium leading-5 text-[#0b1c30] transition-colors hover:bg-[#eff4ff]" type="button">
        Önceki
      </button>
      <button className="rounded bg-[#091426] px-6 py-2 text-sm font-medium leading-5 text-white transition-colors hover:bg-[#1e293b]" type="button">
        Sonraki Soru
      </button>
    </div>
  );
}

export function AssessmentPage() {
  const {
    finishAssessment,
    formattedTime,
    isFinished,
    isFlagged,
    selectedAnswer,
    setSelectedAnswer,
    toggleFlag,
  } = useAssessmentSession(assessmentOverview.durationInSeconds, initialAssessmentAnswer);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <AssessmentHeader
        formattedTime={formattedTime}
        isFinished={isFinished}
        onFinish={finishAssessment}
      />
      <div className="flex min-h-[calc(100dvh-4rem)] w-full flex-col justify-center px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto flex w-full max-w-[1056px] flex-col gap-8 lg:flex-row lg:items-start">
          <main className="flex min-w-0 flex-1 flex-col gap-6 lg:max-w-3xl">
            <QuestionCard
              isFlagged={isFlagged}
              onSelectAnswer={setSelectedAnswer}
              onToggleFlag={toggleFlag}
              selectedAnswer={selectedAnswer}
            />
            <AssessmentActions />
          </main>
          <QuestionNavigation isCurrentFlagged={isFlagged} />
        </div>
      </div>
    </div>
  );
}
