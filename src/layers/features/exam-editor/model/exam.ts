import type { MultipleChoiceQuestionType, TrueFalseQuestionType } from "@/entities/exam";

export type Exam = {
  title: string;
  durationMinutes: number;
  passingScore: number;
  multipleChoiceQuestions: MultipleChoiceQuestionType[];
  trueFalseQuestions: TrueFalseQuestionType[];
};
