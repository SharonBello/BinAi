// M01ReverseEng — 00:45–70 | בלש הפרומפטים (Reverse Engineering)
import React, { useState } from 'react';
import AssignmentBlock from '@/components/common/AssignmentBlock/AssignmentBlock';
import { m01Assignments } from '../data/assignments';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const GOOD_RESPONSE = `כמורה לתנ"ך לכיתה ז', הנה 3 פעילויות מומלצות לנושא "יציאת מצרים":

1. 🗺️ מסע פיזיקלי של העם — תלמידים מציירים את מסלול המסע על מפה ומוסיפים 5 אירועים משמעותיים עם ציטוטים מהטקסט.

2. 🎭 בית משפט לפרעה — משחק תפקידים: מי היה אחראי למכות? תלמידים מייצגים עמדות שונות.

3. 📰 עיתון "חדשות מצרים" — תלמידים כותבים כתבה בנקודת מבט מצרית על יציאת בני ישראל.

לכל פעילות: 40 דקות, עבודה בקבוצות של 4, כולל שאלות דיון.`;

const BAD_RESPONSE = `כמובן! הנה פעילויות ליציאת מצרים:
- קריאה בטקסט
- כתיבת סיכום
- שאלות הבנה
- מבחן בסוף

זה יכסה את כל הנושא ביעילות.`;

const ORIGINAL_GOOD_PROMPT = `אתה מורה לתנ"ך מנוסה לכיתות ביניים.
אני מלמד/ת כיתה ז' את נושא יציאת מצרים.
צור 3 פעילויות לימודיות יצירתיות ומעניינות של 40 דקות כל אחת.
לכל פעילות: שם קצר, תיאור, אופן ביצוע, שאלות דיון.`;

const ORIGINAL_BAD_PROMPT = `תן לי פעילויות ליציאת מצרים`;

const M01ReverseEng: React.FC<Props> = ({ onNext, accentColor }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState('');

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 00:45 – 01:10</span>
        <h2 className={styles.sectionTitle}>🔍 בלש הפרומפטים</h2>
      </div>

      <div className={styles.detectiveBox}>
        <p className={styles.detectiveIntro}>
          לפניכם שתי תשובות AI לאותו נושא — <strong>יציאת מצרים לכיתה ז'</strong>.
          תשובה אחת מצוינת. השנייה — עגומה.
          <br /><strong>משימה:</strong> מה היה הפרומפט שיצר כל אחת?
        </p>
      </div>

      {/* Side by side comparison */}
      <div className={styles.compareGrid}>
        <div className={styles.compareCard}>
          <div className={styles.compareLabel} style={{ background: '#1D9E75' }}>
            ✅ תשובה טובה
          </div>
          <pre className={styles.compareText}>{GOOD_RESPONSE}</pre>
        </div>
        <div className={styles.compareCard}>
          <div className={styles.compareLabel} style={{ background: '#E24B4A' }}>
            ❌ תשובה גרועה
          </div>
          <pre className={styles.compareText}>{BAD_RESPONSE}</pre>
        </div>
      </div>

      {/* Assignment 2 */}
      <AssignmentBlock
        {...m01Assignments[1]}
        accentColor={accentColor}
        onSave={(v) => setGuess(v)}
      />

      {/* Reveal button */}
      {!showAnswer ? (
        <button
          className={styles.revealBtn}
          style={{ borderColor: accentColor, color: accentColor }}
          onClick={() => setShowAnswer(true)}
        >
          🎉 גלו את הפרומפטים המקוריים
        </button>
      ) : (
        <div className={styles.revealSection}>
          <h4 className={styles.revealTitle}>הפרומפטים המקוריים:</h4>
          <div className={styles.compareGrid}>
            <div>
              <p className={styles.revealLabel} style={{ color: '#1D9E75' }}>✅ הפרומפט שיצר את התשובה הטובה:</p>
              <pre className={styles.revealPrompt}>{ORIGINAL_GOOD_PROMPT}</pre>
              <p className={styles.revealNote}>שימו לב: תפקיד + קהל + משימה מפורטת + פורמט = 4 החלקים!</p>
            </div>
            <div>
              <p className={styles.revealLabel} style={{ color: '#E24B4A' }}>❌ הפרומפט שיצר את התשובה הגרועה:</p>
              <pre className={styles.revealPrompt}>{ORIGINAL_BAD_PROMPT}</pre>
              <p className={styles.revealNote}>פרומפט קצר ללא הקשר = תשובה גנרית וחסרת ערך.</p>
            </div>
          </div>
          <div className={styles.revelInsight} style={{ borderColor: accentColor }}>
            <strong>💡 התובנה:</strong> ההבדל בין שתי התשובות הוא לא ה-AI — הוא הפרומפט. אותו AI, תוצאות שונות לחלוטין.
          </div>
        </div>
      )}

      <button className={styles.nextBtn} style={{ background: accentColor }} onClick={onNext}>
        ☕ הפסקה ←
      </button>
    </div>
  );
};

export default M01ReverseEng;
