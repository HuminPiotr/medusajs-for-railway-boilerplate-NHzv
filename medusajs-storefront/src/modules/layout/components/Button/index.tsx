import "./styles.scss";

import React, { ReactNode } from 'react';
import Link from 'next/link';

// Definicja typów dla propsów
interface ButtonProps {
  children: ReactNode;
  variant: 'default' | 'transparent' | 'disabled';
  onClick?: () => void; // Funkcja do wywołania po kliknięciu
  className?: string; // Dodatkowa klasa CSS
  isLink?: boolean; // Czy komponent ma być linkiem
  href?: string; // Adres URL dla linku (dla linku)
}

// Komponent Button
const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className, isLink, href }) => {
  const isDisabled = variant === 'disabled';
  const buttonClassName = `button button--${variant} ${className || ''}`.trim();
  

  return isLink && href && !isDisabled ? (
    <Link href={href} className={buttonClassName}>
        {children} 
    </Link>
  ) : (
    <button
      className={buttonClassName}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;