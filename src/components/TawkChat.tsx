import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SRC = 'https://embed.tawk.to/6ac3ed9c22a57e34c2f97f7a/1k46lgbo2';

export const TawkChat: React.FC = () => {
  useEffect(() => {
    // Check if script is already present to avoid duplicate injection (e.g. React Strict Mode)
    const existingScript = document.querySelector(`script[src="${TAWK_SRC}"]`);
    if (existingScript) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = TAWK_SRC;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }, []);

  return null;
};

export default TawkChat;
