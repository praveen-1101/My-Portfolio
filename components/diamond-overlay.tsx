import React from 'react';

const DiamondOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.18,
        mixBlendMode: 'lighten',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <pattern
            id="diamondPattern"
            width="40" height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect x="15" y="0" width="10" height="40" rx="5" fill="hsl(var(--myellow))" opacity="0.25" />
            <rect x="0" y="15" width="40" height="10" rx="5" fill="white" opacity="0.08" />
            <rect x="15" y="0" width="10" height="40" rx="5" fill="white" opacity="0.12" filter="url(#glass)" />
          </pattern>
          <filter id="glass">
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamondPattern)" />
      </svg>
    </div>
  );
};

export default DiamondOverlay; 