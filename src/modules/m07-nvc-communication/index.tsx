// M07 Â· NVC Communication” cross-origin iframe wrapper.
// The module itself is deployed at metacognition-ax4.pages.dev.

import React from 'react';

const M07NVCCommunication: React.FC = () => (
  <iframe
    src="https://nvc-communication.pages.dev"
    title="תקשורת מקרבת"
    allow="clipboard-write"
    style={{
      width:  '100%',
      height: 'calc(100vh - 58px)',
      border: 'none',
      display: 'block',
    }}
  />
);

export default M07NVCCommunication;