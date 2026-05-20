// BinAI — Module Configs
// Images use public/ paths (strings) — no import errors if files missing.
import type { ModuleConfig } from '@/types/module.types';

const img = (name: string) => `/images/modules/${name}.png`;

export const m01Config: ModuleConfig = {
  id:'m01', number:1,
  titleHe:'מהו AI?', subtitleHe:'הבסיס לכל מה שאחריו',
  cluster:'foundation',
  colors:{ primary:'#8B1FAF', accent:'#DE00A5', bg:'#F9F0FF', surface:'#EDD9FF', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(139,31,175,0.55)' },
  visualStyle:'tech', iconName:'TbBrain', durationHours:3,
  tagsHe:['יסודות','בינה מלאכותית','פרומפטים','כלים'],
  openingQuestionHe:'מה הדבר הכי מדהים שחשבת שAI יכול לעשות — שהתברר שהוא לא יכול?',
  artifactNameHe:'מדיניות AI אישית',
  imageUrl: img('m01'), isAvailable:true,
  sections:[
    {id:'opening',  titleHe:'פתיחה',           startMin:0,   endMin:15,  type:'opening'},
    {id:'theory',   titleHe:'תיאוריה',         startMin:15,  endMin:45,  type:'theory'},
    {id:'reverse',  titleHe:'בלש הפרומפטים',  startMin:45,  endMin:70,  type:'reverseEng'},
    {id:'break',    titleHe:'הפסקה',           startMin:70,  endMin:85,  type:'break'},
    {id:'practice', titleHe:'תרגול מודרך',     startMin:85,  endMin:115, type:'practice'},
    {id:'shared',   titleHe:'פרויקט משותף',    startMin:115, endMin:145, type:'shared'},
    {id:'quiz',     titleHe:'בחינון',           startMin:145, endMin:165, type:'quiz'},
    {id:'closing',  titleHe:'סיכום ותיק עבודות',startMin:165, endMin:180, type:'closing'},
  ],
};

export const m02Config: ModuleConfig = {
  id:'m02', number:2,
  titleHe:'כרטיסי שיחה CBT', subtitleHe:'AI ליצירת כלי תמיכה רגשית',
  cluster:'pedagogical',
  colors:{ primary:'#9F1C81', accent:'#DE00A5', bg:'#FFF0FA', surface:'#FFD6F5', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(159,28,129,0.55)' },
  visualStyle:'botanical', iconName:'TbLeaf', durationHours:3,
  tagsHe:['CBT','כרטיסי שיחה','תמיכה רגשית','פרומפטים'],
  openingQuestionHe:'ספר על שיחה עם תלמיד שהיית רוצה שהייתה מתנהלת אחרת',
  artifactNameHe:'6 כרטיסי שיחה CBT מותאמים אישית',
  imageUrl: img('m02'), isAvailable:true,
  sections:[
    {id:'opening',  titleHe:'פתיחה',          startMin:0,   endMin:15,  type:'opening'},
    {id:'theory',   titleHe:'מהו CBT?',       startMin:15,  endMin:45,  type:'theory'},
    {id:'reverse',  titleHe:'בלש הפרומפטים', startMin:45,  endMin:70,  type:'reverseEng'},
    {id:'break',    titleHe:'הפסקה',          startMin:70,  endMin:85,  type:'break'},
    {id:'practice', titleHe:'יצירת הכרטיסים',startMin:85,  endMin:115, type:'practice'},
    {id:'shared',   titleHe:'מאגר כרטיסים',  startMin:115, endMin:145, type:'shared'},
    {id:'quiz',     titleHe:'בחינון',          startMin:145, endMin:165, type:'quiz'},
    {id:'closing',  titleHe:'סיכום',           startMin:165, endMin:180, type:'closing'},
  ],
};

export const m03Config: ModuleConfig = {
  id:'m03', number:3, titleHe:'חומרי לימוד לתחום הדעת', subtitleHe:'AI לכל מקצוע, כל גיל, כל נושא',
  cluster:'pedagogical',
  colors:{ primary:'#185FA5', accent:'#EF9F27', bg:'#EEF5FF', surface:'#D5E8FF', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(24,95,165,0.52)' },
  visualStyle:'academic', iconName:'TbBooks', durationHours:3,
  tagsHe:['חומרי לימוד','דפי עבודה','דיפרנציאציה'],
  openingQuestionHe:'מה הכי גוזל לך זמן בהכנת חומרים לתלמידים?',
  artifactNameHe:'חבילת חומרים מותאמת',
  imageUrl: img('m03'), isAvailable:true,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m04Config: ModuleConfig = {
  id:'m04', number:4, titleHe:'שיעורי חינוך', subtitleHe:'AI לבניית שיעורי ערכים',
  cluster:'pedagogical',
  colors:{ primary:'#C42B5F', accent:'#DE00A5', bg:'#FFF0F5', surface:'#FFD6E5', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(196,43,95,0.55)' },
  visualStyle:'community', iconName:'TbUsersGroup', durationHours:3,
  tagsHe:['שיעורי חינוך','ערכים','דילמות'],
  openingQuestionHe:'מה הנושא שהכי קשה לך לבנות עליו שיעור חינוך מעניין?',
  artifactNameHe:'תכנית שיעור חינוך מלאה',
  imageUrl: img('m04'), isAvailable:true,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m05Config: ModuleConfig = {
  id:'m05', number:5, titleHe:'חשיבה יצירתית', subtitleHe:'AI כשותף לחשיבה מחוץ לקופסא',
  cluster:'thinking',
  colors:{ primary:'#534AB7', accent:'#DE00A5', bg:'#F5F3FF', surface:'#E8E5FF', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(83,74,183,0.52)' },
  visualStyle:'creative', iconName:'TbSparkles', durationHours:3,
  tagsHe:['חשיבה יצירתית','Design Thinking','SCAMPER'],
  openingQuestionHe:'אם יכולת להמציא משהו בלי מגבלות — מה הוא היה?',
  artifactNameHe:'ערכת חשיבה יצירתית לכיתה שלי',
  imageUrl: img('m05'), isAvailable:true,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m06Config: ModuleConfig = {
  id:'m06', number:6, titleHe:'מטא-קוגניציה', subtitleHe:'AI לפיתוח מודעות לחשיבה עצמית',
  cluster:'thinking',
  colors:{ primary:'#1F4B9F', accent:'#6B4FDE', bg:'#F0F3FF', surface:'#D5DEFF', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(31,75,159,0.58)' },
  visualStyle:'reflective', iconName:'TbBrainCircuit', durationHours:3,
  tagsHe:['מטא-קוגניציה','רפלקציה','KWL'],
  openingQuestionHe:'מתי בפעם האחרונה עצרת לחשוב — איך אני חושב על זה?',
  artifactNameHe:'ערכת כלי מטא-קוגניציה לכיתה',
  imageUrl: img('m06'), isAvailable:true,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m07Config: ModuleConfig = {
  id:'m07', number:7, titleHe:'תקשורת מקרבת', subtitleHe:'NVC — AI לשיחות מחברות',
  cluster:'sel',
  colors:{ primary:'#C44B6A', accent:'#DE00A5', bg:'#FFF0F3', surface:'#FFD5DE', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(196,75,106,0.50)' },
  visualStyle:'connective', iconName:'TbHeartHandshake', durationHours:3,
  tagsHe:['NVC','תקשורת מקרבת','שיחה'],
  openingQuestionHe:'ספר על אי-הבנה עם תלמיד שחשבת "איך הגענו לזה?"',
  artifactNameHe:'ערכת כרטיסי NVC',
  imageUrl: img('m07'), isAvailable:true,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m08Config: ModuleConfig = {
  id:'m08', number:8, titleHe:'אזורי ויסות', subtitleHe:'AI לערכת ויסות רגשי לכיתה',
  cluster:'sel',
  colors:{ primary:'#1B7A89', accent:'#00A5B8', bg:'#F0FAFB', surface:'#C8EEFF', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(27,122,137,0.55)' },
  visualStyle:'zonal', iconName:'TbColorPicker', durationHours:3,
  tagsHe:['אזורי ויסות','ויסות רגשי','SEL'],
  openingQuestionHe:'איפה אתה/ת ב"אזורים" כרגע? ולמה?',
  artifactNameHe:'ערכת ויסות לכיתה',
  imageUrl: img('m08'), isAvailable:false,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m09Config: ModuleConfig = {
  id:'m09', number:9, titleHe:'מנטליות צמיחה', subtitleHe:'AI לשפת עידוד וצמיחה',
  cluster:'sel',
  colors:{ primary:'#8A6B1F', accent:'#C49A00', bg:'#FFFBF0', surface:'#FFEFC0', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(138,107,31,0.52)' },
  visualStyle:'growth', iconName:'TbPlant', durationHours:3,
  tagsHe:['מנטליות צמיחה','קרול דווק','עדיין'],
  openingQuestionHe:'מה האמירה שאמרת לתלמיד שאתה/ת הכי מרוצה ממנה?',
  artifactNameHe:'12 כרטיסי "שפת הצמיחה"',
  imageUrl: img('m09'), isAvailable:false,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const m10Config: ModuleConfig = {
  id:'m10', number:10, titleHe:'שיחות משקמות', subtitleHe:'AI לשאלות עיגול ותרגול שיחה',
  cluster:'sel',
  colors:{ primary:'#7A1F1F', accent:'#DE00A5', bg:'#FFF5F5', surface:'#FFD5D5', text:'#1E2430', textMuted:'#4B5563', overlay:'rgba(122,31,31,0.60)' },
  visualStyle:'circular', iconName:'TbCircles', durationHours:3,
  tagsHe:['שיחות משקמות','עיגול שיחה','Restorative'],
  openingQuestionHe:'ספר על קונפליקט בכיתה שנפתר בצורה שהפתיעה אותך',
  artifactNameHe:'ערכת שיחות משקמות',
  imageUrl: img('m10'), isAvailable:false,
  sections:[{id:'opening',titleHe:'פתיחה',startMin:0,endMin:15,type:'opening'},{id:'theory',titleHe:'תיאוריה',startMin:15,endMin:45,type:'theory'},{id:'reverse',titleHe:'בלש הפרומפטים',startMin:45,endMin:70,type:'reverseEng'},{id:'break',titleHe:'הפסקה',startMin:70,endMin:85,type:'break'},{id:'practice',titleHe:'תרגול',startMin:85,endMin:115,type:'practice'},{id:'shared',titleHe:'שיתוף',startMin:115,endMin:145,type:'shared'},{id:'quiz',titleHe:'בחינון',startMin:145,endMin:165,type:'quiz'},{id:'closing',titleHe:'סיכום',startMin:165,endMin:180,type:'closing'}],
};

export const ALL_MODULES: ModuleConfig[] = [
  m01Config, m02Config, m03Config, m04Config, m05Config,
  m06Config, m07Config, m08Config, m09Config, m10Config,
];

export const CLUSTERS = {
  foundation:  { titleHe:'יסודות',              color:'#8B1FAF' },
  pedagogical: { titleHe:'כלים פדגוגיים',        color:'#B84A1E' },
  thinking:    { titleHe:'חשיבה',                color:'#5C1FAF' },
  sel:         { titleHe:'למידה חברתית-רגשית',  color:'#C42B5F' },
};
