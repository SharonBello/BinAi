// Module 01 — מהו AI? | מסע הגילוי
// Entry point: section navigation + section rendering
import React, { useState } from 'react';
import ModuleShell from '@/components/layout/ModuleShell/ModuleShell';
import { m01Config } from '@/modules/moduleConfigs';
import M01Opening from './sections/M01Opening';
import M01Theory from './sections/M01Theory';
import M01ReverseEng from './sections/M01ReverseEng';
import M01Break from './sections/M01Break';
import M01Practice from './sections/M01Practice';
import M01Shared from './sections/M01Shared';
import M01Quiz from './sections/M01Quiz';
import M01Closing from './sections/M01Closing';
import styles from './m01Index.module.scss';

type SectionId = 'opening' | 'theory' | 'reverse' | 'break' | 'practice' | 'shared' | 'quiz' | 'closing';

const SECTIONS: { id: SectionId; labelHe: string; timeRange: string }[] = [
  { id: 'opening', labelHe: 'פתיחה', timeRange: '00:00' },
  { id: 'theory', labelHe: 'תיאוריה', timeRange: '00:15' },
  { id: 'reverse', labelHe: 'הנדסה לאחור', timeRange: '00:45' },
  { id: 'break', labelHe: '☕ הפסקה', timeRange: '01:10' },
  { id: 'practice', labelHe: 'תרגול', timeRange: '01:25' },
  { id: 'shared', labelHe: 'פרויקט משותף', timeRange: '01:55' },
  { id: 'quiz', labelHe: 'בחינת ידע', timeRange: '02:25' },
  { id: 'closing', labelHe: 'סיכום', timeRange: '02:45' },
];

const M01Module: React.FC = () => {
  const [current, setCurrent] = useState<SectionId>('opening');
  const c = m01Config.colors;

  const advance = () => {
    const idx = SECTIONS.findIndex(s => s.id === current);
    if (idx < SECTIONS.length - 1) {
      setCurrent(SECTIONS[idx + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ModuleShell config={m01Config}>
      {/* Section navigation bar */}
      <nav className={styles.sectionNav} dir="rtl" aria-label="ניווט בין חלקי היחידה">
        {SECTIONS.map((s, idx) => {
          const sectionIdx = SECTIONS.findIndex(x => x.id === current);
          const isDone = idx < sectionIdx;
          const isActive = s.id === current;
          return (
            <button
              key={s.id}
              className={[
                styles.navItem,
                isActive ? styles.navItemActive : '',
                isDone ? styles.navItemDone : '',
              ].join(' ')}
              style={isActive ? { color: c.primary, borderBottomColor: c.primary } as React.CSSProperties : {}}
              onClick={() => { setCurrent(s.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className={styles.navTime}>{s.timeRange}</span>
              <span className={styles.navLabel}>{s.labelHe}</span>
              {isDone && <span className={styles.navDone}>✓</span>}
            </button>
          );
        })}
      </nav>

      {/* Section content */}
      <div className={styles.content}>
        {current === 'opening' && <M01Opening onNext={advance} accentColor={c.primary} />}
        {current === 'theory' && <M01Theory onNext={advance} accentColor={c.primary} />}
        {current === 'reverse' && <M01ReverseEng onNext={advance} accentColor={c.primary} />}
        {current === 'break' && <M01Break onNext={advance} accentColor={c.primary} />}
        {current === 'practice' && <M01Practice onNext={advance} accentColor={c.primary} />}
        {current === 'shared' && <M01Shared onNext={advance} accentColor={c.primary} />}
        {current === 'quiz' && <M01Quiz onNext={advance} accentColor={c.primary} />}
        {current === 'closing' && <M01Closing accentColor={c.primary} moduleNumber={1} />}
      </div>
    </ModuleShell>
  );
};

export default M01Module;
