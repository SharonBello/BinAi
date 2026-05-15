// PromptCard — copyable prompt with module accent color
import React, { useState } from 'react';
import { TbCopy, TbCheck } from 'react-icons/tb';
import styles from './PromptCard.module.scss';

interface PromptCardProps {
  title:    string;
  prompt:   string;
  note?:    string;
  accentColor?: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, prompt, note, accentColor = '#1D9E75' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={styles.card}
      style={{ borderRightColor: accentColor } as React.CSSProperties}
    >
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <button
          className={styles.copyBtn}
          onClick={handleCopy}
          aria-label={copied ? 'הועתק' : 'העתק פרומפט'}
          style={{ color: copied ? accentColor : undefined }}
        >
          {copied ? <TbCheck size={16} /> : <TbCopy size={16} />}
          <span>{copied ? 'הועתק!' : 'העתק'}</span>
        </button>
      </div>
      <pre className={styles.prompt}>{prompt}</pre>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
};

export default PromptCard;
