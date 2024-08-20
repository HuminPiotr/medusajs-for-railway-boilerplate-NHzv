'use client';

import { LineItem } from "@medusajs/medusa"

import { enrichLineItems, retrieveCart } from "@modules/cart/actions"

import CartDropdown from "../cart-dropdown"

// Context
import { useCart } from '@context/CartContext';

// const fetchCart = async () => {
//   const cart = await retrieveCart()


//   if (cart?.items.length) {
//     const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
//     cart.items = enrichedItems as LineItem[]
//   }

//   return cart
// }

export default  function CartButton() {
  // const cart = await fetchCart()
  const {cart} = useCart();

  return <CartDropdown cart={cart} />
}
