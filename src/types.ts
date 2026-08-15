export interface StudyNote {
  id: string;
  topic: string;
  title: string;
  /** High-yield bullet points for the note. */
  points: string[];
}

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  /** Exactly five options (A–E style). Must include `answer`. */
  options: string[];
  /** The correct option text (must match one entry in `options`). */
  answer: string;
  /** Optional teaching explanation shown after answering. */
  explanation?: string;
}
