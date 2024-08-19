import "./styles.scss";

import React, {Suspense} from 'react'

import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';

const AccountMenu = () => {
  return (
    <nav className='accountMenu'>
        <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/konto"
          >
            KONTO
          </LocalizedClientLink>
        <Suspense
          fallback={
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
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