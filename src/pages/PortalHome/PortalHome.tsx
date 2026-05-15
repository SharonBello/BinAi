// ═══════════════════════════════════════════════════════
// PortalHome
// BinAI main portal: hero + 4 cluster sections + module grid.
// Max 250 lines.
// ═══════════════════════════════════════════════════════
import React from 'react';
import { TbCertificate, TbStar, TbBook } from 'react-icons/tb';
import ModuleCard from '@/components/portal/ModuleCard/ModuleCard';
import { ALL_MODULES, CLUSTERS } from '@/modules/moduleConfigs';
import type { ModuleCluster } from '@/types/module.types';
import styles from './PortalHome.module.scss';

const CLUSTER_ORDER: ModuleCluster[] = ['foundation', 'pedagogical', 'thinking', 'sel'];

const PortalHome: React.FC = () => {
  // Group modules by cluster (preserve order within cluster)
  const byCluster = CLUSTER_ORDER.reduce((acc, cluster) => {
    acc[cluster] = ALL_MODULES.filter(m => m.cluster === cluster);
    return acc;
  }, {} as Record<ModuleCluster, typeof ALL_MODULES>);

  const completedCount = ALL_MODULES.filter(m => m.isAvailable).length;

  return (
    <div className={styles.page} dir="rtl">

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>השתלמות מוכרת · 30 שעות · 10 יחידות</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroBrand}>Bin</span>
            <span className={styles.heroAI}>AI</span>
          </h1>
          <p className={styles.heroSubtitle}>
            בינה מלאכותית בחינוך — מהתיאוריה לכיתה.
            <br />
            כל יחידה = כלי מוכן לשימוש מחר.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statVal}>10</span>
              <span className={styles.statLbl}>יחידות לימוד</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>30</span>
              <span className={styles.statLbl}>שעות</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>50</span>
              <span className={styles.statLbl}>משימות</span>
            </div>
          </div>

          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary} onClick={() => {
              document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              התחל ללמוד
            </button>
            <button className={styles.ctaSecondary}>
              קרא עוד על הקורס
            </button>
          </div>
        </div>

        {/* Decorative grid overlay */}
        <div className={styles.heroGrid} aria-hidden />
      </section>

      {/* ── CERT BANNER ── */}
      <div className={styles.certBanner}>
        <TbCertificate size={20} />
        <span>
          השלמת כל 10 היחידות = תעודת השתלמות · ניתן להגשה למכון מופת
        </span>
      </div>

      {/* ── MODULE CLUSTERS ── */}
      <main id="modules" className={styles.modulesSection}>
        <div className={styles.container}>

          {CLUSTER_ORDER.map(cluster => {
            const modules = byCluster[cluster];
            const info = CLUSTERS[cluster];
            return (
              <section key={cluster} className={styles.cluster}>

                <div className={styles.clusterHeader}>
                  <span
                    className={styles.clusterDot}
                    style={{ background: info.color }}
                  />
                  <h2 className={styles.clusterTitle}>{info.titleHe}</h2>
                  <span className={styles.clusterCount}>
                    {modules.length} יחידות
                  </span>
                </div>

                <div className={styles.moduleGrid}>
                  {modules.map(config => (
                    <ModuleCard
                      key={config.id}
                      config={config}
                      progress={0}
                    />
                  ))}
                </div>

              </section>
            );
          })}

        </div>
      </main>

      {/* ── PORTFOLIO TEASER ── */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioItem}>
              <TbStar size={24} />
              <strong>50 משימות</strong>
              <span>תיק עבודות אישי מלא</span>
            </div>
            <div className={styles.portfolioItem}>
              <TbBook size={24} />
              <strong>10 ארטיפקטים</strong>
              <span>כלים מוכנים לשימוש בכיתה</span>
            </div>
            <div className={styles.portfolioItem}>
              <TbCertificate size={24} />
              <strong>תעודת השלמה</strong>
              <span>30 שעות · מוכר רשמית</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortalHome;
