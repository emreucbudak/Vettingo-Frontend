import type { UseFormRegisterReturn } from "react-hook-form";
import { ExamFieldError } from "@/entities/exam";

const fieldClass = "block w-full rounded border border-[#c5c6cd] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

export function ExamSettingsCard({
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
      <label htmlFor="exam-name" className="mb-2 block text-sm font-medium">
        Sınav adı
      </label>
      <input
        {...titleInput}
        id="exam-name"
        aria-invalid={Boolean(titleError)}
        aria-describedby={titleError ? "exam-name-error" : undefined}
        type="text"
        required
        maxLength={100}
        placeholder="Sınav adını girin"
        className={fieldClass}
      />
      <ExamFieldError id="exam-name-error" message={titleError} />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="exam-duration" className="mb-2 block text-sm font-medium">
            Sınav süresi (dakika)
          </label>
          <input
            {...durationInput}
            id="exam-duration"
            aria-invalid={Boolean(durationError)}
            aria-describedby={durationError ? "exam-duration-error" : undefined}
            type="number"
            required
            min={1}
            className={fieldClass}
          />
          <ExamFieldError id="exam-duration-error" message={durationError} />
        </div>
        <div>
          <label htmlFor="exam-passing-score" className="mb-2 block text-sm font-medium">
            Geçme skoru
          </label>
          <input
            {...passingScoreInput}
            id="exam-passing-score"
            aria-invalid={Boolean(passingScoreError)}
            aria-describedby={passingScoreError ? "exam-passing-score-error" : undefined}
            type="number"
            required
            min={1}
            className={fieldClass}
          />
          <ExamFieldError id="exam-passing-score-error" message={passingScoreError} />
        </div>
      </div>
    </div>
  );
}
