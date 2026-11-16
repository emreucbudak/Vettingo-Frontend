export enum TrueFalseAnswer {
  True = 1,
  False = 2,
}

export type QuestionTypes = {
  questionText: string;
  weight: number;
  displayOrder: number;
};

export type TrueFalseOptions = {
  value: TrueFalseAnswer;
  isCorrect: boolean;
};

export type TrueFalseQuestionType = QuestionTypes & {
  trueFalseOptions: TrueFalseOptions[];
};

export type MultipleChoiceOption = {
  optionText: string;
  isCorrect: boolean;
  order: number;
};

export type MultipleChoiceQuestionType = QuestionTypes & {
  options: MultipleChoiceOption[];
};
