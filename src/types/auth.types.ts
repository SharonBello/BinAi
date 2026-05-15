// ═══════════════════════════════════════════════════════
// BinAI — Auth & Progress Types
// ═══════════════════════════════════════════════════════

export interface BinAIUser {
  uid:          string;
  email:        string;
  displayName:  string;
  photoURL?:    string;
  createdAt:    Date;
  role:         'teacher' | 'facilitator' | 'admin';
  school?:      string;
}

export interface ModuleProgress {
  moduleId:           string;
  userId:             string;
  status:             'not-started' | 'in-progress' | 'completed';
  currentSection:     string;
  completedSections:  string[];
  quizScore?:         number;
  quizPassed?:        boolean;
  assignments:        Record<string, boolean>;  // assignmentNumber → completed
  startedAt?:         Date;
  completedAt?:       Date;
  lastVisitedAt:      Date;
}

export interface CourseProgress {
  userId:           string;
  completedModules: string[];
  totalScore:       number;    // average quiz score across completed modules
  certificateEarned: boolean;
  updatedAt:        Date;
}
