import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  dark?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  dark = false,
  type = 'button',
  className = '',
  showArrow = true
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : `btn-secondary ${dark ? 'dark' : ''}`;
  const combinedClass = `${baseClass} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowUpRight size={18} className="btn-icon-arrow" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
};
