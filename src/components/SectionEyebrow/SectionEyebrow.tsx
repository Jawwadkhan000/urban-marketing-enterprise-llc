import React from 'react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ children, light = false, className = '' }) => {
  return (
    <div className={`eyebrow-chip ${light ? 'light' : ''} ${className}`}>
      {children}
    </div>
  );
};
