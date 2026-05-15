// BinAI — Module Types
export type ModuleCluster   = 'foundation' | 'pedagogical' | 'thinking' | 'sel';
export type ModuleVisualStyle =
  'tech' | 'botanical' | 'academic' | 'community' | 'creative' |
  'reflective' | 'connective' | 'zonal' | 'growth' | 'circular';

export interface ModuleColors {
  primary:    string;
  accent:     string;
  bg:         string;
  surface:    string;
  text:       string;
  textMuted:  string;
  overlay:    string;  // photo overlay gradient color
}

export interface ModuleSection {
  id:       string;
  titleHe:  string;
  startMin: number;
  endMin:   number;
  type:     'opening'|'theory'|'reverseEng'|'break'|'practice'|'shared'|'quiz'|'closing';
}

export interface ModuleConfig {
  id:               string;
  number:           number;
  titleHe:          string;
  subtitleHe:       string;
  cluster:          ModuleCluster;
  colors:           ModuleColors;
  visualStyle:      ModuleVisualStyle;
  iconName:         string;
  durationHours:    number;
  tagsHe:           string[];
  openingQuestionHe: string;
  artifactNameHe:   string;
  imageUrl:         string;  // path to module photo
  sections:         ModuleSection[];
  isAvailable:      boolean;
}
