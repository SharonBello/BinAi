// M08 zones-of-regulation cross-origin iframe wrapper.

import React from 'react';

const M08ZonesOfRegulation: React.FC = () => (
  <iframe
    src="https://zones-of-regulation.pages.dev"
    title="אזורי ויסות בכיתה"
    allow="clipboard-write"
    style={{
      width:  '100%',
      height: 'calc(100vh - 58px)',
      border: 'none',
      display: 'block',
    }}
  />
);

export default M08ZonesOfRegulation;