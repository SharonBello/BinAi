// M01Closing — 02:45–03:00 | סיכום + תיק עבודות
import React from 'react';
import AssignmentBlock from '@/components/common/AssignmentBlock/AssignmentBlock';
import { m01Assignments } from '../data/assignments';
import styles from '../m01.module.scss';

interface Props { accentColor: string; moduleNumber: number; }

const ARTIFACT_PROMPTS = [
  'אשתמש ב-AI לצרכי הוראה — לא אתן לו לקבל החלטות במקומי.',
  'לא אכניס שמות, ת.ז. או מידע רגיש של תלמידים.',
  'אבדוק תמיד עובדות, תאריכים וציטוטים שAI מייצר.',
  'אספר לתלמידים שאני משתמש/ת ב-AI ואלמד אותם לחשוב ביקורתית.',
  'ביום _____, עם כיתה _____, אשתמש ב-AI כדי _____.',
];

const M01Closing: React.FC<Props> = ({ accentColor, moduleNumber }) => (
  <div className={styles.section} dir="rtl">
    <div className={styles.sectionHeader}>
      <span className={styles.timer}>⏱ 02:45 – 03:00</span>
      <h2 className={styles.sectionTitle}>סיכום + תיק עבודות</h2>
    </div>

    {/* Summary */}
    <div className={styles.summaryBox} style={{ borderColor: accentColor }}>
      <h3 className={styles.summaryTitle}>מה למדנו היום?</h3>
      <div className={styles.summaryGrid}>
        {[
          ['🧠', 'AI הוא LLM — מנבא מילים, לא מבין'],
          ['👨‍🍳', 'כמו שף שקרא מיליון מתכונים — תבניות בלבד'],
          ['🔍', 'הפרומפט הוא הכל — 4 חלקים = תוצאה טובה'],
          ['⚠️', 'פרטיות, דיוק, שיפוט — אתם האחראים'],
          ['🚀', 'כל כלי AI מצוין למשהו שונה — נסו ובחרו'],
        ].map(([icon, text]) => (
          <div key={text as string} className={styles.summaryItem}>
            <span className={styles.summaryIcon}>{icon}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Artifact: AI Policy */}
    <div className={styles.artifactBox}>
      <div className={styles.artifactHeader} style={{ background: accentColor }}>
        <h3 className={styles.artifactTitle}>📋 התוצר שלי: מדיניות AI אישית</h3>
        <span className={styles.artifactSub}>5 משפטים שמגדירים איך אני עובד/ת עם AI</span>
      </div>
      <div className={styles.artifactBody}>
        {ARTIFACT_PROMPTS.map((p, i) => (
          <div key={i} className={styles.artifactRow}>
            <span className={styles.artifactNum} style={{ color: accentColor }}>{i + 1}.</span>
            <input
              className={styles.artifactInput}
              defaultValue={p}
              placeholder={p}
              aria-label={`משפט ${i + 1} של מדיניות ה-AI שלי`}
            />
          </div>
        ))}
        <button
          className={styles.downloadBtn}
          style={{ background: accentColor }}
          onClick={() => window.print()}
        >
          ⬇ הורד מדיניות AI אישית
        </button>
      </div>
    </div>

    {/* Assignment 5 */}
    <AssignmentBlock
      {...m01Assignments[4]}
      accentColor={accentColor}
    />

    {/* Completion */}
    <div className={styles.completionBox}>
      <div className={styles.completionIcon}>🎉</div>
      <h3 className={styles.completionTitle}>סיימתם יחידה {moduleNumber}!</h3>
      <p className={styles.completionSub}>
        5 משימות בתיק העבודות שלכם. יחידה 2 — כרטיסי שיחה CBT — מחכה לכם.
      </p>
    </div>
  </div>
);

export default M01Closing;
