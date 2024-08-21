'use client';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const Curtain = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ustawienie czasu trwania animacji kurtyny
    const timer = setTimeout(() => {
      setIsVisible(false); // Ukryj kurtynę po animacji
    }, 2000); // Czas trwania animacji - 2 sekundy

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`curtain ${isVisible ? '' : 'hidden'}`}>
      {/* Opcjonalna zawartość kurtyny */}
    </div>
  );
};

export default Curtain;
