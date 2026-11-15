export type QuestionTypes = {
  questionText: string;
  weight: number;
  displayOrder: number;
};

export type TrueFalseQuestionType = QuestionTypes & {
  type: "true-false";
};

export type MultipleChoiceQuestionType = QuestionTypes & {
  type: "multiple-choice";
};
