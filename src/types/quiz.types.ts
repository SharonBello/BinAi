export interface QuizOption { id: string; textHe: string; }

export interface QuizQuestion {
  id: string;
  textHe: string;
  options: QuizOption[];
  correctId: string;
  explanationHe: string;
}

export interface QuizData {
  moduleId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizAttempt {
  moduleId: string;
  userId: string;
  answers: Record<string, string>;
  score: number;
  passed: boolean;
  completedAt: Date;
}

export type AssignmentNumber = 1 | 2 | 3 | 4 | 5;

export interface AssignmentDefinition {
  number: AssignmentNumber;
  title: string;
  description: string;
  prompt: string;
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  durationMin: number;
  type: 'text' | 'file' | 'prompt-output' | 'reflection';
}

export interface AssignmentSubmission {
  moduleId: string;
  userId: string;
  assignmentNumber: AssignmentNumber;
  content: string;
  submittedAt: Date;
}