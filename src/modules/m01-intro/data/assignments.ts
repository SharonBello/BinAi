import type { AssignmentDefinition } from '@/types/quiz.types';

export const m01Assignments: AssignmentDefinition[] = [
  {
    number: 1,
    title: 'מה אני יודע/ת',
    description: 'לפני שמתחילים — רגע של כנות עם עצמנו',
    prompt: 'ענו על שלושת המשפטים האלה בכנות:\n• אני יודע/ת ש-AI...\n• אני תוהה לגבי...\n• אני מעט חושש/ת מ...',
    bloomLevel: 1, durationMin: 8, type: 'text',
  },
  {
    number: 2,
    title: 'בלש הפרומפטים',
    description: 'הנדסה לאחור — מה הפרומפט שיצר את התשובה הזאת?',
    prompt: 'קיבלתם שתי תשובות AI על אותו נושא — אחת טובה, אחת גרועה.\nכתבו: מה לדעתכם היה הפרומפט שיצר כל אחת?\nשימו לב: לתפקיד, לרקע, למשימה, לפורמט.',
    bloomLevel: 4, durationMin: 20, type: 'text',
  },
  {
    number: 3,
    title: 'הפרומפט הראשון שלי',
    description: 'הניסיון הראשון שלכם — שמרו אותו!',
    prompt: 'כתבו פרומפט ל-AI בנושא שאתם מלמדים עכשיו.\nהדביקו גם את תשובת ה-AI.\nמה עבד טוב? מה תשפרו?',
    bloomLevel: 6, durationMin: 25, type: 'prompt-output',
  },
  {
    number: 4,
    title: 'משוב לעמית',
    description: 'קראו את הפרומפט של שותף/ה ותנו משוב קצר: 3 דברים שעבדו טוב + 1 הצעה לשיפור',
    prompt: 'קראו את הפרומפט של שותף/ה.\nכתבו:\n⭐ שלושה דברים שעבדו טוב\n🌱 דבר אחד שאפשר לשפר ואיך',
    bloomLevel: 5, durationMin: 10, type: 'text',
  },
  {
    number: 5,
    title: 'ביום שלישי בבוקר...',
    description: 'תכנית יישום ספציפית — לא "יום אחד"',
    prompt: 'השלימו את המשפט:\n"ביום _____, בשיעור _____, עם כיתה _____,\nאשתמש ב-AI כדי _____ על ידי _____."',
    bloomLevel: 3, durationMin: 7, type: 'reflection',
  },
];