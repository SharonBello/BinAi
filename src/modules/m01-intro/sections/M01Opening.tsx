// M01Opening — 00:00–15 | פתיחה
import React, { useState } from 'react';
import AssignmentBlock from '@/components/common/AssignmentBlock/AssignmentBlock';
import { m01Assignments } from '../data/assignments';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const STATES = [
  { emoji: '😰', text: 'פוחד/ת שיחשבו שאני "עצלן/ית"', response: 'הפחד מובן לגמרי. עד סוף היום תרגישו אחרת.' },
  { emoji: '🤔', text: 'לא בטוח/ה מאיפה להתחיל', response: 'מקום מצוין להתחיל ממנו. ביחד נמצא את הנתיב שלכם.' },
  { emoji: '🙈', text: 'ניסיתי — יצא משהו מוזר', response: 'זה קרה לכולנו! הפעם נעשה את זה בצורה נכונה.' },
  { emoji: '😤', text: 'חושב/ת שזה לא בשבילי', response: 'מסקרן לשמוע — בואו נבדוק את זה ביחד.' },
  { emoji: '🚀', text: 'כבר משתמש/ת ואוהב/ת!', response: 'מצוין! אתם כאן כדי להעמיק ולשתף — בדיוק מה שצריך.' },
];

const M01Opening: React.FC<Props> = ({ onNext, accentColor }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 00:00 – 00:15</span>
        <h2 className={styles.sectionTitle}>פתיחה — מהפחד לסקרנות</h2>
      </div>

      <div className={styles.hookBox}>
        <div className={styles.hookEmoji}>🤫</div>
        <h3 className={styles.hookQuestion}>
          כמה מכם פחדו לספר לעמיתים שהם משתמשים ב-AI?
        </h3>
        <p className={styles.hookSub}>
          אתם לא לבד. הרבה מורים מרגישים ככה — ואנחנו הולכים לשנות את זה היום.
        </p>
      </div>

      <div className={styles.cardGroup}>
        <h4 className={styles.groupTitle}>איפה אתם עכשיו עם AI?</h4>
        <div className={styles.fearGrid}>
          {STATES.map(s => (
            <button
              key={s.emoji}
              className={[styles.fearCard, selected === s.emoji ? styles.fearCardSelected : ''].join(' ')}
              style={selected === s.emoji ? { borderColor: accentColor, background: accentColor + '12' } : {}}
              onClick={() => setSelected(s.emoji)}
            >
              <span className={styles.fearEmoji}>{s.emoji}</span>
              <span className={styles.fearText}>{s.text}</span>
            </button>
          ))}
        </div>
        {selected && (
          <p className={styles.fearResponse} style={{ color: accentColor }}>
            {STATES.find(s => s.emoji === selected)?.response}
          </p>
        )}
      </div>

      <AssignmentBlock
        {...m01Assignments[0]}
        accentColor={accentColor}
      />

      <div className={styles.agendaBox}>
        <h4 className={styles.agendaTitle}>מה עושים היום?</h4>
        <div className={styles.agendaList}>
          {[
            ['00:15', 'מה זה AI — איך הוא עובד באמת'],
            ['00:45', 'הנדסה לאחור — בלש הפרומפטים'],
            ['01:15', '☕ הפסקה'],
            ['01:30', 'הפרומפט הראשון שלכם'],
            ['02:00', 'מפת הפחדים והציפיות — ביחד'],
            ['02:25', 'בחינת ידע'],
            ['02:45', 'תיק עבודות + תעודה'],
          ].map(([time, label]) => (
            <div key={time} className={styles.agendaItem}>
              <span className={styles.agendaTime} style={{ color: accentColor }}>{time}</span>
              <span className={styles.agendaLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.nextBtn} style={{ background: accentColor }} onClick={onNext}>
        מתחילים — מה זה AI? ←
      </button>
    </div>
  );
};

export default M01Opening;