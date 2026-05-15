// ═══════════════════════════════════════════════════════
// BinAI — Module Types
// ═══════════════════════════════════════════════════════

export type ModuleCluster =
  | 'foundation'
  | 'pedagogical'
  | 'thinking'
  | 'sel';

export type ModuleVisualStyle =
  | 'tech'        // m01 — circuit, grid, precision
  | 'botanical'   // m02 — organic, leaves, warm
  | 'academic'    // m03 — books, papers, blue
  | 'community'   // m04 — warm, circle, earth
  | 'creative'    // m05 — colorful, waves, rounded
  | 'reflective'  // m06 — minimal, inner, deep
  | 'connective'  // m07 — lines, hearts, rose
  | 'zonal'       // m08 — color blocks, bold
  | 'growth'      // m09 — plants, amber, upward
  | 'circular';   // m10 — circles, blue-green

export interface ModuleColors {
  primary:    string;
  accent:     string;
  bg:         string;
  surface:    string;
  text:       string;
  textMuted:  string;
}

export interface ModuleSection {
  id:         string;
  titleHe:    string;
  startMin:   number;
  endMin:     number;
  type:       'opening' | 'theory' | 'reverseEng' | 'break' | 'practice' | 'shared' | 'quiz' | 'closing';
}

export interface ModuleConfig {
  id:           string;      // 'm01', 'm02' …
  number:       number;
  titleHe:      string;
  subtitleHe:   string;
  cluster:      ModuleCluster;
  colors:       ModuleColors;
  visualStyle:  ModuleVisualStyle;
  iconName:     string;      // React Icons name
  durationHours: number;
  tagsHe:       string[];
  openingQuestionHe: string;
  artifactNameHe:    string;
  sections:     ModuleSection[];
  isAvailable:  boolean;
}
