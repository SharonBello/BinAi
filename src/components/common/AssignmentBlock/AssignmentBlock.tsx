// AssignmentBlock — numbered portfolio assignment input
import React, { useState } from 'react';
import styles from './AssignmentBlock.module.scss';

interface AssignmentBlockProps {
  number:      1|2|3|4|5;
  title:       string;
  description: string;
  prompt:      string;
  accentColor?: string;
  durationMin?: number;
  onSave?:     (text: string) => void;
  savedValue?: string;
}

const BLOOM_LABELS: Record<number, string> = {
  1: 'זכירה', 2: 'הבנה', 3: 'יישום', 4: 'ניתוח', 5: 'הערכה', 6: 'יצירה',
};

const AssignmentBlock: React.FC<AssignmentBlockProps> = ({
  number, title, description, prompt, accentColor = '#1D9E75',
  durationMin, onSave, savedValue = '',
}) => {
  const [value, setValue] = useState(savedValue);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave?.(value);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.block} dir="rtl">
      <div className={styles.header} style={{ background: accentColor }}>
        <div className={styles.numberCircle}>{number}</div>
        <div className={styles.headerText}>
          <span className={styles.label}>משימה {number}</span>
          <strong className={styles.title}>{title}</strong>
        </div>
        {durationMin && (
          <span className={styles.duration}>{durationMin} דק׳</span>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
        <div className={styles.promptBox}>
          {prompt.split('\n').map((line, i) => (
            <p key={i} className={styles.promptLine}>{line}</p>
          ))}
        </div>

        <textarea
          className={styles.input}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="כתבו את תשובתכם כאן..."
          rows={4}
          aria-label={`תשובה למשימה ${number}: ${title}`}
        />

        <div className={styles.footer}>
          <span className={styles.charCount}>{value.length} תווים</span>
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={!value.trim()}
            style={{ background: value.trim() ? accentColor : undefined }}
          >
            {saved ? '✓ נשמר!' : 'שמור'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentBlock;
