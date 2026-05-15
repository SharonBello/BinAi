// M01Shared — 01:55–25 | מפת הפחדים והציפיות
import React, { useState } from 'react';
import AssignmentBlock from '@/components/common/AssignmentBlock/AssignmentBlock';
import { m01Assignments } from '../data/assignments';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const M01Shared: React.FC<Props> = ({ onNext, accentColor }) => {
  const [sharedFear, setSharedFear] = useState('');
  const [sharedHope, setSharedHope] = useState('');

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 01:55 – 02:25</span>
        <h2 className={styles.sectionTitle}>🤝 פרויקט משותף — מפת הפחדים והציפיות</h2>
      </div>

      <div className={styles.sharedIntro}>
        <p>בתחילת השיעור שאלנו איפה אתם עם AI. עכשיו — נבנה תמונה קבוצתית.</p>
        <p>כל אחד/ת מוסיף/ה <strong>פחד אחד</strong> ו<strong>ציפייה אחת</strong> לקיר המשותף.</p>
      </div>

      <div className={styles.sharedInputs}>
        <div className={styles.sharedInput}>
          <label className={styles.sharedLabel} style={{ color: '#E24B4A' }}>
            😰 פחד אחד שעדיין יש לי לגבי AI בהוראה
          </label>
          <textarea
            className={styles.sharedTextarea}
            value={sharedFear}
            onChange={e => setSharedFear(e.target.value)}
            placeholder="לדוגמה: פחד שלא אדע לענות לתלמידים כשישאלו אם ה-AI עשה את שיעורי הבית..."
            rows={3}
          />
        </div>
        <div className={styles.sharedInput}>
          <label className={styles.sharedLabel} style={{ color: accentColor }}>
            🌟 ציפייה אחת שיש לי — מה AI יוכל לשנות בעבודה שלי
          </label>
          <textarea
            className={styles.sharedTextarea}
            value={sharedHope}
            onChange={e => setSharedHope(e.target.value)}
            placeholder="לדוגמה: לחסוך לי שעה בהכנת שיעורים כדי שאוכל לשים יותר זמן לתלמידים..."
            rows={3}
          />
        </div>
      </div>

      {/* Gallery walk instruction */}
      <div className={styles.galleryBox} style={{ borderColor: accentColor }}>
        <strong>🖼️ גלריית הכיתה:</strong>
        <ul className={styles.galleryList}>
          <li><strong>פנים אל פנים:</strong> הדביקו את ה-Post-it על הלוח — ירוק = ציפייה, אדום = פחד</li>
          <li><strong>Zoom:</strong> שתפו בצ'אט או ב-Padlet שמנחה ה-Padlet יצר</li>
          <li>קראו מה כתבו אחרים — מה מפתיע? מה מדרבן?</li>
        </ul>
      </div>

      {/* Assignment 4 */}
      <AssignmentBlock
        {...m01Assignments[3]}
        accentColor={accentColor}
      />

      <button className={styles.nextBtn} style={{ background: accentColor }} onClick={onNext}>
        בחינת ידע קצרה ←
      </button>
    </div>
  );
};
export default M01Shared;
