import "./styles.scss";

import React, {Suspense} from 'react'

import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';

const AccountMenu = () => {
  return (
    <nav className='accountMenu'>
        <LocalizedClientLink
            className=""
            href="/konto"
          >
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
  )
}

export default AccountMenu