// ═══════════════════════════════════════════════════════════════════
// M03 — הספויילר הפדגוגי
// Loaded as a cross-origin iframe from its own Pages deployment.
// Same pattern as M02 (which iframes /cbt-guide.html locally), but the
// src points to the external Pages URL since M03 is its own Vite app.
// ═══════════════════════════════════════════════════════════════════
import React from 'react';

const M03Module: React.FC = () => (
    <iframe
        src="https://a8670b9a.pedagogical-spoiler.pages.dev"
        title="הספויילר הפדגוגי"
        style={{
            width: '100%',
            height: 'calc(100vh - 58px)',
            border: 'none',
            display: 'block',
        }}
        allow="clipboard-write"
    />
);

export default M03Module;