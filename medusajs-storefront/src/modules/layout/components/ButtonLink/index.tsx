
import "./styles.scss";

import React, { ReactNode } from 'react';
import Link from 'next/link';

import { FaCircleArrowRight } from "react-icons/fa6";

// Definicja typów dla propsów
interface ButtonLinkProps {
  children: ReactNode;
  variant?: 'default' | 'transparent';
  icon?: ReactNode; // Ikonka jako komponent React
  href?: string; // Adres URL dla linku
  className?: string; // Dodatkowa klasa css
}

// Komponent ButtonLink
const ButtonLink: React.FC<ButtonLinkProps> = ({ children, variant="default", icon, href="", className }) => {
  const buttonClassName = `buttonLink buttonLink--${variant} ${className || ''}`.trim();

  return (
    <Link href={href} className={buttonClassName}>
      {children} 
      <span className="buttonLink__icon">
        <FaCircleArrowRight />
      </span>
    </Link>
  );
};


export default ButtonLink;