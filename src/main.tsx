import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './styles/global.scss';

// No StrictMode — prevents double-render nav duplication in dev
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRouter />
);
