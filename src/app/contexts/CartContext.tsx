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
  cart: serializedProduct[];
  setCart: Dispatch<SetStateAction<serializedProduct[]>>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<serializedProduct[]>([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
