import "./styles.scss";

import React, {Suspense} from 'react'
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingBag } from 'react-icons/fa';

import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';

const AccountMenu = () => {
  return (
    <>
    <nav className='accountMenu'>
        <LocalizedClientLink
            className="flex gap-2"
            href="/konto"
          >
            <MdAccountCircle  className="accountMenu__accountIcon"/>
            KONTO
          </LocalizedClientLink>
        <Suspense
          fallback={
            <LocalizedClientLink
              className=" flex gap-2"
              href="/koszyk"
            >
              Koszyk 
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
    </nav>
    <LocalizedClientLink
          className="accountMenu__mobile-cart"
          href="/koszyk"
        >
          <FaShoppingBag />
    </LocalizedClientLink>
    </>
  )
}

export default AccountMenu