import { ExamEditorWidget } from "@/widgets/exam-editor";

export function EmployerNewExamPage() {
  return (
    <main aria-label="Sınav soruları" className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-4 py-6 md:px-8 md:py-8">
      <ExamEditorWidget />
    </main>
  );
}
