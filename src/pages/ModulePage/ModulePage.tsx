// ModulePage — lazy loads the correct module by ID
import React, { Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_MODULES } from '@/modules/moduleConfigs';

const MODULE_MAP: Record<string, React.LazyExoticComponent<React.FC>> = {
  m01: lazy(() => import('@/modules/m01-intro')),
  m02: lazy(() => import('@/modules/m02-cbt')),
  m03: lazy(() => import('@/modules/m03-pedagogical-spoiler')),
  m04: lazy(() => import('@/modules/m04-three-moves')),
  m05: lazy(() => import('@/modules/m05-creative-thinking')),
};

const LoadingScreen = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Heebo,sans-serif', color: '#9CA3AF', fontSize: 18 }} dir="rtl">
    טוען יחידה...
  </div>
);

const NotAvailable: React.FC<{ title: string }> = ({ title }) => {
  const nav = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Heebo,sans-serif', gap: 16, background: '#FAF3F4' }} dir="rtl">
      <div style={{ fontSize: 64 }}>🔒</div>
      <h1 style={{ fontSize: 24, color: '#1E2430', fontFamily: 'Frank Ruhl Libre,serif' }}>{title}</h1>
      <p style={{ color: '#6B7280' }}>יחידה זו עדיין בפיתוח. חזרו בקרוב!</p>
      <button
        onClick={() => nav('/')}
        style={{ background: '#DE00A5', color: 'white', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 16, cursor: 'pointer', fontFamily: 'Heebo,sans-serif', fontWeight: 700 }}
      >
        חזרה לפורטל
      </button>
    </div>
  );
};

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const config = ALL_MODULES.find(m => m.id === moduleId);

  if (!config) return <NotAvailable title="יחידה לא נמצאה" />;
  if (!config.isAvailable) return <NotAvailable title={config.titleHe} />;

  const ModuleComponent = MODULE_MAP[moduleId!];
  if (!ModuleComponent) return <NotAvailable title={config.titleHe} />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ModuleComponent />
    </Suspense>
  );
};

export default ModulePage;
