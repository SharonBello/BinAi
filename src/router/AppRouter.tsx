// ═══════════════════════════════════════════════════════
// AppRouter
// All application routes.
// ═══════════════════════════════════════════════════════
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell/AppShell';

const PortalHome  = lazy(() => import('@/pages/PortalHome/PortalHome'));
const ModulePage  = lazy(() => import('@/pages/ModulePage/ModulePage'));
const Dashboard   = lazy(() => import('@/pages/Dashboard/Dashboard'));
const SignIn      = lazy(() => import('@/pages/Auth/SignIn'));

const LoadingFallback = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Heebo, sans-serif',
      color: '#6B6760',
      fontSize: 16,
    }}
    dir="rtl"
  >
    טוען...
  </div>
);

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <AppShell>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/"                 element={<PortalHome />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/dashboard"        element={<Dashboard />} />
          <Route path="/auth/signin"      element={<SignIn />} />
        </Routes>
      </Suspense>
    </AppShell>
  </BrowserRouter>
);

export default AppRouter;
