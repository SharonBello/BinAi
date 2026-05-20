// M06 Â· Metacognition â€” cross-origin iframe wrapper.
// The module itself is deployed at metacognition-ax4.pages.dev.

import React from 'react';

const M06Metacognition: React.FC = () => (
  <iframe
    src="https://metacognition-ax4.pages.dev/"
    title="מטא-קוגניציה בכיתה"
    allow="clipboard-write"
    style={{
      width:  '100%',
      height: 'calc(100vh - 58px)',
      border: 'none',
      display: 'block',
    }}
  />
);

export default M06Metacognition;