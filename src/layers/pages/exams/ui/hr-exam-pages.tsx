"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Exam } from "@/entities/exam";
import { ROUTES } from "@/shared/config/routes";
import { ExamUpdateWidget } from "@/widgets/exam-update";
import { ExamsPage } from "./exams-page";

const HrExamSelectionContext = createContext<{
  selectedExam: Exam | null;
  selectExam: (exam: Exam) => void;
} | null>(null);

export function HrExamSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedExam, selectExam] = useState<Exam | null>(null);

  return (
    <HrExamSelectionContext.Provider value={{ selectedExam, selectExam }}>
      {children}
    </HrExamSelectionContext.Provider>
  );
}

function useHrExamSelection() {
  const selection = useContext(HrExamSelectionContext);

  if (!selection) {
    throw new Error("HR exam pages must be rendered within HrExamSelectionProvider.");
  }

  return selection;
}

export function HrExamsPage() {
  const router = useRouter();
  const { selectExam } = useHrExamSelection();

  function editExam(exam: Exam) {
    selectExam(exam);
    router.push(ROUTES.hrUpdateExam);
  }

  return <ExamsPage examsHref={ROUTES.hrExams} newExamHref={ROUTES.hrNewExam} onEditExam={editExam} />;
}

export function HrUpdateExamPage() {
  const { selectedExam } = useHrExamSelection();

  return (
    <main aria-label="Sınavı düzenle" className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-4 py-6 md:px-8 md:py-8">
      {selectedExam ? (
        <ExamUpdateWidget key={selectedExam.id} exam={selectedExam} />
      ) : (
        <Link href={ROUTES.hrExams} className="text-sm font-semibold text-[#091426] underline">
          Düzenlemek için sınav listesinden bir sınav seçin
        </Link>
      )}
    </main>
  );
}
