// ModuleCard — FutureLearn style: photo header + overlay + clean white body
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbClock, TbLock, TbCheck, TbArrowLeft } from 'react-icons/tb';
import type { ModuleConfig } from '@/types/module.types';
import { CLUSTERS } from '@/modules/moduleConfigs';
import styles from './ModuleCard.module.scss';

interface ModuleCardProps { config: ModuleConfig; progress?: number; }

const ModuleCard: React.FC<ModuleCardProps> = ({ config, progress = 0 }) => {
  const navigate      = useNavigate();
  const clusterInfo   = CLUSTERS[config.cluster];
  const isCompleted   = progress === 100;

  const handleClick = () => { if (config.isAvailable) navigate(`/module/${config.id}`); };

  return (
    <article
      className={[styles.card, config.isAvailable ? styles.available : styles.locked, isCompleted ? styles.completed : ''].filter(Boolean).join(' ')}
      onClick={handleClick}
      role={config.isAvailable ? 'button' : undefined}
      tabIndex={config.isAvailable ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label={`יחידה ${config.number}: ${config.titleHe}`}
    >
      {/* ── PHOTO HEADER ── */}
      <div className={styles.header}>
        <img
          src={config.imageUrl}
          alt=""
          className={styles.photo}
          aria-hidden="true"
          loading="lazy"
        />
        {/* Color overlay per module */}
        <div className={styles.overlay} style={{ background: config.colors.overlay }} />

        {/* Header UI layer */}
        <div className={styles.headerUi}>
          <div className={styles.topRow}>
            <span className={styles.number}>{String(config.number).padStart(2,'0')}</span>
            {!config.isAvailable && <span className={styles.lockBadge}><TbLock size={11}/> בקרוב</span>}
            {isCompleted && <span className={styles.doneBadge}><TbCheck size={11}/> הושלם</span>}
          </div>
          <span className={styles.clusterBadge}>{clusterInfo.titleHe}</span>
        </div>
      </div>

      {/* ── WHITE CARD BODY ── */}
      <div className={styles.body}>
        <h3 className={styles.title}>{config.titleHe}</h3>
        <p className={styles.subtitle}>{config.subtitleHe}</p>
        <div className={styles.tags}>
          {config.tagsHe.slice(0,3).map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        {config.isAvailable && progress > 0 && progress < 100 && (
          <div className={styles.progressWrap}>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width:`${progress}%`, background: config.colors.primary }} />
            </div>
            <span className={styles.progressPct}>{progress}%</span>
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div className={styles.footer}>
        <span className={styles.duration}><TbClock size={14}/> {config.durationHours} שעות</span>
        {config.isAvailable && <span className={styles.cta} style={{ color: config.colors.primary }}>{progress > 0 ? 'המשך' : 'התחל'} <TbArrowLeft size={14}/></span>}
        {!config.isAvailable && <span className={styles.soon}>בפיתוח</span>}
        {isCompleted && <span className={styles.cta} style={{ color: config.colors.primary }}>צפה שוב <TbArrowLeft size={14}/></span>}
      </div>
    </article>
  );
};
export default ModuleCard;
