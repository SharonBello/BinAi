// ═══════════════════════════════════════════════════════
// ModuleCard
// Portal homepage card for one module.
// Shows cluster, number, title, tags, availability.
// Max 250 lines.
// ═══════════════════════════════════════════════════════
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbClock, TbLock } from 'react-icons/tb';
import type { ModuleConfig } from '@/types/module.types';
import { CLUSTERS } from '@/modules/moduleConfigs';
import styles from './ModuleCard.module.scss';

interface ModuleCardProps {
  config:   ModuleConfig;
  progress?: number;  // 0–100
}

const ModuleCard: React.FC<ModuleCardProps> = ({ config, progress = 0 }) => {
  const navigate = useNavigate();

  const clusterInfo = CLUSTERS[config.cluster];

  const handleClick = () => {
    if (config.isAvailable) {
      navigate(`/module/${config.id}`);
    }
  };

  const cssVars = {
    '--card-primary': config.colors.primary,
    '--card-accent':  config.colors.accent,
    '--card-bg':      config.colors.bg,
    '--card-surface': config.colors.surface,
    '--card-text':    config.colors.text,
  } as React.CSSProperties;

  return (
    <article
      className={[
        styles.card,
        config.isAvailable ? styles['card--available'] : styles['card--locked'],
        progress === 100 ? styles['card--completed'] : '',
      ].join(' ')}
      style={cssVars}
      onClick={handleClick}
      role={config.isAvailable ? 'button' : undefined}
      tabIndex={config.isAvailable ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label={`יחידה ${config.number}: ${config.titleHe}`}
    >
      {/* Top accent bar */}
      <div className={styles.accentBar} />

      {/* Header row */}
      <div className={styles.header}>
        <span className={styles.number}>
          {String(config.number).padStart(2, '0')}
        </span>

        {!config.isAvailable && (
          <span className={styles.lockIcon} aria-label="בקרוב">
            <TbLock size={14} />
          </span>
        )}

        {config.isAvailable && progress === 100 && (
          <span className={styles.completedBadge}>✓ הושלם</span>
        )}
      </div>

      {/* Cluster badge */}
      <span
        className={styles.clusterBadge}
        style={{ background: clusterInfo.color + '20', color: clusterInfo.color }}
      >
        {clusterInfo.titleHe}
      </span>

      {/* Title & subtitle */}
      <h3 className={styles.title}>{config.titleHe}</h3>
      <p className={styles.subtitle}>{config.subtitleHe}</p>

      {/* Tags */}
      <div className={styles.tags}>
        {config.tagsHe.slice(0, 3).map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.duration}>
          <TbClock size={13} />
          {config.durationHours} שעות
        </span>

        {config.isAvailable && progress > 0 && progress < 100 && (
          <div className={styles.progressWrap}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {config.isAvailable && progress === 0 && (
          <span className={styles.startCta}>התחל ←</span>
        )}

        {!config.isAvailable && (
          <span className={styles.comingSoon}>בקרוב</span>
        )}
      </div>
    </article>
  );
};

export default ModuleCard;
