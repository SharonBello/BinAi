import React, { useState, useEffect } from 'react';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const M01Break: React.FC<Props> = ({ onNext, accentColor }) => {
  const [seconds, setSeconds] = useState(900); // 15 min

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return (
    <div className={styles.section} style={{ textAlign: 'center' }} dir="rtl">
      <div className={styles.breakBox}>
        <div className={styles.breakEmoji}>☕</div>
        <h2 className={styles.breakTitle}>הפסקה</h2>
        <div className={styles.breakTimer} style={{ color: accentColor }}>
          {min}:{String(sec).padStart(2, '0')}
        </div>
        <p className={styles.breakSub}>קחו נשימה, שתו קפה, שוחחו עם עמיתים על מה שגיליתם עד כה.</p>
        <button className={styles.nextBtn} style={{ background: accentColor, margin: '2rem auto 0' }} onClick={onNext}>
          ממשיכים לתרגול ←
        </button>
      </div>
    </div>
  );
};

export default M01Break;
