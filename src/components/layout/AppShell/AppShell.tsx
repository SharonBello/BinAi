// ═══════════════════════════════════════════════════════
// AppShell
// Global navigation wrapper for all pages.
// Max 250 lines.
// ═══════════════════════════════════════════════════════
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TbMenu2, TbX, TbUser, TbLogout, TbHome } from 'react-icons/tb';
import styles from './AppShell.module.scss';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPortal  = location.pathname === '/';
  const isModule  = location.pathname.startsWith('/module/');

  const navLinks = [
    { labelHe: 'יחידות לימוד', path: '/',          icon: <TbHome size={16} /> },
    { labelHe: 'תיק עבודות',   path: '/portfolio',  icon: null },
    { labelHe: 'ההתקדמות שלי', path: '/dashboard',  icon: null },
  ];

  return (
    <div className={styles.shell} dir="rtl">

      {/* ── TOP NAV ── */}
      <header className={styles.nav}>
        <div className={styles.navInner}>

          {/* Brand */}
          <button
            className={styles.brand}
            onClick={() => navigate('/')}
            aria-label="חזרה לדף הבית"
          >
            <span className={styles.brandBin}>Bin</span>
            <span className={styles.brandAI}>AI</span>
          </button>

          {/* Desktop nav links */}
          <nav className={styles.navLinks} aria-label="ניווט ראשי">
            {navLinks.map(link => (
              <button
                key={link.path}
                className={[
                  styles.navLink,
                  location.pathname === link.path ? styles['navLink--active'] : '',
                ].join(' ')}
                onClick={() => navigate(link.path)}
              >
                {link.labelHe}
              </button>
            ))}
          </nav>

          {/* Auth area */}
          <div className={styles.authArea}>
            <button className={styles.authBtn} aria-label="פרופיל">
              <TbUser size={18} />
              <span className={styles.authLabel}>כניסה</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {mobileOpen ? <TbX size={22} /> : <TbMenu2 size={22} />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map(link => (
              <button
                key={link.path}
                className={styles.mobileNavLink}
                onClick={() => { navigate(link.path); setMobileOpen(false); }}
              >
                {link.labelHe}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── PAGE CONTENT ── */}
      <main className={styles.main}>
        {children}
      </main>

    </div>
  );
};

export default AppShell;
