"use client";

import { serializedProduct } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface CartContextProps {
  total: number;
  cart: serializedProduct[];
  setCart: Dispatch<SetStateAction<serializedProduct[]>>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<serializedProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const currentCart = localStorage.getItem("cartItems");
    if (currentCart) {
      try {
        const parsedCart = JSON.parse(currentCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));

    const sum = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(sum);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
