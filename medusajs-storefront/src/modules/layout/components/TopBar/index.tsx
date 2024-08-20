'use client'
import "./styles.scss";

import React, {useState, useEffect, Suspense} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@modules/layout/components/Logo';
import FacebookButton from "@modules/layout/components/FacebookButton";
// import Searcher from "@/components/Searcher";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import AccountMenu from "./components/AccountMenu";

import Hamburger from "./components/Hamburger";

import { CONTACT } from "@constants/contact.js";

export interface TopBarProps  {
  initialVariant?: "default" | "white";
}

const TopBar: React.FC<TopBarProps> = ({initialVariant = "default"}) => {
  const [menuIsOpen, setMenu] = useState(false);
  const [isAboveHero, setIsAboveHero] = useState(false);
  const pathname = usePathname();
  const [variant, setVariant] = useState(initialVariant);

  useEffect(() => {
    setMenu(false);

    // Set variant
    if (pathname === "/pl") {
      setVariant("white");
    } else {
      setVariant("default");
    }

  },[pathname,]);

  useEffect(() => {
    const heroSection = document.querySelector('.hero'); 
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboveHero(true);
        } else {
          setIsAboveHero(false);
        }
      },
      { rootMargin: '0px 0px 0px 0px' } // Możesz dostosować rootMargin, aby lepiej pasował do twojego layoutu
    );
  
    if (heroSection) observer.observe(heroSection);
  
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [pathname]);

  


  return (
    <div className={variant === "default" || menuIsOpen || !isAboveHero ? `topbar` : `topbar topbar--white` }>
      <div className="topbar__panel">
        <div className="container">
          <div className="topbar__panel-leftMenu">
            <Hamburger action={() => setMenu(!menuIsOpen)} color={!menuIsOpen && isAboveHero ? variant : "default"}/>
            <nav className="topbar__panel-navigation">
              <ul>
                <li className="topbar__panel-navigation-link">
                  <Link href="/sklep">Sklep</Link>
                </li>
                <li className="topbar__panel-navigation-link">
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Logo variant={!menuIsOpen && isAboveHero ? variant : "default"}/>
          {/* <CartButton 
            color={!menuIsOpen && isAboveHero ? variant : "default"}  
          /> */}
          <div className="topbar__panel-rightMenu">
            <AccountMenu />
            {/* <DynamicCartButton/> */}
          </div>
        </div>
      </div>


      <div className={menuIsOpen ? "topbar__menu topbar__menu--open" : "topbar__menu"}>
        <div className="container">
          <div className="topbar__menu-left">
            <div className="topbar__menu-column">
              <Link className="topbar__menu-link topbar__menu-link--main " href="/">
                Strona główna
              </Link>
              <Link className="topbar__menu-link" href="/o-nas">
                O nas
              </Link>
              <Link className="topbar__menu-link" href="/polityka-prywatności">
                Polityka prywatności
              </Link>
            </div>
            <div className="topbar__menu-column">
              <LocalizedClientLink className="topbar__menu-link topbar__menu-link--main " href="/sklep">
                Sklep
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/collections/witryny-i-komody">
                Witryny i komody
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/collections/fotele">
                Fotele
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/collections/oswietlenie">
                Oświetlenie
              </LocalizedClientLink>

            </div>
            <div className="topbar__menu-column">
              <Link className="topbar__menu-link topbar__menu-link--main" href="/kontakt">
                Kontakt
              </Link>
              <span className="topbar__contact-info">
                <p>{CONTACT.street} </p>
                <p>{CONTACT.city}</p>
                <a href={`tel:${CONTACT.phone}`}></a>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <FacebookButton />
              </span>
            </div>
          </div>
          
          <div className="tobar__menu-right">
            {/* <Searcher placeholder="SZUKAJ"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
