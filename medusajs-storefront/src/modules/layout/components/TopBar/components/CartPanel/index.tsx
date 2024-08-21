'use client'

import "./styles.scss";

import React from 'react'
import Button from "@modules/layout/components/Button";

import CartProduct from "./cartProduct";

import { FaShoppingBag } from 'react-icons/fa';

// Context
import { useCart } from '@context/CartContext';

 
const CartPanel: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, cartItemsQuantity } = useCart();
  const product_list = cartItems?.map(({id, title, unit_price, quantity}) => <CartProduct key={id} name={title} price={unit_price} quantity={quantity} /> ) ;
  // const product_list = [{}];

  return isCartOpen && (
    <aside className="cartpanel">
        { cartItemsQuantity  ? 
        <div className="">
            <h3 className="cartpanel__header">Podsumowanie zamówienia</h3>
            <div className="cartpanel__products">
              {/* {product_list} */}
            </div>
            
        </div>
        
    
        : <div className="cartpanel__empty">
          <span className="cartpanel__empty-icon">
            <FaShoppingBag />
          </span>
          <p>Koszyk jest pusty.</p>
        </div> 
        }
        
      <div>
        <div className="cartpanel__summary">
          <p>Wartość produktów</p>
          <p>0 zł</p>
        </div>
        
        <div className="cartpanel__buttons">
          <Button 
            variant="transparent"
            onClick={toggleCart}
          >
            Kontynuj zakupy
          </Button>
          <Button 
            variant="disabled" 
            isLink 
            href="/dostawa-i-platnosc"
          >
            Dostawa i płatność
          </Button>
        </div>  
      </div>  

    </aside>
  )
}

export default CartPanel;