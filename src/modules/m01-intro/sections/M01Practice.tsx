// M01Practice — 01:25–55 | תרגול מודרך: הפרומפט הראשון
import React, { useState } from 'react';
import PromptCard from '@/components/common/PromptCard/PromptCard';
import AssignmentBlock from '@/components/common/AssignmentBlock/AssignmentBlock';
import { M01_FIRST_PROMPT_TEMPLATE, M01_IMPROVED_PROMPT_TEMPLATE } from '../data/content';
import { m01Assignments } from '../data/assignments';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const M01Practice: React.FC<Props> = ({ onNext, accentColor }) => {
  const [step, setStep] = useState<1|2|3>(1);

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 01:25 – 01:55</span>
        <h2 className={styles.sectionTitle}>תרגול מודרך — הפרומפט הראשון שלכם</h2>
      </div>

      {/* Step navigation */}
      <div className={styles.stepNav}>
        {([1,2,3] as const).map(n => (
          <button
            key={n}
            className={[styles.stepBtn, step === n ? styles.stepBtnActive : ''].join(' ')}
            style={step === n ? { background: accentColor } : {}}
            onClick={() => setStep(n)}
          >
            שלב {n}
          </button>
        ))}
      </div>

      {/* Step 1: Hand-holding with template */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <div className={styles.stepLabel}>🟢 שלב א — עם תבנית מלאה</div>
          <p className={styles.stepDesc}>
            פתחו את Gemini, ChatGPT, או Claude. העתיקו את הפרומפט הזה, מלאו את הסוגריים, ושלחו:
          </p>
          <PromptCard
            title="הפרומפט הראשון שלי — תבנית מלאה"
            prompt={M01_FIRST_PROMPT_TEMPLATE}
            note="מלאו: מקצוע, גיל כיתה — ושלחו. ראו מה קורה!"
            accentColor={accentColor}
          />
          <div className={styles.scaffoldNote}>
            💡 <strong>מה לחפש בתשובה:</strong> האם היא ספציפית לכם? האם היא מועילה? האם משהו גורם לכם לרצות לשנות?
          </div>
          <button className={styles.nextStepBtn} style={{ color: accentColor }} onClick={() => setStep(2)}>
            קיבלתם תשובה? עוברים לשלב ב →
          </button>
        </div>
      )}

      {/* Step 2: Guided improvement */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <div className={styles.stepLabel}>🟡 שלב ב — שיפור הפרומפט</div>
          <p className={styles.stepDesc}>
            עכשיו נשפר. הפרומפט הזה יותר מפורט ויניב תוצאה טובה יותר:
          </p>
          <PromptCard
            title="פרומפט משופר — 4 חלקים"
            prompt={M01_IMPROVED_PROMPT_TEMPLATE}
            note="שימו לב: כל 4 חלקי גבעת חלפון נמצאים כאן!"
            accentColor={accentColor}
          />
          <div className={styles.compareNote}>
            <strong>השוו:</strong> איזו תשובה הייתה טובה יותר — של שלב א או שלב ב?
            ההבדל הוא כמות המידע שנתתם ל-AI.
          </div>
          <button className={styles.nextStepBtn} style={{ color: accentColor }} onClick={() => setStep(3)}>
            ממשיכים לשלב ג — לבד →
          </button>
        </div>
      )}

      {/* Step 3: Independent */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <div className={styles.stepLabel}>🔴 שלב ג — הפרומפט שלכם</div>
          <p className={styles.stepDesc}>
            עכשיו בנו פרומפט לגמרי שלכם — נושא שמתכננים ללמד השבוע.
            השתמשו ב-4 חלקים: תפקיד, קשר ורקע, משימה, פורמט.
          </p>
          <AssignmentBlock
            {...m01Assignments[2]}
            accentColor={accentColor}
          />
        </div>
      )}

      <button className={styles.nextBtn} style={{ background: accentColor }} onClick={onNext}>
        פרויקט שיתופי — מפת הפחדים ←
      </button>
    </div>
  );
};

export default M01Practice;
