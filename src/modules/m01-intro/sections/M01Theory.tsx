// M01Theory — 00:15–45 | תיאוריה: מה AI באמת?
import React, { useState } from 'react';
import { M01_MYTHS, M01_TOOLS, M01_CHEF_ANALOGY, M01_LIMITS } from '../data/content';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const M01Theory: React.FC<Props> = ({ onNext, accentColor }) => {
  const [revealedMyths, setRevealedMyths] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'myths' | 'chef' | 'tools' | 'limits'>('myths');

  const revealMyth = (id: string) => setRevealedMyths(prev => new Set([...prev, id]));

  const tabs = [
    { id: 'myths' as const, label: 'מיתוסים vs עובדות' },
    { id: 'chef' as const, label: 'איך AI עובד' },
    { id: 'tools' as const, label: 'השוואת כלים' },
    { id: 'limits' as const, label: 'גבולות חשובים' },
  ];

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 00:15 – 00:45</span>
        <h2 className={styles.sectionTitle}>מהו AI באמת? — תיאוריה</h2>
      </div>

      {/* Tab navigation */}
      <div className={styles.tabs}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={[styles.tab, activeTab === t.id ? styles.tabActive : ''].join(' ')}
            style={activeTab === t.id ? { color: accentColor, borderBottomColor: accentColor } : {}}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* MYTHS TAB */}
      {activeTab === 'myths' && (
        <div className={styles.mythsGrid}>
          <p className={styles.tabInstruction}>לחצו על כל כרטיס כדי לגלות את האמת</p>
          {M01_MYTHS.map(myth => (
            <div key={myth.id} className={styles.mythCard} onClick={() => revealMyth(myth.id)}>
              <div className={styles.mythClaim}>
                <span className={styles.mythEmoji}>{myth.isMyth ? '❓' : '❓'}</span>
                <p>{myth.claim}</p>
              </div>
              {revealedMyths.has(myth.id) && (
                <div
                  className={styles.mythReveal}
                  style={{
                    background: myth.isMyth ? '#FEF3F3' : '#F0FAF6',
                    borderColor: myth.isMyth ? '#E24B4A' : '#1D9E75',
                  }}
                >
                  <span
                    className={styles.mythVerdict}
                    style={{ color: myth.isMyth ? '#A32D2D' : '#085041' }}
                  >
                    {myth.verdict}
                  </span>
                  <p className={styles.mythExplanation}>{myth.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CHEF TAB */}
      {activeTab === 'chef' && (
        <div className={styles.chefSection}>

          {/* Add this definition box */}
          <div className={styles.termBox}>
            <span className={styles.termLabel}>מונח מפתח</span>
            <p>
              <strong>LLM = Large Language Model</strong> — "מודל שפה גדול"
            </p>
            <p className={styles.termSub}>
              הבסיס הטכנולוגי של ChatGPT, Gemini, Claude וכל שאר כלי ה-AI הגנרטיביים.
              בפשטות — תוכנה שאומנה על כמויות עצומות של טקסט כדי לנבא שפה.
            </p>
          </div>
          <div className={styles.chefHook}>
            <span className={styles.chefEmoji}>👨‍🍳</span>
            <h3 className={styles.chefTitle}>{M01_CHEF_ANALOGY.hook}</h3>
          </div>
          <div className={styles.chefSteps}>
            {M01_CHEF_ANALOGY.steps.map((step, i) => (
              <div key={i} className={styles.chefStep}>
                <span className={styles.chefStepIcon}>{step.icon}</span>
                <span className={styles.chefStepText}>{step.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.chefPunchline} style={{ borderColor: accentColor, color: accentColor }}>
            <strong>{M01_CHEF_ANALOGY.punchline}</strong>
          </div>
          <div className={styles.infoBox}>
            <p>📌 <strong>מה זה אומר בפועל?</strong></p>
            <p>כשאתם שואלים AI שאלה — הוא לא "מחפש" תשובה. הוא <strong>מנבא</strong> מילה אחר מילה מה הכי הגיוני להגיד. לכן הוא יכול להיות מאוד משכנע — גם כשהוא טועה.</p>
          </div>
        </div>
      )}

      {/* TOOLS TAB */}
      {activeTab === 'tools' && (
        <div className={styles.toolsGrid}>
          {M01_TOOLS.map(tool => (
            <div key={tool.id} className={styles.toolCard}>
              <div className={styles.toolHeader} style={{ background: tool.color }}>
                <span className={styles.toolEmoji}>{tool.emoji}</span>
                <div>
                  <strong className={styles.toolName}>{tool.name}</strong>
                  <span className={styles.toolMaker}>{tool.maker}</span>
                </div>
                <span className={styles.toolPrice}>{tool.price}</span>
              </div>
              <div className={styles.toolBody}>
                <div className={styles.toolRow}>
                  <span className={styles.toolRowLabel}>✅ מצוין ב</span>
                  <span>{tool.bestFor}</span>
                </div>
                <div className={styles.toolRow}>
                  <span className={styles.toolRowLabel}>🌐 עברית</span>
                  <span>{tool.hebrewLevel}</span>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.toolTip}>
            💡 <strong>המלצה:</strong> מתחילים? התחילו עם <strong>Gemini</strong> (Gmail = כניסה אוטומטית). הפרומפט חשוב יותר מהכלי.
          </div>
        </div>
      )}

      {/* LIMITS TAB */}
      {activeTab === 'limits' && (
        <div className={styles.limitsGrid}>
          {M01_LIMITS.map(limit => (
            <div key={limit.icon} className={styles.limitCard}>
              <div className={styles.limitHeader} style={{ background: limit.color }}>
                <span className={styles.limitIcon}>{limit.icon}</span>
                <strong className={styles.limitTitle}>{limit.title}</strong>
              </div>
              <div className={styles.limitBody}>
                <p className={styles.limitRule}><strong>הכלל:</strong> {limit.rule}</p>
                <p className={styles.limitTip}>💡 <strong>הטיפ:</strong> {limit.tip}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Humor moment */}
      <div className={styles.humorBox}>
        <span className={styles.humorEmoji}>😂</span>
        <div>
          <strong>בונוס משעשע:</strong>אמרתי ל-AI שיכתוב לי משהו על ידידות. יצא לו הכי גנרי בעולם:<br />מזמינים אתכם לשיעור על ידידות. הנה 5 נקודות: 1. ידידות טובה. 2. ידידות חשובה..."<br />
          <em>— ככה זה כשלא משקיעים בפרומפט.</em>
        </div>
      </div>

      <button className={styles.nextBtn} style={{ background: accentColor }} onClick={onNext}>
        הנדסה לאחור: בלש הפרומפטים ←
      </button>
    </div>
  );
};

export default M01Theory;
