// ═══════════════════════════════════════════════════════
// ModuleShell
// Wraps every module. Injects module colors as CSS vars.
// Applies visualStyle class for shape language.
// Max 250 lines.
// ═══════════════════════════════════════════════════════
import React from 'react';
import type { ModuleConfig } from '@/types/module.types';
import styles from './ModuleShell.module.scss';

interface ModuleShellProps {
  config:   ModuleConfig;
  children: React.ReactNode;
  className?: string;
}

const ModuleShell: React.FC<ModuleShellProps> = ({ config, children, className }) => {
  const cssVars = {
    '--module-primary':    config.colors.primary,
    '--module-accent':     config.colors.accent,
    '--module-bg':         config.colors.bg,
    '--module-surface':    config.colors.surface,
    '--module-text':       config.colors.text,
    '--module-text-muted': config.colors.textMuted,
  } as React.CSSProperties;

  const classList = [
    styles.shell,
    styles[`shell--${config.visualStyle}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classList}
      style={cssVars}
      data-module={config.id}
      data-style={config.visualStyle}
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default ModuleShell;
