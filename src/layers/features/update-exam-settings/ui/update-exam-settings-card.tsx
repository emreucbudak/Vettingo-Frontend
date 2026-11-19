import type { UseFormRegisterReturn } from "react-hook-form";
import { examQuestionFieldClass } from "@/entities/exam";

export function UpdateExamSettingsCard({
  titleInput,
  durationInput,
  passingScoreInput,
}: {
  titleInput: UseFormRegisterReturn;
  durationInput: UseFormRegisterReturn;
  passingScoreInput: UseFormRegisterReturn;
}) {
  return (
    <div className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
      <label htmlFor="update-exam-name" className="mb-2 block text-sm font-medium">
        Sınav adı
      </label>
      <input
        {...titleInput}
        id="update-exam-name"
        type="text"
        required
        maxLength={2000}
        placeholder="Sınav adını girin"
        className={examQuestionFieldClass}
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="update-exam-duration" className="mb-2 block text-sm font-medium">
            Sınav süresi (dakika)
          </label>
          <input
            {...durationInput}
            id="update-exam-duration"
            type="number"
            required
            min={1}
            className={examQuestionFieldClass}
          />
        </div>
        <div>
          <label htmlFor="update-exam-passing-score" className="mb-2 block text-sm font-medium">
            Geçme skoru
          </label>
          <input
            {...passingScoreInput}
            id="update-exam-passing-score"
            type="number"
            required
            min={0}
            className={examQuestionFieldClass}
          />
        </div>
      </div>
    </div>
  );
}
