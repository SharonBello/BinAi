// BinAI — All Module Configs
// Each module: its own image, overlay color, and visual identity.
import type { ModuleConfig } from '@/types/module.types';

import m01Img from '@/assets/images/modules/m01.png';
import m02Img from '@/assets/images/modules/m02.png';
import m03Img from '@/assets/images/modules/m03.png';
import m04Img from '@/assets/images/modules/m04.png';
import m05Img from '@/assets/images/modules/m05.png';
import m06Img from '@/assets/images/modules/m06.png';
import m07Img from '@/assets/images/modules/m07.png';
import m08Img from '@/assets/images/modules/m08.png';
import m09Img from '@/assets/images/modules/m09.png';
import m10Img from '@/assets/images/modules/m10.png';

const SECTIONS_DEFAULT = (prefix: string) => [
  { id: 'opening', titleHe: 'פתיחה', startMin: 0, endMin: 15, type: 'opening' as const },
  { id: 'theory', titleHe: 'תיאוריה', startMin: 15, endMin: 45, type: 'theory' as const },
  { id: 'reverse', titleHe: 'בלש הפרומפטים', startMin: 45, endMin: 70, type: 'reverseEng' as const },
  { id: 'break', titleHe: 'הפסקה', startMin: 70, endMin: 85, type: 'break' as const },
  { id: 'practice', titleHe: 'תרגול מודרך', startMin: 85, endMin: 115, type: 'practice' as const },
  { id: 'shared', titleHe: 'פרויקט משותף', startMin: 115, endMin: 145, type: 'shared' as const },
  { id: 'quiz', titleHe: 'בחינת ידע', startMin: 145, endMin: 165, type: 'quiz' as const },
  { id: 'closing', titleHe: 'סיכום ותיק עבודות', startMin: 165, endMin: 180, type: 'closing' as const },
];

