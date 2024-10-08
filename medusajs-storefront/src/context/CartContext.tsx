'use client'

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  retrieveCart,
  addToCart,
  updateLineItem,
  deleteLineItem,
  enrichLineItems,
} from "@modules/cart/actions";
import { Cart, LineItem } from "@medusajs/medusa";

type CartState = Omit<Cart, "refundable_amount" | "refunded_total"> | null;

interface CartContextType {
  cart: Cart | CartState | null;
  loading: boolean;
  addItem: (variantId: string, quantity: number, countryCode: string) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  refreshCart: () => Promise<void>;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartItems: LineItem[];
  cartItemsQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Funkcja do odświeżania koszyka (pobierania z serwera)
  const refreshCart = async () => {
    setLoading(true);
    try {
      const cartData = await retrieveCart();
      if (cartData && cartData.items.length) {
        const enrichedItems = await enrichLineItems(cartData.items, cartData.region_id);
        cartData.items = enrichedItems as LineItem[];
      }
      setCart(cartData);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Funkcja dodająca przedmiot do koszyka
  const addItem = async (variantId: string, quantity: number, countryCode: string) => {
    setLoading(true);
    try {
      await addToCart({ variantId, quantity, countryCode });
      await refreshCart(); // Odświeżenie koszyka po dodaniu
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Funkcja aktualizująca ilość przedmiotu w koszyku
  const updateItem = async (lineId: string, quantity: number) => {
    setLoading(true);
    try {
      await updateLineItem({ lineId, quantity });
      await refreshCart(); // Odświeżenie koszyka po aktualizacji
    } catch (error) {
      console.error("Error updating item in cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Funkcja usuwająca przedmiot z koszyka
  const removeItem = async (lineId: string) => {
    setLoading(true);
    try {
      await deleteLineItem(lineId);
      await refreshCart(); // Odświeżenie koszyka po usunięciu
    } catch (error) {
      console.error("Error removing item from cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Funkcja do otwierania/zamykania koszyka
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Pobranie listy przedmiotów w koszyku
  const cartItems = cart?.items || [];

  // Obliczenie łącznej liczby przedmiotów w koszyku
  const cartItemsQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  // Pobranie koszyka przy pierwszym zamontowaniu komponentu
  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addItem,
        updateItem,
        removeItem,
        refreshCart,
        isCartOpen,
        toggleCart,
        cartItems,
        cartItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
