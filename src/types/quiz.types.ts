// ═══════════════════════════════════════════════════════
// BinAI — Quiz & Assignment Types
// ═══════════════════════════════════════════════════════

export interface QuizOption {
  id:     string;
  textHe: string;
}

export interface QuizQuestion {
  id:         string;
  textHe:     string;
  options:    QuizOption[];
  correctId:  string;
  explanationHe: string;
}

export interface QuizData {
  moduleId:   string;
  questions:  QuizQuestion[];
  passingScore: number;  // percentage, e.g. 70
}

export interface QuizAttempt {
  moduleId:   string;
  userId:     string;
  answers:    Record<string, string>;  // questionId → selectedOptionId
  score:      number;                  // 0–100
  passed:     boolean;
  completedAt: Date;
}

// ── ASSIGNMENTS ──────────────────────────────────────

export type AssignmentNumber = 1 | 2 | 3 | 4 | 5;

export interface AssignmentDefinition {
  number:     AssignmentNumber;
  titleHe:    string;
  descriptionHe: string;
  promptHe:   string;
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  durationMin: number;
  type:       'text' | 'file' | 'prompt-output' | 'reflection';
}

export interface AssignmentSubmission {
  moduleId:         string;
  userId:           string;
  assignmentNumber: AssignmentNumber;
  content:          string;
  submittedAt:      Date;
}
