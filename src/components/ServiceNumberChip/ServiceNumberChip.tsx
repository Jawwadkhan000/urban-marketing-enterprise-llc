import React from 'react';

interface ServiceNumberChipProps {
  number: string;
  className?: string;
}

export const ServiceNumberChip: React.FC<ServiceNumberChipProps> = ({ number, className = '' }) => {
  return (
    <div className={`number-chip ${className}`}>
      {number}
    </div>
  );
};
