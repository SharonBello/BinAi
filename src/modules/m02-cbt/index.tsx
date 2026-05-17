// Module 02 — כרטיסי שיחה CBT
// Loads the original HTML workshop guide in an iframe.
// This preserves 100% of the original design and behavior.
import React from 'react';

const M02Module: React.FC = () => (
  <iframe
    src="/cbt-guide.html"
    title="כרטיסי שיחה CBT עם AI"
    style={{
      width: '100%',
      height: 'calc(100vh - 58px)',
      border: 'none',
      display: 'block',
    }}
    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
  />
);

export default M02Module;
