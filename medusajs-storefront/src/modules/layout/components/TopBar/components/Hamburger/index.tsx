
import "./styles.scss";

import React from 'react'

interface HamburgerProps {
    action: () => void;
    color: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ action, color="default" }) => {
  return (
    <button className={color === "white" ? 'hamburger hamburger--white' : 'hamburger'} onClick={() => action()}>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
    </button>
  )
}

export default Hamburger;