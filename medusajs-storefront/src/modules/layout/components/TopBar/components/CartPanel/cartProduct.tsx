import "./styles.scss";

import React from 'react';
import Image from "next/image";

import { Product } from "./types";

import { IoMdCloseCircleOutline } from 'react-icons/io';

const CartProduct: React.FC<Product> = ( { name, price, quantity  } ) => {
  return (
    <div className="cartproduct">
        <div className="cartproduct__image">
           {/* <Image /> */}
        </div>
        <div className="cartproduct__info">
            <h4 className="cartproduct__name">{ name }</h4>
            <button className="cartproduct__close-button">
               <IoMdCloseCircleOutline />
            </button>
            <span className="cartproduct__price">{ price } zł</span>
            {/* <QuantityButton /> */}

        </div>
    </div>
  )
}

export default CartProduct;