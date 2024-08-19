
import "./styles.scss";

import React from 'react'
import { LineItem } from "@medusajs/medusa"

import { enrichLineItems, retrieveCart } from "@modules/cart/actions"

import { FaShoppingBag } from 'react-icons/fa';

interface CartButtonProps {
    color: string;
}



const  CartButton: React.FC<CartButtonProps> = async ({ color="default" }) => {
  const fetchCart = async () => {
    const cart = await retrieveCart()
  
    if (cart?.items.length) {
      const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
      cart.items = enrichedItems as LineItem[]
    }
  
    return cart
  }
  
  const cart = await fetchCart();
  console.log(cart);

  return (
    <button className={
      color === "white" 
      ? 'cartbutton cartbutton--white' 
      : 'cartbutton'}
    >
        <FaShoppingBag className="cartbutton__icon"/>
        <p className="cartbutton__text">Koszyk</p>
        {/* <span className="cartbutton__counter">{cartItemsQuantity}</span> */}
    </button>
  )
}

export default CartButton;