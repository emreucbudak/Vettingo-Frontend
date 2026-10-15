export type Exam = {
  id: string;
  name: string;
  createdAt: string;
  questionCount: number;
};

// Preview data until an exam management endpoint is available.
export const exampleExams: readonly Exam[] = [
  { id: "exam-1", name: "Genel Yetenek Sınavı", createdAt: "2026-10-14", questionCount: 30 },
  { id: "exam-2", name: "Frontend Geliştirici Sınavı", createdAt: "2026-10-12", questionCount: 25 },
  { id: "exam-3", name: "İngilizce Seviye Tespit Sınavı", createdAt: "2026-10-09", questionCount: 40 },
  { id: "exam-4", name: "Analitik Düşünme Sınavı", createdAt: "2026-10-07", questionCount: 20 },
  { id: "exam-5", name: "Backend Geliştirici Sınavı", createdAt: "2026-10-05", questionCount: 35 },
];
