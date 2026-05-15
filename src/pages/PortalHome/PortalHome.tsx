import React from 'react';
import { TbCertificate, TbStar, TbDownload, TbBulb } from 'react-icons/tb';
import ModuleCard from '@/components/portal/ModuleCard/ModuleCard';
import { ALL_MODULES, CLUSTERS } from '@/modules/moduleConfigs';
import type { ModuleCluster } from '@/types/module.types';
import styles from './PortalHome.module.scss';

const CLUSTER_ORDER: ModuleCluster[] = ['foundation', 'pedagogical', 'thinking', 'sel'];

const PortalHome: React.FC = () => {
  const byCluster = CLUSTER_ORDER.reduce((acc, cluster) => {
    acc[cluster] = ALL_MODULES.filter(m => m.cluster === cluster);
    return acc;
  }, {} as Record<ModuleCluster, typeof ALL_MODULES>);

  return (
    <div className={styles.page} dir="rtl">

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>השתלמות מוסמכת · 30 שעות · 10 יחידות לימוד</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroBrand}>Bin</span><span className={styles.heroAI}>AI</span>
          </h1>
          <p className={styles.heroTagline}>AI בחינוך — מהתיאוריה לכיתה שלכם</p>
          <p className={styles.heroDesc}>
            כל יחידה בנויה עבור מורים עסוקים כמוכם — 3 שעות, כלי מוכן לשימוש, וידע שנשאר.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statVal}>10</span><span className={styles.statLbl}>יחידות לימוד</span></div>
            <div className={styles.statDot} />
            <div className={styles.stat}><span className={styles.statVal}>30</span><span className={styles.statLbl}>שעות</span></div>
            <div className={styles.statDot} />
            <div className={styles.stat}><span className={styles.statVal}>50</span><span className={styles.statLbl}>משימות</span></div>
          </div>
          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary} onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}>
              מתחילים ←
            </button>
            <button className={styles.ctaSecondary}>קרא עוד</button>
          </div>
        </div>
        <div className={styles.heroBlob1} aria-hidden="true" />
        <div className={styles.heroBlob2} aria-hidden="true" />
      </section>

      <div className={styles.promiseStrip}>
        <div className={styles.promiseItem}><TbBulb size={18} /><span>כל יחידה = תוצר מוכן לשימוש מחר</span></div>
        <div className={styles.promiseDivider} />
        <div className={styles.promiseItem}><TbDownload size={18} /><span>מקוון ומודפס — בחרו מה שמתאים לכם</span></div>
        <div className={styles.promiseDivider} />
        <div className={styles.promiseItem}><TbCertificate size={18} /><span>תיק עבודות אישי + תעודת השלמה</span></div>
      </div>

      <main id="modules" className={styles.modulesSection}>
        <div className={styles.container}>
          {CLUSTER_ORDER.map(cluster => {
            const modules = byCluster[cluster];
            const info = CLUSTERS[cluster];
            return (
              <section key={cluster} className={styles.cluster}>
                <div className={styles.clusterHeader}>
                  <span className={styles.clusterPill} style={{ background: info.color + '18', color: info.color, borderColor: info.color + '30' }}>
                    {info.titleHe}
                  </span>
                  <span className={styles.clusterCount}>{modules.length} יחידות · {modules.length * 3} שעות</span>
                </div>
                <div className={styles.moduleGrid}>
                  {modules.map(config => <ModuleCard key={config.id} config={config} progress={0} />)}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <h2 className={styles.portfolioTitle}>מה יוצא לכם מהקורס?</h2>
          <p className={styles.portfolioSub}>לא רק ידע — תיק עבודות שלם עם כלים לשימוש מחר בבוקר</p>
          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioIcon} style={{ background: '#E1F5EE' }}><TbStar size={22} color="#1D9E75" /></div>
              <strong>50 משימות</strong><span>תיק עבודות אישי ומתועד</span>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioIcon} style={{ background: '#EEF5FF' }}><TbDownload size={22} color="#185FA5" /></div>
              <strong>10 תוצרים</strong><span>כלים מוכנים לשימוש בכיתה</span>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioIcon} style={{ background: '#FAEEDA' }}><TbCertificate size={22} color="#854F0B" /></div>
              <strong>תעודת השלמה</strong><span>30 שעות השתלמות מוסמכת</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortalHome;
