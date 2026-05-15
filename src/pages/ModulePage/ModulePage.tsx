import React from 'react';
import { useParams } from 'react-router-dom';
import { ALL_MODULES } from '@/modules/moduleConfigs';
import ModuleShell from '@/components/layout/ModuleShell/ModuleShell';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const config = ALL_MODULES.find(m => m.id === moduleId);
  if (!config) return <div dir="rtl" style={{padding:40}}>יחידה לא נמצאה</div>;
  return (
    <ModuleShell config={config}>
      <div style={{padding:40, direction:'rtl'}}>
        <h1>{config.titleHe}</h1>
        <p>יחידה {config.number} — בפיתוח</p>
      </div>
    </ModuleShell>
  );
};
export default ModulePage;
