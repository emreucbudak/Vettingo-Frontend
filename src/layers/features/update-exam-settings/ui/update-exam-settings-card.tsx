import type { UseFormRegisterReturn } from "react-hook-form";
import { ExamFieldError, examQuestionFieldClass } from "@/entities/exam";

export function UpdateExamSettingsCard({
  titleInput,
  durationInput,
  passingScoreInput,
  titleError,
  durationError,
  passingScoreError,
}: {
  titleInput: UseFormRegisterReturn;
  durationInput: UseFormRegisterReturn;
  passingScoreInput: UseFormRegisterReturn;
  titleError?: string;
  durationError?: string;
  passingScoreError?: string;
}) {
  return (
    <div className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
      <label htmlFor="update-exam-name" className="mb-2 block text-sm font-medium">
        Sınav adı
      </label>
      <input
        {...titleInput}
        id="update-exam-name"
        aria-invalid={Boolean(titleError)}
        aria-describedby={titleError ? "update-exam-name-error" : undefined}
        type="text"
        required
        maxLength={2000}
        placeholder="Sınav adını girin"
        className={examQuestionFieldClass}
      />
      <ExamFieldError id="update-exam-name-error" message={titleError} />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="update-exam-duration" className="mb-2 block text-sm font-medium">
            Sınav süresi (dakika)
          </label>
          <input
            {...durationInput}
            id="update-exam-duration"
            aria-invalid={Boolean(durationError)}
            aria-describedby={durationError ? "update-exam-duration-error" : undefined}
            type="number"
            required
            min={1}
            className={examQuestionFieldClass}
          />
          <ExamFieldError id="update-exam-duration-error" message={durationError} />
        </div>
        <div>
          <label htmlFor="update-exam-passing-score" className="mb-2 block text-sm font-medium">
            Geçme skoru
          </label>
          <input
            {...passingScoreInput}
            id="update-exam-passing-score"
            aria-invalid={Boolean(passingScoreError)}
            aria-describedby={passingScoreError ? "update-exam-passing-score-error" : undefined}
            type="number"
            required
            min={0}
            className={examQuestionFieldClass}
          />
          <ExamFieldError id="update-exam-passing-score-error" message={passingScoreError} />
        </div>
      </div>
    </div>
  );
}