export const m01Config: ModuleConfig = {
  id: 'm01', number: 1,
  titleHe: 'מהו AI?', subtitleHe: 'הבסיס לכל מה שאחריו',
  cluster: 'foundation',
  colors: { primary: '#8B1FAF', accent: '#DE00A5', bg: '#F9F0FF', surface: '#EDD9FF', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(139,31,175,0.55)' },
  visualStyle: 'tech', iconName: 'TbBrain', durationHours: 3,
  tagsHe: ['יסודות', 'בינה מלאכותית', 'פרומפטים', 'כלים'],
  openingQuestionHe: 'מה הדבר הכי מדהים שחשבת שAI יכול לעשות — שהתברר שהוא לא יכול?',
  artifactNameHe: 'מדיניות AI אישית',
  imageUrl: m01Img, isAvailable: true,
  sections: SECTIONS_DEFAULT('m01'),
};

export const m02Config: ModuleConfig = {
  id: 'm02', number: 2,
  titleHe: 'כרטיסי שיחה CBT', subtitleHe: 'AI ליצירת כלי תמיכה רגשית',
  cluster: 'pedagogical',
  colors: { primary: '#9F1C81', accent: '#DE00A5', bg: '#FFF0FA', surface: '#FFD6F5', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(159,28,129,0.55)' },
  visualStyle: 'botanical', iconName: 'TbLeaf', durationHours: 3,
  tagsHe: ['CBT', 'כרטיסי שיחה', 'תמיכה רגשית', 'פרומפטים'],
  openingQuestionHe: 'ספר על שיחה עם תלמיד שהיית רוצה שהייתה מתנהלת אחרת',
  artifactNameHe: '6 כרטיסי שיחה CBT מותאמים אישית',
  imageUrl: m02Img, isAvailable: true,
  sections: SECTIONS_DEFAULT('m02'),
};

export const m03Config: ModuleConfig = {
  id: 'm03', number: 3,
  titleHe: 'חומרי לימוד לתחום הדעת', subtitleHe: 'AI לכל מקצוע, כל גיל, כל נושא',
  cluster: 'pedagogical',
  colors: { primary: '#B84A1E', accent: '#DE6600', bg: '#FFF6F0', surface: '#FFE0CE', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(184,74,30,0.52)' },
  visualStyle: 'academic', iconName: 'TbBooks', durationHours: 3,
  tagsHe: ['חומרי לימוד', 'דפי עבודה', 'דיפרנציאציה', 'תחום הדעת'],
  openingQuestionHe: 'מה הכי גוזל לך זמן בהכנת חומרים לתלמידים?',
  artifactNameHe: 'חבילת חומרים מותאמת לנושא ספציפי',
  imageUrl: m03Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m03'),
};

export const m04Config: ModuleConfig = {
  id: 'm04', number: 4,
  titleHe: 'שיעורי חינוך', subtitleHe: 'AI לבניית שיעורי ערכים',
  cluster: 'pedagogical',
  colors: { primary: '#C42B5F', accent: '#DE00A5', bg: '#FFF0F5', surface: '#FFD6E5', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(196,43,95,0.55)' },
  visualStyle: 'community', iconName: 'TbUsersGroup', durationHours: 3,
  tagsHe: ['שיעורי חינוך', 'ערכים', 'דילמות', 'עיגול שיחה'],
  openingQuestionHe: 'מה הנושא שהכי קשה לך לבנות עליו שיעור חינוך מעניין?',
  artifactNameHe: 'תכנית שיעור חינוך מלאה',
  imageUrl: m04Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m04'),
};

export const m05Config: ModuleConfig = {
  id: 'm05', number: 5,
  titleHe: 'חשיבה יצירתית', subtitleHe: 'AI כשותף לחשיבה מחוץ לקופסא',
  cluster: 'thinking',
  colors: { primary: '#5C1FAF', accent: '#DE00A5', bg: '#F5F0FF', surface: '#E5D5FF', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(92,31,175,0.52)' },
  visualStyle: 'creative', iconName: 'TbSparkles', durationHours: 3,
  tagsHe: ['חשיבה יצירתית', 'Design Thinking', 'SCAMPER', 'חדשנות'],
  openingQuestionHe: 'אם יכולת להמציא משהו בלי מגבלות — מה הוא היה?',
  artifactNameHe: 'ערכת חשיבה יצירתית לכיתה שלי',
  imageUrl: m05Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m05'),
};

export const m06Config: ModuleConfig = {
  id: 'm06', number: 6,
  titleHe: 'מטא-קוגניציה', subtitleHe: 'AI לפיתוח מודעות לחשיבה עצמית',
  cluster: 'thinking',
  colors: { primary: '#1F4B9F', accent: '#6B4FDE', bg: '#F0F3FF', surface: '#D5DEFF', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(31,75,159,0.58)' },
  visualStyle: 'reflective', iconName: 'TbBrainCircuit', durationHours: 3,
  tagsHe: ['מטא-קוגניציה', 'רפלקציה', 'יומן חשיבה', 'KWL'],
  openingQuestionHe: 'מתי בפעם האחרונה עצרת לחשוב — איך אני חושב על זה?',
  artifactNameHe: 'ערכת כלי מטא-קוגניציה לכיתה',
  imageUrl: m06Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m06'),
};

export const m07Config: ModuleConfig = {
  id: 'm07', number: 7,
  titleHe: 'תקשורת מקרבת', subtitleHe: 'NVC — AI לשיחות מחברות',
  cluster: 'sel',
  colors: { primary: '#C44B6A', accent: '#DE00A5', bg: '#FFF0F3', surface: '#FFD5DE', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(196,75,106,0.50)' },
  visualStyle: 'connective', iconName: 'TbHeartHandshake', durationHours: 3,
  tagsHe: ['NVC', 'תקשורת מקרבת', 'רוזנברג', 'שיחה', 'SEL'],
  openingQuestionHe: 'ספר על אי-הבנה עם תלמיד שחשבת "איך הגענו לזה?"',
  artifactNameHe: 'ערכת כרטיסי NVC — 4 שלבים',
  imageUrl: m07Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m07'),
};

export const m08Config: ModuleConfig = {
  id: 'm08', number: 8,
  titleHe: 'אזורי ויסות', subtitleHe: 'AI לערכת ויסות רגשי לכיתה',
  cluster: 'sel',
  colors: { primary: '#1B7A89', accent: '#00A5B8', bg: '#F0FAFB', surface: '#C8EEFF', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(27,122,137,0.55)' },
  visualStyle: 'zonal', iconName: 'TbColorPicker', durationHours: 3,
  tagsHe: ['אזורי ויסות', 'ויסות רגשי', 'SEL', 'כלים'],
  openingQuestionHe: 'איפה אתה/ת ב"אזורים" כרגע? ולמה?',
  artifactNameHe: 'ערכת ויסות לכיתה: פוסטר + כרטיסי כלים',
  imageUrl: m08Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m08'),
};

export const m09Config: ModuleConfig = {
  id: 'm09', number: 9,
  titleHe: 'מנטליות צמיחה', subtitleHe: 'AI לשפת עידוד וצמיחה',
  cluster: 'sel',
  colors: { primary: '#8A6B1F', accent: '#C49A00', bg: '#FFFBF0', surface: '#FFEFC0', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(138,107,31,0.52)' },
  visualStyle: 'growth', iconName: 'TbPlant', durationHours: 3,
  tagsHe: ['מנטליות צמיחה', 'קרול דווק', 'משוב', 'עדיין', 'SEL'],
  openingQuestionHe: 'מה האמירה שאמרת לתלמיד שאתה/ת הכי מרוצה ממנה?',
  artifactNameHe: '12 כרטיסי "שפת הצמיחה" לכיתה',
  imageUrl: m09Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m09'),
};

export const m10Config: ModuleConfig = {
  id: 'm10', number: 10,
  titleHe: 'שיחות משקמות', subtitleHe: 'AI לשאלות עיגול ותרגול שיחה',
  cluster: 'sel',
  colors: { primary: '#7A1F1F', accent: '#DE00A5', bg: '#FFF5F5', surface: '#FFD5D5', text: '#1E2430', textMuted: '#4B5563', overlay: 'rgba(122,31,31,0.60)' },
  visualStyle: 'circular', iconName: 'TbCircles', durationHours: 3,
  tagsHe: ['שיחות משקמות', 'עיגול שיחה', 'Restorative', 'SEL'],
  openingQuestionHe: 'ספר על קונפליקט בכיתה שנפתר בצורה שהפתיעה אותך',
  artifactNameHe: 'ערכת שיחות משקמות — שאלות עיגול',
  imageUrl: m10Img, isAvailable: false,
  sections: SECTIONS_DEFAULT('m10'),
};

export const ALL_MODULES: ModuleConfig[] = [
  m01Config, m02Config, m03Config, m04Config, m05Config,
  m06Config, m07Config, m08Config, m09Config, m10Config,
];

export const CLUSTERS = {
  foundation: { titleHe: 'יסודות', color: '#8B1FAF' },
  pedagogical: { titleHe: 'כלים פדגוגיים', color: '#B84A1E' },
  thinking: { titleHe: 'חשיבה', color: '#5C1FAF' },
  sel: { titleHe: 'למידה חברתית-רגשית', color: '#C42B5F' },
};
