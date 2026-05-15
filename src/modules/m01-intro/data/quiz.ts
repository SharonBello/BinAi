import type { QuizData } from '@/types/quiz.types';

export const m01Quiz: QuizData = {
  moduleId: 'm01',
  passingScore: 70,
  questions: [
    {
      id: 'q1',
      textHe: 'מה ראשי התיבות של LLM?',
      options: [
        { id: 'a', textHe: 'Large Language Model' },
        { id: 'b', textHe: 'Learning Logic Machine' },
        { id: 'c', textHe: 'Linguistic Learning Method' },
        { id: 'd', textHe: 'Large Learning Module' },
      ],
      correctId: 'a',
      explanationHe: 'LLM = Large Language Model — מודל שפה גדול. זה הבסיס של ChatGPT, Claude, Gemini ועוד.',
    },
    {
      id: 'q2',
      textHe: 'מה אנלוגיית ה"שף" מסבירה?',
      options: [
        { id: 'a', textHe: 'AI מבשל מידע כמו שף מבשל אוכל' },
        { id: 'b', textHe: 'AI לומד מדוגמאות ומנבא את הטקסט הבא' },
        { id: 'c', textHe: 'AI יוצר מתכונים חדשים לגמרי' },
        { id: 'd', textHe: 'AI זוכר כל מה שלמד' },
      ],
      correctId: 'b',
      explanationHe: 'כמו שף שקרא מיליון מתכונים ויכול לנבא מה מגיע הבא, AI למד מדפוסי שפה ומנבא מילה אחר מילה.',
    },
    {
      id: 'q3',
      textHe: 'מה "הזיות" (Hallucinations) ב-AI?',
      options: [
        { id: 'a', textHe: 'AI חולם בזמן שמשתמשים בו' },
        { id: 'b', textHe: 'שגיאות ויזואליות בתמונות' },
        { id: 'c', textHe: 'AI יוצר מידע שגוי שנשמע אמין' },
        { id: 'd', textHe: 'תגובות שאינן בעברית' },
      ],
      correctId: 'c',
      explanationHe: 'AI יכול "להמציא" עובדות, תאריכים, שמות ומחקרים שנשמעים אמינים לחלוטין — אבל הם פשוט לא נכונים.',
    },
    {
      id: 'q4',
      textHe: 'איזה כלי AI מתאים ביותר למי שעובד עם Microsoft Office?',
      options: [
        { id: 'a', textHe: 'ChatGPT' },
        { id: 'b', textHe: 'Gemini' },
        { id: 'c', textHe: 'Copilot' },
        { id: 'd', textHe: 'Claude' },
      ],
      correctId: 'c',
      explanationHe: 'Microsoft Copilot משולב ב-Word, Outlook ו-Teams. אם בית הספר שלכם עם Microsoft 365 — זה הכלי הנוח ביותר.',
    },
    {
      id: 'q5',
      textHe: 'מה הפרט שחשוב להימנע ממנו כשמשתמשים ב-AI לעבודה עם תלמידים?',
      options: [
        { id: 'a', textHe: 'לכתוב בעברית' },
        { id: 'b', textHe: 'להכניס שמות ותזי תלמידים' },
        { id: 'c', textHe: 'לבקש יותר מהוראה אחת' },
        { id: 'd', textHe: 'להשתמש בשאלות פתוחות' },
      ],
      correctId: 'b',
      explanationHe: 'פרטיות תלמידים היא קו אדום. אל תכניסו שמות, ת.ז. או מידע רגיש לאף מערכת AI.',
    },
    {
      id: 'q6',
      textHe: 'האם צריך לדעת לתכנת כדי להשתמש ב-AI לצרכי הוראה?',
      options: [
        { id: 'a', textHe: 'כן — צריך ידע בסיסי בפייתון' },
        { id: 'b', textHe: 'לא — הממשק הוא שיחה בשפה טבעית' },
        { id: 'c', textHe: 'רק לכלים מתקדמים כמו Claude' },
        { id: 'd', textHe: 'כן — לפחות להבין JSON' },
      ],
      correctId: 'b',
      explanationHe: 'הממשק של כל הכלים הפופולריים הוא שיחה בשפה טבעית — עברית מעולה. אם אתם יכולים לשלוח WhatsApp, אתם יכולים להשתמש ב-AI.',
    },
    {
      id: 'q7',
      textHe: 'מה ההבדל בין ChatGPT החינמי לזה בתשלום בנוגע ללמידה משיחות?',
      options: [
        { id: 'a', textHe: 'שניהם לומדים מהשיחות' },
        { id: 'b', textHe: 'החינמי לומד, בתשלום לא' },
        { id: 'c', textHe: 'שניהם לא לומדים' },
        { id: 'd', textHe: 'אין הבדל' },
      ],
      correctId: 'b',
      explanationHe: 'ChatGPT החינמי משתמש בשיחות לאימון. ChatGPT Team/Enterprise לא עושה זאת — חשוב לדעת לפני שמכניסים מידע רגיש.',
    },
    {
      id: 'q8',
      textHe: 'איזה AI ידוע כמתאים ביותר לנושאים רגישים רגשית (כמו CBT)?',
      options: [
        { id: 'a', textHe: 'ChatGPT' },
        { id: 'b', textHe: 'Copilot' },
        { id: 'c', textHe: 'Gemini' },
        { id: 'd', textHe: 'Claude' },
      ],
      correctId: 'd',
      explanationHe: 'Claude (של Anthropic) ידוע בגישה עדינה ורגישה לנושאים מורכבים רגשית ופחות נוטה לתוצאות לא הולמות.',
    },
    {
      id: 'q9',
      textHe: 'AI "מבין" את מה שהוא כותב — נכון או לא נכון?',
      options: [
        { id: 'a', textHe: 'נכון — הוא מעבד משמעות' },
        { id: 'b', textHe: 'לא נכון — הוא מנבא תבניות' },
        { id: 'c', textHe: 'תלוי בגרסה' },
        { id: 'd', textHe: 'תלוי בשפה' },
      ],
      correctId: 'b',
      explanationHe: 'AI מנבא את המילה הבאה על סמך תבניות סטטיסטיות. אין הבנה, מודעות, או כוונה — רק חיזוי מתוחכם מאוד.',
    },
    {
      id: 'q10',
      textHe: 'מה המשמעות של "AI מייצר ← אתם בוחרים ← ביחד יוצרים"?',
      options: [
        { id: 'a', textHe: 'AI עושה הכל ואנחנו רק בודקים' },
        { id: 'b', textHe: 'אנחנו עושים הכל ו-AI רק מציע' },
        { id: 'c', textHe: 'השיפוט המקצועי שלנו חיוני — AI הוא כלי, לא מחליף' },
        { id: 'd', textHe: 'אין צורך ב-AI בכלל' },
      ],
      correctId: 'c',
      explanationHe: 'AI מייצר חומר גולמי, אתם מביאים את השיפוט המקצועי. ביחד יוצרים תוצאה טובה יותר מכל אחד לבד.',
    },
  ],
};
