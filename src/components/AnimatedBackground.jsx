import React from 'react';

const AnimatedBackground = () => (
  <div className="animated-bg">
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
        </radialGradient>
        <radialGradient id="grad2" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="30%" cy="30%" r="220" fill="url(#grad1)">
        <animate attributeName="cx" values="30%;70%;30%" dur="12s" repeatCount="indefinite" />
        <animate attributeName="cy" values="30%;60%;30%" dur="10s" repeatCount="indefinite" />
      </circle>
      <circle cx="80%" cy="20%" r="160" fill="url(#grad2)">
        <animate attributeName="cx" values="80%;20%;80%" dur="16s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20%;80%;20%" dur="14s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

export default AnimatedBackground; 