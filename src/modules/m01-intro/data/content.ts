// ═══════════════════════════════════════════════════════
// Module 01 — Content Data (Hebrew)
// ═══════════════════════════════════════════════════════

export const M01_MYTHS = [
  {
    id: 'myth1',
    claim: 'AI חכם יותר מבני אדם',
    verdict: 'מיתוס',
    isMyth: true,
    explanation: 'AI מנבא מילים על סמך תבניות. הוא לא מבין, לא חושב, ולא מרגיש. הוא מצטיין בתבניות — לא בשיפוט.',
  },
  {
    id: 'myth2',
    claim: 'AI יחליף מורים',
    verdict: 'מיתוס',
    isMyth: true,
    explanation: 'AI יכול לייצר חומרים אבל לא יכול לראות תלמיד בוכה, להרגיש מה שקורה בכיתה, או לקבל החלטה פדגוגית בזמן אמת.',
  },
  {
    id: 'myth3',
    claim: 'AI יכול לטעות ולהמציא עובדות',
    verdict: 'עובדה',
    isMyth: false,
    explanation: 'תופעת ה"הזיות" (Hallucinations) — AI מייצר תשובות שנשמעות אמינות אבל שגויות. תמיד בדקו מידע חשוב.',
  },
  {
    id: 'myth4',
    claim: 'AI לומד מהשיחות שלנו',
    verdict: 'תלוי',
    isMyth: false,
    explanation: 'ChatGPT חינמי — כן. ChatGPT Team/Enterprise — לא. Gemini — אפשר לכבות. Claude — לא. חשוב לבדוק הגדרות!',
  },
  {
    id: 'myth5',
    claim: 'AI מבין את מה שהוא כותב',
    verdict: 'מיתוס',
    isMyth: true,
    explanation: 'AI מנבא: "אחרי המילה הזאת, מה הסיכוי שתבוא המילה הבאה?" — זה הכל. אין הבנה, אין כוונה, אין מודעות.',
  },
  {
    id: 'myth6',
    claim: 'כדי להשתמש ב-AI צריך לדעת לתכנת',
    verdict: 'מיתוס',
    isMyth: true,
    explanation: 'הממשק הוא שיחה בשפה טבעית — עברית מעולה. אם אתם יכולים לשלוח WhatsApp, אתם יכולים להשתמש ב-AI.',
  },
];

export const M01_TOOLS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    maker: 'OpenAI',
    color: '#10A37F',
    emoji: '🟢',
    bestFor: 'כתיבה מובנית, פורמטים ברורים, ניסוח',
    weakness: 'לפעמים verbose מדי',
    hebrewLevel: 'מעולה',
    price: 'חינמי (GPT-4 בתשלום)',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    maker: 'Google',
    color: '#1A73E8',
    emoji: '🔵',
    bestFor: 'כניסה עם Gmail, אינטגרציה עם Google Docs',
    weakness: 'לפעמים פחות עמוק מ-GPT',
    hebrewLevel: 'מצוין',
    price: 'חינמי',
  },
  {
    id: 'claude',
    name: 'Claude',
    maker: 'Anthropic',
    color: '#C8954A',
    emoji: '🟡',
    bestFor: 'נושאים רגישים, הוראות ארוכות, CBT',
    weakness: 'פחות מוכר בישראל',
    hebrewLevel: 'טוב מאוד',
    price: 'חינמי',
  },
  {
    id: 'copilot',
    name: 'Copilot',
    maker: 'Microsoft',
    color: '#5B4A8C',
    emoji: '🟣',
    bestFor: 'Word, Outlook, Teams — ישירות',
    weakness: 'דורש Microsoft 365',
    hebrewLevel: 'טוב',
    price: 'עם רישיון Microsoft',
  },
];

export const M01_CHEF_ANALOGY = {
  title: 'אנלוגיית השף',
  hook: 'דמיינו שף שקרא מיליון מתכונים...',
  steps: [
    { icon: '📚', text: 'קרא מיליארדי משפטים מהאינטרנט' },
    { icon: '🧠', text: 'למד אילו מילים מגיעות אחרי אילו מילים' },
    { icon: '🎯', text: 'כשאתם שואלים — הוא מנבא: מה הסיכוי הכי גבוה למילה הבאה?' },
    { icon: '🔄', text: 'חוזר על זה מילה מילה עד שיש תשובה' },
  ],
  punchline: 'הוא לא מבין. הוא מנבא. ולפעמים — הוא מאוד מדויק.',
};

export const M01_LIMITS = [
  {
    icon: '🔒',
    title: 'פרטיות תלמידים',
    rule: 'אל תכניסו שמות, ת.ז., או מידע רגיש של תלמידים',
    tip: 'השתמשו בתיאורים כלליים: "תלמיד כיתה ו\' עם קשיי קשב"',
    color: '#C42B5F',
  },
  {
    icon: '⚠️',
    title: 'דיוק ועובדות',
    rule: 'AI יכול להמציא עובדות שנשמעות אמינות',
    tip: 'בדקו תמיד: תאריכים, שמות, סטטיסטיקות, ציטוטים',
    color: '#B84A1E',
  },
  {
    icon: '©️',
    title: 'זכויות יוצרים',
    rule: 'תוצר AI אינו בהכרח פטור מזכויות יוצרים',
    tip: 'חומרי לימוד שיצרתם עם AI — אתם אחראים לתוכן',
    color: '#1F4B9F',
  },
  {
    icon: '🎓',
    title: 'שיפוט מקצועי',
    rule: 'AI אינו מחליף את השיפוט שלכם',
    tip: 'AI מייצר → אתם בוחרים ← ביחד יוצרים כלי טוב יותר',
    color: '#1B7A89',
  },
];

export const M01_FIRST_PROMPT_TEMPLATE = `שלום! אני מורה ל[מקצוע] בכיתה [גיל].
אני רוצה להבין מה אתה יכול לעשות בשבילי.
תן לי 5 דוגמאות ספציפיות לאיך תוכל לעזור לי בעבודה שלי כמורה.`;

export const M01_IMPROVED_PROMPT_TEMPLATE = `אתה עוזר פדגוגי מנוסה למורים ישראלים.
אני מורה ל[מקצוע] בכיתה [גיל], ב[רמת בית הספר].
הנושא שאנחנו לומדים עכשיו: [נושא].
תן לי 3 רעיונות ספציפיים לפעילות לימודית של 45 דקות.
לכל פעילות: שם + תיאור + כיצד לבצע.`;
