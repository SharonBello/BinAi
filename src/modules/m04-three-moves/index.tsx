import React from 'react';

const M04ThreeMoves: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 58px)' }}>
        <div style={{ padding: '8px 16px', background: '#FAE0DC', fontSize: 14, color: '#8E2C20' }}>
            לשמירה ל-PDF: פתחו את ההשתלמות בכרטיסייה נפרדת —{' '}

            <a href="https://three-moves.pages.dev/"
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 700, color: '#8E2C20' }}
            >
                three-moves.pages.dev
            </a>
        </div>

        <iframe
            src="https://three-moves.pages.dev/"
            title="שלושה מהלכים בשיעור חינוך"
            style={{ flex: 1, width: '100%', border: 'none', display: 'block' }}
            allow="clipboard-write"
        />

    </div>
);

export default M04ThreeMoves;